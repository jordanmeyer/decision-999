# Original inventory trial — checklist correction coverage

Checklist: `evidence/browser-app-builder/reviews/2026-10-09-example-app-checklist.md`, INV-01–13 and applicable ALL items. Review date: October 9, 2026. Repository: `/private/tmp/bab-checklist-originals-2026-10-09/inventory`. Current chart/source checkpoint: `ff6c1bd0724a163942ba74cdfc516a047484c46e`; unchanged model checkpoint: `cc3f6e1d183508aa658db0ac94504f73745d87ed`. No push or current live check. The initial review snapshot below predates the measured heading-overflow repair and version-4 asset references; the new source checkpoint and appended evaluation are the current reference.

## Independent source review

Operations reviewer read the complete current model, app controller, HTML, styles, worked lesson, PLAN and historical EVALUATION. No remaining concrete source/model defect found after the three prior findings were repaired: strict JSON-number validation before restoration, comparison invalidation on edits, and visible one-day closing-stock point. Browser-history invalidation is also present. Source/model PASS is bounded to that review; it is not a complete accessibility or instructional-readiness verdict. No browser or broad test rerun was performed for this follow-up.

Independent five-day derivation below uses initial 5, fixed demand 4/day, point 3, order quantity 6, lead 2 and horizon 5. On-order/position are before the new order; next due is after it.

| Day | Opening | Arrivals | Sales | Closing | On order | Position | Ordered | Next due |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 5 | 0 | 4 | 1 | 0 | 1 | 6 | 3 |
| 2 | 1 | 0 | 1 | 0 | 6 | 6 | 0 | 3 |
| 3 | 0 | 6 | 4 | 2 | 0 | 2 | 6 | 5 |
| 4 | 2 | 0 | 2 | 0 | 6 | 6 | 0 | 5 |
| 5 | 0 | 6 | 4 | 2 | 0 | 2 | 6 | 7 |

Thus sales 15/20 demand = 75% fill; three of five days have no unmet demand (60%); average closing stock is 1, final on-hand 2, pipeline 6. Increasing only the point to 6 gives sales 17/20 = 85%, average closing 1.4, ending 0 and pipeline 12. These are independent derivations, not browser observations. Prior focused model checks corroborated these numbers; they do not establish UI behavior.

PLAN now includes the strict local record, controlled comparison, precise ledger timing, timeline/pagination and bounded lesson. Historical EVALUATION rounds remain unchanged and apply only to their named commits; their earlier passes do not establish this revision's new restore/comparison/chart/layout behavior.

## Per-requirement disposition

| ID | Current source / teaching disposition | Evidence and remaining verification |
| --- | --- | --- |
| INV-01 | KPI-adjacent copy calls each run a seeded sample path rather than expected service; lesson asks comparison of seeds 42/43. | Source reviewed. No claim that one run validates a policy. |
| INV-02 | Ledger includes outstanding stock and position before each decision, with closing + on-order and threshold/order explanation. | Root actual delayed-preset five-row ledger matched; independent table above. |
| INV-03 | Opening/arrivals/demand/sales/closing/position/next-due shown; lesson predicts days 2/3 and reveals the complete five-day derivation. | Root actual delayed-preset full ledger and 15/20 sales, ending 2/pipeline 6 supplied. |
| INV-04 | Controls and lesson specify end-of-day review, at most one fixed-size order, equality triggers, neither continuous review nor order-up-to. Tiny-order consequence explained. | Root actual quantity1/demand4 task showed40% fill,8/20 sales, four days with unmet demand and pipeline2; source policy explanation remains explicit. |
| INV-05 | Summary reports days with/without unmet demand separately from unit fill. Worked example gives 75% unit fill versus 60% days without unmet demand. | Independent arithmetic and source reviewed. |
| INV-06 | No-cost/no-economic-optimum boundary beside KPI and comparison; average, ending and pipeline inventory visible. | Root actual point-6 comparison showed85% fill, average1.4, ending0/pipeline12 versus current75%, average1, ending2/pipeline6. |
| INV-07 | Final-day order continues beyond reporting window; on-hand/pipeline distinguished and next due day shown. | Root actual final on-hand 2/pipeline 6; independent due day 7. |
| INV-08 | Native SVG closing-stock line, receipt circles and one-day closing point; exact paginated ledger alongside. | Root actual319px one-day/default30-day charts and separate200% chart passed after the ff6c1bd label repair:14px/28px readable labels, point/stock/arrival values retained. Failed and fixed screenshots below. |
| INV-09 | Comparison changes only point/quantity against the same seed, demand and horizon; shows fill, average/ending/pipeline inventory. Edits clear old comparison. | Root actual same-path comparison matched independent point-6 outcomes; editing cleared the old table with pending copy. Actual invalid-comparison recovery remains open. |
| INV-10 | Ledger pages 15 days at a time; previous/next boundaries; full rows retained in record. | Root actual365-day navigation:24 Next activations reached Days361–365, five rows, Next disabled. The five-day complete generated JSON is now inspected in browser-save-restore.json; 365-day completeness remains source-reviewed, while every row is available through actual tested pagination. |
| INV-11 | Local JSON contains eight inputs including seed, event convention, summary and full ledger, format marker/source URL. Restore rejects non-numeric/bad inputs before mutation and recalculates. | Root actual authored save/restore harness5/5: generated complete JSON, changed-run restoration/re-save equality, malformed/string-type rejection and recovery. Synthetic File/DataTransfer and Blob capture; no native picker/disk-save claim. |
| INV-12 | Lesson explains zero initial stock/demand, quantity below demand, lead longer than horizon and threshold equality; zero demand remains N/A. | Root actual browser-boundaries.json records zero demand N/A with explicit lack-of-service-evidence warning, zero initial stock50%, tiny order40%, lead beyond horizon25%/no receipts, threshold equality orders6, and one-day100%. Full input-error recovery remains a separate task. |
| INV-13 | Separate advanced replication assignment requires seeds/count and variability across run-level outcomes, distinct from within-run daily variability; common seeds for paired policies. | Optional extension disposition complete; no replication interface added. |
| ALL-02 | App links to prediction/change/worked-answer/limitation lesson. | Source reviewed; human learning outcome unverified. |
| ALL-05 | Visible sample-path-result link precedes the form; run status directs to it. | Root actual319px keyboard Enter on View sample-path result focused #results-heading at viewport top; supplementary record in ../pricing/browser-orientation.json. |
| ALL-07 | Save warning beside complete-run export; restore beside input editing; reload/default boundary explicit. | Root actual authored save/restore5/5 is recorded below. No automatic storage or native picker/disk-save claim. |
| ALL-08 | Original simulated history retained; worked lesson identifies maintainer-built synthetic example. Specifically requested Sales lens footer is outside this repo. | No real-student outcome claimed. |
| ALL-11 | Native labels, associated input errors, live run status, named exact-table scroll region and table headings present. | Actual screen-reader recovery, chart/table interpretation, comparison and pagination task not observed; remains open. |
| ALL-12 | Responsive styles and separate test fixture exist. | Root actual authored200% fixture found419px overflow in a319px inner frame; heading wrapping/min-width repair retested at319/319. This closes the measured overflow defect only. Complete320px/200% readability and reachable controls remain open; narrow-result.png retains a current result capture. |
| ALL-14 | Record carries all assumptions, seed, event timing, complete result/ledger and source, sufficient to recalculate locally. | Root inspected the generated complete record and restored/re-saved exact equality after changing and running the inputs; browser-save-restore.json. Human/native picker task remains separate. |
| ALL-16 | Prediction and worked-answer lesson available. | No uncoached novice participant observed. User will arrange a participant; no instructional-readiness claim. |

## Root actual-browser witness

Root supplied: **13 browser model tests passed; the delayed-delivery preset showed the complete five-row ledger, 75% fill, 15/20 sales, ending stock 2 and pipeline stock 6.** These are attributed root observations, not observations made by this source reviewer. Later root reports and browser-boundaries.json add the six boundary cases, same-path75→85% comparison with edit invalidation, and365-day pagination. Root also measured a200% heading overflow419→319 repair in a319px inner frame. Actual restore/export, full layout reachability and screen-reader/novice execution remain unobserved here. No current publication or live-site verification is claimed.

## Initial independent review snapshot (retained history)

SHA-256 of reviewed source, to distinguish this source review from the old HEAD and old evaluation rounds:

| File | SHA-256 |
| --- | --- |
| app/app.js | `42d42d2bb05468397e6b541bb879bde96bbf8badee837d691b6d53990a9d245a` |
| app/model.js | `1d7c35d19741aa7ec940c94dd871e0a88cce31e91497238c915f931ba993b880` |
| app/index.html | `9d64def0f642453b64889a230ba6f0a1f6a8d017e776ff408d7c8599e93dfc3c` |
| app/learn.html | `8e7e7bb25ea8dc3e7a092cc1d7b1b0fbd65003fe3d368bb4a5a54fceeb747a14` |
| app/style.css | `7f4ffff2a7c6ecf624fa03132e557d2ecb0ba5b401ae299e7960582a2567491c` |

The initial reviewer changed only PLAN.md and this record, without an app edit or browser run. The later authorized handoff committed the public source/PLAN/BUILD-STORY/tests, including root’s heading-wrap repair and tests/layout.html, then a report-only EVALUATION addition. The fixture doubles computed fonts on existing DOM inside a bordered iframe; it is authored text enlargement, not device zoom. New DOM requires reapplying enlargement. Pending gates remain explicit; no push occurred.


## Current-checkpoint browser confirmation

Root subsequently reran the actual suite on the committed current files: **13/13 passed, zero failures** at source `cc3f6e1d183508aa658db0ac94504f73745d87ed`. No app/model/test changes followed. This adds current-source model evidence; pending layout, exports and human tasks remain open. Earlier observed-round qualifications are retained as history.


## Scoped current layout witness

Root reports a current319 CSS-pixel narrow result and a separate1280-frame authored200% text result were pictured and readable, with matching page client/scroll width. Inventory’s earlier419→319 heading-overflow failure/repair remains retained. These are bounded result-view observations, not every disclosure/table/control state or native device zoom; ALL-12 stays pending for broader coverage.


## Actual saved-record round trip

Root executed tests/save-restore-workflow.html at tests checkpoint84a0d4b09db4eeb161f992b3747c746df0d7c6f4 against unchanged app sourcecc3f6e1:5/5 actual browser cases passed. Generated JSON contained all eight numeric assumptions, the independent five-day ledger/totals, source URL and event convention. After actually running initial0/seed99 (50% fill), File/DataTransfer restore returned the saved five-day75% case and reproduced the complete re-saved JSON. Malformed JSON and coercible string input "0x10" rejected without changing any input/result/ledger cell or the underlying saved record; valid reselection recovered afterward. See browser-save-restore.json. An independent data-agent source review found no actionable race or false-pass path. Only the native Blob download click was intercepted; no native picker or disk-save claim.

Root subsequently observed the one-day chart at319px: its visible closing-stock point and100%fill/4of4sales/stock1 matched the ledger (INV-08). The same visual inspection found actual tiny chart labels around6.7CSS pixels because the fixed600-unit viewBox scaled to a narrow container. This is an ALL-12 failure retained separately from the passing numerical/point result; narrow-one-day.png records it. A container-sized SVG correction is being prepared and requires actual retest before closure.


The narrow-label repair is committed at ff6c1bd0724a163942ba74cdfc516a047484c46e (app/PLAN/BUILD-STORY; model and test harnesses unchanged). It draws SVG geometry at the current container width with14px baseline inherited text, font-relative margins/height and a local ResizeObserver. Results are visible before width measurement. Syntax/whitespace checks and independent complete-controller/CSS/HTML source review passed; actual narrow and enlarged-text retest is still pending. Asset entry versions advance to5 because an earlier live round demonstrated stale entry caching.


## Actual chart repair retest — ff6c1bd

Root's targeted actual-browser retest passed. At 319 CSS pixels the one-day SVG had viewBox `0 0 288 224`, rendered approximately287.69×223.98px, and14px labels: the closing point at1 unit/day1 was visible and readable. Reset to the default30-day run retained readable labels, the stock line and arrival circles at the same size. In a separate nominal1280px frame with authored200% text, the SVG used1184×448 geometry and28px labels; Units, Day1–30, maximum14 and arrivals were readable. See browser-chart-reflow.json, narrow-one-day-fixed.png and enlarged-chart-fixed.png. Retain narrow-one-day.png as the failed pre-repair capture. This closes the observed chart-label defect and supplies the bounded INV-08 rendered witness; broader ALL-12 task views, actual device zoom, screen-reader and novice evidence remain separate.

Source/model/test freshness: app/PLAN/BUILD-STORY/tests and workflow comparisons against ff6c1bd0724a163942ba74cdfc516a047484c46e are clean; only this report follows the source checkpoint. The model is unchanged from the observed13/13 browser suite, and the save/restore harness is unchanged from root's actual5/5 at84a0d4b before the chart repair. Neither suite is claimed newly rerun after this rendering-only change. No push or current live deployment occurred.


## Original result-route follow-up

Root used native keyboard Enter on **View sample-path result** in an actual319 CSS-pixel frame. Focus arrived at #results-heading at the viewport top. The supplementary observation is in ../pricing/browser-orientation.json. This verifies that result route only; it does not establish physical mobile-keyboard behavior, screen-reader speech or every layout state. Application source is unchanged.
