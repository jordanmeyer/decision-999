# Original Sales lens — checklist correction coverage

Current source checkpoint: `3734d1f1676267bd8ec44924941fcda1a198563a`. Repository `/private/tmp/bab-checklist-originals-2026-10-09/sales`. Checklist SALES-01–14 and applicable ALL items. No push or current live check. Original simulated-planning and failed evaluation history remain intact.

Current report HEAD: `80c5e5c09049bbf06233bf179f354bee13e71776`; generated-export harness checkpoint: `45dbbfaf677cde599b4e541d34faf8c892dc0f0e`. Report-only commits leave app/model source at `3734d1f1676267bd8ec44924941fcda1a198563a`.

## Independent review and known answers

Operations reviewer read the full current model/controller/HTML/styles/lesson and PLAN. No remaining concrete source/model defect found. Review PASS is separate from complete UI, accessibility or instructional-readiness approval. Exact-pair group keys and separate Region/Product cells prevent label collisions. Imported strings render as text; parsing completes before replacing source state. Both DOM tables are bounded while JSON/CSV preserve all matching rows.

Independent arithmetic: North Notebook $1200−$1060=$140/60 units; North Pen $450−$270=$180/45; South Pen $900−$720=$180/90; South Notebook $400−$300=$100/25. Totals are $2950/$2350/$600 and220 units; weighted rate600/2950=20.33898%. North Pen and South Pen tie on contribution but differ at $4/unit versus $2/unit and40% versus20%. The corrected import independently gives2×10.10+4=$24.20 revenue,2×3.03+5=$11.06 cost and$13.14 contribution.

| ID | Source / teaching disposition | Actual evidence and remaining gap |
| --- | --- | --- |
| SALES-01 | Invalid date interval hides totals/groups/table/exports and labels results unavailable; source remains identified. | Source reviewed; root's model46/46 includes interval rejection. Actual authored invalid-interval hiding and Clear filters recovery passed at45dbbfa. |
| SALES-02 | Twelve-line August–October synthetic default with changing cost rates and two October losses; original three-row preset retained. | Independent totals above; root model46/46 includes independent sample totals. |
| SALES-03 | Both products occur in both regions; compare within product/region. | Independent grouped totals and exact-pair source reviewed. |
| SALES-04 | Linked lesson asks which group contributes most before/after volume adjustment and reveals worked answers/limits. | Source reviewed; novice interpretation unobserved. |
| SALES-05 | Contribution after product cost is consistent; overhead/taxes/shipping/returns excluded and net-profit interpretation rejected. | Source reviewed. |
| SALES-06 | Weighted contribution is aggregate contribution/revenue; group summary includes total/per-unit/rate. Highest revenue group differs from contribution leaders. | Independent $600/$2950 and Pen comparison above. |
| SALES-07 | Each row is a sales line without transaction ID; identical lines sum without deduplication. | Source reviewed; root model46/46 includes duplicate-policy check. |
| SALES-08 | Detail pages50 rows; top50 groups with explicit cap; exports include every match/group. | Actual unique-group10,000-row import:50 detail +50 group DOM rows,56.7ms result DOM,132.5ms through two later frames. One configured browser, not student-device comfort evidence. |
| SALES-09 | Native grouped summary with exact separate Region/Product, units, revenue, contribution, per-unit and weighted rate. | Actual colliding concatenated names remain distinct in separate cells. |
| SALES-10 | Loaded source's first/last dates visible, Through inclusive, Clear filters removes restrictions. | Source reviewed. Actual authored interval and clear-recovery UI record passed at45dbbfa. |
| SALES-11 | Valid no-match explains active filters and loaded source with direct Clear these filters; separate invalid/rejected states. | Actual authored valid empty2027 interval explained source/scope and zero totals; Clear these filters restored all12 imported rows. Rejected-import identity also retained in the earlier harness. |
| SALES-12 | JSON includes source/provenance/filter/units/totals/groups/all rows/limits. CSV contains all matching six-column rows and reminder to keep companion JSON. | Actual linked12-row template fetched/imported; generated filtered CSV+JSON exact rows/source/filters/units/totals verified. Native saving remains unobserved. |
| SALES-13 | Lesson and participant script specify template→edit→import→malform→correct→reset. | Authored actual4/4 synthetic File/DataTransfer import checks pass, including rejection retention and correction. Native picker and uncoached novice workflow remain open; harness does not close this human requirement. |
| SALES-14 | Separate next assignment links Common Goods and requires sale IDs, separate event grain, aggregate-before-join and cohort/observation-time interpretation. | Optional extension disposition complete; no returns system added here. |
| ALL-02 | Linked prediction/change/worked-answer/limitation lesson. | Source reviewed; learning outcome unverified. |
| ALL-05 | Visible View analysis link precedes controls and targets results heading. | Root actual319px keyboard Enter on View analysis focused #results-heading at viewport top; supplementary record in ../pricing/browser-orientation.json. |
| ALL-07 | Persistence boundary beside upload and exports; save JSON/CSV with no automatic storage. | Actual generated JSON/CSV content passed for the filtered view; native saving remains unobserved. |
| ALL-08 | Footer now explicitly maintainer-built, simulated planning and synthetic bundled samples. Uploaded data separately identified as unverified user data. | Source correction complete. |
| ALL-11 | Native controls, labels, status/alert messages, labeled table scroll regions and result destination. | Complete actual screen-reader tasks remain unobserved. |
| ALL-12 | Authored layout fixture included in source. It snapshots/doubles existing computed fonts inside a bordered iframe; not device zoom, and new DOM needs enlargement reapplied. | Current complete320px and separate200% text readability/control-reachability tasks remain open. |
| ALL-14 | Analytical JSON includes interpretation context and source-provenance limits; CSV remains machine-readable with a companion-note instruction. | Actual generated CSV/JSON content verified at45dbbfa; native save-dialog behavior remains unobserved. |
| ALL-16 | Participant task script and lesson prepared. | No uncoached novice observed; no instructional-readiness claim. |

## Attributed actual browser evidence

Root reported46/46 browser model cases before the final display/provenance corrections. Model/model tests were unchanged afterward; this is retained model evidence, not a new run at the committed checkpoint. Actual current4/4 import harness findings are preserved in [browser-imports.json](browser-imports.json). The harness supplies synthetic File/DataTransfer events to real app import/render code; no response is stubbed. It does not use the native file picker or substitute for a human task.

Environment from JSON: Chrome155 user agent on the configured Mac,16 logical cores, actual iframe1280×843. Maximum fixture297,830 bytes/10,000 unique groups gave $100,000 revenue/$40,000 cost/$60,000 contribution/10,000 units. Both tables rendered50 rows with explicit group cap. Timings include File.text, parse, grouping and rendering:56.7ms event-to-result DOM and132.5ms through two subsequent frames. Malformed quote retained that source and result; corrected same filename gave two rows/$24.20/$11.06/$13.14/3 units. A / B + C and A + B / C stayed distinguishable as separate Region/Product cells.

Source checkpoint includes version4 local asset references, PLAN/BUILD-STORY/lesson, synthetic CSV fixtures, tests/layout.html and tests/import-workflow.html. Scoped staged whitespace checks passed; original CRLF fixture retained. EVALUATION appends this bounded evidence after historical rounds. No push, live-site verification, device-zoom claim or novice/screen-reader evidence is inferred.


## Current-checkpoint browser confirmation

Root subsequently reran the actual suite on the committed current files: **46/46 passed, zero failures** at source `3734d1f1676267bd8ec44924941fcda1a198563a`. No app/model/test changes followed. This adds current-source model evidence; pending layout, exports and human tasks remain open. Earlier observed-round qualifications are retained as history.


## Scoped current layout witness

Root reports a current319 CSS-pixel narrow result and a separate1280-frame authored200% text result were pictured and readable, with matching page client/scroll width. These are bounded result-view observations, not every disclosure/table/control state or native device zoom; ALL-12 stays pending for broader coverage.


## Actual template, generated-export and filter-recovery workflow — 4/4 PASS

Root ran tests/export-workflow.html through CUA at tests-only checkpoint 45dbbfaf677cde599b4e541d34faf8c892dc0f0e; application/model source remains 3734d1f1676267bd8ec44924941fcda1a198563a. Actual observations are preserved in course sales/browser-export-recovery.json. The authored harness fetched the template URL actually linked by the app, observed its six headers and twelve data rows, and imported that file through the real File/DataTransfer input path. The visible source identity and $2,950 revenue / $2,350 cost / $600 contribution / 220 units matched the independent reference.

September–October / North / Pen selected two actual rows, 35 units, $350 revenue / $210 cost / $140 contribution. Both generated matching-row CSV and analytical JSON matched every selected row, the uploaded filename, active filters, exact cents/whole-unit policy, group totals, provenance caution and model limitations. The Blob handoff was captured; native saving was not exercised.

An actual reversed date interval hid invalid results/exports while retaining the loaded source identity and marked both date fields invalid. The actual Clear filters button restored the complete imported source. A valid 2027 date interval produced an explained zero-match view with zero totals, then Clear these filters restored all twelve rows and default totals. These add actual authored UI evidence for SALES-01/10/11/12 and contextual-export evidence for ALL-07/14. They do not establish native file-picker/save behavior, a screen-reader task or the uncoached SALES-13 / ALL-16 novice workflow. No app/model/prior-test edits, new dependencies or push accompanied this harness.


### Independent export-workflow source review

The models reviewer read the complete export-workflow harness, current app.js and actual template.csv. The twelve-row reference ($2,950/$2,350/$600/220 units) and September–October North Pen subset ($350/$210/$140/35 units) independently reconcile. Real synchronous filter events, async import completion, deferred reset rendering, no-match recovery, Blob filenames and exact cents/rows/filter/provenance assertions were coherent. Hooks restore in finally; no actionable race or false-pass issue was found. This source PASS is separate from root’s actual4/4 browser result and makes no native picker/save or human-session claim.


## Original result-route follow-up

Root used native keyboard Enter on **View analysis** in an actual319 CSS-pixel frame. Focus arrived at #results-heading at the viewport top. The supplementary observation is in ../pricing/browser-orientation.json. This verifies that result route only; it does not establish physical mobile-keyboard behavior, screen-reader speech or every layout state. Application source is unchanged.
