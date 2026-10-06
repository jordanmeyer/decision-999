"""Generate the host catalogs and the static directory site from plugins/*/plugin.json."""
import argparse
import hashlib
from html import escape
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import shutil
import struct
from string import Template
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
SCHEMA = 'https://agent-plugins.org/schemas/1.0.0/plugin.schema.json'
INTERFACE = ('displayName', 'shortDescription', 'longDescription', 'developerName', 'category')
LISTING = ('label', 'audience', 'limits', 'method')


def read_json(path):
    return json.loads(path.read_text())


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
    require(value.startswith('./') and inside(path, package) and path.is_file() and path.suffix == suffix,
            f'{where}: {value} must be a {suffix} file inside the plugin')
    return path


def text(value):
    return isinstance(value, str) and value.strip()


def check_links(folder):
    """Relative Markdown links must resolve inside the folder, so it works wherever it is copied or installed."""
    for doc in folder.rglob('*.md'):
        for target in re.findall(r'\]\(([^\s)]+)\)', doc.read_text()):
            url = urlsplit(target)
            if url.scheme or not url.path:
                continue
            linked = doc.parent / unquote(url.path)
            require(inside(linked, folder) and linked.exists(), f'{doc}: link {target} is missing or leaves {folder.name}/')


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
        listing = get(manifest, 'extensions', config['extension'], where=where)
        for key in INTERFACE:
            require(text(ui.get(key)), f'{where}: interface.{key} must be text')
        for key in LISTING:
            require(text(listing.get(key)), f'{where}: {config["extension"]}.{key} must be text')
        require(ui.get('defaultPrompt') and all(map(text, ui['defaultPrompt'])), f'{where}: needs a defaultPrompt')
        require(listing.get('results') and all(set(r) == {'value', 'label'} for r in listing['results']), f'{where}: results need value and label')
        shots = [bundled(package, s, where, '.png') for s in ui.get('screenshots', [])]
        require(shots and len(shots) == len(listing.get('screenshotAlt', [])), f'{where}: each screenshot needs screenshotAlt text')
        skills = sorted((package / 'skills').glob('*/SKILL.md'))
        require(skills, f'{where}: no skills/*/SKILL.md')
        for skill in skills:
            require(re.match(r'---\nname: .+\ndescription: .+\n---', skill.read_text()), f'{skill}: missing name/description front matter')
        evidence = root / 'evidence' / name  # listing material that installs should not download
        for folder in (package, evidence):
            if folder.is_dir():
                check_links(folder)
                require(not any(p.is_symlink() for p in folder.rglob('*')), f'{folder}: symlinks are not allowed')
        plugins.append({'name': name, 'manifest': manifest, 'ui': ui, 'listing': listing, 'shots': shots,
                        'example': evidence / 'example.html', 'record': evidence / 'EVIDENCE.md'})
    require(plugins, 'No plugins/*/plugin.json found')
    return plugins


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
    return f'<img src="{src}" alt="{escape(alt)}" width="{width}" height="{height}">'


def command(lines, label, kind='Terminal'):
    code = '\n'.join(f'<span>{escape(line)}</span>' for line in lines)
    return (f'<div class="command"><div class="command-bar"><span>{kind}</span>'
            f'<button type="button" data-copy hidden aria-label="Copy {label}">Copy</button></div><pre><code>{code}</code></pre></div>')


def install(config, plugin=None):
    repo, market = config['repo'], config['marketplace']
    claude, codex = [f'claude plugin marketplace add {repo}'], [f'codex plugin marketplace add {repo}']
    if plugin:
        claude.append(f"claude plugin install {plugin['name']}@{market}")
        codex.append(f"codex plugin add {plugin['name']}@{market}")
    then = f"Then add {escape(plugin['ui']['displayName'])} from <b>Discover</b>." if plugin else 'Its plugins then appear in <b>Discover</b>.'
    return f'''<div class="hosts">
        <div class="host">
          <h3>Claude</h3>
          <p>On the web or in the desktop app, open <b>Customize › Plugins › Add › Add marketplace</b> and enter:</p>
          {command([repo], 'the repository name', 'Repository')}
          <p>{then}</p>
          <p>In Claude Code:</p>
          {command(claude, 'the Claude Code commands')}
        </div>
        <div class="host">
          <h3>ChatGPT</h3>
          <p>In the Codex CLI, OpenAI’s coding agent included with ChatGPT plans:</p>
          {command(codex, 'the Codex commands')}
        </div>
      </div>'''


def results(items):
    return '<dl class="results">' + ''.join(
        f'<div><dt>{escape(r["label"])}</dt><dd>{escape(r["value"])}</dd></div>' for r in items) + '</dl>'


def card(plugin, base):
    ui, listing, href = plugin['ui'], plugin['listing'], f"{base}plugins/{plugin['name']}/"
    return f'''<article class="card">
          <a class="card-shot" href="{href}" tabindex="-1" aria-hidden="true">{image(plugin['shots'][0], href + plugin['shots'][0].name)}</a>
          <div class="card-body">
            <p class="label">{escape(listing['label'])}</p>
            <h3><a href="{href}">{escape(ui['displayName'])}</a></h3>
            <p>{escape(ui['shortDescription'])}</p>
            {results(listing['results'][:2])}
            <p class="meta">{escape(ui['category'])} · {escape(ui['developerName'])}</p>
            <a class="text-link" href="{href}">View listing</a>
          </div>
        </article>'''


def listing_page(plugin, config, base):
    ui, listing, m = plugin['ui'], plugin['listing'], plugin['manifest']
    href, tree = f"{base}plugins/{plugin['name']}/", f"https://github.com/{config['repo']}/tree/main/plugins/{plugin['name']}"
    shots = ''.join(image(s, href + s.name, alt) for s, alt in zip(plugin['shots'], listing['screenshotAlt']))
    example = f' <a href="{href}example.html">Open the full page</a>.' if plugin['example'].is_file() else ''
    record = f"https://github.com/{config['repo']}/blob/main/evidence/{plugin['name']}/EVIDENCE.md"
    evidence = f'<p><a class="text-link" href="{record}">Read the full review record</a></p>' if plugin['record'].is_file() else ''
    return {
        'base': base, 'display': escape(ui['displayName']), 'label': escape(listing['label']),
        'short': escape(ui['shortDescription']), 'long': escape(ui['longDescription']), 'category': escape(ui['category']),
        'developer': escape(ui['developerName']), 'version': escape(m['version']), 'source': tree,
        'readme': f"https://github.com/{config['repo']}/blob/main/plugins/{plugin['name']}/README.md",
        'shots': shots, 'example': example, 'evidence': evidence, 'audience': escape(listing['audience']), 'limits': escape(listing['limits']),
        'method': escape(listing['method']), 'results': results(listing['results']), 'install': install(config, plugin),
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
    pages = {f: Page(f.read_text()) for f in files if f.suffix == '.html'}
    for file in files:
        page = pages.get(file)
        urls = page.urls if page else re.findall(r'url\([\'"]?([^)\'"]+)', file.read_text())
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
    for path, content in catalogs(config, plugins).items():
        (root / path).parent.mkdir(parents=True, exist_ok=True)
        (root / path).write_text(content)

    dist = root / 'dist'
    shutil.rmtree(dist, ignore_errors=True)
    shutil.copytree(root / 'site/assets', dist / 'assets')
    for name in ('style.css', 'main.js'):
        shutil.copy2(root / 'site' / name, dist / name)
    layout, home, detail = (Template((root / f'site/{name}.html').read_text()) for name in ('layout', 'home', 'plugin'))
    # Content hashes bust browser caches (GitHub Pages serves max-age=600) whenever the CSS or JavaScript changes.
    versions = {k: hashlib.sha256((root / f'site/{name}').read_bytes()).hexdigest()[:8] for k, name in (('css', 'style.css'), ('js', 'main.js'))}
    shared = {k: escape(config[k]) for k in ('name', 'course', 'repo')} | {'base': base} | versions

    def write(path, title, description, content, url, image=''):
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(layout.substitute(shared, title=escape(title), description=escape(description), content=content, url=url,
                                          image=f'\n  <meta property="og:image" content="{image}">' if image else ''))
        return path

    pages = [write(dist / 'index.html', f"{config['name']} · {config['tagline']}", config['description'],
                   home.substitute(shared, cards='\n        '.join(card(p, base) for p in plugins), install=install(config),
                                 compatible=''.join(f'<li>{escape(n)}</li>' for n in config['compatible'])), config['url'])]
    for plugin in plugins:
        folder = dist / 'plugins' / plugin['name']
        folder.mkdir(parents=True)
        for shot in plugin['shots']:
            shutil.copy2(shot, folder / shot.name)
        if plugin['example'].is_file():
            shutil.copy2(plugin['example'], folder / 'example.html')
            pages.append(folder / 'example.html')
        ui, url = plugin['ui'], plugin['manifest']['homepage']
        pages.append(write(folder / 'index.html', f"{ui['displayName']} · {config['name']}", ui['shortDescription'],
                           detail.substitute(listing_page(plugin, config, base)), url, url + plugin['shots'][0].name))
    validate(dist, base, pages + [dist / 'style.css'])
    print(f'Built {len(plugins)} listing(s) and catalogs for Claude and Codex/ChatGPT.')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--base', help='project path, for example /decision-999/ (defaults to the path of site/config.json url)')
    build(base=parser.parse_args().base)
