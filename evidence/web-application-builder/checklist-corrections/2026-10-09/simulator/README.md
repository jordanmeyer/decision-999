# Simulator remaining-checklist corrections

Scope: current 126-item checklist; current source checkpoint and final browser observations are recorded below. Historical first-revision evidence remains intact. These are maintainer/agent checks, not student outcomes or screen-reader certification.

## Per-ID disposition

| ID | Correction or evidence boundary |
| --- | --- |
| ALL-02 | Five bounded prediction/control/answer/limitation tasks in BUILD-STORY; concise app link. |
| ALL-05 | Retained result-first page and keyboard skip link. |
| ALL-07 | Reload/copy guidance beside editing and copy action. |
| ALL-08 | Not applicable: original Sales footer is outside this app. |
| ALL-11 | OPEN: actual screen-reader task observations required; protocol below. Agent/DOM evidence cannot close this. |
| ALL-12 | Root inspected actual319px extreme curves/downside/certainty and separate1280px/200% result, downside, model/shared-world table and keyboard-scrolled comparisons. These specified views passed; uninspected states, physical-device, screen-reader and novice claims remain outside scope. |
| ALL-14 | Copied completed-run record preserves inputs/seed/runs/cents/source/risk method, now adds conditional-launch boundary and expected/point/upper values. Root inspected actual copied assumptions, precision-boundary record and unchanged completed record after invalid edit. |
| ALL-16 | OPEN: actual novice walkthrough required; protocol below. No instructional-readiness claim. |
| SIM-04 | Exercise 1 derives 469/$6,068 versus 558/$6,510, ~$442 tradeoff, point loss vs Wilson endpoint and no qualifying order. |
| SIM-05 | Exercise 2 derives $5,600/$8,000/$6,900 certainty results and optimum500. Existing exact test retained. |
| SIM-06 | Demand preview beside inputs shows conditional continuous mean plus seeded rounded mean/5th/median/95th percentiles. Half-normal independent mean50√(2/π) tested. Exercise3 explains conditioning versus clipping. |
| SIM-07 | Shared-scenario selector/table uses the same completed sample as all5,000 quantities and selected-order histogram; exercise4 hand-checks scenario1. |
| SIM-10 | Recommendation includes simulated fifth percentile, explicit non-worst-case wording, and a direct button opening/focusing its downside disclosure. |
| SIM-12 | Model boundaries cover certainty/equal costs, half-normal, none eligible, exact Wilson equality and negative expected contribution. Root observed negative/flat curves, no eligible order, low-mean/equal-cost tails, interval-boundary choice/copy and certainty histogram; only inspected views are claimed. |
| SIM-13 | Optional extension explicitly assigned in BUILD-STORY: justify/validate a joint demand-cost model. No correlation feature added. |
| SIM-14 | Initial visible preparation, painted running message, aria-busy and disabled start controls; one shared run sample reused. Preliminary configured-Mac Node quantity scan took192ms. Root observed an89ms configured-Mac browser run. Intended student hardware is unavailable; its performance gate stays OPEN, with worker decision deferred to measurement. |
| SIM-15 | “If proceeding” recommendation plus explicit no-launch boundary; negative eligible expected contribution warns optimization does not justify launching. Test confirms500/−$88,000 under loose risk. |

## Production review script

Test suite: http://127.0.0.1:9701/tests/ . Production: http://127.0.0.1:9702/bab-example-simulator/ . Local production-only QA copies: `desktop.html`, `narrow.html`, `text200.html` at that same base. These copies are generated from authored tests after build; not part of the published build.

1. Fresh production load: preparation/running state replaces empty results; report observed duration from form status. Check initial controls cannot queue a duplicate run. Confirm default469, unscreened558, point2.66%, upper2.9940218%, fifth percentile$1,274. Click downside shortcut: disclosure opens for469 and summary receives focus.
2. Open assumptions; risk20 and run→558; risk0 and run→none. Confirm pending edits retain visibly attributed prior results. Copy each completed record from methods; inspect seed, units, entered risk, upper endpoint and launch boundary.
3. Certainty preset→500/$8,000, comparison400/$5,600 and600/$6,900; zero-width histogram remains readable. Set fixed100000 and risk100→500/−$88,000 with warning. Curve includes a zero reference above negative values; copy retains condition. Zero risk under the same certain losses→none.
4. Reset; mean0, deviation50: beside-input mean39.9, samplemean39.9,5th3,median34,95th97. Run; inspect curve/histogram and absence of misleading zero demand. Set equal landed costs while deviation remains50: demand uncertainty remains.
5. Reset; risk2.994→468, then2.995→469. Result endpoint precision must explain the boundary; inspect copied values together.
6. Shared scenario1: demand424/cost$19.64 in every row; order500 contribution$6,020. Change to5,000; every row receives same new world. Keyboard select and disclosure, invalid blank input/recovery, and copy fallback must remain usable.
7. `narrow.html`: actual iframe320 CSSpx (record observed size if host rounding differs), inspect complete default, demand disclosure, downside/histogram, methods tables and controls. Horizontal scrolling belongs only to exact tables. `text200.html`:1280 CSSpx iframe, root32px/body32px text; it reruns after enlargement so chart labels scale too. Inspect full controls/chart labels/readability, not only overflow. “Capture layout metrics” reports dimensions and live status. Do not change the global browser viewport.

## Human evidence still required

Novice protocol (ALL-16): without coaching, ask a novice to explain default469versus558, predict20%, change it, recover a blank price, and explain one model limit. Record participant experience, prompts, observed confusion and revisions; do not infer learning from agent success.

Screen-reader protocol (ALL-11): record reader/browser/version; run default interpretation, edit mean, recover blank price, inspect chosen downside, read the shared-scenario and analytic tables, copy record. Record actual announcements, focus and recovery. DOM names and keyboard checks are supporting evidence only.

Student-device protocol (SIM-14): record hardware/browser, cold-font and warm-run timings, whether preparation paints, input delay and duplicate prevention at default and mean5000/deviation5000. Add a worker only if measured unresponsiveness warrants it; configured-Mac results are not that evidence.

## Retained rounds

Round1 Node model adapter:23/24; failed guessed half-normal scenario1 expectation21(actual17). Removed that unrelated guess; conditional mean/quantiles and independently hand-checked shared default scenario remain. Round2 Node adapter24/24. A Node adapter is not a browser suite result. Production build succeeded with existing ECharts bundle-size warning. Final checkpoint verification and root review pending.

## Source checkpoints and independent review

Initial correction checkpoint5381a827396b7e3d0749d65fd89009452f3223db. Independent source review found tick spacing ignored the zero-inclusive domain, requesting21–2001ticks for supported negative/flat cases. Corrected at0f0fd7441ba10190fd5de4f4e2db9926aee86932; bounded nice spacing preserves zero. A flat−$100000 case now uses$20000/six ticks. The failed round remains in app EVALUATION.

Independent data-agent source/model PASS at0f0fd744: complete model/app/markup/styles/tests/walkthrough inspected; default, certainty, half-normal and paired-world arithmetic reconciles. Actual graphics/timing/root browser review pending; human gates unchanged. Participant sheet is NOVICE-TASKS.md.

## Current root browser witness — correction source 0f0fd744

Root reports the actual browser model suite passed 24/24 for the current correction round. Application source remains `0f0fd7441ba10190fd5de4f4e2db9926aee86932`, independently source/model reviewed by the data agent. This report adds no application change and does not repeat unchanged tests.

Full production interactions, corrected negative/flat chart inspection, 320px and 200% text checks, clipboard and configured-browser timing remain pending. Intended-student-device timing (SIM-14), actual screen-reader tasks (ALL-11) and novice observations (ALL-16) remain open. Earlier failed expectation and axis rounds are preserved; the browser case count alone does not close those rendered or human gates.

## Root production boundary witness — source 0f0fd744

The coordinator observed the supported flat case with price, recovery and both unit costs $10, fixed cost $100,000 and risk limit 100%: every order gives −$100,000, the tie selects one unit, and the app warns that the least loss does not justify launching. The corrected chart has six readable y ticks from −$100K to $0. The actual 320px authored frame measured 319px client and scroll widths; `narrow-flat-curve.png` preserves the inspected production chart.

Certainty with fixed cost $100,000 and risk 100% selected 500 / −$88,000, with 400 / −$90,400 and 600 / −$89,100 comparisons. Risk zero produced no eligible quantity. Mean zero / deviation 50 showed conditional mean 39.9, sampled mean 39.9 and 5th/median/95th percentiles 3/34/97. These actual observations are retained in course `browser-boundaries.json`.

The separate 1280px production frame with root/body text 32px measured page/scroll width 1280; the coordinator inspected readable result and chart-entry content. An observed run took 89ms on the configured Mac. This is scoped rendering/timing evidence, not complete worst-case 200% coverage or intended-student-device performance. Clipboard, the remaining full production/layout task matrix, actual screen reader and novice observations stay open. No application code changed for this report.


Remaining gaps and reproducible checks are consolidated in [REMAINING-UI-CHECKS.md](REMAINING-UI-CHECKS.md). This instruction sheet adds no completed evidence.

## Root precision, downside, shared-world and recovery witness — source0f0fd744

Root's actual319px production check activated Inspect this order’s downside: it opened the469-unit disclosure and focused its summary. `narrow-downside.png` preserves the inspected result. Risk2.994% selected468 with upper estimate2.98345%;2.995% selected469 with upper2.994022%. The actual clipboard contained riskLimit0.02995, seedtote-2026,10000 runs, USD cents and the source. `browser-precision-shared-worlds.json` retains those observations.

Shared scenario5000 gave demand217/cost$19.78 in every displayed row; scenario10000 gave478/$20.59 in every row. Blank price then Run focused the price error, and copying retained the exact previously completed valid record. Restoring price45 and using mean0/deviation50 produced no eligible quantity with an unscreened peak50; the distribution varied. Equal cost21 retained demand uncertainty with fifth percentile−$4445, median−$3360 and95th percentile−$2800.

The certainty preset selected500/$8000; all displayed quantiles agreed and its single100% histogram bar was readable at319px, saved as `narrow-certainty.png`. These are actual tests of the inspected views, not a full enlarged-layout, physical-student-device, novice or screen-reader certification. The remaining200% disclosure/table coverage and human/device tasks retain their separate scope. App source remains0f0fd7441ba10190fd5de4f4e2db9926aee86932; report only, no unchanged model-suite rerun.

## Root enlarged downside, model and comparison views — source0f0fd744

Root inspected the actual1280px production frame with root/body text32px. The downside disclosure, shared-world selector and large histogram axis were readable. The expanded Model disclosure and shared-world table fitted a1043px content width with readable32px text; course `enlarged-model-table.png` preserves that view. The comparison table retained a focused local scroll container; ArrowRight completed at scrollLeft59.09 against a59px maximum after the native scroll animation. An immediate reading of0 had been taken before completion and is not a failed keyboard-scroll result.

These observations close the specifically requested enlarged downside/model/table and comparison-scroll views. They do not establish every possible layout or device, intended-student-hardware responsiveness, screen-reader speech or novice success. Source and model tests are unchanged; this report repeats no model suite and claims no publication.
