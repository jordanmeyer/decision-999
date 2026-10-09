# Make purchase approval tradeoffs visible

This living plan follows the provided ~/.codex/PLANS.md conventions. Keep Progress, Surprises & Discoveries, Decision Log and Outcomes & Retrospective current.

## Purpose / Big Picture

Classmates can draw and change approval routes, inspect expected time from entered assumptions, and see why a shorter path does not necessarily fix capacity. Loading the90/10 example should reduce expected elapsed from471.5 to370.5min while finance remains480 productive min/day against420 capacity. The process is invented and files stay in the tab.

## Progress

- [x] (2026-10-09) Read workflow, managed-build, freshness, React Flow and Campus Designer guidance.
- [x] (2026-10-09) Ask actual consequential questions and record simulated student agreement.
- [x] (2026-10-09) Create isolated managed app with approved exact packages and production prefix/workflow.
- [x] (2026-10-09) Implement model, diagram, equivalent native editors and atomic JSON replacement.
- [x] (2026-10-09) Observe34 exploratory browser tests passing; fix initially hidden diagram measurements.
- [ ] Commit source and complete production, keyboard, narrow and import/export checks.
- [ ] Resolve independent findings and obtain PASS for actual source.
- [ ] Coordinator publishes and verifies the exact live revision.

## Surprises & Discoveries

React Flow controlled node dimensions cannot be discarded when mapping business nodes to rendered nodes. Initial five nodes were hidden; keeping measured dimensions as view state made all five visible without mixing geometry into model calculations. Initial cwd setup failed before the directory existed; creating the directory first resolved it without modifying another project. A browser visibility option was unsupported in the subagent; ordinary in-app tab creation worked.

## Decision Log

2026-10-09: Use mutually exclusive acyclic routes and entered waits, as the simulated student agreed. Daily capacity comparison is separate and never produces queue delay. Use a pure model module, not React Flow edges as business validation. Pause invalid draft results and retain last-valid state. Keep imports atomic, baseline explicit and everything transient. Native forms cover essential graph editing. Use exact pinned approved dependencies, system fonts and no external services.

## Outcomes & Retrospective

Working model and UI with34 meaningful checks exist. Packaged model behavior, invalid-draft recovery and rejected JSON replacement have been explored. A real rendered defect was caught and corrected before final checkpoint. Independent review and publication remain incomplete.

## Context and Orientation

app/model.js owns strict schema validation, directed-graph checks and probability propagation. A node is one task; an edge is an exclusive routing alternative. Processing in dependency order prevents a merge from being counted before all incoming shares arrive. app/app.jsx owns React UI, native editing controls and React Flow. Measured node sizes are view-only state. app/style.css and app/theme supply canonical visual styling. tests/model.test.js imports the real model; fixtures contain only invented valid/invalid processes. vite.config.js selects app/ for production and repository root for tests. scripts/notices.mjs collects runtime licenses; .github/workflows/pages.yml deploys only dist.

## Plan of Work

Checkpoint the plan, model/UI/tests/config/workflow after dependency verification, npm ci and build. Exercise graph edit/repair, baseline, real JSON chooser/export and keyboard alternatives. Inspect actual production under the repository prefix and1440/390/320 frames. Give the independent reviewer the commit/URLs; address all findings with new checkpoints and preserve failed rounds. Root publishes only after PASS.

## Concrete Steps

From this root run npm ci --cache /private/tmp/bab-npm-cache; node /Users/jordan/Projects/decision-999/plugins/browser-app-builder/scripts/check-dependencies.mjs /private/tmp/bab-recipe-examples-2026-10-09/process; npm run build. Start npm run test:browser -- --port 9507 and npm run preview -- --port 9508. Open /tests/ on9507 and /bab-example-process/ on9508. Inspect/stage named public/synthetic source paths and commit on main using the authorized local identity. Record full commit and relevant-path cleanliness before/after final checks. Reports can follow without changing executable source or PLAN.

## Validation and Acceptance

Model page must visibly show37/37 passed and0 failed after adding the finite-assertion and independent reviewer cases. Original elapsed471.5, simplified370.5, reduction101; finance work480/load114.3% remains. Editing route shares to110% pauses results with an explicit Manager error; restore last valid recovers. Add/delete/reconnect operations update real graph structure. An invalid JSON import cannot replace current state; valid round trip preserves exact process. Native forms/keyboard provide alternatives to canvas dragging. No console errors, missing nodes, clipped controls or page overflow at320; graph/table interaction is intentionally two-dimensional. Record observation limits honestly, especially frame testing versus devices and limited request capture.

## Idempotence and Recovery

npm ci/build are repeatable. Dist/node_modules remain ignored. Use only assigned ports9507/9508 and stop only these servers. Draft invalidity is recoverable without guessing routes. JSON failures preserve current data. Do not force push or invent publication. Source changes require affected reevaluation, not replacement of an old test SHA.

## Artifacts and Notes

Exploratory browser output:34/34 passed;0 failed. Actual hidden-node check: five nodes, visibility:hidden; after repair five nodes, visibility:visible. Preserve this failure and later independent rounds in EVALUATION/REVIEW. Exact simulated conversation lives in PLANNING-CONVERSATION.md.

## Interfaces and Dependencies

validate(process) returns human-readable errors. analyze(process) returns valid/errors and, only when valid, touch/wait/elapsed, step visit contributions and team work/load/excess. parseProcess(text) enforces256KiB, strict JSON and all model rules before returning a candidate. sampleProcess(simplified) creates invented70/30 or90/10 cases. React Flow12.12.0, React/React DOM19.3.0, Vite8.3.4 and React plugin6.1.2 are exact. Runtime assets and fonts stay local. No backend exists.

Revision note: initial living plan records actual progress and outstanding checks; no final review outcome is inferred from the build.
