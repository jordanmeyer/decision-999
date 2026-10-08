"""Check installation in temporary, empty app settings without modifying personal settings."""
import json
import os
from pathlib import Path
import subprocess
import tempfile

ROOT = Path(__file__).resolve().parents[2]
VERSION = json.loads((ROOT / 'plugins/grill-me/plugin.json').read_text())['version']
log = []
with tempfile.TemporaryDirectory() as scratch:
    for app, variable, install in (('claude', 'CLAUDE_CONFIG_DIR', 'install'), ('codex', 'CODEX_HOME', 'add')):
        home = Path(scratch) / app
        home.mkdir()
        env = os.environ | {variable: str(home)}
        commands = [[app, '--version'], [app, 'plugin', 'marketplace', 'add', str(ROOT)],
                    [app, 'plugin', install, 'grill-me@decision-999'], [app, 'plugin', 'list']]
        for command in commands:
            result = subprocess.run(command, env=env, cwd=scratch, text=True, capture_output=True, timeout=60)
            log.extend(['$ ' + ' '.join(command), result.stdout.strip(), result.stderr.strip(), f'[exit {result.returncode}]'])
            if result.returncode:
                raise SystemExit('\n'.join(log))
        cached = home / f'plugins/cache/decision-999/grill-me/{VERSION}/skills/grill-me/SKILL.md'
        assert cached.read_bytes() == (ROOT / 'plugins/grill-me/skills/grill-me/SKILL.md').read_bytes()
        log.append(f'{app}: cached skill matches the packaged skill byte for byte.\n')
    output = '\n'.join(line.rstrip() for line in log if line.strip()).rstrip().replace(str(Path(scratch).resolve()), '$TMP').replace(scratch, '$TMP').replace(str(ROOT), '$REPO') + '\n'
(ROOT / 'evidence/grill-me/install-test.txt').write_text(output)
print(output)
