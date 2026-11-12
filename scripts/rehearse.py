"""Rehearse the course tool offline against a local stand-in for GitHub, in a temporary course folder outside the repository.

python3 scripts/rehearse.py --toolchain "<course folder>/.toolchain" copies an already-downloaded toolchain instead of downloading it.
"""
import argparse, re, shutil, subprocess, tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PLUGIN = ROOT / 'plugins/build-with-ai'
JOURNAL = '## Asked for\nRehearsal.\n\n## Questions and answers\nNone.\n\n## Changed\nRehearsal change.\n\n## Checked\ncheck passed.\n'

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--toolchain', type=Path, help='a .toolchain folder from an earlier setup')
args = parser.parse_args()
tmp = Path(tempfile.mkdtemp(prefix='rehearse-'))
github, home = tmp / 'github', tmp / 'home'
home.mkdir()


def course(folder, user, *words, cwd=None, stdin=None, stops=None, extra=None):
    """Run one course command as user; stops= expects a STOP containing that text."""
    env = {'HOME': str(home), 'PATH': '/usr/bin:/bin', 'COURSE_OFFLINE': '1', 'COURSE_GITHUB': str(github), 'COURSE_USER': user, **(extra or {})}
    launcher = PLUGIN / 'course.sh' if words[0] == 'setup' else folder / 'course.sh'
    result = subprocess.run(['sh', str(launcher), *words], cwd=cwd or folder, env=env, input=stdin, capture_output=True, text=True)
    out = result.stdout + result.stderr
    if (result.returncode != 0) != bool(stops) or stops and not re.search(f'^STOP .*{re.escape(stops)}', out, re.M):
        raise SystemExit(f'FAIL: course {" ".join(words)} as {user} in {cwd or folder}\n{out}\n(left {tmp} for inspection)')
    return out


def head(repo, ref='main'):
    return subprocess.run(['git', '-C', str(repo), 'rev-parse', ref], capture_output=True, text=True).stdout.strip()


def session(folder, user, project, message, extra=()):
    course(folder, user, 'check', project)
    course(folder, user, 'journal', project, '--skill', 'iterate', stdin=JOURNAL)
    return course(folder, user, 'publish', project, '-m', message, *extra)


alice, bob = tmp / 'alice/Build with AI', tmp / 'bob/Build with AI'
alice.mkdir(parents=True)
if args.toolchain:
    shutil.copytree(args.toolchain, alice / '.toolchain', symlinks=True, ignore=shutil.ignore_patterns('tool', 'starter', 'identity.json'))
course(alice, 'alice', 'setup', extra={'TMPDIR': str(tmp / 'missing')}, stops='temporary folder')
print('ok setup stops when the temporary folder is missing')
course(alice, 'alice', 'setup')
bob.mkdir(parents=True)
(bob / '.toolchain').symlink_to(alice / '.toolchain')
shutil.copy2(alice / 'course.sh', bob)

rp = alice / 'rp'
course(alice, 'alice', 'new', 'rp')
course(alice, 'alice', 'check', 'rp')
print('ok new and check pass')

(rp / 'tests/wrong.test.ts').write_text("import test from 'node:test';\nimport assert from 'node:assert/strict';\ntest('wrong', () => assert.equal(1 + 1, 3));\n")
course(alice, 'alice', 'check', 'rp', stops='1 test failed')
(rp / 'tests/wrong.test.ts').unlink()
print('ok a wrong test stops check')

(rp / 'process/backlog').mkdir(parents=True)
(rp / 'process/backlog/2026-11-12-rehearsal.md').write_text('status: open\nkind: bug\nsource: team\npriority: low\n')
index = rp / 'app/index.html'
original = index.read_text()
index.write_text(original.replace('</body>', '<img src="https://example.com/pixel.png" alt=""></body>'))
course(alice, 'alice', 'check', 'rp', stops='requested another website')
print('ok an outside request stops check')
course(alice, 'alice', 'undo', 'rp')
assert index.read_text() == original and (rp / 'process/backlog/2026-11-12-rehearsal.md').is_file(), 'undo must restore the app and keep the backlog'
print('ok undo restores the app and keeps the backlog item')

session(alice, 'alice', 'rp', 'First publish')
course(alice, 'alice', 'publish', 'rp', '-m', 'First publish')
assert head(github / 'alice/rp.git') == head(rp, 'HEAD')
print('ok publish runs twice in a row')

course(alice, 'alice', 'start', 'rp', cwd=rp)
print('ok the course folder launcher runs from inside a project')

questions = re.findall(r"^  '(.+)',$", re.search(r'const questions = \[\n(.+?)\n\];', (PLUGIN / 'tool/cli.mjs').read_text(), re.S)[1], re.M)
plan = ''.join(f'## {q}\n\nAn answer.\n\n' for q in questions) + '## Technical notes\n\n{notes}Approved by Alice on 2026-11-12\n'
(rp / 'process/plan.md').write_text(plan.format(notes=''))
course(alice, 'alice', 'plan-check', 'rp', stops='Technical notes')
(rp / 'process/plan.md').write_text(plan.format(notes='One screen.\n\n'))
course(alice, 'alice', 'plan-check', 'rp')
print('ok plan-check needs technical notes')

# Bob adopts Alice's plan as his own repository; Alice, the plan's author, then joins it from her plan's folder.
course(bob, 'bob', 'clone', 'alice/rp', '--own')
(bob / 'rp/process/notes.md').write_text('Bob was here.\n')
session(bob, 'bob', 'rp', "Bob's prototype")
course(alice, 'alice', 'clone', 'bob/rp')
(rp / 'process/notes.md').write_text('Bob was here.\nAlice too.\n')
session(alice, 'alice', 'rp', 'Alice joins')
assert head(github / 'bob/rp.git') == head(rp, 'HEAD'), 'publish must push to the team repository'
course(alice, 'alice', 'publish', 'rp', '-m', 'Alice joins', '--mine')
assert head(github / 'alice/rp.git') == head(rp, 'HEAD'), 'publish --mine must push to the plan repository'
print("ok the plan's author joins a teammate's repository and keeps their own copy")

course(alice, 'alice', 'new', 'other')
work = tmp / 'unrelated'
subprocess.run(['git', 'init', '-q', '-b', 'main', str(work)], check=True)
subprocess.run(['git', '-C', str(work), '-c', 'user.name=x', '-c', 'user.email=x@example.com', 'commit', '-q', '--allow-empty', '-m', 'unrelated'], check=True)
subprocess.run(['git', 'init', '-q', '--bare', '-b', 'main', str(github / 'alice/other.git')], check=True)
subprocess.run(['git', '-C', str(work), 'push', '-q', str(github / 'alice/other.git'), 'main'], check=True)
course(alice, 'alice', 'check', 'other')
course(alice, 'alice', 'journal', 'other', '--skill', 'plan', stdin=JOURNAL)
course(alice, 'alice', 'publish', 'other', '-m', 'First', stops='different work')
print('ok publish stops on an unrelated repository of the same name')

shutil.rmtree(tmp)
print('rehearsal passed')
