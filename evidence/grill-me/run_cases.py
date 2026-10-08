"""Run the fixed synthetic conversation states with the local plugin in Claude Code."""
import json
from pathlib import Path
import subprocess
import tempfile

HERE = Path(__file__).resolve().parent
PLUGIN = HERE.parents[1] / 'plugins/grill-me'
print(subprocess.check_output(['claude', '--version'], text=True).strip(), flush=True)
with tempfile.TemporaryDirectory() as scratch:
    for name in ('frontier', 'branch', 'confirmation'):
        prompt = '/grill-me:grill-me\n\n' + (HERE / 'cases' / f'{name}.txt').read_text()
        result = subprocess.run([
            'claude', '-p', '--plugin-dir', str(PLUGIN), '--setting-sources', '',
            '--strict-mcp-config', '--tools', 'Skill', '--allowedTools', 'Skill',
            '--no-session-persistence', '--output-format', 'json',
        ], input=prompt, text=True, capture_output=True, cwd=scratch, timeout=180)
        output = json.loads(result.stdout) if result.stdout.strip().startswith('{') else {'result': result.stdout, 'stderr': result.stderr}
        # Keep the answer and reported model, not session IDs or local account metadata.
        record = {key: output[key] for key in ('result', 'is_error', 'modelUsage') if key in output}
        record['exit_code'] = result.returncode
        (HERE / f'{name}-run.json').write_text(json.dumps(record, indent=2, ensure_ascii=False) + '\n')
        print(f'{name}: exit {result.returncode}', flush=True)
        if result.returncode:
            print(result.stderr or output.get('result', ''), flush=True)
