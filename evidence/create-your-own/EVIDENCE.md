# Create Your Own evidence

Version 0.1.0 was checked October 6, 2026 on macOS using Python 3.14.3, Claude Code 2.1.86 and Codex CLI 0.145.0. Packaging and installation were tested without model calls.

The listing records two successful installs in empty app settings, six rejected setup mistakes, and thirteen unfinished listing items identified by the build as a synthetic sample was completed. See the [original evidence and reproduction instructions](https://github.com/jordanmeyer/decision-999/blob/bb8a885e1ab306a803588e5e15683de27e131fae/evidence/create-your-own/EVIDENCE.md) for commands, transcripts, failures and later 0.1.1–0.1.3 changes. These results are historical packaging checks, not a measure of generated skill quality.

Current `python3 scripts/check.py` exercises packaging a sample plugin, refusing unfinished listing text, and including completed listings in the catalogs. Run `python3 scripts/build.py` and `claude plugin validate .` for repository integration. The packaging script and templates remain in the installed plugin.

Actual skill loading in the documented personal-skill-folder route, non-CLI hosts, cross-platform behavior and student usability were not established by the historical checks. The course team curates listings; scaffolding does not certify a student's plugin.
