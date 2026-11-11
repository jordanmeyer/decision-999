---
name: iterate
description: Build with AI weeks 4 and 5. Improve the app one change at a time from feedback.
---

# Iterate

Read [the conversation rules](../../references/conversation.md) and [the design rules](../../references/design.md). Run `course start <project>` and tell the student the live address and the open backlog items.

When the student pastes feedback, save each item as `process/backlog/<YYYY-MM-DD>-<short-title>.md`, starting with the lines `status: open`, `kind: feature` or `kind: bug`, `source: instructor`, `peer` or `team`, and `priority: high`, `medium` or `low`.

## Ask

1. What did you observe, and what did you expect?
2. Who reported it?
3. How much does it matter to the user named in the plan?
4. Which one thing will you do this session, and why before the others?
5. How will you know it worked?

## Run

1. Make the one change, add a known-answer test if a calculation changed, and show the preview.
2. Ask: "Keep this change or discard it?" To discard, run `course undo <project>`. When kept, set its backlog item to `status: done`.
3. End the session. If publishing stops because a teammate changed the same lines, combine both changes in the named files, run the session's end again, and tell the student in product terms what each teammate changed; record it under `## Changed`.

## Choosing the team's prototype

The owner of the chosen prototype runs `course clone <owner>/<name>-prototype --as <name> --own`, ends a session on `<name>` and runs `course invite <name> <usernames>`. Every teammate then runs `course clone <owner>/<name>`.

## The student sees

"The change is live at <address>." Name the next open backlog item.
