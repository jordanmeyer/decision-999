# From SOP to skill

An SOP records the steps. A useful skill also carries the judgment between them: what an experienced person notices, decides, and refuses to do. Take the structure from the SOP and the judgment from the interview.

## Size the task

One plugin, one task. “Do my job” is too broad; “screen an investment memo against our ten criteria” is the right size.

## Interview for judgment

Ask these one at a time and keep the answers in the user's words:

1. Walk me through the last time you did this. What did you look at first?
2. Where do new people get it wrong?
3. What makes you stop and escalate, or refuse?
4. What does an excellent result look like? What does a poor one that looks fine look like?
5. Which sources do you trust, and which do you always double-check?
6. What changes from case to case, and what never changes?

Then collect two or three examples of an input and its right output, using public or synthetic material. They become the skill's examples and the first test cases.

## Map the SOP onto the skill

| SOP part | Skill part |
| --- | --- |
| Purpose and scope | `description` and opening paragraph |
| Inputs, forms, systems | Inputs: what the user supplies and what to do when it's missing |
| Procedure | Steps: numbered, one action each |
| Decision rules, thresholds, exceptions | Judgment calls: explicit if-then rules; long tables go in `references/` |
| Quality standard or checklist | Check before handing back |
| Approvals and escalation | Stop and ask a person when |
| Templates and records | Output format with an example; templates go in `assets/` |
| Policies and reference data | Files in `references/`, each with its source and date |

## Write it well

- **Front matter.** `name` is lowercase words joined by hyphens, at most 64 characters, and matches the skill's folder. `description` (at most 1,024 characters) says what the skill does and when to use it, in the words people will actually ask with. Agents choose a skill from this line alone.
- **Body.** Open with the job and the standard of good work. Write steps as instructions. Give the reason behind any rule that isn't obvious; agents apply reasons more reliably than bare rules.
- **Sources.** Say where facts must come from, and tell the agent to say so when the evidence isn't there instead of guessing.
- **Examples.** One short example of good output teaches more than a paragraph of adjectives.
- **Length.** Keep `SKILL.md` under about 500 lines. Move long checklists, rule tables, and examples into `references/` and link each from the step that needs it, so the agent reads them only when relevant.
- **Scripts.** Use them only for work that must come out exactly the same every time, such as calculations, formatting, or validation. Say what each one needs and what to do when it can't run.
