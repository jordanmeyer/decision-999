"""Generate the host catalogs and the static directory site from plugins/*/plugin.json."""
import argparse
import hashlib
from html import escape
from html.parser import HTMLParser
import json
import os
from pathlib import Path
import re
import shutil
import struct
from string import Template
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
NAV = (('plugins', 'Plugins'), ('install', 'Install'), ('about', 'About'))
SCHEMA = 'https://agent-plugins.org/schemas/1.0.0/plugin.schema.json'
INTERFACE = ('displayName', 'shortDescription', 'longDescription', 'developerName', 'category')
LISTING = ('label', 'audience', 'limits', 'method')
WINDOW_BAR = '<div class="window-bar" aria-hidden="true"><span></span><span></span><span></span></div>'


def read_json(path):
    try:
        return json.loads(path.read_text(encoding='utf-8'))
    except json.JSONDecodeError as error:
        raise ValueError(f'{os.path.relpath(path)}: not valid JSON ({error})') from None


def require(condition, message):
    if not condition:
        raise ValueError(message)


def inside(path, root):
    return path.resolve().is_relative_to(root.resolve())


def get(data, *keys, where):
    for key in keys:
        require(isinstance(data, dict) and key in data, f'{where}: missing {" › ".join(keys)}')
        data = data[key]
    return data


def bundled(package, value, where, suffix):
    path = package / value
    require(value.startswith('./') and inside(path, package) and path.suffix == suffix,
            f'{where}: {value} must be a {suffix} path inside the plugin, starting with ./')
    require(path.is_file(), f'{where}: add {value}')
    return path


def text(value):
    return isinstance(value, str) and value.strip()


def check_links(folder):
    """Relative Markdown links must resolve inside the folder, so it works wherever it is copied or installed."""
    for doc in folder.rglob('*.md'):
        for target in re.findall(r'\]\(([^\s)]+)\)', doc.read_text(encoding='utf-8')):
            url = urlsplit(target)
            if url.scheme or not url.path:
                continue
            linked = doc.parent / unquote(url.path)
            require(inside(linked, folder) and linked.exists(), f'{os.path.relpath(doc)}: link {target} is missing or leaves {folder.name}/')


def load(root, config):
    """Read and validate every plugin manifest. The manifests are the only registry."""
    plugins = []
    for file in sorted((root / 'plugins').glob('*/plugin.json')):
        package, manifest, where = file.parent, read_json(file), f'plugins/{file.parent.name}/plugin.json'
        name = manifest.get('name')
        require(manifest.get('$schema') == SCHEMA, f'{where}: $schema must be {SCHEMA}')
        require(name == package.name and re.fullmatch(r'[a-z0-9]+(-[a-z0-9]+)*', name), f'{where}: name must be lowercase-hyphenated and match its folder')
        require(re.fullmatch(r'\d+\.\d+\.\d+', manifest.get('version', '')), f'{where}: version must be x.y.z')
        require(manifest.get('homepage') == f"{config['url']}plugins/{name}/", f'{where}: homepage must be its listing page')
        ui = get(manifest, 'extensions', 'com.openai', 'interface', where=where)
        ext = config['extension']
        listing = get(manifest, 'extensions', ext, where=where)
        for key in INTERFACE:
            require(text(ui.get(key)), f'{where}: fill in interface.{key}')
        for key in LISTING:
            require(text(listing.get(key)), f'{where}: fill in {ext}.{key}')
        require(ui.get('defaultPrompt') and all(map(text, ui['defaultPrompt'])), f'{where}: fill in interface.defaultPrompt with example requests')
        require(listing.get('results') and all(set(r) == {'value', 'label'} and text(r['value']) and text(r['label']) for r in listing['results']),
                f'{where}: fill in {ext}.results with value and label pairs from the evidence record')
        shots = [bundled(package, s, where, '.png') for s in ui.get('screenshots', [])]
        alts = listing.get('screenshotAlt', [])
        require(shots, f'{where}: add at least one screenshot to interface.screenshots')
        require(len(alts) == len(shots) and all(map(text, alts)), f'{where}: fill in {ext}.screenshotAlt with one description per screenshot')
        cover = bundled(package, listing['cover'], where, '.png') if 'cover' in listing else shots[0]  # card image
        require('team' not in listing or (listing['team'] and all(map(text, listing['team']))), f'{where}: fill in {ext}.team with each builder’s name')
        team = listing.get('team') or [ui['developerName']]  # who built it, named on the listing page but not the card
        skills = sorted((package / 'skills').glob('*/SKILL.md'))
        require(skills, f'{where}: no skills/*/SKILL.md')
        for skill in skills:
            require(re.match(r'---\nname: .+\ndescription: .+\n---', skill.read_text(encoding='utf-8')),
                    f'{os.path.relpath(skill)}: start with front matter: a --- line, a name: line, a description: line, and another --- line')
        evidence = root / 'evidence' / name  # listing material that installs should not download
        for folder in (package, evidence):
            if folder.is_dir():
                check_links(folder)
                require(not any(p.is_symlink() for p in folder.rglob('*')), f'{os.path.relpath(folder)}: symlinks are not allowed')
        require((package / 'README.md').is_file(), f'plugins/{name}: add a README.md')
        for doc in (package / 'README.md', evidence / 'EVIDENCE.md'):
            require(not doc.is_file() or 'TODO:' not in doc.read_text(encoding='utf-8'), f'{os.path.relpath(doc)}: replace every TODO')  # the templates' placeholder
        plugins.append({'name': name, 'manifest': manifest, 'ui': ui, 'listing': listing, 'shots': shots, 'cover': cover, 'team': team,
                        'example': evidence / 'example.html', 'record': evidence / 'EVIDENCE.md'})
    require(plugins, 'No plugins/*/plugin.json found')
    rank = {name: i for i, name in enumerate(config['featured'])}
    require(rank.keys() <= {p['name'] for p in plugins}, 'site/config.json: featured lists a plugin that does not exist')
    return sorted(plugins, key=lambda p: (rank.get(p['name'], len(rank)), p['name']))  # featured first, in config order


def catalogs(config, plugins):
    """Host-specific files derived from the portable manifests: Codex/ChatGPT and Claude each read their own."""
    files = {
        '.agents/plugins/marketplace.json': {
            'name': config['marketplace'],
            'interface': {'displayName': config['name']},
            'plugins': [{'name': p['name'], 'source': {'source': 'local', 'path': f"./plugins/{p['name']}"},
                         'policy': {'installation': 'AVAILABLE', 'authentication': 'ON_INSTALL'},
                         'category': p['ui']['category']} for p in plugins]},
        '.claude-plugin/marketplace.json': {
            'name': config['marketplace'], 'owner': config['owner'], 'metadata': {'description': config['description']},
            'plugins': [{'name': p['name'], 'source': f"./plugins/{p['name']}", 'description': p['ui']['shortDescription'],
                         'category': p['ui']['category']} for p in plugins]},
    }
    for p in plugins:
        m = p['manifest']
        files[f"plugins/{p['name']}/.claude-plugin/plugin.json"] = {
            k: m[k] for k in ('name', 'version', 'description', 'author', 'homepage', 'repository', 'license', 'keywords') if k in m}
    return {path: json.dumps(value, indent=2, ensure_ascii=False) + '\n' for path, value in files.items()}


def png_size(path):
    head = path.read_bytes()[:24]
    require(head[:8] == b'\x89PNG\r\n\x1a\n', f'{path}: not a PNG')
    return struct.unpack('>II', head[16:24])


def image(path, src, alt=''):
    width, height = png_size(path)
    version = hashlib.sha256(path.read_bytes()).hexdigest()[:8]  # replaced screenshots bypass browser caches
    return f'<img src="{src}?v={version}" alt="{escape(alt)}" width="{width}" height="{height}">'


def framed(path, src, alt):
    """A screenshot in a phone (portrait) or browser window (landscape) frame; --r sizes frames in a row to one height."""
    width, height = png_size(path)
    kind, chrome = ('phone', '') if height > width else ('window', WINDOW_BAR)
    return f'<div class="{kind}" style="--r: {width / height:.3f}">{chrome}{image(path, src, alt)}</div>'


def command(lines, label, kind='Terminal'):
    # Each word is unbreakable unless it alone is wider than the block, so lines wrap between words, not at hyphens.
    code = '\n'.join('<span>' + ' '.join(f'<span>{escape(word)}</span>' for word in line.split(' ')) + '</span>' for line in lines)
    return (f'<div class="command"><div class="command-bar"><span>{kind}</span>'
            f'<button type="button" data-copy hidden aria-label="Copy {label}">Copy</button></div><pre><code>{code}</code></pre></div>')


def load_clients(root):
    """Apps that load the plugin format, from site/clients.json, with each logo's aspect ratio for layout."""
    clients = read_json(root / 'site/clients.json')
    for client in clients:
        svg = root / 'site/assets/logos' / client['logo']
        require(svg.is_file(), f"site/clients.json: missing logo {client['logo']}")
        box = re.search(r'viewBox="([^"]+)"', svg.read_text(encoding='utf-8'))
        require(box, f'{svg}: SVG needs a viewBox')
        width, height = map(float, box[1].split()[2:])
        client |= {'slug': re.sub(r'[^a-z0-9]+', '-', client['name'].lower()).strip('-'), 'ratio': width / height}
    return clients


def logo(client, base, height, alt=''):
    return (f'<img src="{base}assets/logos/{client["logo"]}" alt="{escape(alt)}" '
            f'width="{round(height * client["ratio"])}" height="{height}">')


def mark(client, base, height):
    """An app's logo stands in for its name; icon-only logos get the name beside them."""
    if client.get('icon'):
        return f'<span class="mark">{logo(client, base, height)}<span>{escape(client["name"])}</span></span>'
    return logo(client, base, height, client['name'])


def hosts(clients, config, base, plugin, heading='h3', guide=False):
    """Install panels. Lines that need a plugin name are dropped where no plugin is chosen."""
    def fill(text, client):
        return text.format(repo=config['repo'], marketplace=config['marketplace'], plugin=plugin or '', name=client['name'])

    panels = []
    for client in clients:
        tested = f'<p class="tested">{escape(client["tested"])}</p>' if client.get('tested') else ''
        parts = [f'<div class="host-head"><{heading} id="{client["slug"]}" class="host-name">{mark(client, base, 28)}</{heading}>{tested}</div>']
        for step in client['steps']:
            parts.append(f'<p>{fill(step["text"], client)}</p>')  # site-authored copy may contain <b>
            lines = [fill(line, client) for line in step.get('code', []) if plugin or '{plugin}' not in line]
            if lines:
                kind = step.get('kind', 'Terminal')
                parts.append(command(lines, f"the {escape(client['name'])} {'commands' if kind == 'Terminal' else kind}", kind))
        if guide:
            parts.append(f'<a class="text-link" href="{client["guide"]}" aria-label="{escape(client["name"])} setup guide">Setup guide</a>')
        panels.append('<div class="host">\n          ' + '\n          '.join(parts) + '\n        </div>')
    return '<div class="hosts">\n        ' + '\n        '.join(panels) + '\n      </div>'


def results(items):
    return '<dl class="results">' + ''.join(
        f'<div><dt>{escape(r["label"])}</dt><dd>{escape(r["value"])}</dd></div>' for r in items) + '</dl>'


def card(plugin, base, attrs=''):
    ui, listing, href, cover = plugin['ui'], plugin['listing'], f"{base}plugins/{plugin['name']}/", plugin['cover']
    return f'''<article class="card"{attrs}>
          <a class="card-shot" href="{href}" tabindex="-1" aria-hidden="true">{image(cover, href + cover.name)}</a>
          <div class="card-body">
            <p class="label">{escape(listing['label'])}</p>
            <h3><a href="{href}">{escape(ui['displayName'])}</a></h3>
            <p class="summary">{escape(ui['shortDescription'])}</p>
            {results(listing['results'][:2])}
            <p class="meta">{escape(ui['category'])}</p>
            <p class="card-actions"><a class="button small" href="{href}#install">Install</a><a class="text-link" href="{href}">View listing</a></p>
          </div>
        </article>'''


def demo(plugin, base):
    """Hero illustration: the listing's example request beside a real screenshot of the plugin's output."""
    ui, href, shot = plugin['ui'], f"{base}plugins/{plugin['name']}/", plugin['shots'][0]
    # In conversation people name the plugin, not its package id: "Use the duke designer plugin to ..."
    prompt = ui['defaultPrompt'][0].replace(f"Use {plugin['name']} to", f"Use the {plugin['name'].replace('-', ' ')} plugin to", 1)
    return f'''<figure class="demo">
          <div class="window">
            {WINDOW_BAR}
            <div class="demo-body">
              <p class="bubble">{escape(prompt)}</p>
              <div class="reply"><p class="label">{escape(ui['displayName'])}</p>{image(shot, href + shot.name, plugin['listing']['screenshotAlt'][0])}</div>
            </div>
          </div>
          <figcaption>Illustration with real output from <a href="{href}">{escape(ui['displayName'])}</a>.</figcaption>
        </figure>'''


def listing_page(plugin, config, base, clients):
    ui, listing, m = plugin['ui'], plugin['listing'], plugin['manifest']
    href, tree = f"{base}plugins/{plugin['name']}/", f"https://github.com/{config['repo']}/tree/main/plugins/{plugin['name']}"
    shots = ''.join(framed(s, href + s.name, alt) for s, alt in zip(plugin['shots'], listing['screenshotAlt']))
    example = f' <a href="{href}example.html">Open the full page</a>.' if plugin['example'].is_file() else ''
    record = f"https://github.com/{config['repo']}/blob/main/evidence/{plugin['name']}/EVIDENCE.md"
    evidence = f'<p><a class="text-link" href="{record}">Read the full review record</a></p>' if plugin['record'].is_file() else ''
    return {
        'base': base, 'display': escape(ui['displayName']), 'label': escape(listing['label']),
        'short': escape(ui['shortDescription']), 'long': escape(ui['longDescription']), 'category': escape(ui['category']),
        'team': ''.join(f'<li>{escape(person)}</li>' for person in plugin['team']), 'version': escape(m['version']), 'source': tree,
        'readme': f"https://github.com/{config['repo']}/blob/main/plugins/{plugin['name']}/README.md",
        'shots': shots, 'example': example, 'evidence': evidence, 'audience': escape(listing['audience']), 'limits': escape(listing['limits']),
        'method': escape(listing['method']), 'results': results(listing['results']),
        'install': hosts([c for c in clients if c.get('primary')], config, base, plugin['name']),
        'prompts': ''.join(f'<blockquote class="prompt"><p>{escape(p)}</p></blockquote>' for p in ui['defaultPrompt']),
    }


class Page(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.ids, self.urls = [], []
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        self.ids += [attrs['id']] if 'id' in attrs else []
        self.urls += [attrs[k] for k in ('href', 'src') if k in attrs]


def validate(dist, base, files):
    """Every local link, asset and anchor in the generated pages must resolve under the project base path."""
    pages = {f: Page(f.read_text(encoding='utf-8')) for f in files if f.suffix == '.html'}
    for file in files:
        page = pages.get(file)
        urls = page.urls if page else re.findall(r'url\([\'"]?([^)\'"]+)', file.read_text(encoding='utf-8'))
        require(not page or len(page.ids) == len(set(page.ids)), f'{file}: duplicate id')
        for value in urls:
            url = urlsplit(value)
            if url.scheme or url.netloc:
                require(url.scheme == 'https', f'{file}: non-HTTPS link {value}')
                continue
            if url.path.startswith('/'):
                require(url.path.startswith(base), f'{file}: {value} is outside {base}')
                target = dist / unquote(url.path[len(base):])
            else:
                target = file.parent / unquote(url.path) if url.path else file
            target = target / 'index.html' if target.is_dir() else target
            require(inside(target, dist) and target.exists(), f'{file}: broken link {value}')
            if url.fragment:
                require(target in pages and unquote(url.fragment) in pages[target].ids, f'{file}: broken anchor {value}')


def build(root=ROOT, base=None):
    root = root.resolve()
    config = read_json(root / 'site/config.json')
    base = base or urlsplit(config['url']).path
    require(re.fullmatch(r'/(?:[\w.-]+/)*', base), 'Base must be an absolute directory path')
    plugins = load(root, config)
    clients = load_clients(root)
    for path, content in catalogs(config, plugins).items():
        (root / path).parent.mkdir(parents=True, exist_ok=True)
        (root / path).write_text(content, encoding='utf-8')

    dist = root / 'dist'
    shutil.rmtree(dist, ignore_errors=True)
    shutil.copytree(root / 'site/assets', dist / 'assets')
    for name in ('style.css', 'main.js'):
        shutil.copy2(root / 'site' / name, dist / name)
    layout, home, detail, setup, directory, about = (Template((root / f'site/{name}.html').read_text(encoding='utf-8'))
                                                     for name in ('layout', 'home', 'plugin', 'install', 'plugins', 'about'))
    # Content hashes bust browser caches (GitHub Pages serves max-age=600) whenever the CSS or JavaScript changes.
    versions = {k: hashlib.sha256((root / f'site/{name}').read_bytes()).hexdigest()[:8] for k, name in (('css', 'style.css'), ('js', 'main.js'))}
    shared = {k: escape(config[k]) for k in ('name', 'repo', 'tagline')} | {'base': base, 'summary': escape(config['description'])} | versions
    shared['featured'] = ''.join(f'<a href="{base}plugins/{p["name"]}/">{escape(p["ui"]["displayName"])}</a>'
                                 for p in plugins if p['name'] in config['featured'])

    def write(path, title, description, content, url, image=''):
        """Render a page; the header marks the section the page belongs to (page itself, or a listing inside it)."""
        parts = path.relative_to(dist).parts
        nav = ''.join(f'<a href="{base}{key}/"' + (f' aria-current="{"page" if len(parts) == 2 else "true"}"' if parts[0] == key else '')
                      + f'>{label}</a>' for key, label in NAV)
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(layout.substitute(shared, title=escape(title), description=escape(description), content=content, url=url, nav=nav,
                                          image=f'\n  <meta property="og:image" content="{image}">' if image else ''), encoding='utf-8')
        return path

    featured = [c for c in clients if c.get('featured')]
    strip = ''.join(f'<li>{logo(c, base, 24, c["name"])}</li>' for c in featured)
    pages = [write(dist / 'index.html', f"{config['name']} · {config['tagline']}", config['description'],
                   home.substitute(shared, cards='\n        '.join(card(p, base) for p in plugins if p['name'] in config['featured']),
                                   logos=strip, demo=demo(plugins[0], base),
                                   more=len(clients) - len(featured), apps=len(clients)),
                   config['url'])]
    example = plugins[0]
    pages.append(write(dist / 'install/index.html', f"Install · {config['name']}", f"Install the {config['name']} plugins in your AI agent.",
                       setup.substitute(shared, example=escape(example['ui']['displayName']), count=len(clients),
                                        picker=''.join(f'<li><a href="#{c["slug"]}">{mark(c, base, 24)}</a></li>' for c in clients),
                                        catalog=hosts([c for c in clients if not c.get('folder')], config, base, example['name'], guide=True),
                                        folder=command([f"https://github.com/{config['repo']}/tree/main/plugins/{example['name']}"], 'the plugin folder', 'Plugin folder'),
                                        folder_apps=''.join(
                                            f'<li id="{c["slug"]}">{mark(c, base, 28)}<a class="text-link" href="{c["guide"]}" '
                                            f'aria-label="{escape(c["name"])} setup guide">Setup guide</a></li>' for c in clients if c.get('folder'))),
                       config['url'] + 'install/'))
    for plugin in plugins:
        folder = dist / 'plugins' / plugin['name']
        folder.mkdir(parents=True)
        for shot in {*plugin['shots'], plugin['cover']}:
            shutil.copy2(shot, folder / shot.name)
        if plugin['example'].is_file():
            shutil.copy2(plugin['example'], folder / 'example.html')
            pages.append(folder / 'example.html')
        ui, url = plugin['ui'], plugin['manifest']['homepage']
        pages.append(write(folder / 'index.html', f"{ui['displayName']} · {config['name']}", ui['shortDescription'],
                           detail.substitute(listing_page(plugin, config, base, clients)), url, url + plugin['shots'][0].name))
    pages.append(write(dist / 'about/index.html', f"About · {config['name']}",
                       f"{config['name']} is an MBA course where students turn their expertise into tested plugins for AI agents.",
                       about.substitute(shared), config['url'] + 'about/'))
    categories = sorted({p['ui']['category'] for p in plugins})
    chips = [('', 'All', len(plugins))] + [(c, c, sum(p['ui']['category'] == c for p in plugins)) for c in categories]
    def searchable(p):
        ui, listing, m = p['ui'], p['listing'], p['manifest']
        words = [ui[k] for k in ('displayName', 'shortDescription', 'longDescription', 'category', 'developerName')] + p['team']
        return escape(' '.join(words + [listing['label'], listing['audience'], p['name']] + m.get('keywords', [])).lower())
    pages.append(write(dist / 'plugins/index.html', f"Plugins · {config['name']}", config['description'], directory.substitute(
        shared, apps=len(clients), count=f"{len(plugins)} plugin{'s' * (len(plugins) != 1)}",
        chips=''.join(f'<button type="button" data-category="{escape(c)}" aria-pressed="{str(not c).lower()}">{escape(label)} <span>{n}</span></button>'
                      for c, label, n in chips),
        cards='\n        '.join(card(p, base, f' data-category="{escape(p["ui"]["category"])}" data-search="{searchable(p)}"') for p in plugins)),
        config['url'] + 'plugins/'))
    validate(dist, base, pages + [dist / 'style.css'])
    print(f'Built {len(plugins)} listing(s) and catalogs for Claude and Codex/ChatGPT.')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--base', help='project path, for example /decision-999/ (defaults to the path of site/config.json url)')
    try:
        build(base=parser.parse_args().base)
    except ValueError as error:
        raise SystemExit(f'Build stopped. {error}')
