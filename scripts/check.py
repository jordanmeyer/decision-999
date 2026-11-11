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

skills = {p.parent.name: p.read_text(encoding='utf-8') for p in PLUGIN.glob('skills/*/SKILL.md')}
assert sorted(skills) == sorted(['setup', 'resume', 'ideate', 'plan', 'build', 'iterate', 'ship']), 'the seven skills'
for name, text in skills.items():
    front = re.match(r'---\nname: (.+)\ndescription: (.+)\n---\n', text)
    assert front and front[1] == name and front[2].strip(), f'skills/{name}: front matter needs its name and a description'
prompts = manifest['extensions']['com.openai']['interface']['defaultPrompt']
assert [p.split()[0] for p in prompts] == [f'${name}' for name in ('setup', 'resume', 'ideate', 'plan', 'build', 'iterate', 'ship')], 'one default prompt per skill'

docs = guidance + [PLUGIN / 'README.md']
for doc in docs:
    for link in re.findall(r'\]\(([^)#]+)\)', doc.read_text(encoding='utf-8')):
        target = (doc.parent / link).resolve()
        assert link.startswith('https://') or (target.is_file() and target.is_relative_to(PLUGIN)), f'{doc.relative_to(ROOT)}: broken link {link}'

cli = (PLUGIN / 'tool/cli.mjs').read_text(encoding='utf-8')
commands = {key.split(':')[0].strip(" '") for key in re.search(r'const commands = \{(.+?)\};', cli)[1].split(',')}
spans = [span for doc in docs for span in re.findall(r'`([^`\n]+)`', doc.read_text(encoding='utf-8'))]
named = {command for span in spans for command in re.findall(r'\bcourse(?:\.sh|\.ps1)? ([a-z][a-z-]*)', span)}
assert named <= commands, f'commands named in the guidance but missing from the tool: {sorted(named - commands)}'
questions = re.findall(r"^  '(.+)',$", re.search(r'const questions = \[\n(.+?)\n\];', cli, re.S)[1], re.M)
assert len(questions) == 8 and questions == re.findall(r'^\d\. (.+)$', skills['plan'].split('## Ask')[1].split('##')[0], re.M), 'the plan skill and plan-check must use the same eight questions'
print(f'{len(skills)} skills, {len(guidance) - len(skills)} references, all links and commands resolve')
