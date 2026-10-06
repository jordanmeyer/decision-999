"""Boundary checks: committed catalogs are current, a clean copy builds, bad manifests fail, new plugins list themselves."""
from contextlib import redirect_stdout
import io
import json
from pathlib import Path
import shutil
import tempfile
from build import ROOT, build, catalogs, load, read_json

config = read_json(ROOT / 'site/config.json')
for path, content in catalogs(config, load(ROOT, config)).items():
    assert (ROOT / path).read_text() == content, f'{path} is stale: run scripts/build.py and commit it'


def edit(path, change):
    data = json.loads(path.read_text())
    change(data)
    path.write_text(json.dumps(data))


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


with tempfile.TemporaryDirectory() as temporary, redirect_stdout(io.StringIO()):
    root = Path(temporary)
    for folder in ('plugins', 'site', 'evidence'):
        shutil.copytree(ROOT / folder, root / folder)
    build(root)  # without the sibling source project or any committed catalog
    manifest, skill = root / 'plugins/duke-designer/plugin.json', root / 'plugins/duke-designer/skills/duke-designer/SKILL.md'
    original, instructions = manifest.read_text(), skill.read_text()
    edit(manifest, lambda m: m['extensions'][config['extension']].pop('limits'))
    rejects(root, 'limits must be text')
    manifest.write_text(original)
    edit(manifest, lambda m: m['extensions']['com.openai']['interface'].update(screenshots=['./../../site/assets/x.png']))
    rejects(root, 'must be a .png file inside the plugin')
    manifest.write_text(original)
    skill.write_text(instructions + '\n[outside](../../../../README.md)\n')
    rejects(root, 'is missing or leaves duke-designer/')
    skill.write_text(instructions)
    shutil.copytree(root / 'plugins/duke-designer', root / 'plugins/second-example')
    edit(root / 'plugins/second-example/plugin.json', second)
    build(root)
    home = (root / 'dist/index.html').read_text()
    assert home.count('class="card"') == 2 and 'Second Example' in home
    assert 'Version 2.3.4' in (root / 'dist/plugins/second-example/index.html').read_text()
    for catalog in ('.agents/plugins/marketplace.json', '.claude-plugin/marketplace.json'):
        assert [p['name'] for p in read_json(root / catalog)['plugins']] == ['duke-designer', 'second-example']
print('Passed: catalogs current, clean build, missing listing text, escaping screenshot and skill link, automatic second listing.')
