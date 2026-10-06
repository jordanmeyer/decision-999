"""Build only the neutral public presentation of the real plugin catalog."""
import argparse
import json
from html import escape
from html.parser import HTMLParser
from pathlib import Path
import re
import shutil
from string import Template
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]


def read_json(path):
    return json.loads(path.read_text())


def require(condition, message):
    if not condition:
        raise ValueError(message)


def contained(path, root):
    return path.resolve().is_relative_to(root.resolve())


def packages(root):
    catalog = read_json(root / '.agents/plugins/marketplace.json')
    require(catalog['name'] == 'decision-999', 'Unexpected marketplace identity')
    require(catalog['interface']['displayName'] == 'Decision 999', 'Unexpected display name')
    entries = catalog['plugins']
    require(entries and len({p['name'] for p in entries}) == len(entries), 'Empty or duplicate catalog')
    for entry in entries:
        source = entry['source']
        package = root / source['path']
        require(source['source'] == 'local' and source['path'].startswith('./plugins/'), 'Expected local package under ./plugins/')
        require(contained(package, root / 'plugins'), 'Package path escapes plugins directory')
        manifest = read_json(package / 'plugin.json')
        require(manifest['$schema'] == 'https://agent-plugins.org/schemas/1.0.0/plugin.schema.json', 'Unexpected plugin schema')
        require(manifest['name'] == entry['name'], 'Catalog and manifest identity differ')
        require(re.fullmatch(r'[a-z0-9]+(?:-[a-z0-9]+)*', entry['name']), 'Invalid plugin name')
        require(re.fullmatch(r'\d+\.\d+\.\d+', manifest['version']), 'Expected a release version')
        require(isinstance(manifest['description'], str) and manifest['description'].strip(), 'Missing description')
        require(entry['policy'] == {'installation': 'AVAILABLE', 'authentication': 'ON_INSTALL'}, 'Unexpected package policy')
        skills = list((package / 'skills').glob('*/SKILL.md'))
        require(skills, 'Package has no skills')
        for skill in skills:
            require(re.match(r'---\nname: .+\ndescription: .+\n---', skill.read_text()), 'Missing skill metadata')
        for file in package.rglob('*'):
            require(not file.is_symlink(), f'Package symlink: {file}')
            if file.suffix == '.md':
                for target in re.findall(r'\]\(([^\s)]+)\)', file.read_text()):
                    url = urlsplit(target)
                    if url.scheme or not url.path:
                        continue
                    linked = file.parent / unquote(url.path)
                    require(contained(linked, package) and linked.exists(), f'Missing or escaping bundled reference: {file}: {target}')
        yield entry['name'], manifest


class PageLinks(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.ids = []
        self.urls = []
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            self.ids.append(attrs['id'])
        for key in ('href', 'src'):
            if key in attrs:
                self.urls.append(attrs[key])


def validate_site(dist, base):
    pages = {p: PageLinks(p.read_text()) for p in dist.rglob('*.html')}
    for file in dist.rglob('*'):
        require(not file.is_symlink(), 'Deployment may not contain symlinks')
        require('duke' not in str(file.relative_to(dist)).lower(), 'Restricted asset filename')
        if not file.is_file():
            continue
        require(file.suffix in {'.html', '.css', '.js', '.txt', '.ttf'}, f'Unexpected deployment asset: {file}')
        if file.suffix == '.ttf':
            continue
        text = file.read_text()
        require('duke' not in text.lower(), f'Restricted website text in {file.name}')
        urls = re.findall(r'url\([\'\"]?([^\)\'\"]+)', text) if file.suffix == '.css' else []
        if file in pages:
            page = pages[file]
            require(len(page.ids) == len(set(page.ids)), 'Duplicate page anchor')
            urls += page.urls
        for value in urls:
            url = urlsplit(value)
            if url.scheme or url.netloc:
                require(url.scheme == 'https', f'Non-HTTPS external URL: {value}')
                continue
            if url.path.startswith('/'):
                require(url.path.startswith(base), f'URL outside project base path: {value}')
                target = dist / unquote(url.path[len(base):])
            else:
                target = file.parent / unquote(url.path) if url.path else file
            if target.is_dir():
                target /= 'index.html'
            require(contained(target, dist) and target.exists(), f'Broken local asset/link: {value}')
            if url.fragment:
                require(target in pages and unquote(url.fragment) in pages[target].ids, f'Broken anchor: {value}')


def build(root=ROOT, base='/decision-999/'):
    root = root.resolve()
    require(re.fullmatch(r'/(?:[a-zA-Z0-9_-]+/)*', base), 'Base must be an absolute directory path')
    presentation = read_json(root / 'site/presentation.json')
    cards, details, names, slugs = [], [], [], []
    for number, (name, manifest) in enumerate(packages(root), 1):
        names.append(name)
        require(name in presentation, f'Missing neutral presentation: {name}')
        item = presentation[name]
        keys = {'slug', 'title', 'summary', 'description', 'capabilities', 'inputs', 'outputs', 'sample', 'instructions'}
        require(set(item) == keys, f'Unexpected presentation fields: {name}')
        require(all(isinstance(item[k], str) and item[k].strip() for k in keys - {'capabilities'}), 'Presentation fields must be nonempty text')
        require(isinstance(item['capabilities'], list) and item['capabilities'] and all(isinstance(v, str) and v.strip() for v in item['capabilities']), 'Missing capabilities')
        require('duke' not in json.dumps(item).lower(), 'Restricted presentation text')
        require(re.fullmatch('[a-z][a-z0-9-]+', item['slug']), 'Invalid neutral anchor')
        require(item['instructions'].startswith('https://github.com/jordanmeyer/decision-999#'), 'Instructions must use a neutral repository anchor')
        slugs.append(item['slug'])
        data = {key: escape(value) for key, value in item.items() if isinstance(value, str)}
        data['version'] = escape(manifest['version'])
        data['number'] = f'{number:02}'
        data['tags'] = ''.join(f'<li>{escape(tag)}</li>' for tag in item['capabilities'])
        cards.append(Template('''<article class="plugin-card">
          <span class="index" aria-hidden="true">${number}</span>
          <div><h3><a href="#${slug}">${title}</a></h3><p>${summary}</p><ul class="tags" aria-label="Capabilities">${tags}</ul></div>
          <div class="card-meta"><span class="version">Version ${version} · Skills plugin</span><a class="text-link" href="#${slug}">Explore plugin <span aria-hidden="true">↗</span></a></div>
        </article>''').substitute(data))
        details.append(Template('''<section class="detail" id="${slug}" aria-labelledby="${slug}-title">
          <div class="detail-heading"><p class="eyebrow">Inside the plugin / ${number}</p><h2 id="${slug}-title">${title}</h2></div>
          <div class="detail-body"><p>${description}</p>
            <div class="facts"><div><h3>Bring a brief</h3><p>${inputs}</p></div><div><h3>Make something useful</h3><p>${outputs}</p></div></div>
            <div class="sample"><p class="eyebrow">Example task</p><blockquote>${sample}</blockquote><p class="note">An illustrative prompt, not a completed output.</p></div>
            <p style="margin-top: 1.5rem"><a class="text-link" href="${instructions}">Read package &amp; installation instructions <span aria-hidden="true">↗</span></a></p>
          </div></section>''').substitute(data))
    require(set(names) == set(presentation), 'Presentation contains entries outside the catalog')
    require(len(slugs) == len(set(slugs)), 'Duplicate neutral anchor')
    dist = root / 'dist'
    if dist.exists():
        shutil.rmtree(dist)
    dist.mkdir()
    shutil.copytree(root / 'site/assets', dist / 'assets')
    for file in ('style.css', 'main.js'):
        shutil.copy2(root / 'site' / file, dist / file)
    page = Template((root / 'site/index.html').read_text()).substitute(base=base, cards='\n'.join(cards), details='\n'.join(details), count=f'{len(names):02}', plugin_word='plugin' if len(names) == 1 else 'plugins')
    (dist / 'index.html').write_text(page)
    validate_site(dist, base)
    print(f'Built {len(names)} plugin(s); package references, public text, assets, and anchors validated.')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--base', default='/decision-999/')
    args = parser.parse_args()
    build(base=args.base)
