---
name: evaluate-browser-app
description: Work with a student to test browser-app calculations, assumptions, and behavior against independent expected results, recording reproducible evidence tied to source history.
---

# Evaluate the application

Read the [shared workflow](../../references/workflow.md), plan, source, setup, and earlier evaluation. For apps with a domain model, resolve consequential uncertainty about its assumptions with the student; distinguish a correctly coded formula from a defensible model.

## Establish expected behavior

Review the original request and PLAN.md coverage before testing. Each consequential requested feature needs observed behavior or an explicit student-approved deferral. Treat silent reductions of audience, scale, resources, milestones, charts or model explanation as gaps; passing tests for a simpler product does not close them.

Evaluate the planned task from its initial state through its expected outcome. For teaching or decision-support apps, also run the planned counterfactual and explain the change using independently checked model inputs. Check a binding and nonbinding limit when relevant; distinguish a nominal arithmetic output from a feasible forecast. Use the applicable [decision-model guidance](../../references/decision-models.md). Record task/scope findings separately from numerical pass counts.

For revisions, inspect the diff and select checks by what could change: copy edits need rendered wording and wrapping checks; layout and interaction edits need affected states, transitions, viewport sizes and keyboard behavior; calculation, data or dependency changes need the affected correctness and integration checks. Retain unaffected evidence with a reason and record a new checkpoint for changed source under the freshness rules below. Do not add tests that merely repeat wording or rerun unrelated suites without a concrete concern.

Derive expected answers before observing the app: hand calculations, independently supplied examples, or a separately justified reference calculation. Record the derivation. Never bless the application's current outputs as expected fixtures.

Build cases appropriate to the model: normal inputs, zero/negative boundaries, missing or malformed imports, unit/rounding mistakes, large realistic inputs, and mathematical relationships that must hold. For random simulations, test fixed seeds, cases without randomness, and statistical checks with tolerances justified before the run. Reproducibility alone is not accuracy.

For calculation tests, create `tests/index.html` and test modules under `tests/` using plain browser JavaScript. Import the app's real model functions. Show each result and a summary visibly; show a loading/error state until completion so module failures cannot look like success. No test framework is required. Plain apps use the existing root preview; managed apps use `npm run test:browser` and `/tests/`, importing the same application modules. Follow [managed build](../../references/managed-build.md) and the freshness rules below for dependency preparation and checkpointing. Run `npm run build` and inspect `npm run preview` separately. A passing development test page does not establish production packaging.

## Bind results to source

Follow [evaluation freshness](../../references/evaluation-freshness.md), including its comparison of the current and evaluated plans. Inspect and commit the agreed plan, source, and tests before the final run. If history is not ready, resolve Setup first; exploratory checks may proceed but are not a publishable evaluation.

Run cases through the browser and verify the results, then inspect the interface with the student: meaningful scenarios, invalid inputs, units, keyboard use, narrow layout, and actual import/export behavior. Record method/tool versions, inputs, expected/observed values, pass/fail, and limitations. Do not silently substitute source review for rendered or numerical checks.

Save each round in `EVALUATION.md`, including the tested commit and relevant paths. Keep failed rounds. Refer coding defects to [Build](../build-browser-app/SKILL.md) and model changes to [Plan](../plan-browser-app/SKILL.md). Rerun affected checks after changes and establish the new checkpoint. Only call the final round passing when required checks ran and relevant source remains clean.

Review the main task at first load and after edits, checking applicable features: visible evidence, pending-state honesty, readable units/rounding, consistent dates, actual truncation, non-clipped chart labels, keyboard-usable primary table, and the chosen live/Apply pattern. Apply Campus Designer's rendered review, including local font loading, maximum-length numbers and dense targets. Check the worked-example links against the real request/plan/evidence; remove unsupported claims. Do a separate simplification pass for repeated values, redundant controls, empty panels and technical copy that obscures the task.

For visual and interaction review, record the inspected states and transitions against observable requirements, with screenshots or interaction observations where useful. Check that transient feedback does not unexpectedly shift unrelated content and that responsive components use their available space with representative content. When matching a reference, compare equivalent states. A passing test count or static screenshot alone does not establish interaction quality. Scope any review verdict to the checks actually performed; keep unavailable browser, assistive-technology and human usability checks explicit.

Before handoff, have the student review assumptions and unresolved limitations. Do not claim the business model is certified. [Deploy](../deploy-browser-app/SKILL.md) must recheck freshness and will require a final round after adding its workflow or public source link.

For selected libraries test their skill-specific cases and relevant combinations: hidden chart resize, slide shortcuts versus input controls, text-safe imports, view teardown, reduced motion, keyboard alternatives, and same-origin assets. Record observed requests and console errors where tools permit, and state observation limits. Numerical correctness and presentation quality are separate claims.

Test navigation away and browser Back with changed inputs and view selectors, including controls outside forms. Compare the restored controls with displayed results **before** Run, Apply, or another interaction. Browsers can restore native controls while application state starts fresh. Accept consistent restoration, a consistent reset, or a clearly marked pending state; a successful rerun alone does not establish that returning visitors saw an honest result.
