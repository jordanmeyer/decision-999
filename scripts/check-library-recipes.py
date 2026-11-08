"""Compile the shipped recipes in the current starter; optionally retain a browser review app.

Python belongs to maintainer/CI validation, never student setup. Requires macOS or
Windows and network access to the pinned Node archive and npm registry.
"""
import argparse
from contextlib import nullcontext
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import shutil
import subprocess
import sys
import tempfile

ROOT = Path(__file__).resolve().parents[1]
PACKAGE = ROOT / 'plugins/web-application-builder'
INVENTORY = json.loads((PACKAGE / 'references/libraries.json').read_text(encoding='utf-8'))
WINDOWS = sys.platform == 'win32'
LAUNCHER = ['powershell.exe', '-NoProfile', '-File', 'app.ps1'] if WINDOWS else ['/bin/bash', 'app.sh']
PURE = {'papa-parse', 'arquero', 'jstat', 'seedrandom'}

MODEL_CHECKS = '''import { parseSales } from './recipes/papa-parse';
import { summarizeSales } from './recipes/arquero';
import { sampleSummary } from './recipes/jstat';
import { seededDraws } from './recipes/seedrandom';

export function checkModels(): string[] {
  const passed: string[] = [];
  function check(name: string, condition: boolean) {
    if (!condition) throw Error(name);
    passed.push(name);
  }
  function rejects(name: string, action: () => unknown) {
    let rejected = false;
    try { action(); } catch { rejected = true; }
    check(name, rejected);
  }
  const csv = parseSales('\\uFEFFregion,revenue\\r\\n"North, East",12.50\\r\\nSouth,7.50');
  check('CSV quoted region and explicit amounts', csv.length === 2 && csv[0].region === 'North, East' && csv[0].revenue === 12.5 && csv[1].revenue === 7.5);
  rejects('CSV missing header rejected', () => parseSales('region,amount\\nNorth,12'));
  rejects('CSV empty amount rejected', () => parseSales('region,revenue\\nNorth,'));
  const rows = [{ region: 'North', revenue: 12, cost: 4 }, { region: 'North', revenue: 8, cost: 3 }, { region: 'South', revenue: 50, cost: 9 }];
  const totals = summarizeSales(rows, 'North');
  check('Filtered totals: 12 + 8 = 20; 4 + 3 = 7', totals.revenue === 20 && totals.cost === 7);
  const empty = summarizeSales(rows, 'Absent');
  check('Empty filter has zero totals', empty.revenue === 0 && empty.cost === 0);
  const summary = sampleSummary([2, 4, 6]);
  check('Mean 4; squared deviations 8 / (3 - 1) = 4', summary.mean === 4 && summary.variance === 4);
  rejects('Sample variance rejects singleton', () => sampleSummary([2]));
  const nativeRandom = Math.random;
  const draws = seededDraws('hello.', 3);
  check('seedrandom documented first draw', Math.abs(draws[0] - 0.9282578795792454) < 1e-15);
  check('Seed replay preserves the stream', JSON.stringify(draws) === JSON.stringify(seededDraws('hello.', 3)));
  check('Different seeds change the stream', draws[0] !== seededDraws('other', 1)[0]);
  check('Local generator preserves Math.random', Math.random === nativeRandom);
  rejects('Negative draw count rejected', () => seededDraws('hello.', -1));
  return passed;
}
'''

THEME_PROBE = '''import { MantineProvider } from '@mantine/core';
import { registerTheme } from 'echarts';
import mermaid from 'mermaid';
import { echartsTheme } from './theme/echarts.js';
import { mantineTheme } from './theme/mantine.js';
import { mermaidTheme } from './theme/mermaid.js';

export function ThemeProbe() {
  registerTheme('recipe-check', echartsTheme());
  mermaid.initialize(mermaidTheme());
  return <MantineProvider theme={mantineTheme()}><span>Typed theme adapters</span></MantineProvider>;
}
'''

MODEL_RUNNER = '''import { build } from 'vite';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

await build({ configFile: false, publicDir: false, logLevel: 'warn',
  cacheDir: '.toolchain/vite-model-checks',
  build: { ssr: 'app/model-checks.ts', outDir: '.toolchain/model-checks', emptyOutDir: true,
    rolldownOptions: { output: { entryFileNames: 'model-checks.mjs' } } } });
const { checkModels } = await import(pathToFileURL(resolve('.toolchain/model-checks/model-checks.mjs')).href);
console.log(`Passed: ${checkModels().length} known-answer checks from the documented data recipes.`);
'''


class Assets(HTMLParser):
    def __init__(self):
        super().__init__()
        self.urls = []

    def handle_starttag(self, tag, attrs):
        for name, value in attrs:
            if (tag == 'script' and name == 'src') or (tag == 'link' and name == 'href'):
                self.urls.append(value)


def check(project):
    libraries = [library for library in INVENTORY['libraries'] if library['status'] == 'approved']
    shutil.copytree(PACKAGE / 'assets/managed-starter', project)
    recipes = project / 'app/recipes'
    recipes.mkdir()
    for library in libraries:
        skill = PACKAGE / 'skills' / library['skill'] / 'SKILL.md'
        text = skill.read_text(encoding='utf-8')
        blocks = list(re.finditer(r'^```(tsx|ts)\n(.*?)^```$', text, re.MULTILINE | re.DOTALL))
        assert blocks, f'{skill}: no standalone TypeScript recipe'
        for index, block in enumerate(blocks):
            if index == 0:
                filename = f"{library['id']}.{block[1]}"
            else:
                caption = text[blocks[index - 1].end():block.start()]
                names = set(re.findall(r'`([a-z][a-z0-9-]*\.ts)`', caption))
                assert len(names) == 1, f'{skill}: companion code needs one filename caption'
                filename = names.pop()
            destination = recipes / filename
            assert not destination.exists(), f'Duplicate recipe path: {filename}'
            destination.write_text(block[2], encoding='utf-8')

    shutil.copytree(PACKAGE / 'assets/library-themes', project / 'app/theme', dirs_exist_ok=True)
    (project / 'app/types').mkdir()
    for library in libraries:
        for name in library.get('declarations', []):
            shutil.copy2(PACKAGE / 'assets/types' / name, project / 'app/types' / name)
    shutil.copytree(PACKAGE / 'assets/license-notices', project / 'licenses')
    (project / 'app/model-checks.ts').write_text(MODEL_CHECKS, encoding='utf-8')
    (project / 'app/theme-check.tsx').write_text(THEME_PROBE, encoding='utf-8')

    imports = ',\n'.join(f"  '{library['id']}': lazy(() => import('./recipes/{library['id']}').then(module => ({{ default: module.Example }})))" for library in libraries if library['id'] not in PURE)
    choices = json.dumps({library['id']: library['name'] for library in libraries})
    (project / 'app/App.tsx').write_text('''import { lazy, Suspense, useState, type ComponentType } from 'react';
import { checkModels } from './model-checks';

const examples: Record<string, ComponentType> = {
''' + imports + '''
};
const choices = ''' + choices + ''';
export function App() {
  const [selected, setSelected] = useState('echarts');
  const [mounted, setMounted] = useState(true);
  const [visible, setVisible] = useState(true);
  const [checks] = useState(() => {
    try { return { passed: checkModels(), error: '' }; }
    catch (error) { return { passed: [], error: String(error) }; }
  });
  const Example = examples[selected];
  return <main>
    <h1>Current starter recipe checks</h1>
    <p>Extracted from the installed skill instructions. Development uses React StrictMode; production uses the repository prefix.</p>
    <p role="status" data-model-status={checks.error ? 'failed' : 'passed'}>{checks.error || `${checks.passed.length} known-answer checks passed`}</p>
    <details><summary>Known answers</summary><ul>{checks.passed.map(name => <li key={name}>{name}</li>)}</ul></details>
    <p><label>Library <select data-recipe-selector value={selected} onChange={event => { setSelected(event.target.value); setMounted(true); setVisible(true); }}>{Object.entries(choices).map(([id, name]) => <option key={id} value={id}>{name}</option>)}</select></label></p>
    <button type="button" data-toggle-mount onClick={() => setMounted(value => !value)}>{mounted ? 'Unmount example' : 'Mount example'}</button>
    <button type="button" data-toggle-visibility onClick={() => setVisible(value => !value)}>{visible ? 'Hide example' : 'Show example'}</button>
    <section aria-label="Recipe example" data-recipe={selected} data-mounted={mounted} hidden={!visible} style={{ marginTop: '1rem', minHeight: 300 }}>
      {mounted && (Example ? <Suspense fallback={<p role="status">Loading recipe…</p>}><Example /></Suspense> : <p>This data recipe is exercised by the known-answer checks above.</p>)}
    </section>
  </main>;
}
''', encoding='utf-8')
    config = project / 'vite.config.js'
    source = config.read_text(encoding='utf-8')
    assert "const base = '/';" in source and 'plugins: [react()],' in source
    config.write_text(source.replace("const base = '/';", "const base = '/recipe-check/';").replace('plugins: [react()],', "plugins: [react()],\n  worker: { format: 'es' },"), encoding='utf-8')

    def run(*args):
        print('Running launcher:', ' '.join(args), flush=True)
        subprocess.run(LAUNCHER + list(args), cwd=project, check=True, timeout=600)

    run('setup')
    manifest = project / 'package.json'
    pkg = json.loads(manifest.read_text(encoding='utf-8'))
    pkg['overrides'] = INVENTORY['overrides']
    manifest.write_text(json.dumps(pkg, indent=2) + '\n', encoding='utf-8')
    runtime = {name: version for library in libraries for name, version in (library['packages'] | library['peers']).items()}
    development = {name: version for library in libraries for name, version in library.get('devPackages', {}).items()}
    run('add', *(f'{name}@{version}' for name, version in sorted(runtime.items())))
    run('add', '--save-dev', *(f'{name}@{version}' for name, version in sorted(development.items())))
    (project / 'app/vendor').mkdir()
    shutil.copy2(project / 'node_modules/frappe-gantt/dist/frappe-gantt.css', project / 'app/vendor/frappe-gantt.css')
    node = next((project / '.toolchain').glob('node-v*/node.exe' if WINDOWS else 'node-v*/bin/node'))
    checker = [str(node), str(PACKAGE / 'scripts/check-dependencies.mjs'), str(project)]
    subprocess.run(checker, check=True)

    lockfile = project / 'package-lock.json'
    original, original_lock = manifest.read_text(encoding='utf-8'), lockfile.read_text(encoding='utf-8')
    type_name, type_version = next(iter(development.items()))

    def rejects(change, expected, *, lock=False):
        target = lockfile if lock else manifest
        data = json.loads(original_lock if lock else original)
        change(data)
        target.write_text(json.dumps(data), encoding='utf-8')
        try:
            result = subprocess.run(checker, text=True, capture_output=True)
            assert result.returncode != 0 and expected in result.stderr, result.stdout + result.stderr
        finally:
            target.write_text(original_lock if lock else original, encoding='utf-8')

    rejects(lambda data: data['devDependencies'].pop(type_name), f'Missing approved companion: {type_name}@{type_version}')
    rejects(lambda data: data['dependencies'].update({type_name: data['devDependencies'].pop(type_name)}), f'{type_name} must be in devDependencies')
    rejects(lambda data: data['dependencies'].update({'unapproved-recipe-package': '1.0.0'}), 'Unapproved dependency: unapproved-recipe-package@1.0.0')
    rejects(lambda data: data['packages']['']['dependencies'].update({'echarts': '0.0.0'}), 'Stale lockfile: dependencies', lock=True)
    try:
        legacy, lock = json.loads(original), json.loads(original_lock)
        for name in ['typescript', *development]:
            legacy['devDependencies'].pop(name)
            lock['packages']['']['devDependencies'].pop(name)
        manifest.write_text(json.dumps(legacy), encoding='utf-8')
        lockfile.write_text(json.dumps(lock), encoding='utf-8')
        subprocess.run(checker, check=True)
    finally:
        manifest.write_text(original, encoding='utf-8')
        lockfile.write_text(original_lock, encoding='utf-8')

    run('build')
    subprocess.run([str(node), '--input-type=module', '--eval', MODEL_RUNNER], cwd=project, check=True, timeout=180)
    output = project / 'dist'
    page = Assets()
    page.feed((output / 'index.html').read_text(encoding='utf-8'))
    assert page.urls and all(url.startswith('/recipe-check/') for url in page.urls), page.urls
    assert all((output / url.removeprefix('/recipe-check/')).is_file() for url in page.urls)
    assert not any(path.is_symlink() for path in output.rglob('*'))
    assert not any((output / name).exists() for name in ['tests', '.toolchain', 'node_modules'])
    assert len(list(output.rglob('*.wasm'))) >= 2, 'Local DuckDB and HiGHS WASM assets are missing'
    notices = (output / 'THIRD-PARTY-NOTICES.txt').read_text(encoding='utf-8')
    assert all(f'{name} @ {version}' in notices for name, version in runtime.items())
    assert not any(f'{name} @' in notices for name in development)
    print(f'Passed: {len(libraries)} documented recipes typechecked/bundled; theme adapters typechecked; dependency boundaries, local production assets and notices verified.')
    print('Browser interaction and lifecycle checks still require opening the preview.')


parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--project', type=Path, help='Retain the generated app at this new path for browser review.')
args = parser.parse_args()
if sys.platform not in ('darwin', 'win32'):
    raise SystemExit('Run on macOS or Windows; the current starter has native launchers for these platforms.')
with nullcontext(args.project) if args.project else tempfile.TemporaryDirectory(prefix='builder recipes ') as destination:
    project = Path(destination).resolve() if args.project else Path(destination).resolve() / 'Recipe checks'
    check(project)
    if args.project:
        print(f'Retained {project}. Run the launcher dev or preview command and open /recipe-check/.')
