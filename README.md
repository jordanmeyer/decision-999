# Build with AI

A curated collection of plugins developed and tested by MBA students for ChatGPT and Claude. This repository holds the catalog and website. The collection is maintained by the course team; individual listings identify their authors and evidence. The course name and number are configured in `site/config.json`.

[Website](https://jordanmeyer.github.io/decision-999/) · [Maintainer guide](docs/MAINTAINING.md) · [Validation](docs/VALIDATION.md)

## Install

Claude on the web or desktop: **Customize › Plugins › Add › Add marketplace**, then enter `jordanmeyer/decision-999`. The catalog's plugins appear in **Discover**.

Claude Code:

```sh
claude plugin marketplace add jordanmeyer/decision-999
```

Codex (ChatGPT):

```sh
codex plugin marketplace add jordanmeyer/decision-999
```

Then install a plugin by name, for example `duke-designer@decision-999`. Each plugin's README covers its own use.

## Plugins

- [Duke Designer](plugins/duke-designer/README.md): webpages, slides, and documents that follow Duke's public brand guidelines. Instructor-built example.

## How it works

Each `plugins/<name>/plugin.json` is a portable [Agent Plugins](https://agent-plugins.org/specification) manifest and the only registry. Its `extensions.com.openai.interface` holds the listing fields OpenAI's plugin directory reads: display name, descriptions, developer, category, example prompt, and screenshots. `extensions.io.github.jordanmeyer` holds the course fields: label, audience, evidence, method, and limits.

`evidence/<name>/` holds what a listing cites but an install does not need: `EVIDENCE.md`, review records, and an optional self-contained `example.html`.

`scripts/build.py` validates every manifest. It writes the Codex/ChatGPT catalog (`.agents/plugins/marketplace.json`), the Claude catalog (`.claude-plugin/marketplace.json`), and each plugin's `.claude-plugin/plugin.json`, then renders the site into `dist/`. Commit the generated catalogs; `scripts/check.py` fails when they are stale. Never edit them by hand.

`site/` holds the templates, styles, licensed fonts, and `config.json`, the single place for the site name, course label, repository, marketplace name, and URL. Changing the marketplace name or repository changes every install command, so settle them before anyone installs.

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
