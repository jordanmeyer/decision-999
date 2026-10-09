"""Create isolated maintainer trial projects. Never writes into an existing destination."""
from pathlib import Path
import shutil
import sys

ROOT = Path(__file__).resolve().parents[3]
PACKAGE = ROOT / 'plugins/browser-app-builder'
EVIDENCE = Path(__file__).resolve().parent
destination = Path(sys.argv[1]).resolve()
destination.mkdir(parents=True, exist_ok=False)
groups = {'presentation': ['reveal', 'echarts', 'jstat', 'seedrandom'],
          'dashboard': ['mantine', 'papa-parse', 'arquero', 'tabulator', 'echarts'],
          'operations': ['react-flow', 'mermaid', 'vis-timeline', 'frappe-gantt', 'motion']}
for name, ids in groups.items():
    project = destination / name
    shutil.copytree(PACKAGE / 'assets/managed-starter', project)
    for folder in ('app', 'tests'):
        shutil.copytree(EVIDENCE / name / folder, project / folder, dirs_exist_ok=True)
    for file in ('package.json', 'package-lock.json'):
        shutil.copy2(EVIDENCE / name / file, project / file)
    (project / 'app/app.js').unlink()
    theme = project / 'app/theme'
    theme.mkdir(exist_ok=True)
    shutil.copy2(PACKAGE / 'skills/campus-designer/assets/duke-tokens.css', theme)
    assets = {'tokens.js', 'base.css'}
    for key in ids:
        assets.update(f.name for f in (PACKAGE / 'assets/library-themes').glob(key + '.*'))
    for file in assets:
        shutil.copy2(PACKAGE / 'assets/library-themes' / file, theme)
    (project / 'licenses').mkdir()
    for file in (PACKAGE / 'assets/license-notices').iterdir():
        if ('seedrandom' in file.name and 'seedrandom' in ids) or ('react-remove' in file.name and 'mantine' in ids):
            shutil.copy2(file, project / 'licenses')
    config = (project / 'vite.config.js').read_text().replace("const base = '/';", "const base = '/library-trial/';")
    if name != 'presentation':
        config = "import react from '@vitejs/plugin-react';\n" + config.replace("root: mode", "plugins: [react()],\n  root: mode")
    (project / 'vite.config.js').write_text(config)
    (project / 'PLAN.md').write_text(f'# {name.title()} library trial\n\nSynthetic maintainer fixture, not a student conversation. Libraries: {", ".join(ids)}.\n\nExpected cases and source are retained in evidence/browser-app-builder/libraries.\n')
    print(project)
