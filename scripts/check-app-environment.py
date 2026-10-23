"""Integration checks in disposable new projects; requires macOS or Windows and network.

Python is a maintainer/CI test dependency, never a student setup prerequisite.
"""
import json
import os
from pathlib import Path
import shutil
import signal
import socket
import subprocess
import sys
import tempfile
import time
from urllib.request import urlopen

ROOT = Path(__file__).resolve().parents[1]
STARTER = ROOT / 'plugins/web-application-builder/assets/managed-starter'
WINDOWS = sys.platform == 'win32'
if sys.platform not in ('darwin', 'win32'):
    raise SystemExit('Run on macOS or Windows; these are local-bootstrap integration checks.')
launcher = ['powershell.exe', '-NoProfile', '-File', 'app.ps1'] if WINDOWS else ['/bin/bash', 'app.sh']
env = {key: value for key, value in os.environ.items() if key.lower() != 'path'}
# No existing Node/npm can satisfy this test; bootstrap uses OS tools only.
env['PATH'] = (os.path.join(os.environ['SystemRoot'], 'System32') + os.pathsep + os.path.join(os.environ['SystemRoot'], 'System32/WindowsPowerShell/v1.0')) if WINDOWS else '/usr/bin:/bin:/usr/sbin:/sbin'


def run(project, *args, ok=True):
    result = subprocess.run(launcher + list(args), cwd=project, env=env, text=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, timeout=180)
    assert (result.returncode == 0) == ok, result.stdout
    return result.stdout


with tempfile.TemporaryDirectory(prefix='builder environment ') as temporary:
    project = Path(temporary).resolve() / 'Student app with spaces'
    shutil.copytree(STARTER, project)
    toolchain = project / 'scripts/toolchain.json'
    original_manifest = toolchain.read_text()
    manifest = json.loads(original_manifest)
    for artifact in manifest['artifacts'].values():
        artifact['sha256'] = '0' * 64
    toolchain.write_text(json.dumps(manifest))
    assert 'checksum mismatch' in run(project, 'setup', ok=False)
    assert not list((project / '.toolchain').glob('node-v*'))
    assert not list((project / '.toolchain').glob('download.*'))
    toolchain.write_text(original_manifest)
    run(project, 'setup')
    runtime = next((project / '.toolchain').glob('node-v*'))
    node = runtime / ('node.exe' if WINDOWS else 'bin/node')
    initial_mtime = node.stat().st_mtime_ns
    run(project, 'setup')
    assert node.stat().st_mtime_ns == initial_mtime, 'Setup replaced a working runtime'
    assert (project / '.toolchain/npm-cache').is_dir()
    subprocess.run([str(node), str(ROOT / 'plugins/web-application-builder/scripts/check-dependencies.mjs'), str(project)], check=True)
    run(project, 'build')
    notices = (project / 'dist/THIRD-PARTY-NOTICES.txt').read_text()
    assert 'react-dom @' in notices and 'react @' in notices
    assert 'typescript @' not in notices

    app = project / 'app/App.tsx'
    source = app.read_text()
    app.write_text(source + '\nconst invalid: number = "not a number";\n')
    assert 'TS2322' in run(project, 'build', ok=False), 'Production build skipped typecheck'
    app.write_text(source)
    # Invalid dependency operations cannot fall through to global npm install.
    assert 'exact.version' in run(project, 'add', '--global', 'react@19.3.0', ok=False)
    recorded = project / '.node-version'
    recorded.write_text('0.0.0\n')
    assert 'disagree' in run(project, 'setup', ok=False)
    recorded.write_text(json.loads(original_manifest)['node'] + '\n')

    config = project / 'vite.config.js'
    config.write_text(config.read_text().replace("const base = '/';", "const base = '/course-app/';"))
    run(project, 'build')
    assert '/course-app/assets/' in (project / 'dist/index.html').read_text()
    with socket.socket() as occupied:
        occupied.bind(('127.0.0.1', 0))
        occupied.listen()
        port = occupied.getsockname()[1]
        assert 'already in use' in run(project, 'dev', '--port', str(port), ok=False)

    with socket.socket() as available:
        available.bind(('127.0.0.1', 0))
        port = available.getsockname()[1]
    with (project / '.toolchain/preview-test.log').open('w') as log:
        server = subprocess.Popen(launcher + ['preview', '--port', str(port)], cwd=project, env=env, stdout=log, stderr=log, start_new_session=not WINDOWS)
        try:
            for attempt in range(60):
                try:
                    with urlopen(f'http://127.0.0.1:{port}/course-app/', timeout=1) as response:
                        assert response.status == 200
                    break
                except OSError:
                    assert server.poll() is None, 'Preview exited before readiness'
                    time.sleep(.25)
            else:
                raise AssertionError('Preview did not become ready')
            assert 'active' in run(project, 'clean', ok=False)
            assert 'active' in run(project, 'setup', ok=False)
        finally:
            if WINDOWS:
                subprocess.run(['taskkill', '/PID', str(server.pid), '/T', '/F'], check=True, capture_output=True)
            else:
                os.killpg(server.pid, signal.SIGTERM)
            server.wait(timeout=15)
    before = {p.relative_to(project): p.read_bytes() for p in [app, project / 'package-lock.json', toolchain]}
    run(project, 'clean')
    for name in ['.toolchain', 'node_modules', 'dist']:
        assert not (project / name).exists(), f'Cleanup retained {name}'
    assert all((project / p).read_bytes() == data for p, data in before.items()), 'Cleanup changed source'
    run(project, 'setup')
    run(project, 'build')
    run(project, 'clean')

print('Passed: checksum rejection, contained setup without system Node, runtime reuse, dependency policy, typecheck gate, prefixed production preview, port conflict, active-session protection, cleanup and recreation.')
