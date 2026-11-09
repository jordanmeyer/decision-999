# Grill Me evidence

Version 0.1.0 was checked October 8, 2026 on macOS. Claude Code 2.1.86 and Codex CLI 0.145.0 each installed the packaged skill in temporary empty settings, with byte-for-byte cache matches. Three synthetic interview cases stopped at authentication before producing answers. These establish packaging and installation only; interview behavior remains unverified. Version 0.1.1 added an example prompt without changing the skill.

The [original record](https://github.com/jordanmeyer/decision-999/blob/bb8a885e1ab306a803588e5e15683de27e131fae/evidence/grill-me/EVIDENCE.md) preserves installation transcripts, blocked model responses, browser observations and limitations. The original skill is Matt Pocock's, with its MIT license retained in the plugin.

## Reproduce

Run `python3 scripts/build.py`, `python3 scripts/check.py`, `claude plugin validate .` and `claude plugin validate plugins/grill-me`. With the two CLIs installed, `python3 evidence/grill-me/check_installs.py` installs in temporary empty settings and compares cached skill bytes without modifying personal settings.

Model testing requires a separate authorized, signed-in run of `python3 evidence/grill-me/run_cases.py`. It uses the retained [frontier](cases/frontier.txt), [branch](cases/branch.txt) and [confirmation](cases/confirmation.txt) cases and [rubric](cases/RUBRIC.md). Review answers manually; the runner does not score them. New transcripts go under ignored `archive/runs/grill-me/` rather than replacing the historical record.

These isolated conversation states do not verify a continuous interview, environmental fact-finding, sub-agent work, cross-app behavior, consistency or MBA student usability. Time savings and cost were not measured.
