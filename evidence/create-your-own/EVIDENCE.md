# Create Your Own evidence

Plugin version 0.1.0, with the 0.1.1–0.1.3 updates noted at the end. Everything here ran on October 6, 2026, on macOS with Python 3.14.3, Claude Code 2.1.86 and the Codex CLI 0.145.0. No model was run and no API was called: these checks cover packaging and installation, not the quality of skills built with the guide.

## Task and baseline

The task is packaging a skill for this directory: copying it into a plugin folder, writing a manifest with the site's thirteen required listing fields, a README with install steps and an evidence record, then passing the site's checks. No baseline time for doing this by hand was measured.

## Test set

1. Package this plugin from its own skill with the bundled script, from a `drafts/create-your-own/` folder in the repository, then run the site's build ([scaffold-run.txt](scaffold-run.txt)).
2. Six setup mistakes, run with the packaged script, each expected to stop with a message and create nothing ([setup-mistakes.txt](setup-mistakes.txt)): running outside the repository, a folder with no `SKILL.md`, a `SKILL.md` with no front matter, the skill template left unedited, a folder whose name doesn't match the skill's name, and a plugin that already exists.
3. Package a synthetic `meeting-brief` skill in a scratch copy of the repository, then complete it one item at a time, running the build after each ([build-walkthrough.txt](build-walkthrough.txt)). The text written is placeholder text; only the build's messages are under test.
4. After this plugin's listing, README and this record were written by hand: `python3 scripts/build.py`, `python3 scripts/check.py`, `claude plugin validate .` and `claude plugin validate plugins/create-your-own`.
5. Install from the working tree in Claude Code and the Codex CLI with empty settings ([install-test.txt](install-test.txt)).

## Results

| Check | Result |
| --- | --- |
| 1. Package from the skill folder | Passed. One command created the plugin folder (manifest, README and the skill's nine files) and this record; the build then stopped at the first blank listing field. |
| 2. Setup mistakes | 6 of 6 stopped with a message saying what to fix, and none created a folder. |
| 3. Build walkthrough | 13 of 13 unfinished items were named, one per run, until the build passed: seven blank listing fields, the example requests, the results, the missing screenshot file, its description, and the TODOs left in the README and evidence record. |
| 4. Site checks and validators | Passed. |
| 5. Installs in empty settings | 2 of 2. Claude Code and the Codex CLI each installed the plugin, enabled, with `skills/create-your-own/SKILL.md` in its plugin cache: version 0.1.0 on October 6, then 0.1.1 and 0.1.2 on October 7. |

The listing's results come from rows 5, 2 and 3.

## Failures and fixes

- In an earlier draft, a table cell in `packaging.md` held a bare `<name>`, which GitHub renders as an invisible HTML tag. It is now in code formatting.
- An earlier version of the script printed a 118-character instruction that wraps in an ordinary terminal; it now prints four short numbered steps.
- A review before release found that students would be hand-editing JSON, that a new plugin could not be tested in Claude Code before it was listed (`claude plugin validate` rejects a plugin folder until the build writes its Claude manifest), and that TODOs could be published. The skill now has the agent write the files while the user approves plain text; testing copies the skill into each app's personal skills folder; the build refuses a README or evidence record that still contains a TODO; and the script now applies the build's exact front-matter rule, so a skill it accepts cannot fail the build on front matter. The plugin was then packaged again from scratch, and every test above was rerun on the final files.

## Limits

- No model was run. Whether agents follow the guide well, and whether skills built with it are any good, is untested; each plugin's own tests have to establish that.
- The skills-folder testing route in `testing.md` uses the folders each app documents (`~/.claude/skills/` in Claude Code, `~/.codex/skills/` in Codex). Loading a skill from them was not exercised, because confirming it needs a model session.
- Claude's web and desktop “Add marketplace” path, ChatGPT outside the Codex CLI, and the other compatible apps were not tested.
- The script ran only on macOS with Python 3.14. It uses only the standard library and reads and writes UTF-8 explicitly, but other systems were not tested.

## Version 0.1.1

On October 7, 2026, `packaging.md` gained the listing's new optional `team` field and guidance for `developerName` on team plugins; nothing else in the package changed. The script and templates are unchanged, so the packaging, setup-mistake and walkthrough transcripts still apply. The site's build, `check.py`, both `claude plugin validate` runs, and the installs in empty settings were repeated for 0.1.1.

## Version 0.1.2

On October 7, 2026, the listing's screenshot was removed (see below), and `packaging.md` now explains that screenshots are optional. The script and templates are unchanged. The site's build, `check.py`, both `claude plugin validate` runs, and the installs in empty settings were repeated for 0.1.2 ([install-test.txt](install-test.txt)).

## Version 0.1.3

On October 7, 2026, the testing guidance changed to multiple cases and thorough review by MBA students, with no fixed case count. Testing in a second app is optional; verified support claims still require testing in that app. The packaging script and templates are unchanged. Earlier results remain evidence for the versions and checks identified above.

## Screenshot

Versions 0.1.0 and 0.1.1 showed `assets/desktop.png`, a 1440×900 rendering of `scaffold-run.txt` set in a terminal style. It was not legible at listing size, so 0.1.2 removes it; the listing has no screenshot, and its directory card shows the first example request. The transcript itself remains here.

## Reproduce

In a scratch copy of the repository, move `plugins/create-your-own/` and `evidence/create-your-own/` aside, copy `skills/create-your-own/` from the moved plugin to `drafts/create-your-own/`, and run the commands in `scaffold-run.txt` from the repository root. The other transcripts list their commands; for the installs, point `CLAUDE_CONFIG_DIR` and `CODEX_HOME` at new empty folders.
