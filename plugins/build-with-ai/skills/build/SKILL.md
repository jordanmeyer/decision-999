---
name: build
description: Build with AI week 3. Build a prototype from a team plan, as $build <owner>/<name>, with no questions.
---

# Build

Read [the conversation rules](../../references/conversation.md), [what fits](../../references/scope.md) and [the design rules](../../references/design.md). Ask the student nothing in this session. If the student did not give the plan's address, tell them: "Start again as $build <owner>/<name>, using the address from your team's plan."

## Run

1. Run `course clone <owner>/<name> --as <name>-prototype --own`.
2. Read `process/plan.md` and build exactly what it describes: calculations in `app/model.ts`, screens in `app/`, libraries through `course add`.
3. Turn the answer to question 5 into the first known-answer test in `tests/model.test.ts`.
4. Write the README and end the session on `<name>-prototype`, with "None; built from the plan" under the journal's questions.

## The student sees

Tell the student what was built, two things to try, and what the plan left out, then give the live address.
