# Publish Decision 999

This living plan follows the user's `~/.codex/PLANS.md`. Keep progress, discoveries, decisions, and outcomes current.

## Purpose / Big Picture

Build an independent demonstration where visitors discover a real reusable Codex design plugin, register its marketplace, inspect installation instructions, and learn how to contribute. Publish the source at `jordanmeyer/decision-999` and the generated static website through GitHub Pages. The website must contain no institutional names or logos; the plugin preserves its original identity and guidance.

## Progress

- [x] (2026-10-06) Inspected empty working directory, CLI 0.145.0, original skill and all medium references; recorded source hashes outside the project.
- [x] (2026-10-06) Copied the complete 16-file skill, including reference illustrations and CSS tokens.
- [ ] Package and locally install the plugin using isolated configuration.
- [ ] Implement static website, catalog join, focused validators, documentation, and Actions deployment.
- [ ] Check desktop/mobile rendering, keyboard/copy behavior, neutral output, and clean-checkout build.
- [ ] Create public repository, push main, enable Pages, and verify deployment for the pushed commit.
- [ ] Independently review requirements and test published installation in a fresh external directory.

## Surprises & Discoveries

The source is a guidance-only skill: no scripts, font files, host-specific helpers, or required dependencies outside its own directory. Its relative reference links already work. GitHub CLI is absent, the connector authenticates as jordanmeyer but lacks repository creation/Pages management, and the in-app browser needs sign-in. SSH authentication to GitHub succeeds as jordanmeyer. The target repository returned 404 from the authenticated connector; confirm absence in the signed-in UI before creating it.

## Decision Log

- Decision: Use Python's standard library for the build and plain HTML/CSS/JavaScript for the site. Rationale: no dependency installation or framework is needed for one catalog and one copy control. Date: 2026-10-06.
- Decision: Keep the complete original guidance, adding only installed-resource/output location instructions. Rationale: preserve supported media and provenance while making portability explicit. Date: 2026-10-06.
- Decision: Use the original navy and warm neutral palette with EB Garamond/Open Sans. Rationale: follow the copied skill's actual system, using licensed fonts with retained notices. Date: 2026-10-06.
- Decision: Use browser repository/Pages settings and existing SSH for publication if CLI authentication is unavailable. Rationale: reuse existing account access without new credentials. Date: 2026-10-06.

## Outcomes & Retrospective

Discovery complete. Publication and executable smoke-test evidence remain pending. No changes have been made to the sibling source.

## Context and Orientation

The project root is `/Users/jordan/Projects/decision-999`. The source lives next door at `../duke-designer/.agents/skills/duke-designer`. The copied canonical skill is `plugins/duke-designer/skills/duke-designer/SKILL.md`. Its references explain color, typography, hierarchy, responsive layout, accessibility, and several artifact formats. The deployment artifact means the generated `dist/` directory uploaded to Pages; it must exclude plugin files and machine metadata.

The catalog at `.agents/plugins/marketplace.json` is the sole registry of packages. Each `source.path` resolves from the repository root. Each root `plugin.json` supplies its real version. `site/presentation.json` maps machine names to explicitly approved public fields; the build must reject missing entries rather than display raw metadata.

## Plan of Work

### Milestone 1: A portable, installable package

Add root `plugin.json` and the catalog. Add a portability paragraph to the copied skill telling agents to resolve references against its installed directory and write output into the user's project. Document prerequisites, provenance, actual skill invocation and installation commands in `plugins/duke-designer/README.md`. Register and install locally using a fresh temporary Codex configuration outside either source directory. Expect the installed skill and all 16 files in the cache. Use a compatibility manifest only if the installed client proves it necessary.

### Milestone 2: A real static marketplace

Create `site/index.html`, `site/style.css`, `site/main.js`, `site/presentation.json`, and neutral licensed fonts under `site/assets/`. The page contains a text title, independent-demonstration label, dynamically generated plugin cards/details, registration command, installation link to the repository's `#example-plugin` anchor, and contributor/source links. Use navy #012169, white, warm #FCF7E5, graphite #666666, readable type and a 0.5rem spacing rhythm. No logo or favicon artwork is needed.

Write `scripts/build.py` to validate catalog identities, package paths, bundled Markdown references, metadata, and presentation data; render every catalog entry; copy only website assets; then reject restricted text and broken local URLs/anchors in output. `scripts/serve.py` serves the generated directory under `/decision-999/` for realistic local checks. Add focused regression checks for missing presentation, path escape, restricted text, and adding a second valid package without page edits. Generated files are ignored by Git.

### Milestone 3: Verify and publish

Add `README.md`, `docs/CONTRIBUTING.md`, `docs/VALIDATION.md`, and `AGENTS.md`. The workflow validates pull requests and builds main, but only main can deploy. Use official checkout, configure-pages, upload-pages-artifact and deploy-pages actions; deployment requires successful build, pages write and identity-token write permissions. Push the initial main branch, enable Actions-based Pages through repository settings, then dispatch deployment. Wait for success tied to the exact commit. Verify rendered live content/assets and set the repository homepage to GitHub's actual canonical URL, preserving inherited custom domains.

### Milestone 4: Published-source proof and review

Register `jordanmeyer/decision-999` and install in a second unused temporary Codex configuration, from an external working directory. Inspect JSON marketplace and plugin listings to prove the remote Git source and installed path. Run a new session invoking `$duke-designer` to create a neutral HTML artifact, and retain sanitized evidence that it read bundled resources at the installed path. A separate reviewer checks fidelity, portability, branding and deployment. Resolve blocking findings, recheck sibling hashes and record the final commit/run/URLs.

## Concrete Steps

From the project root, run `python3 scripts/build.py`, then `python3 scripts/check.py`. Both must exit zero. Run `python3 scripts/serve.py` and open `http://localhost:8000/decision-999/`. Inspect 1440, 390 and 320 pixel widths, 200% text, tab navigation, copy success/failure, anchors and console errors.

For installation use `codex plugin marketplace add <source> --json` and `codex plugin add duke-designer@decision-999 --json`. Pass a fresh temporary `CODEX_HOME` to each command as documented by Codex; never modify the normal configuration. Inspect with `codex plugin marketplace list --json` and `codex plugin list --marketplace decision-999 --available --json`. Use existing login only for the fresh session if needed, without exposing credentials in logs or committing them.

Initialize Git in this directory with `git init -b main`, commit reviewed source, add only the intended `git@github.com:jordanmeyer/decision-999.git` origin, and push without force. Use the signed-in GitHub UI for missing creation/Pages APIs. No changes to other repositories or account settings are authorized.

## Validation and Acceptance

Accept only when Pages visibly renders the expected neutral page, assets load under the project base path, interactive behavior works, deployed text has zero case-insensitive restricted-name matches, and the published plugin installs and uses packaged resources from an unrelated working directory. A clean copy of this repository must build without the sibling. A second catalog entry with its presentation data must render automatically. Recompute the source tree hashes and compare against `/tmp/decision-999-source-hashes.json`.

## Idempotence and Recovery

Build recreates only ignored `dist/`. Test fixtures live in temporary directories. Each install test uses its own temporary home, preserving normal configuration. Inspect before creating a remote; preserve existing intended history and never force-push. After failed deployment, inspect logs, fix in ordinary commits, and dispatch again. Authentication is the only known external prerequisite; keep dependent work pending if the user has not signed in.

## Artifacts and Notes

Initial evidence: `codex-cli 0.145.0`; `ssh -T git@github.com` recognized jordanmeyer; connector returned target repository 404. Complete validation evidence belongs in `docs/VALIDATION.md`; temporary raw logs stay outside the repository.

## Interfaces and Dependencies

Use Python 3.11+ standard library and a modern browser. Site assets are local, with font licenses retained. Plugin execution needs Codex with plugin commands and the user's artifact-generation tools; guidance does not supply a renderer. No MCP service, database, payment, account system, or extra plugin is required. Git and GitHub authentication are needed only for publishing and remote installation.

Revision note (2026-10-06): Created after inspecting the brief, actual source skill, installed CLI, official packaging guidance and available publication access.
