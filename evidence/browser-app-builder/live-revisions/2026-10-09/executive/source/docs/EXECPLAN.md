# Build the Stillwater executive operating review

This living ExecPlan follows the host's PLANS.md requirements. A novice can resume from this document and PLAN.md.

## Purpose / Big Picture

The COO of a fictional 12-store coffee chain needs to see contribution pressure and prepare three board questions. The finished app lets the user filter monthly/regional/store performance, read all 72 accounting records and compare a store's expense lines before choosing an investigation. It uses synthetic data and never implies causal findings or institutional endorsement.

## Progress

- [x] (2026-10-09) Read all five workflow skills, managed-build/freshness/library guidance and selected library/designer skills.
- [x] (2026-10-09) Obtain and record simulated student agreement, expected example and metric exclusions.
- [x] (2026-10-09) Prepare pinned managed build, source model, 72-row data and complete dashboard interaction.
- [x] (2026-10-09) Run exploratory build and 13 passing browser cases; fix inaccurate board caption.
- [x] (2026-10-09) Commit intended source, reinstall, rebuild and evaluate clean checkpoint bc19eb40ba4ded2b141c13955cdea79e0bf406c4; 13/13 browser checks pass and both modal focus paths verified.
- [ ] Complete independent review/revision loop; hand source to coordinator for publication.

## Surprises & Discoveries

The first board caption manually repeated a rounded value and disagreed with the actual ledger. Calculation showed 33.9%, and the copy was corrected. This reinforces checking qualitative narrative against exact data as well as testing formulas. ECharts module selection reduced bundled JavaScript by about 0.57MB. The host browser viewport is large and shared, so fixed-width local frames are needed to inspect narrow layout without altering another agent's browser.

## Decision Log

The simulated student chose distinct contribution margin and comparable-growth indicators, an editable 20% classroom target, mature stores and a full-period ledger. This avoids composite scores and changing comparable bases. Labor and purchasing/waste are the board topics; expansion is excluded because capital/demand assumptions are absent. The developer chose integer cents, summed numerators/denominators and local-only state. Mantine supplies focus-aware controls and modals, ECharts supplies charts, Tabulator supplies the large operational ledger. These are current roles, not speculative dependencies.

## Outcomes & Retrospective

Core implementation and developer final evaluation are complete at bc19eb40ba4ded2b141c13955cdea79e0bf406c4. Independent review and publication are still outstanding. The coordinator owns publication; this developer must not push or edit course files.

## Context and Orientation

The project root contains `app/` source, `tests/` browser tests and production-width harness, `.github/workflows/pages.yml`, pinned package manifests and documentation. `app/model.js` holds pure arithmetic and selection operations used by both UI and tests. `app/data.js` creates deterministic synthetic rows. `app/app.jsx` builds the React UI and integrates charts/table. `app/style.css` contains responsive styling. `dist/` and `node_modules/` are generated and ignored. Store contribution means sales minus product, labor and occupancy/other expenses; it excludes headquarters, taxes and financing.

## Plan of Work

Inspect the complete source and surrounding documentation. Preserve the agreed formulas and dataset scope. If review finds a model change, return that consequential decision to the coordinating simulated student before editing. Fix code/layout defects directly, retain failed rounds, and rerun affected browser checks from a new source checkpoint. The reviewer then records pass or requests another revision. Deliver repository path and full tested commit to coordinator.

## Concrete Steps

From this project root use Node 22.19.0 and npm 10.9.3. Run `npm ci --cache /private/tmp/bab-npm-cache-executive`, then the dependency checker at `/Users/jordan/Projects/decision-999/plugins/browser-app-builder/scripts/check-dependencies.mjs` with this project root as its argument. Run `npm run build`; it must retain notices and produce `dist/index.html`. Run `npm run test:browser -- --port 9501` and navigate a dedicated browser tab to http://127.0.0.1:9501/tests/. Run `npm run preview -- --port 9502` and visit http://127.0.0.1:9502/bab-example-executive/. Servers already running must be reused; do not start a duplicate on the same port.

## Validation and Acceptance

The browser suite must show 13/13 passed. In production, initial September totals are sales $1,441,000, contribution $341,800, margin 23.7% and four below a 20% target. Choose Meadow House and verify $100,000/$25,000/25% with +11.1% sales growth. Harbor's store bridge must show labor +$7,995 and contribution −$6,261 from August. Full period company ledger must show 72 records; search must alter totals and show a truthful empty state. Keyboard filters and modal Escape must work. Inspect production at desktop and 320px frame, with tables scrolling inside their container and no page overflow. Check local assets/source/notices and browser logs. Record exact tested Git hash and relevant clean source paths before and after evaluation. Compare the plan at tested commit against current plan, and do not carry old results across substantive changes.

## Idempotence and Recovery

npm ci recreates dependencies from lockfile. Build recreates only dist and regenerates the tracked notice deterministically. Preserve project source and ordinary Git history. Stop only the owned server sessions and restart with the recorded commands; never kill another project's process. Retain failed review/evaluation entries and append fixes. Do not publish until coordinator confirms independent pass.

## Artifacts and Notes

Independent inputs and derivations are in PLAN.md; exact simulated exchange is in PLANNING-CONVERSATION.md. SETUP.md records actual tool versions, owned sessions and URLs. README.md states provenance, limits and usage. EVALUATION.md and REVIEW.md distinguish developer checks and independent review. DEPLOYMENT.md is prepared but must not claim a live site until coordinator verifies one.

## Interfaces and Dependencies

`selectRows(rows, {region, storeId, month})` returns the intersection of the selected dimensions; sentinel values mean all. `summarize(rows)` returns summed accounting values, contribution and weighted ratios with null for zero denominators. `status(row, target)` compares unrounded margin with a fraction target. `costBridge(current, previous)` returns expense dollar and rate changes. Mantine, ECharts and Tabulator use approved exact versions and local theme adapters; no runtime services or further packages are allowed.

Revision note: initialized after the complete first implementation; records observed preliminary checks and keeps final review pending.

Revision note: final developer evidence now records a clean source checkpoint; retained two failed keyboard rounds and corrected both direct and board evidence focus return. Independent reviewer owns its separate report.


## Live revision milestones — 2026-10-09

First, update app/model.js and app/data.js with the authored same-store prior-year contribution inputs and weighted/missing-history comparison, and independently verify the $100/$300 weighted example. Second, replace the duplicated ledger in app/app.jsx with one semantic table, add board evidence and compact overview/ledger navigation, and copy canonical local fonts with license collection. Third, checkpoint the revised PLAN, source, tests, configuration and licenses, then evaluate the browser test page and production prefix at 1440/390/320. Independent review and coordinator publication follow only after developer evidence is ready.

## Revision progress

- [x] (2026-10-09) Inspect original brief, current plan and revised plugin/design guidance; fetch origin and confirm clean starting worktree.
- [x] (2026-10-09) Implement direct board evidence, truthful trend scale/caption, annual margin and accessible ledger; remove redundant Tabulator dependency and watchlist.
- [ ] Checkpoint and complete model/browser/production evaluation, independent review and publication.

The new user instruction authorizes substantive changes; do not seek fabricated student agreement. PLAN.md documents the new prior-year history and explicit missing-history behavior. Existing numerical fixtures and prior failed evaluation rounds remain. Ports for this revision are test9711 and production9712. npm ci/build are repeatable; no services or new dependencies were added. Known expected values remain September sales $1,441,000/contribution $341,800/23.7% and four stores below20%. Revision tests must also show the new weighted prior-year margin and missing-history cases passing. Evidence must distinguish source, rendered output and independent approval. Final outcomes will be appended after checks.

## Revision outcomes

Developer source checkpoint9a5625ec8b29cff068bdf127c04adc79f9ff9fc6 passed14/14 model cases and the recorded production scenarios, font/layout and returning-navigation checks. The failed footer-size and restored-dropdown rounds remain inEVALUATION.md. Native ledger removed an unnecessary table library and duplicate controls. Independent review, attribution of isolated unscoped browser-console errors, and publication remain pending. The review harness is local-only and a clean build removes its generated copy.

Independent coordinator review passed at f98a15884acd2c080756650ca6a0d6fe45f706df after narrow layout, Back consistency, keyboard ledger/dialog and cleanup checks. Publication is the only remaining milestone; the source and evaluated plan remain unchanged.
