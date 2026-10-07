"""Boundary checks: committed catalogs are current, a clean copy builds, bad manifests fail, new plugins list themselves."""
from contextlib import redirect_stdout
import io
import json
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile
from build import ROOT, build, catalogs, load, read_json

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


with tempfile.TemporaryDirectory() as temporary, redirect_stdout(io.StringIO()):
    root = Path(temporary)
    for folder in ('plugins', 'site', 'evidence'):
        shutil.copytree(ROOT / folder, root / folder)
    build(root)  # without the sibling source project or any committed catalog
    manifest, skill = root / 'plugins/campus-designer/plugin.json', root / 'plugins/campus-designer/skills/campus-designer/SKILL.md'
    original, instructions = manifest.read_text(encoding='utf-8'), skill.read_text(encoding='utf-8')
    edit(manifest, lambda m: m['extensions'][config['extension']].pop('limits'))
    rejects(root, f"fill in {config['extension']}.limits")
    manifest.write_text(original, encoding='utf-8')
    edit(manifest, lambda m: m['extensions']['com.openai']['interface'].update(screenshots=['./../../site/assets/x.png']))
    rejects(root, 'must be a .png path inside the plugin')
    manifest.write_text(original, encoding='utf-8')
    skill.write_text(instructions + '\n[outside](../../../../README.md)\n', encoding='utf-8')
    rejects(root, 'is missing or leaves campus-designer/')
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
    for catalog in ('.agents/plugins/marketplace.json', '.claude-plugin/marketplace.json'):
        assert [p['name'] for p in read_json(root / catalog)['plugins']][-1] == 'second-example'
    # The scaffold's output must be held back by the build until its listing text is written.
    sample = root / 'drafts/meeting-brief'
    sample.mkdir(parents=True)
    (sample / 'SKILL.md').write_text('---\nname: meeting-brief\ndescription: Prepare a brief before a client meeting.\n---\n\n# Meeting brief\n', encoding='utf-8')
    subprocess.run([sys.executable, ROOT / 'plugins/create-your-own/skills/create-your-own/scripts/new_plugin.py',
                    'drafts/meeting-brief', '--developer', 'Test'], cwd=root, check=True, capture_output=True)
    rejects(root, 'meeting-brief/plugin.json: fill in interface.shortDescription')
print('Passed: catalogs current, clean build, missing listing text, escaping screenshot and skill link, automatic second listing with its team, '
      'scaffolded plugin held until its listing is written.')
