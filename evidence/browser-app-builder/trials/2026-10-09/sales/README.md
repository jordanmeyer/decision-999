# A closer look at sales

Independent synthetic learning example. Import a local CSV, combine region and product filters, compare USD revenue/cost/contribution totals, and sort individual sales. Restore example resets everything; Reset filters keeps the current data. CSV input remains in memory and disappears on reload. Nothing is uploaded, shared or persisted.

Required headers: region,product,quantity,unit_price,unit_cost. See PLAN.md for exact validation and arithmetic. Contribution excludes overhead/tax/returns/inventory and does not establish causes or future performance. Bundled example is synthetic, authored for this trial; $390 revenue minus $234 cost equals $156 contribution.

## Run locally

Node 22.19.0, npm 10.9.3. Run `npm ci --cache /private/tmp/bab-fresh-npm-cache`. `npm run test:browser -- --port 9331` serves http://127.0.0.1:9331/app/ and http://127.0.0.1:9331/tests/. App-only mode is `npm run dev -- --port 9331`. `npm run build` generates dist/, then `npm run preview -- --port 9332` serves http://127.0.0.1:9332/fresh-sales/. Do not run two servers on 9331.

Selected libraries: Papa Parse 5.7.0 for quoted CSV; Tabulator 6.6.1 for sortable local rows; ECharts 6.1.0 for the visual comparison. Plain JS owns model and aggregation. Vite 8.3.4 is build tooling. Locked dependencies and local assets only; lifecycle scripts disabled. Build generates app/public/THIRD-PARTY-NOTICES.txt for all runtime dependencies, linked in the production app. Stock Tabulator structural CSS precedes canonical theme adapters. Georgia/Arial system fonts substitute for downloadable branded fonts. The public Duke palette guides color without logos, affiliation or endorsement. No external fonts/images/scripts.

Production publishes only dist/. Tests, reports, imported fixtures, history and node_modules are excluded. Imported source assets receive Vite content fingerprints. The verbatim public license notice should be versioned if changed in a later deployment. This trial has no repository URL or live site; deployment and real source link await authorization and a destination. See DEPLOYMENT.md and EVALUATION.md.
