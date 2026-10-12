---
name: plan-browser-app
description: Interview a student and save an agreed, testable plan for a self-contained browser app. Use before building or when app scope or its calculation model changes.
---

# Plan a browser app

Read the [shared workflow](../../references/workflow.md), then the project files and any supplied public/synthetic examples. Planning can proceed before Git or preview setup.

Interview for the judgment behind the app: who uses it, what decision or task it improves, what inputs they have, what output helps them, and what a plausible but wrong result looks like. Ask focused questions until consequential choices are settled. Keep technical decisions with the agent and domain decisions with the student.

Consult [library selection](../../references/library-selection.md), select the smallest justified approved set, and read those skills. Record IDs, reasons, build mode and limitations in PLAN.md. An interactive analytical presentation suggests reveal.js, while “live” external data still exceeds scope. Use no library for a simple native form.

Narrow the first version to one useful task. A dashboard can filter bundled data or a locally selected file; a simulation can vary assumptions in the browser. When a request needs accounts, live APIs, cloud storage, or secrets, explain why it exceeds this pilot and propose a self-contained alternative. Do not silently add services or promise unsupported capabilities.

Preserve the opening brief before narrowing it. For each consequential requested capability, record the planned behavior and a check, or an explicit student-approved deferral with its reason. A new title or smaller example must not silently change the audience, decision scale or lesson. Ask about real tradeoffs; do not steer the student into dropping difficult requirements merely to finish. Consult the relevant [decision-model guidance](../../references/decision-models.md) after choosing recipes.

Choose an initial state and a representative task with an observable expected outcome. For a teaching or decision-support app, also record the intended lesson or decision and a meaningful counterfactual. Do not impose a learning objective on an unrelated application. Synthetic data should include plausible variation and counterexamples; keep tiny hand-check fixtures separate from a substantial default dataset. Do not engineer every row to expose the same answer. For uncertainty or capacity limits, test a case where the constraint actually matters.

Write `PLAN.md` with:

- Intended user, problem, input/output, and smallest useful version.
- Opening brief and coverage of its consequential requests, including explicitly agreed deferrals; representative tasks and, where applicable, learning objective and default/counterfactual decision cases.
- Included behavior and explicit exclusions; data origin and rights.
- Expected task outcomes; for calculations, model/formulas in plain language, units, assumptions, rounding, and invalid-input behavior.
- For calculations, independently derived example answers and their derivation/source. For a stochastic model, define seed behavior, deterministic limits, and suitable accuracy tolerances.
- Main interactions, empty/error states, and desktop/narrow/keyboard acceptance.
- Whether edits update results immediately or require an atomic Apply/Run step. Prefer immediate updates for cheap calculations; explain pending changes when submission is necessary.
- Agreed decisions, remaining questions, and student corrections.

Before saving a worked example, calculate it from the stated inputs and reconcile each displayed subtotal, average and difference. Check the explanatory prose against the calculation output as well as the final total; a copied number can contradict an otherwise correct model.

For example, price 20, unit cost 12, quantity 100, and fixed cost 500 yield profit `(20 − 12) × 100 − 500 = 300`. Continuous break-even is `500 / 8 = 62.5`, or 63 whole units. Ask how zero contribution margin should be explained. These are examples of checkable cases, not required features in unrelated apps.

Use the bundled designer's shared Duke visual direction as the default, without institutional endorsement or remote assets. Do not turn planning into a pixel specification; capture visual preferences that affect the student's task.

Show the plan in plain language and incorporate the student's agreement or corrections. Mark unresolved material choices rather than guessing agreement. Record important choices in `DECISIONS.md`. Hand off to [Build](../build-browser-app/SKILL.md) with the saved artifact; the next chat must not need this conversation.
