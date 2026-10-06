# Build with AI plugin directory

Write clear, terse code for a solo maintainer. Use the Python standard library and plain browser code; avoid frameworks, compatibility wrappers and speculative features.

Canonical design guidance: `plugins/duke-designer/skills/duke-designer/SKILL.md`. Read its identity, color, typography, web and review references before UI changes. Do not maintain a second skill copy.

The catalog is curated by the course team, with no public plugin submission flow.

The site is an employer-facing directory where MBA students point recruiters to plugins they built; the faculty committee reviewing the course proposal sees the same pages. Until the course is approved, nothing on the site may claim or imply that it is affiliated with or endorsed by Duke. Naming the `duke-designer` plugin and its use of Duke's public brand guidance is fine; institutional logos, seals, and official-sounding claims are not. The site name, course label, repository, marketplace name and URL live only in `site/config.json`.

`plugins/<name>/plugin.json` (Agent Plugins format) is the only registry and holds each listing. Keep `plugins/<name>/` to what an install needs; review records and example output belong in `evidence/<name>/`. `scripts/build.py` generates `.agents/plugins/marketplace.json`, `.claude-plugin/marketplace.json` and `plugins/<name>/.claude-plugin/plugin.json`; commit them and never edit them by hand. Listing evidence must come from runs anyone can reproduce; never invent results, students, endorsements or adoption.

Build and validate with `python3 scripts/build.py` and `python3 scripts/check.py`. Preview with `python3 scripts/serve.py`. Run `claude plugin validate .` after catalog changes. Only `dist/` is deployed. Inspect desktop/narrow output and keyboard/copy behavior after UI changes. Tests should address real boundaries, not mirror trivial implementation. Review surrounding code and make a separate simplification pass.

For significant changes maintain `docs/EXECPLAN.md` according to `~/.codex/PLANS.md`. Preserve the sibling source. Never copy credentials, caches, or generated site output into this repository. Deploy only main, using GitHub Actions and ordinary commits.
