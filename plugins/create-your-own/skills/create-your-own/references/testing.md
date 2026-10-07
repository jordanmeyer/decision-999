# Test before listing

Every listing shows how the plugin was checked and what the checks found, so readers can judge it before installing it. Test like a skeptical reviewer, and record everything in `evidence/<name>/EVIDENCE.md`.

## Build the test set

- Write dozens of cases, each with a known right answer, or with a scoring rubric fixed before the first run.
- Include typical cases; edge cases such as missing fields, odd formats, or conflicting sources; cases where the right move is to refuse or escalate; and cases a careless agent would get confidently wrong.
- Use public or synthetic data only. Model synthetic cases on real patterns, never on real records.
- Save the cases and their answers in `evidence/<name>/cases/` so anyone can rerun them.

## Load the skill in two apps

Copy the skill's folder, `plugins/<name>/skills/<name>/`, into each app's personal skills folder, then start a new session:

- Claude Code: `~/.claude/skills/<name>/`
- Codex: `~/.codex/skills/<name>/`

Copy it again after every change, and delete both copies when testing is done. In other apps, add the skill the way that app adds skills.

## Run and score

- Run every case in both apps. Note the app, the model if it shows one, its version, and the date.
- **Accuracy:** the share of cases that match the known answer or pass the rubric.
- **Consistency:** rerun a sample several times and report how often the answers agree.
- **Time or cost:** per case, compared with the baseline, if you measured it. Say plainly when you didn't.
- Keep every failed run. Fix the skill, rerun the whole set, and record each round.

## Try to break it

Ask someone else to attack it with misleading or hostile inputs, requests outside its scope, and attempts to make it skip a check, invent a source, or reveal something it shouldn't. Record what broke and what changed.

## Record the evidence

Replace every TODO in `EVIDENCE.md`: the baseline, the test set, the results for each app, failures and fixes, limits, and the steps to reproduce. The listing's two or three results are copied from it, for example “38 of 40” with “Test cases matched the known answer in Claude Code”. Never round up, report only the best run, or claim something you didn't measure.
