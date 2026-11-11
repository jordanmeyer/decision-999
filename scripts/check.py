"""Maintainer checks: committed catalogs are current, and the course plugin is valid and inside its size budget."""
import re
from build import ROOT, BUILDER, catalogs, designer_files, load, read_json

PLUGIN = ROOT / 'plugins/build-with-ai'
WORDS, LINES = 2500, 600

designer = ROOT / BUILDER / 'skills/campus-designer'
assert {p.relative_to(designer): p.read_bytes() for p in designer.rglob('*') if p.is_file()} == designer_files(ROOT), 'bundled Campus Designer is stale'
config = read_json(ROOT / 'site/config.json')
for path, content in catalogs(config, load(ROOT, config)).items():
    assert (ROOT / path).read_text(encoding='utf-8') == content, f'{path} is stale: run scripts/build.py and commit it'

guidance = sorted(PLUGIN.glob('skills/*/SKILL.md')) + sorted(PLUGIN.glob('references/*.md'))
tool = sorted(PLUGIN.glob('tool/*.mjs')) + [PLUGIN / 'course.sh', PLUGIN / 'course.ps1']
words = sum(len(p.read_text(encoding='utf-8').split()) for p in guidance)
lines = sum(len(p.read_text(encoding='utf-8').splitlines()) for p in tool)
print(f'guidance: {words:,} of {WORDS:,} words')
print(f'tool: {lines} of {LINES} lines')
assert words <= WORDS and lines <= LINES, 'over the size budget'

manifest = read_json(PLUGIN / 'plugin.json')
assert manifest['name'] == 'build-with-ai' and re.fullmatch(r'\d+\.\d+\.\d+', manifest['version'])
assert (PLUGIN / 'starter/app/site.json').is_file() and '<meta name="build" content="%SITE_COMMIT%">' in (PLUGIN / 'starter/app/index.html').read_text()
