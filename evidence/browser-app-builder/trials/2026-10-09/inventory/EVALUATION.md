# Evaluation

Simulated educational trial, not real student feedback or business-model certification. All cases use synthetic data. The coordinator's simulated student accepted assumptions and limitations for local handoff only; publication remains unauthorized.

## Rounds and fixes

1. Exploratory source run:12 checks passed. Added coordinator case did not immediately appear in Vite's already-running test preview (still12), despite changed disk source. Restarted only this trial's server, then observed13. Record this host file-watcher/cache limitation; verify visible test names after changes.
2. Source checkpoint0c9dcda67bfcdf4bbc78cb735020acb87dfab3e7:13 model checks passed; production case, actual CSV, form/keyboard/chart behavior checked. The first responsive helper specified324/1284 content widths while labeling320/1280; measurements revealed324/1283. Corrected helper widths in5fe70d84e3d021b50c709c3ab276f749e5f59f1d. No app change was needed.
3. Final tested checkpoint **67ddbfa52b7f78416d82d88a3d055c7d141420ff**: strengthened global RNG identity assertion from generic equality to strict function identity and added200% text frame. Restarted test preview; **13 passed,0 failed**. These are test/helper-only changes; app, build, lockfile, notices and workflow are identical to the production-tested checkpoint. Final frame review covered the revised helper. No numerical failure observed. Vite's535.89kB JS chunk warning remains a disclosed size limitation, not a suppressed warning.

## Independent expected and observed results

Expected values were derived before output (PLAN.md, plus coordinator-supplied case), not blessed from this app.

| Case | Expected | Observed |
|---|---|---|
| Published seedrandom hello. | draws0.9282578795792454,0.3752569768646784; mapped0..12 gives12,4; Math.random identity unchanged | Exact, pass |
| One day/start10 | demand3=>stock7,unmet0; demand12=>stock0,unmet2 | Exact, pass |
| Four constant3 days/start10/R0/Q5/L2 | stock7,4,1,0; shortage0,0,0,2; only day4 order5 | Exact, pass |
| Start0/demand0/R0/Q5/L2 | order5day1, pending prevents duplicate, receipt5day3 | Exact, pass |
| Weekly start0/target10/no demand/L2 | order10day7, no receiptday8, receipt10day9 | Exact, pass |
| Lead1 and arrivals before demand | day1order5; day2demand6=>fulfilled5,unmet1 | Exact, pass |
| Fixed and zero demand | constant3 sequence; zero demand100%fill, stock10 mean10 | Exact, pass |
| Seed behavior | identical seed/input repeats; changed seed changes; both policies same demand | Pass |
| Uniform0..12,100000 draws | theoretical mean6,variance14; mean tolerance0.06 (>5SE); each bin100000/13±500 (>5 binomial SD) | mean5.99926; bins7580–7782, pass |
|90days/high demand/long lead | every day opening+arrivals−fulfilled=end; demand=fulfilled+unmet; orders−receipts=pending, stock>=0 | Pass |
| Invalid inputs | reject blank seed, days0/91, lead0/1.5, negative demand, min>max, NaN stock, quantity0 | Pass |
| Coordinator case4days/start10/demand3/R4/Q5/L2 | daily stock7,4,1,3; orders0,5,0,5; fill100%,mean3.75. Weekly stock7,4,1,0; unmet2; fill10/12 | Model exact; production shows100.0%/83.3%, means3.8/3.0, pending5/0 |
| CSV escaping/metadata | two-policy records and escaped quote/comma seed | Unit check pass; actual production download also inspected |

## Rendered and interaction evidence

Codex in-app browser, newly created background tab only. Test page http://127.0.0.1:9321/tests/ visibly reported all13 passes; imports the real app/model.js. Production http://127.0.0.1:9322/fresh-inventory/ loaded fingerprinted JS/CSS and rendered model outputs. Coordinator independently repeated the four-day UI case and observed the same values with no warning/error logs.

- Native form editing, Enter submission and Reset defaults pass. Lead0 displayed an explicit range error and stated that previous results remain. Zero-demand UI says100.0% and“no demand”. Policy switching shows the correct daily rows.
- Actual download inventory-daily.csv contained8 records for the4-day scenario, both independently expected stock sequences and seed/horizon metadata. Parsed with Python's standard csv reader. The browser downloaded into its normal Downloads folder; this file was not committed or published.
- Keyboard Tab from seed reaches Days, with computed copper rgb(200,78,0) outline; Enter activates run/reset and chart disclosure; ArrowDown changes policy. At narrow width ArrowRight scrolls the ledger (observed scrollLeft121.21; client264,scroll760). Labels and table captions/headers present.
- Isolated helper tests/responsive.html, excluded from deployment, avoids changing shared browser viewport. Nominal320 frame measured319px; desktop1280 measured1280px. Each document scrollWidth equaled clientWidth. Form/summary stack, content wraps, and only the table scrolls horizontally. Actual screenshots reviewed, including the narrow chart and ledger. This is frame-based responsive evidence, not a physical-device test.
-200% root text frame measured32px font at639px content width; scrollWidth639. Rendered summary and disclosure wrapped without loss. ECharts labels keep library pixel sizing; exact values remain in the enlarged native ledger.
- Hidden chart collapse/reopen restored a264px narrow SVG; top-level production chart restored1131px. Navy and copper use solid unchanged token values, dashed weekly line adds non-color distinction. Clicking a navy SVG mark retained#012169 with no opacity overrides. Chart selection is disabled, line emphasis disabled, no blur-driving focus behavior; selected/blurred transitions are not exposed. Animation is disabled for all users. A text/table equivalent is available.
- Background navigation caused no observed console errors. Teardown is source-reviewed (ResizeObserver disconnect and chart dispose on pagehide); no dedicated memory-leak instrumentation or back-forward cache test.
- Production asset inventory observed exactly one same-origin script and one same-origin stylesheet, no font/image/video URLs, and one inline SVG. This is a scoped observed-assets claim, not a universal network audit. Script sandbox did not expose performance.getEntriesByType; used supported pageAssets inventory instead. Production warning/error log query returned[]; development logs may include Vite's own connection messages.
- Generated dist contains only index.html, THIRD-PARTY-NOTICES.txt and fingerprinted CSS/JS. License link is present and its non-root target returned the generated notices via HTTP. Four runtime packages' notices retained; pinned direct dependencies and lockfile passed packaged check; npm ci/audit reported0 vulnerabilities. No fonts remotely loaded. Georgia/Arial substitutions documented.

## Freshness and source review

Node v22.19.0/npm10.9.3 (approved pair), Vite8.3.4. Ran npm ci with writable temporary cache, dependency checker and npm run build before source checkpoint; repeated build from clean source did not change tracked notices. Reviewed whole app/model.js, app/app.js, CSS/HTML, tests, package/config and prepared workflow. Simplification retained one pure model interface, native table/form and only two justified runtime libraries; no extra framework/import pipeline/storage added.

Relevant paths: app/,tests/,.github/workflows/,package.json,package-lock.json,.npmrc,.node-version,vite.config.js,scripts/,licenses/. Inspected the whole tracked project; all executable tooling is in this set. Before/after final run: committed/staged/unstaged git diff checks against67ddbfa52b7f78416d82d88a3d055c7d141420ff all exit0; relevant untracked listing empty (including ignored). PLAN.md exists at tested commit and is unchanged/clean. Report-only commits may follow without changing applicability.

No automated tool certifies overall accessibility or domain validity. No genuine student usability study, actual Work-routing validation, GitHub workflow execution, live deployment or returning-live-browser update occurred. Publication requires the explicit gates in DEPLOYMENT.md and renewed evaluation if base/source-link/config changes.

## Independent review corrections — latest evaluated source

Tested checkpoint: 445504c512ed6ea69e9c4eaa350db343cd85029c. Four confirmed findings are corrected: accepted 80-character seeds wrap at narrow widths; one-day stock series render point markers; validation identifies the visible field label, associates the error using aria-invalid/aria-describedby and focuses that field; the 10,000-unit hint now describes input limits rather than a model-wide stock capacity. Model assumptions and calculations are unchanged.

Browser suite: 14 passed, zero failed. The new UI group exercises the actual application in a 320px frame, checks page reflow, distinguishes plot markers from legend symbols, submits invalid lead time and verifies field focus/association and recovery. The first marker assertion could also count legend symbols; it was strengthened before the final passing run, retaining its earlier checkpoint in Git. The existing 13 independent model checks still pass. Production one-day summaries/ledger show 25 units for each policy and actual SVG plot marks are present. Lead time zero displays the visible label and focuses the invalid control; narrow production frame measures 319/319 client/scroll width.

Built production output under /fresh-inventory/ with unchanged locked dependencies. Bundle-size warning remains approximately 536kB. Source/plan freshness checks are clean against this checkpoint. Browser nested-frame click/key control remained unreliable, so functional regression tests execute inside their same-origin test frame and manual actions use the top-level production page. No new full accessibility, physical-device, network-isolation or live deployment claim. Original failed rounds and observations above remain historical evidence.
