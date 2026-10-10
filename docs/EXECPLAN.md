# Correct Tournament Atlas design review

This living ExecPlan follows `~/.codex/PLANS.md`. The completed fidelity and corner work is archived in `docs/plans/2026-10-10-madness-fidelity-and-corners.md`. The current acceptance document is `docs/MADNESS-DESIGN-REVIEW.md`.

## Purpose / Big Picture

Unify the published Tournament Atlas around the Campus Designer typography and palette. Make the bracket lighter, the calendar intelligible, the table comparative, and the initial screen useful without hovering. Preserve the data, animated rounded routes, whole-canvas nearest-slot hover, keyboard navigation, pins and cancelled 2020 season.

## Progress

- [x] (2026-10-10) Read the complete checklist, source, canonical design guidance and prior evidence; archived the completed plan.
- [x] Implemented layout, names, calendar, table, detail and special states; source checkpoint `72fb26c`.
- [x] Browser design checks 82/82, including 2,984 rendered labels and an active rounded-zero forecast regression.
- [x] Inspected desktop/phone, Results, late forecast, 2020, 2025 and story; data 80/80 and route rendering 16/16 passed.
- [x] Published `e1ea457`; Actions 38024158838 succeeded and the returning browser verified the new assets, known odds and championship score.
- [x] Recorded all 32 checklist outcomes and failed rounds; gallery `fde5b49` deployed and passed desktop/narrow, keyboard and copy checks. Unrelated edits preserved; owned servers/tabs cleaned up.

## Surprises & Discoveries

The previous literal reproduction of FiveThirtyEight conflicts with the current design checklist. The current checklist is authoritative for styling; the user explicitly retained nearest-slot hover across blank canvas. The course repository contains unrelated configuration/catalog edits and untracked review documents; do not stage these accidentally.

## Decision Log

2026-10-10: Retain the fixed 1004px bracket coordinate system and tested route geometry. Center the surrounding content on that width, rather than rescaling the SVG and distorting its joins.

2026-10-10: Keep frozen tournament data unchanged. Reviewed display abbreviations and rendered width checks belong to presentation code. Full names remain in accessible labels and tooltips.

2026-10-10: Use a single sentence instead of a chart for one available history point. Exact probabilities remain in tooltips/downloads; visible probabilities use whole percentages and less-than/greater-than-one-percent boundaries.

## Outcomes & Retrospective

The application and gallery are corrected and verified live. Source `72fb26c` passes 82 design/interaction, 80 data/model and 16 route-rendering checks. The evidence folder records all 32 requested outcomes, failures, actual screenshots and exact deployments. No data/model/dependency changes were needed. Screen-reader, physical touch and novice usability remain human checks; no automated run establishes those.

## Context and Orientation

The application is `/Users/jordan/Projects/bab-example-madness`, with `app/main.js` rendering the bracket, timeline, detail and table; `app/style.css` styling both application and build story; and `app/model.js` supplying verified data calculations. Frozen yearly JSON lives in `app/public/data/`. Course evidence lives in `evidence/browser-app-builder/madness/`. App HEAD at start is `6766f11`; course HEAD is `50e951a`.

## Plan of Work

First revise `app/index.html`, `app/main.js` and `app/style.css` for the centered column, lighter printed bracket, safe abbreviated names, ranked center, calendar bands, condensed single-snapshot state, meaningful elimination/results labels and simpler table palette. Move team detail before First Four and scroll to it on pin, respecting reduced motion. Preserve existing route animation functions.

Next exercise every played season's initial and final forecasts and Results. Measure actual Open Sans text, not estimated character counts. Add a reproducible browser review page where it checks meaningful layout/behavior boundaries. Run existing numerical tests and enlarged corner rendering regressions, then inspect production output at desktop and phone widths, including late March, 2020, 2025 and the build story. Record failures and repairs.

Finally create a clean source checkpoint, record evaluation, push ordinary app commits to its authorized main branch, and wait for matching GitHub Actions success. Verify the returning live browser, then refresh relevant gallery imagery/evidence and commit only task-owned course files.

## Concrete Steps

In the app, with `/Users/jordan/.nvm/versions/node/v22.19.0/bin` on PATH, run `node tests/run.mjs`, `npm run build`, `npm run test:browser -- --port 9741` and `npm run preview -- --port 9742`. Visit the browser test pages on localhost:9741 and production preview at localhost:9742/bab-example-madness/. Stop these processes afterward.

If gallery output changes, run `python3 scripts/build.py`, `python3 scripts/check.py`, `claude plugin validate .`, `git diff --check` and preview with `python3 scripts/serve.py` from the course repository. Preserve unrelated generated configuration differences when staging.

## Validation and Acceptance

Every checklist item receives a recorded outcome. All played years must have legible bracket labels without ambiguous codes or clipping. Initial 2023 must rank Houston first; Alabama remains about 16%. Late snapshots distinguish selected teams from losers. Results show championship score and stage score tooltips. One-snapshot years have neither a dead timeline nor a one-dot chart. The table uses only published solid colors, unfilled reached checks and emphasized title column. Phone output has no vertical table scroll trap. The 80 existing model checks and 16 route-rendering checks must continue passing, including the negative control for old bulging joins.

## Idempotence and Recovery

Never overwrite an archive, reset either repository, rewrite history, modify frozen probabilities or replace remotes. Keep failed checks. Retry failed publication after inspecting the existing run; do not create another repository. Stop only owned preview processes and close only owned browser tabs. App writes require the normal filesystem approval because it is outside the course workspace.

## Artifacts and Notes

Evidence will be stored under `evidence/browser-app-builder/madness/2026-10-10/design-review/`, including observed browser results and actual screenshots. Historical evidence remains dated and bounded.

## Interfaces and Dependencies

No new runtime or library. Continue native HTML/CSS/JavaScript, local Open Sans and EB Garamond, ECharts, Vite and GitHub Pages. Presentation changes cannot change tournament calculations or bundled source data.

Revision note: replaces the completed fidelity plan with the user's current Campus Designer acceptance checklist.

Implementation note: the first rendered trial caught narrow Open Sans labels; visual inspection also caught hairlines crossing names and a phone story-header wrap. All were corrected. A source probability of zero can belong to an active team (2016 FDU), so the archive’s alive flag now governs elimination copy. No data file changed.

Completion note: app Actions 38024158838 and documentation follow-up 38024324410 succeeded; gallery Actions 38024355680 succeeded. Returning-browser assets and live known answers were checked. Local gallery preview was browser-client blocked; live gallery verification completed without changing any protection.

Follow-up (2026-10-10): corrected the user-reported clipped Final calendar band by including complete endpoint days and sharing the range with click snapping. App source b2685ee; deployed payload 85b1b87; Actions 38024791317 succeeded. Design regression 110/110 and data/model checks 80/80. Returning live browser confirms centered Apr 3/Final. Evidence: `evidence/browser-app-builder/madness/2026-10-10/timeline-final/`.

Follow-up (2026-10-10): removed team hover fill/borders. The first thin lead-in was rejected by the user; final source dad8ad6 centers labels on bracket coordinates and extends the probability path itself to the text. The extension shares its width and animation. Route checks 22/22, design checks 110/110, unchanged-model checks 80/80. App payload e11e9df deployed successfully (Actions 38025449854), verified in the returning browser. Evidence: `evidence/browser-app-builder/madness/2026-10-10/hover-labels/`.
