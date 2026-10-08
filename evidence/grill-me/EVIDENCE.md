# Grill Me evidence

Version 0.1.0, checked October 8, 2026 on macOS. The repository owner supplied the skill body; only front matter and a heading were added. The original is Matt Pocock's [grilling skill](https://github.com/mattpocock/skills/blob/main/skills/productivity/grilling/SKILL.md). The package includes its MIT license and credits the original author separately from the plugin packager.

## Task and baseline

Interview a user about a plan through rounds of independent decisions, defer dependent questions, and wait for confirmation before acting. No baseline time, cost, or error rate was measured.

## Checks and results

| Check | Result |
| --- | --- |
| Build and boundary checks | `python3 scripts/build.py` and `python3 scripts/check.py` passed with three listings and current generated catalogs. |
| Claude validation | `claude plugin validate .` and `claude plugin validate plugins/grill-me` passed. |
| Installation with empty settings | **2 of 2**: Claude Code 2.1.86 and Codex CLI 0.145.0 installed and enabled version 0.1.0. Each cached skill matched the packaged file byte for byte. See [installation transcript](install-test.txt). |
| Interview behavior | **Not verified**: three attempted cases all stopped with HTTP 401, “OAuth access token is invalid,” before an answer was produced. No model usage was reported. These are blocked runs, not behavioral passes or failures. |

The listing's result pairs come from the installation and interview rows. It makes no claim of measured interview quality.

## Reproduce

From the repository root, run the four build/validation commands above. Then run `python3 evidence/grill-me/check_installs.py`; it creates temporary empty app settings, installs from the local working tree, compares cached skill files, writes the transcript, and removes the temporary folders. Personal app settings are not changed.

After signing in to Claude Code, run `python3 evidence/grill-me/run_cases.py`. It loads the local plugin in an empty working directory and runs [frontier](cases/frontier.txt), [branch](cases/branch.txt), and [confirmation](cases/confirmation.txt) using the [rubric fixed before the runs](cases/RUBRIC.md). Review every answer manually against all conditions. The runner records responses; it does not score them. Preserve the blocked records before rerunning: [frontier](frontier-run.json), [branch](branch-run.json), [confirmation](confirmation-run.json).

## Limits and remaining review

The generated listing was visually inspected in the in-app browser at measured widths of 1439 and 727 CSS pixels with no horizontal overflow. Directory search for “grill” returned one plugin, and keyboard activation opened its listing. The Claude copy button produced the correct two-line command; keyboard activation of the Codex copy button did the same. The browser's zoom and minimum viewport prevented a true phone-width check; 390px rendering remains unverified. No site templates, styles, or interaction code changed.

The behavior cases are isolated synthetic conversation states, not one continuous interview. The runner permits skill loading only, so it cannot establish environmental fact-finding or sub-agent behavior. A tool-enabled multi-round session, misleading inputs, repeat-run consistency, cross-app behavior, and thorough MBA student review remain unverified. Time savings and cost were not measured. The example is published at the repository owner's request with these limitations visible.

The skill's requirement to finish every branch is an instruction, not a guarantee of completeness. Apps without relevant environment access and sub-agents cannot execute the full workflow as written.
