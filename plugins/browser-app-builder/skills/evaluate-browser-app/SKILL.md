---
name: evaluate-browser-app
description: Work with a student to test browser-app calculations, assumptions, and behavior against independent expected results, recording reproducible evidence tied to source history.
---

# Evaluate the application

Read the [shared workflow](../../references/workflow.md), plan, source, setup, and earlier evaluation. Ask the student where the model might mislead its user. Distinguish a correctly coded formula from a defensible domain model.

## Establish expected behavior

Derive expected answers before observing the app: hand calculations, independently supplied examples, or a separately justified reference calculation. Record the derivation. Never bless the application's current outputs as expected fixtures.

Build cases appropriate to the model: normal inputs, zero/negative boundaries, missing or malformed imports, unit/rounding mistakes, large realistic inputs, and mathematical relationships that must hold. For random simulations, test fixed seeds, cases without randomness, and statistical checks with tolerances justified before the run. Reproducibility alone is not accuracy.

Create `tests/index.html` and test modules under `tests/` using plain browser JavaScript. Import the app's real model functions. Show each result and a summary visibly; show a loading/error state until completion so module failures cannot look like success. No test framework is required. Plain apps use the existing root preview; managed apps use `npm run test:browser` and `/tests/`, importing the same application modules. Follow [managed build](../../references/managed-build.md): verify dependencies, reinstall with `npm ci`, regenerate notices, and checkpoint before final testing. Then run `npm run build` and inspect `npm run preview` separately. A passing development test page does not establish production packaging.

## Bind results to source

Follow [evaluation freshness](../../references/evaluation-freshness.md), including its comparison of the current and evaluated plans. Inspect and commit the agreed plan, source, and tests before the final run. If history is not ready, resolve Setup first; exploratory checks may proceed but are not a publishable evaluation.

Run cases through the browser and verify the results, then inspect the interface with the student: meaningful scenarios, invalid inputs, units, keyboard use, narrow layout, and actual import/export behavior. Record method/tool versions, inputs, expected/observed values, pass/fail, and limitations. Do not silently substitute source review for rendered or numerical checks.

Save each round in `EVALUATION.md`, including the tested commit and relevant paths. Keep failed rounds. Refer coding defects to [Build](../build-browser-app/SKILL.md) and model changes to [Plan](../plan-browser-app/SKILL.md). Rerun affected checks after changes and establish the new checkpoint. Only call the final round passing when required checks ran and relevant source remains clean.

Before handoff, have the student review assumptions and unresolved limitations. Do not claim the business model is certified. [Deploy](../deploy-browser-app/SKILL.md) must recheck freshness and will require a final round after adding its workflow or public source link.

For selected libraries test their skill-specific cases and relevant combinations: hidden chart resize, slide shortcuts versus input controls, text-safe imports, view teardown, reduced motion, keyboard alternatives, and same-origin assets. Record observed requests and console errors where tools permit, and state observation limits. Numerical correctness and presentation quality are separate claims.

Test navigation away and browser Back with changed inputs and view selectors, including controls outside forms. Compare the restored controls with displayed results **before** Run, Apply, or another interaction. Browsers can restore native controls while application state starts fresh. Accept consistent restoration, a consistent reset, or a clearly marked pending state; a successful rerun alone does not establish that returning visitors saw an honest result.
