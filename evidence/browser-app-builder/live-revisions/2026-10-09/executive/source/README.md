# Stillwater Coffee — executive operating review

A complete synthetic classroom dashboard for reviewing 12 mature coffee stores across three fictional regions, April–September 2026. It combines an operating snapshot, monthly trends, regional comparison, 72-record ledger, store cost bridges and a three-question board briefing.

## Use

Choose a reporting month, region and store. Set an assumed margin target. Open a store to compare cost dollars and cost ratios with its preceding month. The September watchlist and board briefing stay fixed to September and are labeled as such. Switch the ledger to “Full six months,” search stores/regions, or sort columns. The primary native ledger and chart tables provide accessible evidence. Filters exist only in memory and reset on reload.

## Run and verify

Node 22.19.0 / npm 10.9.3; exact versions are in the lockfile. Install with `npm ci` (this host uses `--cache /private/tmp/bab-npm-cache-executive`). `npm run dev -- --port 9500` serves the source app. `npm run test:browser -- --port 9711` serves the browser checks at http://127.0.0.1:9711/tests/. `npm run build` generates license notices and builds only the app into `dist/`. `npm run preview -- --port 9712` serves production at http://127.0.0.1:9712/bab-example-executive/. The production prefix is deliberate. Tests are not published.

## Provenance and limitations

Every store, operating result and narrative is authored synthetic data. No customer/employer data or real adoption is represented. Store contribution = net sales − product cost − labor − occupancy/other store costs; headquarters, taxes and financing are excluded. Product cost includes waste. This is not company profit. Group ratios use aggregate dollar totals. Each of the 12 mature stores is included in every month and the same-month 2025 comparison. Source monetary values are integer cents; KPI currency rounds to dollars, unit economics retain cents, rates show one decimal. Rounding can make displayed subtotals differ from mental calculations on rounded rates.

A 20% initial target is a classroom assumption. Labor productivity does not determine staffing adequacy. The data cannot separate purchase prices, waste, product mix, service or demand causes, and cannot justify expansion. A single reference store has an intentionally high $20 ticket to reproduce the simulated student's checkable example. The accounting model is educational and has not been certified for business use.

The design uses Browser App Builder's bundled Campus Designer guidance, unchanged Duke navy/royal and locally bundled EB Garamond 400 and Open Sans 400/600 with published fallback stacks and OFL licenses. No remote fonts are fetched. Stillwater Coffee is fictional and has no institutional affiliation or endorsement. No institutional artwork is used.

Mantine 9.7.1 provides filters and modal focus behavior; React/React DOM 19.3.0 provide its required runtime. ECharts 6.1.0 provides trend/regional charts. A native HTML table provides the keyboard-sortable primary ledger. Vite 8.3.4 and its React plugin 6.1.2 are build tools. All runtime dependencies are bundled locally. [License notices](app/public/THIRD-PARTY-NOTICES.txt) are generated from installed packages, with the bundled supplemental react-remove-scroll-bar notice. No external runtime service, telemetry, API or remote font is configured. Network observations are described in EVALUATION.md, not a claim about every browser environment.

## Publication

Prepared source destination: https://github.com/jordanmeyer/bab-example-executive

Prepared site destination: https://jordanmeyer.github.io/bab-example-executive/

These are prepared destinations, not a claim of deployment. The coordinator owns publication after independent review passes. Only `dist/` is deployed by the copied GitHub Actions workflow, on ordinary main commits. Source and history will publicly attribute Jordan Meyer <jordanmeyer@protonmail.com>. See DEPLOYMENT.md for actual status.

See [How this was built](BUILD-STORY.md) for the brief, simulated planning record, recipes and evidence. The October 9 revision adds inline board evidence and same-store prior-year margin, and separates overview from operating ledger.
