"""Focused boundary checks: source isolation, public data, and catalog growth."""
from contextlib import redirect_stdout
import copy
import io
import json
from pathlib import Path
import shutil
import tempfile
from build import ROOT, build


def save(path, value):
    path.write_text(json.dumps(value))


def rejects(root, message):
    try:
        build(root)
    except ValueError as error:
        assert message in str(error), str(error)
    else:
        raise AssertionError('Unsafe fixture was accepted')


with tempfile.TemporaryDirectory(prefix='decision-999-check-') as temporary:
    root = Path(temporary)
    for folder in ('.agents', 'plugins', 'site'):
        shutil.copytree(ROOT / folder, root / folder)
    with redirect_stdout(io.StringIO()):
        build(root)
        metadata = root / 'site/presentation.json'
        original = json.loads(metadata.read_text())
        save(metadata, {})
        rejects(root, 'Missing neutral presentation')
        changed = copy.deepcopy(original)
        changed['duke-designer']['summary'] = 'Hidden DUKE text'
        save(metadata, changed)
        rejects(root, 'Restricted presentation text')
        save(metadata, original)
        catalog_path = root / '.agents/plugins/marketplace.json'
        catalog = json.loads(catalog_path.read_text())
        bad = copy.deepcopy(catalog)
        bad['plugins'][0]['source']['path'] = './plugins/../../escape'
        save(catalog_path, bad)
        rejects(root, 'escapes')
        save(catalog_path, catalog)
        css = root / 'site/style.css'
        original_css = css.read_text()
        css.write_text(original_css + '\n/* DUKE */')
        rejects(root, 'Restricted website text')
        css.write_text(original_css)
        package = root / 'plugins/test-example'
        shutil.copytree(root / 'plugins/duke-designer', package)
        manifest = json.loads((package / 'plugin.json').read_text())
        manifest.update(name='test-example', version='2.3.4')
        save(package / 'plugin.json', manifest)
        entry = copy.deepcopy(catalog['plugins'][0])
        entry.update(name='test-example', source={'source': 'local', 'path': './plugins/test-example'})
        catalog['plugins'].append(entry)
        save(catalog_path, catalog)
        original['test-example'] = dict(original['duke-designer'], slug='test-example', title='Second example')
        save(metadata, original)
        build(root)
        result = (root / 'dist/index.html').read_text()
        assert 'Second example' in result and 'Version 2.3.4' in result
        assert result.count('class="plugin-card"') == 2
print('Passed: isolated build, missing presentation, restricted copy, escaping path, output leak, automatic second listing.')
