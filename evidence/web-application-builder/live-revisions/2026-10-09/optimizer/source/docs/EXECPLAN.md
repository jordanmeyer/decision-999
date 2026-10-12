# Explain capacity value and whole-batch decisions

Living ExecPlan maintained under the supplied ~/.codex/PLANS.md rules.

## Purpose / Big Picture

A user can see what additional resource minutes would earn and why fractional solutions cannot simply be rounded. Default panels compare three actual extra-hour solves; the two-product preset shows feasible geometry.

## Progress

- [x] 2026-10-09: Read requirements, existing plan/source and current skills; fetch clean origin.
- [x] 2026-10-09: Implement actual capacity re-solves, new default gap, polygon and typography/provenance.
- [x] 2026-10-09: Checkpoint and final developer browser/production evaluation.
- [x] 2026-10-09: Independent root review passed; publication authorized.
- [x] 2026-10-09: Root live publication verification passed.

## Surprises & Discoveries

The revised integer optimum leaves4 oven minutes unused but still gains$46 from another hour. A positive slack does not mean all added capacity has zero value when batches are indivisible.

## Decision Log

2026-10-09: Use590 oven minutes to make integrality visible without replacing the actual bakery. Compare fixed60-minute increments as finite integer experiments; avoid unsupported shadow-price claims. Retain600 as a zero-gap alternate. Share the existing solver loader in one worker for five bounded solves.

## Outcomes & Retrospective

Implementation and developer evaluation complete; independent root review passed. Preserve earlier report rounds.

## Context and Orientation

app/model.js owns coefficients, accounting, status checks and polygon geometry; app/solver-worker.js calls HiGHS and app/solver-client.js manages cancellation/deadlines. app/app.js and index.html own interaction. tests/tests.js exercises the real worker; scripts/oracles.py independently enumerates integer decisions.

## Plan of Work

Extend the worker result with three capacity alternatives and compare only checked feasible plans. Revise the default capacity, add one-click adoption preserving previous solve, and draw two-product boundary intersections that satisfy every actual inequality. Update plans, tests and BUILD-STORY, bundle licensed fonts, then checkpoint before final tests.

## Concrete Steps

In this repository run npm ci --cache /private/tmp/bab-npm-cache, the packaged check-dependencies.mjs, python3 scripts/oracles.py, npm run build. Serve npm run test:browser -- --port9703 and npm run preview -- --port9704 (separate --port argument and value); open /tests/ and /bab-example-optimizer/. Local production QA frames can be copied from tests to dist after build for inspection only; they are not part of the deployment build.

## Validation and Acceptance

Default5/8/16 earns$941, LP bound$946. Extra60 minutes prep/oven/packing gains$0/$46/$62. Tiny integer3/2 earns$23 versus fractional$24; rounding3/3 violates capacities. All real-worker and geometry tests pass. Inspect the production WASM, keyboard edits, cancel/retry, manual/copy, Back controls versus results, local fonts and320/390/1440 frames. Record failures rather than relabeling earlier evidence.

## Idempotence and Recovery

Locked npm install and notice/build steps repeat safely. Reset restores defaults; cancel terminates the worker. Only ordinary commits and authorized pushes after review; never rewrite public history.

## Artifacts and Notes

PLAN has derivations and bounds. EVALUATION binds observations to source. Course evidence stays in the assigned optimizer revision folder.

## Interfaces and Dependencies

Solver result adds expansions, an array of checked integer results or null at the input limit. feasibleRegion(scenario) returns exact two-product vertices or null for three active products. No new dependencies; local HiGHS1.15.3/Vite8.3.4 and OFL font files only.

Revision note: restores capacity exploration and geometry because the original app left those requested teaching behaviors incomplete.
