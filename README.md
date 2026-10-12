# Build with AI

A gallery of browser applications and the tools for creating them. The proposed course centers on building apps with Web Application Builder; the initial gallery contains maintainer-built examples, not student submissions. This repository holds the website and installable plugin catalog. The site name is configured in `site/config.json`.

[Website](https://jordanmeyer.github.io/decision-999/) · [Maintainer guide](docs/MAINTAINING.md) · [Validation](docs/VALIDATION.md)

## Install

The gallery’s applications open directly in a browser. To create an application, install [Web Application Builder](plugins/web-application-builder/README.md) in your AI agent using the collection below.

Claude on the web or desktop: **Customize › Plugins › Add › Add marketplace**, then enter `jordanmeyer/decision-999`. The catalog's plugins appear in **Discover**.

Claude Code:

```sh
claude plugin marketplace add jordanmeyer/decision-999
```

Codex (ChatGPT):

```sh
codex plugin marketplace add jordanmeyer/decision-999
```

Then install a plugin by name, for example `campus-designer@decision-999`. Each plugin's README covers its own use.

## Plugins

- [Web Application Builder](plugins/web-application-builder/README.md): plan, build, evaluate and publish a self-contained browser application.

- [Campus Designer](plugins/campus-designer/README.md): webpages, slides, and documents that follow Duke's public brand guidelines. Instructor-built example.
- [Grill Me](plugins/grill-me/README.md): interview an idea through rounds of dependent design decisions before acting. Matt Pocock's skill, packaged as an example; installation checked, interview behavior unverified.
- [Create Your Own](plugins/create-your-own/README.md): the development guide and packaging script students use to turn an SOP or `SKILL.md` into a tested plugin for this catalog. Instructor-built scaffolding.

## How it works

Each `plugins/<name>/plugin.json` is a portable [Agent Plugins](https://agent-plugins.org/specification) manifest and the only registry for installable plugins. Its `extensions.com.openai.interface` holds the listing fields OpenAI's plugin directory reads: display name, descriptions, developer, category, example prompt, and screenshots. `extensions.io.github.jordanmeyer` holds the course fields: label, audience, evidence, method, limits, and the team members named on the listing page.

`evidence/<name>/` holds what a listing cites but an install does not need: `EVIDENCE.md`, review records, and an optional self-contained `example.html`.

`scripts/build.py` validates every manifest. It writes the Codex/ChatGPT catalog (`.agents/plugins/marketplace.json`), the Claude catalog (`.claude-plugin/marketplace.json`), and each plugin's `.claude-plugin/plugin.json`, then renders the site into `dist/`: the app landing page, searchable `/apps/` gallery and `/build/` setup page, the preserved plugin home at `/plugin-platform/`, a searchable plugin directory at `/plugins/` (filtered by each listing's category), one page per plugin, the install page, and an about page presenting the plugins as the result of the course (`site/about.html`). Commit the generated catalogs; `scripts/check.py` fails when they are stale. Never edit them by hand.

`site/clients.json` lists the apps that load the plugin format, with each app's logo, install steps, and setup-guide link. It drives the preserved plugin home page's logo row, the Claude and ChatGPT install panels, and the install page (`/install/`). Logos are the vendor-supplied files from agent-plugins.org and agentskills.io.

`site/` holds the templates, styles, licensed fonts, and `config.json`, the single place for the site name, repository, marketplace name, URL, and the `featured` plugins (shown on the preserved plugin home page, in that order, and listed first everywhere else). Changing the marketplace name or repository changes every install command, so settle them before anyone installs.

The curated app registry is `site/apps.json`. Each entry supplies a name, task description, category, libraries, data qualification, live URL, GitHub repository, and local preview. The first app supplies the home page’s featured preview. `site/app-home.html`, `site/apps.html` and `site/app-build.html` use `site/app-layout.html` to retain the original multi-page design; the previous templates remain intact. No app source bundles are hosted in this repository.

## Local development

Python 3.9+ with no third-party packages:

```sh
python3 scripts/build.py
python3 scripts/check.py
python3 scripts/serve.py
```

Open [the local preview](http://localhost:8000/decision-999/). With Claude Code installed, also run `claude plugin validate .` after catalog changes.

## Deployment

GitHub Actions validates every push and pull request and deploys only `dist/` from `main` to GitHub Pages. Self-hosted EB Garamond and Open Sans keep their SIL Open Font License notices in `site/assets/`.
