"""Maintainer-only Git and publication boundary checks. No student Python dependency."""
from pathlib import Path
import shutil
import subprocess
import tempfile

ROOT = Path(__file__).resolve().parents[2]
PACKAGE = ROOT / 'plugins/browser-app-builder'


with tempfile.TemporaryDirectory() as temporary:
    project = Path(temporary)

    def git(*args):
        return subprocess.run(['git', *args], cwd=project, text=True, capture_output=True)

    def commit(message):
        assert git('add', '.').returncode == 0
        assert git('commit', '-m', message).returncode == 0
        return git('rev-parse', 'HEAD').stdout.strip()

    assert git('init', '-b', 'main').returncode == 0
    # Synthetic test identity in a disposable repository, not student attribution.
    assert git('config', '--local', 'user.name', 'Synthetic fixture').returncode == 0
    assert git('config', '--local', 'user.email', 'fixture@example.invalid').returncode == 0
    shutil.copytree(PACKAGE / 'assets/starter', project, dirs_exist_ok=True)
    (project / 'tests').mkdir()
    (project / 'tests/cases.js').write_text('export const cases = [];\n')
    (project / '.github/workflows').mkdir(parents=True)
    shutil.copy2(PACKAGE / 'assets/pages.yml', project / '.github/workflows/pages.yml')
    tested = commit('Synthetic source checkpoint')
    paths = ['app/', 'tests/', '.github/workflows/']

    def fresh():
        comparisons = [
            git('diff', '--exit-code', tested, 'HEAD', '--', *paths),
            git('diff', '--cached', '--exit-code', 'HEAD', '--', *paths),
            git('diff', '--exit-code', '--', *paths),
        ]
        untracked = git('ls-files', '--others', '--', *paths)
        return all(result.returncode == 0 for result in comparisons) and untracked.returncode == 0 and not untracked.stdout

    assert fresh()
    (project / 'EVALUATION.md').write_text(f'Tested commit: {tested}\n')
    commit('Report only')
    assert fresh(), 'Documentation-only commit should preserve evaluation'
    source = project / 'app/app.js'
    original = source.read_text()
    source.write_text(original + '\n// Changed source\n')
    assert not fresh(), 'Unstaged source must be stale'
    assert git('add', 'app/app.js').returncode == 0
    source.write_text(original)
    assert git('diff', '--exit-code', 'HEAD', '--', *paths).returncode == 0
    assert not fresh(), 'Opposing staged/unstaged edits must not appear clean'
    assert git('add', 'app/app.js').returncode == 0
    assert fresh()
    (project / 'tests/new.js').write_text('// Untracked test\n')
    assert not fresh(), 'Untracked tests must be detected'
    (project / 'tests/new.js').unlink()
    with (project / '.gitignore').open('a') as file:
        file.write('/tests/local.js\n')
    (project / 'tests/local.js').write_text('// Ignored but relevant\n')
    assert not fresh(), 'Ignored tests must be detected'
    (project / 'tests/local.js').unlink()
    assert fresh()
    source.write_text(original + '\n// Committed change\n')
    commit('Changed app')
    assert not fresh(), 'Committed source change must invalidate old evaluation'

    # Execute exactly the packaging shell body in the shipped workflow.
    workflow = (PACKAGE / 'assets/pages.yml').read_text()
    body = workflow.split('        run: |\n', 1)[1].split('      - uses:', 1)[0]
    commands = '\n'.join(line[10:] for line in body.splitlines())
    result = subprocess.run(['bash', '-e', '-c', commands], cwd=project, capture_output=True, text=True)
    assert result.returncode == 0, result.stderr
    published = {p.relative_to(project / 'dist') for p in (project / 'dist').rglob('*') if p.is_file()}
    authored = {p.relative_to(project / 'app') for p in (project / 'app').rglob('*') if p.is_file()}
    assert published == authored
    assert not (project / 'dist/EVALUATION.md').exists()
    assert not (project / 'dist/tests').exists()
    shutil.rmtree(project / 'dist')
    (project / 'app/outside.txt').symlink_to(project / 'EVALUATION.md')
    result = subprocess.run(['bash', '-e', '-c', commands], cwd=project, capture_output=True, text=True)
    assert result.returncode != 0 and not (project / 'dist').exists(), 'Reject escaping symlink before packaging'

print('Passed: clean checkpoint, report-only commit, unstaged change, opposing staged edits, untracked test, ignored test, committed change, app-only publication, symlink refusal.')
