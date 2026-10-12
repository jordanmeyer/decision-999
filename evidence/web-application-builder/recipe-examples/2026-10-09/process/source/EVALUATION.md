# Evaluation

## Exploratory round — 2026-10-09

Actual in-app browser model page showed34/34 passed,0 failed before source checkpoint. Tests import app/model.js. Independent arithmetic was agreed before implementation: baseline27.5 touch+444 wait=471.5min; simplified22.5+348=370.5min; reduction101; finance480/420=114.285…% and60min/day over both policies. Tests cover probability merges, zero/100% branches, zero arrivals, workload/volume/capacity separation, bad sums/cycles/orphans/schema/IDs/finite numbers, strict JSON and bytes. Assertions use1e-9 tolerance for explicit expected numbers.

Initial packaged graph FAILED visual readiness: five nodes existed but had visibility:hidden because node dimension changes were discarded while rebuilding controlled React Flow node props. Fixed by retaining measured dimensions separately as view state and ignoring irrelevant process updates. After rebuilding, browser inspected five visible nodes and no console warnings/errors. This failed exploratory check is preserved.

Actual production example button gave370.5min,−101min,21.4%, finance still overloaded. Editing the procurement route from10 to20 while direct route stayed90 showed Manager outgoing shares110%, paused results and offered Restore last valid. Restore worked. Adding a new review showed0%/disconnected errors; deleting it returned valid370.5 results. Attempted import of invalid-shares.json reported115% and retained370.5 current process. A real Export JSON download was created. These were exploratory checks before final committed-source evaluation, not publication approval.

## Final round

Pending committed checkpoint, reinstall/build, full production interaction/narrow check and independent reviewer verdict. Required failures will remain in this record and REVIEW.md.


## Independent source review — required correction at95ad432

Reviewer found the test helper near() could accept NaN/undefined: Math.abs(NaN)>tolerance is false. Corrected it to require Number.isFinite(actual) and added an explicit helper rejection check. Added reviewer-authored multi-merge and supported-bound fixtures with independent expected193min and9,600min answers; these are not fixtures inferred from app outputs. Final suite now has37 cases. Reviewer also requested actual rendered probes for80-character unbroken names and large supported load values. Those UI probes remain pending; source suspicion alone is not represented as a reproduced defect.

To support the already-approved80-character labels and bounded large loads, added one shared wrapping rule for imported card/node text and separated the percent-unit label from its responsive number. This is a source-level correction pending the independent rendered bound check, not a claimed reproduced UI failure. The single-width frame query makes that check straightforward. An attempted cross-frame file chooser timed out and reset the browser tool; no import occurred in that attempt.

## Final developer and independent handoff

Final actual browser37/37 observed at62e6f73 after restarting own test server for missed filesystem change events. The independent reviewer and root then found a320px long-label ledger presentation failure: a valid80character name collapsed to roughly2characters per line despite contained scrolling. Source checkpointaca04afaa1046785df0f46b7f95dbc14fc5f556e adds only12rem firstcolumn minimumwidth; model/appJS/PLAN unchanged. Root independently observed readable table names and reviewer inspected screenshot, closing the failure. IndependentPASS is inREVIEW.md with both failed rounds retained. Relevant source andPLAN diff againstaca04af is empty at report handoff.
