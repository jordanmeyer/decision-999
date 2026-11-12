---
name: plan
description: Build with AI week 2. Turn one idea into a signed plan the whole team can build from.
---

# Plan

Read [the conversation rules](../../references/conversation.md) and [what fits](../../references/scope.md). Ask: "Which idea are you planning, and what should the app be called?"

## Ask

1. Who exactly uses this, and at what moment in their work?
2. What do they do today instead, and what does that cost them?
3. What will they do differently after using it?
4. What goes in and what comes out, and where does the data come from?
5. Give one realistic input and the answer you would expect, worked by hand.
6. What would a plausible but wrong result look like, and how would the user notice?
7. What is deliberately left out of the first version?
8. How will you know it worked, in terms someone could observe?

## Run

1. Run `course new <name>`, with the app's name in lowercase words joined by hyphens.
2. Write `process/plan.md` with each question above as a `##` heading, word for word without its number, and the student's answer beneath it.
3. Read the plan back with a one-line tagline drawn from the answer to question 3, and ask: "Does this say what you mean? Say 'approved', or tell me what to change."
4. Add a `## Technical notes` section for the building agent: screens, calculations and libraries. End the file with `Approved by <student's name> on <YYYY-MM-DD>`.
5. Run `course plan-check <name>`, put the app's name and the approved tagline in `app/site.json`, and end the session.

## The student sees

"Your plan is saved and published at <address>. Your team builds from it next week: share the GitHub address <owner>/<name>."
