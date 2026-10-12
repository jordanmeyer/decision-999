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

## Live revision round — 2026-10-09

Checkpoint 442fcc52f13b4accf6ff282a18a5c436181eeea8. Node22.19.0/npm10.9.3. Approved dependency check, npm ci (0 vulnerabilities), production build passed. Source, tests, PLAN, scripts/notices and workflow are committed; relevant-path staged/unstaged/HEAD diffs and untracked listing were empty after checks.

CUA observed 37/37 model checks. Production /bab-example-process/ on9722 showed Finance over capacity at default,471.5 nominal minutes,480/420 daily work;90/10 showed370.5 and−101 while Finance remained114.3%. Finance capacity500 changed headline to workload fits; it did not change nominal time. Native route20% plus90% produced110% invalid draft, paused results, and Restore last valid recovered10%. Keyboard Tab from share reached Delete this route. Narrow route25% produced95% invalid and recovery restored30%.

Same-origin production proxy frames authored at1440/390/320 measured1439/389/319 inner pixels under the existing browser zoom; scrollWidth equaled innerWidth in all. First-load heights1680/2780/3065. Local EB Garamond400/Open Sans400+600 were loaded in FontFaceSet; observed resource entries were only local CSS/JS/font assets. No warning/error console entries were returned. Phone screens use readable step/route list; all native fields are outside a capped canvas and share controls were reached/edited. Secondary audit is collapsed. Back after changed routing/capacity/view consistently reset controls and results to40 requests,420 Finance,70/30,471.5 and Capacity before interaction.

Exploratory tooling limitations retained: read-only browser evaluate cannot iterate its proxied document.fonts; authored layout diagnostics inspect real FontFaceSet. Test-server config hot reload did not install the new proxy; restarting its owned session fixed the initial blank frame. No app numerical failure occurred. File import/export is unchanged and existing evaluations remain; this round did not repeat OS file chooser or downloaded-file checks. Source/How-built destination points at the actual repo record but that record is not public until deployment. Independent revision review and live publication pending.
