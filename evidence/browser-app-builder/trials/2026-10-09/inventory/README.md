# Inventory policy lab

A local teaching simulation comparing daily (R,Q) replenishment with weekly order-up-to. Synthetic uniform independent demand is shared across policies; inspect every day rather than infer a winner from a single summary. No forecast, optimality, costs, persistence, external API or institutional endorsement.

Run comparison after editing parameters. Same seed and inputs repeat the model1 scenario. Reset defaults restores the full form. Choose a ledger policy; the CSV includes both policies and the full scenario inputs on every row. Until a new successful run, summaries and export still represent the last successful run. Zero demand reports100% fulfillment with a no-demand label.

Arrivals happen before demand, and shortages are lost sales. Orders at end-day d arrive at start-day d+L; lead time must be positive. Position=stock+pending orders. Daily policy orders one quantity when position<=point; weekly policy reviews on days7,14,… and orders up to target. Pending orders at the horizon do not count as stock received. See PLAN.md for full bounds, formulas and independent expected cases.

## Local tools

Node22.19.0/npm10.9.3, Vite8.3.4. `npm ci --cache /private/tmp/bab-fresh-npm-cache` (sandbox-specific cache workaround; ordinary writable environments can use `npm ci`). `npm run test:browser -- --port 9321` serves app at http://127.0.0.1:9321/app/ and checks at http://127.0.0.1:9321/tests/ . Alternatively use `npm run dev -- --port 9321` to serve app alone; the two commands cannot share one port. `npm run build` regenerates notices and creates dist; `npm run preview -- --port 9322` serves http://127.0.0.1:9322/fresh-inventory/ . All servers bind loopback.

## Provenance

Original app/model/tests; synthetic data generated locally. Packaged Browser App Builder starter, notices script, Campus Designer tokens and ECharts adapter from frozen plugin3966d48. Georgia headings/Arial body use local system fonts as disclosed substitutes for the preferred downloaded pairing; no font files or logos bundled. Navy/copper solid lines distinguish policies with dashed/solid styles and a complete native ledger alternative.

Runtime dependencies: seedrandom3.0.5 (MIT) for repeatable local random streams; ECharts6.1.0 (Apache-2.0) for time-series comparison, plus transitive zrender/tslib. Generated app/public/THIRD-PARTY-NOTICES.txt retains all4 notices; seedrandom's packaged supplemental notice lives in licenses/. Vite is development tooling. Source references: https://github.com/davidbau/seedrandom and https://echarts.apache.org/handbook/en/concepts/chart-size/ . No other libraries were needed; TRIAL.md records decisions and files read.

## Limits and handoff

30-day default, maximum90days; no Monte Carlo uncertainty intervals. Results are sensitive to one synthetic demand path and chosen timing. Independent uniform demand is not fitted to any real business. No import/export spreadsheet parser is included. CSV is a text export of this model's results. The chart bundle generates a size warning (~536kB uncompressed); it is served locally and left as one simple app bundle rather than adding speculative chunk orchestration.

Prepared GitHub Actions workflow uploads only dist from main; /fresh-inventory/ is a packaging-test prefix. Destination and real source URL are unapproved; there is no live website or remote. See EVALUATION.md and DEPLOYMENT.md before any publication.
