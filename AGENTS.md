# Decision 999

Write clear, terse code for a solo maintainer. Use the Python standard library and plain browser code; avoid frameworks, compatibility wrappers and speculative features.

Canonical design guidance: `plugins/duke-designer/skills/duke-designer/SKILL.md`. Read its identity, color, typography and relevant medium references. Do not maintain a second skill copy.

Website-specific requirements override institutional presentation guidance: title Decision 999, label Independent demonstration, no logos, no case-insensitive `duke` anywhere in `dist/`, including URLs, filenames, hidden text and metadata. Present the real plugin as Brand Design Example. Keep plugin identity and references intact outside the deployment artifact. Link installation through `https://github.com/jordanmeyer/decision-999#example-plugin`.

Build and validate with `python3 scripts/build.py` and `python3 scripts/check.py`. Preview with `python3 scripts/serve.py` at `/decision-999/`. Only `dist/` is deployed. Inspect desktop/narrow output and keyboard/copy behavior after UI changes. Tests should address real boundaries, not mirror trivial implementation. Review surrounding code and make a separate simplification pass.

For significant changes maintain `docs/EXECPLAN.md` according to `~/.codex/PLANS.md`. Preserve the sibling source. Never copy credentials, caches, or generated output into this repository. Deploy only main, using GitHub Actions and ordinary commits.
