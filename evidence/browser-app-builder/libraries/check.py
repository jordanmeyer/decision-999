"""Run after prepare.py/npm ci/build. Real dependency and publication boundaries."""
import json
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile

ROOT = Path(__file__).resolve().parents[3]
PACKAGE = ROOT / 'plugins/browser-app-builder'
trials = Path(sys.argv[1]).resolve()
for name in ('presentation', 'dashboard', 'operations'):
    project = trials / name
    checker = ['node', str(PACKAGE / 'scripts/check-dependencies.mjs'), str(project)]
    assert subprocess.run(checker, capture_output=True).returncode == 0
    package = project / 'package.json'
    original = package.read_bytes()
    data = json.loads(original)
    try:
        data['dependencies']['unapproved-library'] = '1.0.0'
        package.write_text(json.dumps(data))
        rejected = subprocess.run(checker, capture_output=True, text=True)
        assert rejected.returncode and 'Unapproved dependency' in rejected.stderr
    finally:
        package.write_bytes(original)
    for field in ('devDependencies', 'optionalDependencies', 'peerDependencies'):
        data = json.loads(original)
        name = next(iter(data['dependencies']))
        data.setdefault(field, {})[name] = data['dependencies'].pop(name)
        try:
            package.write_text(json.dumps(data))
            rejected = subprocess.run(checker, capture_output=True, text=True)
            assert rejected.returncode and 'must be in dependencies' in rejected.stderr
        finally:
            package.write_bytes(original)
    notices = (project / 'dist/THIRD-PARTY-NOTICES.txt').read_text()
    for name, version in json.loads(original)['dependencies'].items():
        assert f'{name} @ {version}' in notices, f'Missing published notice: {name}'
    published = [path.relative_to(project / 'dist') for path in (project / 'dist').rglob('*') if path.is_file()]
    assert Path('index.html') in published and Path('THIRD-PARTY-NOTICES.txt') in published
    assert all(path.parts[0] in ('assets', 'index.html', 'THIRD-PARTY-NOTICES.txt') for path in published), published
    assert '/library-trial/assets/' in (project / 'dist/index.html').read_text()
    assert all(not path.is_symlink() for path in (project / 'dist').rglob('*'))

with tempfile.TemporaryDirectory() as temporary:
    project = Path(temporary)
    shutil.copytree(PACKAGE / 'assets/managed-starter', project, dirs_exist_ok=True)
    def git(*args):
        return subprocess.run(['git', *args], cwd=project, capture_output=True, text=True)
    assert git('init', '-b', 'main').returncode == 0
    # Disposable synthetic boundary fixture; never published as student attribution.
    git('config', '--local', 'user.name', 'Synthetic fixture')
    git('config', '--local', 'user.email', 'fixture@example.invalid')
    git('add', '.')
    assert git('commit', '-m', 'Fixture checkpoint').returncode == 0
    tested = git('rev-parse', 'HEAD').stdout.strip()
    paths = ['app/', 'tests/', '.github/workflows/', 'package.json', 'package-lock.json', '.npmrc', '.node-version', 'vite.config.js', 'scripts/', 'licenses/']
    def fresh():
        return (all(git(*args, '--', *paths).returncode == 0 for args in
                    [('diff', '--exit-code', tested, 'HEAD'), ('diff', '--cached', '--exit-code', 'HEAD'), ('diff', '--exit-code')])
                and not git('ls-files', '--others', '--', *paths).stdout)
    assert fresh()
    (project / 'EVALUATION.md').write_text('Report only')
    git('add', 'EVALUATION.md'); git('commit', '-m', 'Report')
    assert fresh()
    for filename in ('package.json', 'package-lock.json', 'vite.config.js', '.npmrc', '.node-version', 'scripts/notices.mjs'):
        file = project / filename
        original = file.read_bytes()
        file.write_bytes(original + b'\n')
        assert not fresh(), filename
        git('add', filename); file.write_bytes(original)
        assert not fresh(), 'Opposing staged/worktree edits must remain stale'
        git('add', filename)
        assert fresh()
    (project / 'licenses').mkdir()
    (project / 'licenses/new.txt').write_text('New license source')
    assert not fresh()
print('Passed: three approved dependency sets, unknown-package and misplaced-runtime rejection, published direct-library notices, app-only publication and non-root assets; report-only freshness, six managed-source changes/opposing staged edits, untracked license source.')
