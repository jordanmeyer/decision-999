# Decision 999

An independent demonstration of a Codex plugin marketplace: discover, install, and contribute reusable agent capabilities. This is a placeholder project, not an approved course or an institutional service.

[Website](https://jordanmeyer.github.io/decision-999/) · [Contribute a plugin](docs/CONTRIBUTING.md) · [Validation](docs/VALIDATION.md)

## Get started

With a Codex CLI that supports plugins:

```sh
codex plugin marketplace add jordanmeyer/decision-999
```

This registers the marketplace. Inspect a package and follow its separate installation instructions next.

## Example plugin

**Brand Design Example** is the website title for the real [`duke-designer` package](plugins/duke-designer/README.md). It applies one specific public brand guide to webpages, presentations, documents, and visual review. It does not promise support for arbitrary brand systems. Open its README for installation and the actual skill invocation.

## Local development

Python 3.9+ is sufficient; the build has no third-party dependencies.

```sh
python3 scripts/build.py
python3 scripts/check.py
python3 scripts/serve.py
```

Open [the local preview](http://localhost:8000/decision-999/). The build generates only `dist/`, which is ignored by Git. Self-hosted EB Garamond and Open Sans have their SIL Open Font License notices in `site/assets/`; the site needs no external font or catalog requests.

## Repository map

- `.agents/plugins/marketplace.json` is the real package catalog; paths are relative to the repository root.
- `plugins/` contains distributable packages and their complete resources.
- `site/presentation.json` supplies explicit neutral website fields for each catalog entry. Versions always come from package manifests.
- `site/` and `scripts/` contain the static page and standard-library build/validation.
- `.github/workflows/deploy.yml` validates changes and deploys only `dist/` from `main` through GitHub Actions.

The canonical design reference is the copied skill at `plugins/duke-designer/skills/duke-designer/SKILL.md`. Marketplace-specific neutral naming and no-logo rules live in `AGENTS.md`. Plugin names, brand references, and package instructions stay outside the deployed website.

## Deployment and maintenance

Pages uses **GitHub Actions**, not branch-based publishing. Push ordinary commits to `main` to validate and deploy. Pull requests validate without deploying; manual deployment also requires `main`. The first push may precede Pages enablement: enable Actions as the publishing source, then run **Validate and deploy Pages** again. The repository homepage should match the canonical address reported by Pages; preserve any inherited root-site custom domain.

To update a plugin, edit its canonical package, bump `plugin.json` version, check the public presentation, run both local checks, and test a fresh installation before pushing. Read the contributor guide for the full workflow. See [official packaging guidance](https://developers.openai.com/plugins/build/plugins) and [CLI command reference](https://learn.chatgpt.com/docs/developer-commands?surface=cli).
