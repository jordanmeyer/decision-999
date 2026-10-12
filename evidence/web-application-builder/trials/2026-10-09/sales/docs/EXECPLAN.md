# Build a local sales investigation dashboard

## Purpose / Big Picture

In this fresh project an MBA student can load synthetic CSV sales, inspect rows, filter regions/products and compare revenue, cost and contribution. The application is self-contained; files never leave the browser. This plan follows ~/.codex/PLANS.md.

## Progress

- [x] (2026-10-09) Read plugin, inspect tools, verify starter, obtain simulated agreement.
- [x] (2026-10-09) Implement agreed model and interface; exploratory 27 model cases and actual imports pass.
- [x] (2026-10-09) 28/28 browser checks and production imports/filter/sort/keyboard verified.
- [x] (2026-10-09) Prepare local deployment workflow; publication pending.
- [x] (2026-10-09) Final checkpoint50b631bc96735e673beda72c510aa4d34bc3fdef evaluated; reporting-only handoff prepared.

## Surprises & Discoveries

The default npm cache is not writable; use /private/tmp/bab-fresh-npm-cache. Existing Node/npm exactly match the approved inventory.

## Decision Log

Select Papa Parse for CSV, Tabulator for sortable records and ECharts for comparison. Use integer cents and native aggregation to reduce concepts. Student-approved input and result semantics are fully stated in PLAN.md. Do not publish without authorization.

## Outcomes & Retrospective

The app is complete locally with28/28 browser checks and production verification. Narrow currency wrapping and a paint-order assumption in the chart test were corrected; failed rounds remain recorded. Publication, full request capture, physical-device/200% zoom and actual Work routing remain unverified. See EVALUATION.md for exact limits.

## Context and Orientation

Project root is /private/tmp/browser-app-builder-fresh-2026-10-09/sales. app/ contains authored site files, tests/ will contain a browser test page, scripts/notices.mjs generates library notices. Vite bundles local dependencies into dist/. node_modules/ and dist/ are generated and ignored. No remote exists.

## Plan of Work

First create app/model.js with parseSales, filterSales and totals, plus a bundled three-row CSV. Test cents and schema boundaries separately from rendering. Build native filters and import controls in app/index.html and app/app.js; connect filtered rows to Tabulator and totals to ECharts. Style with canonical tokens and selected adapters. Then create tests/index.html and tests/tests.js, visibly reporting each independently derived assertion. Prepare .github/workflows/pages.yml from managed template and /fresh-sales/ Vite base. Commit source before final tests, record full revision and freshness checks in EVALUATION.md.

## Concrete Steps

In the root run npm ci --cache /private/tmp/bab-fresh-npm-cache, the frozen plugin scripts/check-dependencies.mjs with this root as argument, then npm run build. Start npm run test:browser -- --port 9331 and open /tests/; app preview is /app/. Start npm run preview -- --port 9332 and open /fresh-sales/. Preserve source/history and report failures rather than replacing expected answers with app outputs.

## Validation and Acceptance

The three example rows independently produce revenue $390, cost $234, contribution $156; North $240/$144/$96 and North+Pen zeros. Browser tests cover quote syntax, schema, numeric precision, maximum limits, loss-making sales and text preservation. Actual UI tests cover filters, sorting, imports, reset, keyboard, narrow layout and production assets. Compare chart values to text, inspect its hover/selection and resizing. Numerical and design evidence are separate. No live deployment is claimed.

## Idempotence and Recovery

npm ci and build can safely repeat. Invalid imports preserve current state. Stop only this trial's processes if restarting; retain port ownership and session IDs. Ordinary local commits keep corrections reproducible. No pushes, remotes or history rewrites.

## Artifacts and Notes

SETUP.md records verified runtimes and restart paths; TRIAL.md preserves exact simulated interaction; PLAN.md owns model acceptance. EVALUATION.md will retain every failed/final round; DEPLOYMENT.md will explicitly mark publication pending.

## Interfaces and Dependencies

parseSales(text) returns rows with region, product, quantity, unitPrice, unitCost, revenue, cost and profit in integer cents. filterSales(rows, region, product) matches exact labels, empty string means all. totals(rows) returns revenue/cost/profit cents. UI imports these real functions, as do browser tests. Libraries are pinned as recorded in PLAN.md; no remote services.

Revision note: implementation and final checks are complete; documentation reflects actual failed rounds and host observation limits. Production remains available; test server is stopped at handoff.
