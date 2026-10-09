"""Boundary checks: committed catalogs are current, a clean copy builds, bad manifests fail, new plugins list themselves."""
from contextlib import redirect_stdout
import io
import json
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile
from build import ROOT, BUILDER, build, catalogs, designer_files, load, read_json

designer = ROOT / BUILDER / 'skills/campus-designer'
assert {p.relative_to(designer): p.read_bytes() for p in designer.rglob('*') if p.is_file()} == designer_files(ROOT), \
    'Bundled Campus Designer is stale: run scripts/build.py and commit it'

config = read_json(ROOT / 'site/config.json')
for path, content in catalogs(config, load(ROOT, config)).items():
    assert (ROOT / path).read_text(encoding='utf-8') == content, f'{path} is stale: run scripts/build.py and commit it'


def edit(path, change):
    data = json.loads(path.read_text(encoding='utf-8'))
    change(data)
    path.write_text(json.dumps(data), encoding='utf-8')


def rejects(root, message):
    try:
        build(root)
    except ValueError as error:
        assert message in str(error), str(error)
    else:
        raise AssertionError(f'Accepted a plugin that should fail with: {message}')


def second(manifest):
    manifest.update(name='second-example', version='2.3.4', homepage=f"{config['url']}plugins/second-example/")
    manifest['extensions']['com.openai']['interface']['displayName'] = 'Second Example'
    manifest['extensions'][config['extension']]['team'] = [f'Student {letter}' for letter in 'ABCDE']
    manifest['extensions']['com.openai']['interface']['screenshots'] = []  # screenshots are optional
    manifest['extensions'][config['extension']]['screenshotAlt'] = []


with tempfile.TemporaryDirectory() as temporary, redirect_stdout(io.StringIO()):
    root = Path(temporary)
    for folder in ('plugins', 'site', 'evidence'):
        shutil.copytree(ROOT / folder, root / folder)
    build(root)  # without the sibling source project or any committed catalog
    inventory = root / BUILDER / 'references/libraries.json'
    saved_inventory = inventory.read_text()
    edit(inventory, lambda data: data['libraries'][0]['packages'].update(echarts='^6.0.0'))
    rejects(root, 'Library versions must be exact stable releases')
    inventory.write_text(saved_inventory)
    edit(inventory, lambda data: data['libraries'][0].update(skill='missing-library-skill'))
    rejects(root, 'Library skill is missing')
    inventory.write_text(saved_inventory)
    bundled = root / BUILDER / 'skills/campus-designer'
    (bundled / 'obsolete.txt').write_text('Old generated resource', encoding='utf-8')
    (bundled / 'SKILL.md').write_text('Stale generated copy', encoding='utf-8')
    for starter in ('starter', 'managed-starter'):
        (root / BUILDER / 'assets' / starter / 'app/theme/fonts/obsolete.ttf').write_bytes(b'old font')
    build(root)
    assert {p.relative_to(bundled): p.read_bytes() for p in bundled.rglob('*') if p.is_file()} == designer_files(root)
    for starter in ('starter', 'managed-starter'):
        fonts = root / BUILDER / 'assets' / starter / 'app/theme/fonts'
        assert {p.name: p.read_bytes() for p in fonts.iterdir()} == {p.name: p.read_bytes() for p in (root / 'plugins/campus-designer/skills/campus-designer/assets/fonts').iterdir()}
    manifest, skill = root / 'plugins/campus-designer/plugin.json', root / 'plugins/campus-designer/skills/campus-designer/SKILL.md'
    original, instructions = manifest.read_text(encoding='utf-8'), skill.read_text(encoding='utf-8')
    edit(manifest, lambda m: m['extensions'][config['extension']].pop('limits'))
    rejects(root, f"fill in {config['extension']}.limits")
    manifest.write_text(original, encoding='utf-8')
    edit(manifest, lambda m: m['extensions']['com.openai']['interface'].update(screenshots=['./../../site/assets/x.png']))
    rejects(root, 'must be a .png path inside the plugin')
    manifest.write_text(original, encoding='utf-8')
    edit(manifest, lambda m: m['extensions'][config['extension']].update(
        examples=[{'label': 'Unsafe link', 'url': 'javascript:alert(1)'}]))
    rejects(root, 'absolute HTTPS url')
    edit(manifest, lambda m: m['extensions'][config['extension']].update(
        examples=[{'label': '<Example & proof>', 'url': 'https://example.com/?a=1&b=2'}]))
    build(root)
    assert '&lt;Example &amp; proof&gt;</a>' in (root / 'dist/plugins/campus-designer/index.html').read_text()
    manifest.write_text(original, encoding='utf-8')
    app_manifest = root / BUILDER / 'plugin.json'
    app_original = app_manifest.read_text()
    edit(app_manifest, lambda m: m['extensions'][config['extension']]['examples'][0].update(preview='../../site/assets/open-sans-400.ttf'))
    rejects(root, 'example preview must be an image inside its evidence folder')
    app_manifest.write_text(app_original)
    edit(app_manifest, lambda m: m['extensions'][config['extension']]['examples'][0].update(walkthrough='javascript:alert(1)'))
    rejects(root, 'example walkthrough needs an absolute HTTPS url')
    app_manifest.write_text(app_original)
    build(root)
    assert (root / 'dist/plugins/browser-app-builder/example-0.jpg').read_bytes() == (root / 'evidence/browser-app-builder/gallery/executive.jpg').read_bytes()
    assert not (root / 'dist/plugins/browser-app-builder/source').exists()  # previews do not publish the evidence tree
    skill.write_text(instructions + '\n[outside](../../../../README.md)\n', encoding='utf-8')
    rejects(root, 'is missing or leaves')
    skill.write_text(instructions, encoding='utf-8')
    shutil.copytree(root / 'plugins/campus-designer', root / 'plugins/second-example')
    edit(root / 'plugins/second-example/plugin.json', second)
    build(root)
    listed = (root / 'dist/plugins/index.html').read_text(encoding='utf-8')
    assert listed.count('class="card"') == len(load(ROOT, config)) + 1 and 'Second Example' in listed
    assert 'Second Example' not in (root / 'dist/index.html').read_text(encoding='utf-8')  # the home page shows featured plugins only
    page = (root / 'dist/plugins/second-example/index.html').read_text(encoding='utf-8')
    assert 'Version 2.3.4' in page and all(f'<li>Student {letter}</li>' in page for letter in 'ABCDE')
    assert '>Student A' not in listed  # team members are named on the listing page, not the card
    assert 'class="wrap shots"' not in page and listed.count('class="card-prompt"') >= 1  # no screenshot: the card shows a request
    for catalog in ('.agents/plugins/marketplace.json', '.claude-plugin/marketplace.json'):
        assert [p['name'] for p in read_json(root / catalog)['plugins']][-1] == 'second-example'
    # The scaffold's output must be held back by the build until its listing text is written.
    sample = root / 'drafts/meeting-brief'
    sample.mkdir(parents=True)
    (sample / 'SKILL.md').write_text('---\nname: meeting-brief\ndescription: Prepare a brief before a client meeting.\n---\n\n# Meeting brief\n', encoding='utf-8')
    subprocess.run([sys.executable, ROOT / 'plugins/create-your-own/skills/create-your-own/scripts/new_plugin.py',
                    'drafts/meeting-brief', '--developer', 'Test'], cwd=root, check=True, capture_output=True)
    rejects(root, 'meeting-brief/plugin.json: fill in interface.shortDescription')
print('Passed: catalogs and bundled designer current, stale designer resources replaced, clean build, missing listing text, escaping screenshot and skill link, automatic second listing with its team and no screenshots, '
      'scaffolded plugin held until its listing is written.')
