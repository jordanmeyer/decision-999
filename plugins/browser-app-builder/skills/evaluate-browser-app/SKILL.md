---
name: evaluate-browser-app
description: Work with a student to test browser-app calculations, assumptions, and behavior against independent expected results, recording reproducible evidence tied to source history.
---

# Evaluate the application

Read the [shared workflow](../../references/workflow.md), plan, source, setup, and earlier evaluation. Ask the student where the model might mislead its user. Distinguish a correctly coded formula from a defensible domain model.

## Establish expected behavior

Derive expected answers before observing the app: hand calculations, independently supplied examples, or a separately justified reference calculation. Record the derivation. Never bless the application's current outputs as expected fixtures.

Build cases appropriate to the model: normal inputs, zero/negative boundaries, missing or malformed imports, unit/rounding mistakes, large realistic inputs, and mathematical relationships that must hold. For random simulations, test fixed seeds, cases without randomness, and statistical checks with tolerances justified before the run. Reproducibility alone is not accuracy.

Create `tests/index.html` and test modules under `tests/` using plain browser JavaScript. Import the app's real model functions. Show each result and a summary visibly; show a loading/error state until completion so module failures cannot look like success. No framework or runtime installation. Use a browser preview serving the project root so the tests can import `../app/`.

## Bind results to source

Follow [evaluation freshness](../../references/evaluation-freshness.md). Inspect and commit the source and tests before the final run. If history is not ready, resolve Setup first; exploratory checks may proceed but are not a publishable evaluation.

Run cases through the browser and verify the results, then inspect the interface with the student: meaningful scenarios, invalid inputs, units, keyboard use, narrow layout, and actual import/export behavior. Record method/tool versions, inputs, expected/observed values, pass/fail, and limitations. Do not silently substitute source review for rendered or numerical checks.

Save each round in `EVALUATION.md`, including the tested commit and relevant paths. Keep failed rounds. Refer coding defects to [Build](../build-browser-app/SKILL.md) and model changes to [Plan](../plan-browser-app/SKILL.md). Rerun affected checks after changes and establish the new checkpoint. Only call the final round passing when required checks ran and relevant source remains clean.

Before handoff, have the student review assumptions and unresolved limitations. Do not claim the business model is certified. [Deploy](../deploy-browser-app/SKILL.md) must recheck freshness and will require a final round after adding its workflow or public source link.
