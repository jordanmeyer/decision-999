# Build Batch & Balance

This living ExecPlan follows the host ~/.codex/PLANS.md. Keep progress, discoveries, decisions and outcomes current. PLAN.md is the agreed acceptance contract; PLANNING-CONVERSATION.md preserves the actual role-play.

## Purpose / Big Picture

A fictional bakery manager can edit tomorrow's capacities, product economics and committed/demand bounds, solve an integer allocation, examine exact resource slack and compare a manual plan. A small two-product preset makes a fractional linear-program relaxation concrete and shows why rounding can violate capacity. The page must be a useful complete decision tool with recovery, not a solver demonstration shell.

## Progress

- [x] (2026-10-09) Actual planning questions answered and model confirmed; exact exchange recorded.
- [x] (2026-10-09) Read candidate HiGHS skill, isolated worker probe and independent acceptance notes. Scaffold exact Node/Vite/HiGHS setup; install has0audit findings.
- [x] (2026-10-09) Independently enumerate default:2,681feasible, unique5/5/18,$955,use470/600/360; rational LP vertices confirm955.
- [x] (2026-10-09) Implement pure model, worker lifecycle and complete UI.
- [x] (2026-10-09) Actual browser suite 22/22, production default/tiny/manual/copy/infeasible/zero/negative/cancel/retry, keyboard and native Back checks; desktop/narrow visuals.
- [x] (2026-10-09) Freeze 2e4eef40bf2091800e2f07c0144888c6b264f8ee; clean pre/post source/PLAN, fresh build, final 22/22 and maximum-money narrow production evidence.
- [x] Independent reviewer passed frozen2e4eef4; coordinator published and verified livee23c930.

## Surprises & Discoveries

The default's fractional relaxation has the same optimal objective as its integer solution. The agreed tiny preset therefore has a real teaching role:3/2/$23versus8/3each/$24. Other campaign apps exposed native history restoration mismatching freshly rebuilt results, so all in-memory forms in this app disable native autocomplete and actual Back is an acceptance check.

## Decision Log

Decision: use only HiGHS1.15.3 with local WASM in an ES worker and native HTML/CSS resource meters. Rationale: solving is the substantive library role; three resource bars need no chart dependency. Date/author:2026-10-09developer, candidate configuration authorized by coordinator.

Decision: store money as integer cents, per-batch resource use and capacities as whole minutes, decisions as integer batches. Independently verify solver values within1e-6before rounding an integer plan, then recompute exact objective/use. Rationale: clear units and defensible accounting. Date/author:2026-10-09developer following confirmed plan.

Decision: terminate/recreate worker on cancel, reset and edits; hide prior results when assumptions change. Rationale: an obsolete result must not look current. Finite bounds and positive resource use make unboundedness impossible through valid controls. Date/author:2026-10-09developer.

## Outcomes & Retrospective

The complete local app and 22-case browser suite work. Actual production states include default, fractional lesson, manual allocation, infeasible, zero, negative contribution, cancellation/retry and history return. Desktop and narrow layouts were inspected. Frozen-source evaluation and independent review passed at2e4eef4. Publicatione23c930 and its actual live known answers passed; see DEPLOYMENT.md.

## Context and Orientation

This directory is a new standalone repo, separate from course files. app/model.js will own validation, controlled LP text, independent solution verification and rationale. app/solver-worker.js loads HiGHS/WASM and solves integer plus relaxed models. app/solver-client.js owns cancellation, deadline and replacement. app/app.js owns native control state/rendering; app/style.css and local theme tokens own presentation. tests/ imports real modules and exercises the real worker; test frames show production at1440/320CSSpixels without global browser changes. dist and node_modules are ignored. REVIEW.md belongs to the independent reviewer.

An integer plan permits only whole batches. A continuous relaxation permits fractions while keeping every other constraint, so its optimal contribution bounds the integer optimum from above. Slack is capacity minus used minutes. A binding constraint has zero slack, but that alone does not promise a valuable capacity expansion or a unique bottleneck. Commitments are lower production bounds; demand ceilings are upper bounds. Contribution is sales less variable costs per batch, not revenue or complete business profit.

## Plan of Work

First build and browser-test pure model and worker. Construct LP text using only fixed x0/x1/x2IDs and validated numbers; product names stay outside solver text. Display solver statuses honestly, accepting a limited incumbent only after independent feasibility checks and never treating missing values aszeros. Use5seconds per native solve and a15second whole-request deadline. Then implement the three product cards, capacities, decision evidence, manual check, copy and LP lesson. Confirm useful default/tiny scenarios, invalid and infeasible recovery, cancellation/retry and no stale outputs. Freeze all executable paths and PLAN before final evaluation, record pre/post comparisons, and send the reviewer the hash/URLs. Revise only actual findings, preserve failed rounds and rerun affected checks.

## Concrete Steps

From this directory, prepend /Users/jordan/.nvm/versions/node/v22.19.0/bin to PATH. Run npm ci --ignore-scripts --cache /private/tmp/bab-optimizer-npm-cache; npm run build; npm run test:browser -- --port 9515; npm run preview -- --port 9516. The browser test URL is http://127.0.0.1:9515/tests/ and actual production URL http://127.0.0.1:9516/bab-example-optimizer/. Run the canonical dependency checker at /Users/jordan/Projects/decision-999/plugins/browser-app-builder/scripts/check-dependencies.mjs with this directory. Candidate status may reject HiGHS until coordinator promotion; record that actual boundary rather than modifying it.

## Validation and Acceptance

Default recommendations must be5/5/18batches and$955, resources470/600/360, slack10/0/0. Tiny preset must be3/2/0and$23, LP8/3eachand$24; rounded3/3/0must failprep/oven. Independently enumerate reviewer stool/bench/cabinet fixture to detect an integrality error and capacity changes. Validatecentprecision, blank/negative/resource bounds; allownegativecontribution; zero commitments/capacitymust givezero; contradictorycommitmentsmust giveInfeasible with quantitativeoverages. Run real worker cancellation/retry, status/missing incumbent adapter checks, manualfeasibility, copiedcurrentassumptions, editedpending/invalid states, actual Back before rerun, keyboard and narrow visuals. Inspect localprefixedworker/WASM and notices. Mark unobservedtime-limitincumbent/bfcache paths as limitations, not inventedcoverage.

## Idempotence and Recovery

npm ci/build recreate ignored dependencies/output; no remote runtime or private data enters this app. Cancel/edit/reset terminate the owned worker, then next solve can recover. Do not alter shared browser viewport or otheragents' servers. Preserve ordinary commits/failedrounds; never push before independentPASS. Root owns publishing and inventorypromotion.

## Artifacts and Notes

Independent Python standard-library enumeration used full confirmed bounds and exact arithmetic. Default has2,681feasible mixes and unique(5,5,18),955. Fraction-based intersection enumeration gives the same LP bound. Tiny's independent integer enumeration and exact LP algebra will be committed as a reproducible oracle script with tests.

## Interfaces and Dependencies

A scenario has three capacities and three products. Each product has contribution in integer cents, minimum/maximum integer batches, and three resource-use values in integer minutes. model.js exports validate, modelText, allocation, interpret, rationale and presets. solveScenario returns the checked integer result and relaxation result; cancel rejects active work and terminatesworker. Runtimehighs1.15.3; buildVite8.3.4; Node22.19.0/npm10.9.3. No other library/service.

Initial plan written2026-10-09after actual student confirmation.

Update 2026-10-09: implementation and exploratory checks completed. Native UI cancellation was observed while the local solver was loading, followed by successful default recovery. Native Back returned coherent defaults before any new solve action. No persisted bfcache or real limited-incumbent timeout was observed.

Final evaluation update 2026-10-09: supported maximum scenario $150,000 was rendered in the actual 320 CSS-pixel production frame, with document widths 319/319 and a readable full label. Source remains frozen; only reports changed. Coordinator independent UI witness and reviewer reconciliation are finishing.
