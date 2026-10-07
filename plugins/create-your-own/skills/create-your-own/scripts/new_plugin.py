"""Package a skill as a plugin for the course plugin directory.

Run from the root of your copy of the directory's repository. The skill's folder is named after the skill and holds
its SKILL.md and any references/, scripts/ or assets/ it uses:

    python3 plugins/create-your-own/skills/create-your-own/scripts/new_plugin.py drafts/<name> --developer "Your Name"

This copies the skill into plugins/<name>/, writes the plugin's manifest (plugin.json) and README, and starts its
evidence record in evidence/<name>/EVIDENCE.md. The listing text is left blank and the README and evidence record
contain TODOs; the site's build (python3 scripts/build.py) names whatever is still missing.
"""
import argparse
import json
from pathlib import Path
import re
import shutil
from string import Template

TEMPLATES = Path(__file__).resolve().parents[1] / 'assets'


def front_matter(skill):
    """The name and description at the top of SKILL.md, in the form the site's build requires."""
    match = re.match(r'---\nname: (.+)\ndescription: (.+)\n---\n', skill.read_text(encoding='utf-8'))
    return [part.strip().strip('"\'') for part in match.groups()] if match else ['', '']


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument('folder', type=Path, help='the skill folder, for example drafts/meeting-brief')
    parser.add_argument('--developer', required=True, help='your name, as the listing should show it')
    args = parser.parse_args()

    if not Path('site/config.json').is_file():
        raise SystemExit('Run this from the root of your copy of the directory repository.')
    config = json.loads(Path('site/config.json').read_text(encoding='utf-8'))
    skill = args.folder / 'SKILL.md'
    if not skill.is_file():
        raise SystemExit(f'{skill} not found. Give the folder that holds the skill.')
    name, description = front_matter(skill)
    if not (name and description):
        raise SystemExit(f'{skill} must start with front matter: a --- line, a name: line, a description: line, and another --- line.')
    if not re.fullmatch(r'[a-z0-9]+(-[a-z0-9]+)*', name) or len(name) > 64:
        raise SystemExit(f'{skill}: the name must be lowercase words joined by hyphens, at most 64 characters.')
    if len(description) > 1024:
        raise SystemExit(f'{skill}: the description must be at most 1,024 characters.')
    if args.folder.resolve().name != name:
        raise SystemExit(f'Rename the folder {args.folder} to {name}, the name in its SKILL.md.')
    package, evidence = Path('plugins', name), Path('evidence', name)
    if package.exists() or evidence.exists():
        raise SystemExit(f'A plugin named {name} already exists. Choose another name, or edit that plugin and raise its version.')

    # Links are copied as links, so the site's build can refuse any that point outside the plugin.
    shutil.copytree(args.folder, package / 'skills' / name, symlinks=True, ignore=shutil.ignore_patterns('.*', '__pycache__'))
    title = name.replace('-', ' ').title()
    manifest = {
        '$schema': 'https://agent-plugins.org/schemas/1.0.0/plugin.schema.json',
        'name': name,
        'version': '0.1.0',
        'description': description,
        'author': {'name': args.developer},
        'homepage': f"{config['url']}plugins/{name}/",
        'repository': f"https://github.com/{config['repo']}",
        'extensions': {
            'com.openai': {'interface': {
                'displayName': title, 'shortDescription': '', 'longDescription': '', 'developerName': args.developer,
                'category': '', 'defaultPrompt': [''], 'screenshots': ['./assets/desktop.png']}},
            config['extension']: {
                'label': '', 'audience': '', 'results': [{'value': '', 'label': ''}], 'method': '', 'limits': '',
                'screenshotAlt': ['']}}}
    (package / 'plugin.json').write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + '\n', encoding='utf-8')
    fill = {'name': name, 'title': title, 'description': description, 'repo': config['repo'], 'marketplace': config['marketplace']}
    evidence.mkdir(parents=True)
    for template, target in (('README.template.md', package / 'README.md'), ('EVIDENCE.template.md', evidence / 'EVIDENCE.md')):
        target.write_text(Template((TEMPLATES / template).read_text(encoding='utf-8')).substitute(fill), encoding='utf-8')

    print(f'Created {package}/')
    for file in sorted(p for p in package.rglob('*') if p.is_file()):
        print(f'  {file.relative_to(package)}')
    print(f'Created {evidence}/EVIDENCE.md')
    print(f'\nFrom now on, edit the skill in {package}/skills/{name}/. Before it can be listed:')
    print(f'  1. Write the listing in {package}/plugin.json')
    print(f'  2. Add a screenshot of real output as {package}/assets/desktop.png')
    print(f'  3. Replace every TODO in {package}/README.md and {evidence}/EVIDENCE.md')
    print('  4. Run python3 scripts/build.py until it passes; it names whatever is still missing')


if __name__ == '__main__':
    main()
