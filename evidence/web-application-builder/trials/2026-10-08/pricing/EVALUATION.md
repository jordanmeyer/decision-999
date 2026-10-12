# Evaluation

## Expected behavior established before execution

PLAN.md records hand arithmetic derived before implementation. The simulated student highlighted the risk of equating low break-even with a good price. The interface explicitly says entered quantity is not forecast sales and cannot determine an optimal price. Browser tests import app/model.js, include independent normal/boundary/cents/large-value cases and rejected input formats, and display loading/error states plus per-case expected/observed results.

## Setup and supplementary round

The coordinator verified the bundled starter module status and button transition in the shared browser. The original app replaced that starter after the simulated student agreed to the plan. Supplementary Node v22.19.0 evaluation ran tests/cases.js: 25/25 passed. This did not substitute for the browser run. No failed calculation round occurred. Source review and a separate simplification pass retained one calculation module and native form without frameworks, extra tooling or unused abstractions.

## Final browser round — 2026-10-08

Tested commit: **39fc83d2c757e27bccf0372e3e8f704602aaa596**. Relevant paths: app/, tests/, .github/workflows/. The full project file inventory showed no executable tooling elsewhere. The agreed PLAN.md, real source link and unchanged bundled Pages workflow were included in this checkpoint. Tests/source/plan were clean before and after the browser run. The comparison commands in the frozen evaluation-freshness reference all passed: current-vs-tested commit, staged, unstaged, untracked (including ignored) relevant files, and current-vs-tested PLAN.md. No substantive plan change followed the checkpoint.

Method: coordinator-operated CUA browser, serving the identical project files from a no-store loopback preview at http://127.0.0.1:9100/pricing/ to avoid stale starter modules. Original preview http://127.0.0.1:9101/ remains available. Browser engine/version was not supplied; the browser observations below were relayed by the coordinator, not independently observed by the app-writing agent.

| Check | Independent expected | Observed | Result |
| --- | --- | --- | --- |
| Browser test page | 25 cases pass | 25/25 visible passes | Pass |
| Default $20/$12/100/$500 | Profit $300; revenue $2,000; total $1,700; contribution $8; whole break-even 63 | All matched; USD two decimals | Pass |
| Edit quantity to 62 | Old output hidden; profit 62×8−500 = −$4 after Calculate | Hidden output, Enter Calculate gave −$4 | Pass |
| Fractional quantity 1.5 | Whole-unit error, no results, first bad field focus | Message shown, results hidden, quantity focused | Pass |
| Equal price/cost 12/12, fixed 500 | −$500, no break-even, zero contribution explained | Matched | Pass |
| Price10/cost12/quantity100/fixed0 | −$200; zero units break even, every extra sale loses money | Matched including warning | Pass |
| Decimal price19.90/cost19.80/quantity1000/fixed100 | 10 cents × 1000 = 10000 cents; profit $0, contribution $.10, theoretical/whole count1000 | All matched | Pass |
| Keyboard Calculate and Reset | Operate without mouse; reset restores defaults | Enter Calculate and keyboard Reset succeeded; final baseline restored | Pass |
| Narrow and desktop | Legible stacked/column layouts, no horizontal overflow | Actual iframe widths319 and1439 CSS pixels, legible screenshot, no document horizontal overflow | Pass |
| Console | No app warning/error | Inspected console warnings/errors empty | Pass |

The 25 visible browser test cases include the full independent baseline (all outputs in cents), profits at 62/63 units, extra-sale contribution and fixed-cost relationships, positive/zero/negative contribution cases, all-zero case, exact-cent .30/.20/3/.30 case, maximum supported scenario, break-even above quantity cap, maximum amount and whole-unit parsing, and rejection of empty/negative/over-precise/exponent/Infinity/NaN/comma/currency-symbol/over-limit/fractional-count inputs. Each case's expected and observed value is reproducible on tests/index.html.

Source-reviewed contrast pairs use opaque colors: white/navy 14.76:1, white/royal 7.75:1; independently calculated error text #8a3500 on #F3F2F1 is 7.25:1, input boundary #666 on white 5.74:1, error boundary #C84E00 on #F3F2F1 is 4.13:1. Native labels, field associations, non-color error text and visible focus styles are present. No logos, imagery, institutional endorsement claims or remote fonts. This is a scoped review, not full accessibility certification.

## Limitations and handoff

Required plan checks above pass at the recorded source checkpoint. **200% text zoom was not tested.** No screen-reader audit was performed. Runtime network capture was not supplied; source review finds local modules/CSS only, no fetch, remote assets, analytics or persistence, and an intentional external source link. Do not call source review a network trace. GitHub source navigation and live repository-path assets await publication checks.

The simulated student reviewed the assumptions and said they were clear and acceptable: break-even is a cost-coverage threshold, not an optimal price. No business forecast certification is implied. All content and both commits were reviewed as synthetic/public; approved public Git attribution is disclosed in SETUP.md. The workflow matches the frozen template byte-for-byte and packages only app/; app contains no symlinks. Report-only commits may follow this checkpoint without pretending source was re-evaluated. Recheck freshness immediately before publication and verify the actual deployed revision.

## Second version — final browser round, 2026-10-08

The simulated student requested a decimal-example preset after the first verified deployment. PLAN.md was updated with the new interaction requirement; formulas and model assumptions are unchanged. Expected preset output was derived before implementation: (19.90−19.80)×1000−100 = 0 USD; contribution $0.10, theoretical and whole-unit break-even 1000. Existing 25 model cases are retained. The new button reuses the existing update path. Supplementary Node v22.19.0 run: 25/25 passed.

Tested source commit: **df0e909f67ec1517909196007abb617350eef0fb**. Relevant paths remain app/, tests/, .github/workflows/; no additional executable tooling. The plan's new preset behavior was committed before the run. Full source/PLAN freshness checks passed immediately before and after the browser run. Source and tests are clean. This round evaluates the changed requirements rather than relabeling the first-round result.

Coordinator CUA browser observations on the identical files at the no-store loopback preview:

| Check | Expected | Observed | Result |
| --- | --- | --- | --- |
| Existing model browser tests | 25/25 pass | 25/25 visible passes | Pass |
| Invalid quantity then keyboard preset | Quantity 1.5 error clears; fields become 19.90/19.80/1000/100, profit $0.00, contribution $0.10, whole break-even 1000 | Enter on Load decimal example matched all expected values and cleared error | Pass |
| Keyboard original reset | Original defaults, profit $300.00, whole break-even 63 | Enter Reset matched | Pass |
| Narrow controls | Buttons wrap legibly with no horizontal overflow | Actual 319 CSS pixel iframe, no overflow, screenshot wraps cleanly | Pass |
| Desktop | Existing layout remains legible | Actual 1439 CSS pixel iframe inspected successfully | Pass |

No failed round occurred. First-round limitations remain: no 200% text zoom, screen-reader audit, or runtime network capture; browser engine version not supplied. The student-requested preset is evaluated and ready for the second publication. Before pushing, recheck relevant files and PLAN against this checkpoint; do not use the first evaluated commit for the changed interface.

## Returning-browser deployment regression — failed round

After the second push (5099d7934c31638925af693f7881d1ff450e40a6), the coordinator observed new HTML paired with an old cached app.js in the actual returning live browser. Load decimal example was inactive even after an ordinary reload. The workflow succeeded and there were no console errors; these did not catch the stale-entry-script behavior. The second local evaluation above remains an accurate no-store observation, but is insufficient evidence for returning-browser live acceptance.

Correction: change only the HTML entry-script URL to ./app.js?v=2 so the changed module receives a distinct request URL. No model or scope change; PLAN.md stays applicable. The coordinator authorized a third corrective deployment. Required retest: local preset/error clearing/reset/browser cases and then the returning live browser's decimal preset. New source checkpoint and observations will follow; the correction is not yet verified.

## Corrective local browser round — 2026-10-08

Tested source commit: **cefef31eb8b93a8d2b0b189b01d4e26216ec2ab8**. Relevant paths: app/, tests/, .github/workflows/; no other executable tooling. The only app difference from the second evaluated source is the entry-script query version. PLAN.md is unchanged and still applicable. Full source/PLAN freshness passed immediately before and after the new browser observations.

The coordinator observed the versioned entry module load in the local browser. Keyboard Load decimal example produced the independently expected $0.00 profit, $0.10 contribution and 1,000 whole-unit break-even. Browser model tests again showed 25/25 passes. The prior second-round validation/reset and responsive observations apply to unchanged controls, CSS and event logic; this affected check verifies the new module reference. The successful local retest does not clear the failed live round: a returning-browser live check remains required after the corrective push. First-round accessibility/network limitations remain.

## Corrective live verification

The coordinator confirmed Actions run 37877472621 succeeded for cf1dc2a009db54fccd55ea87b761e435fa3dc3a3. An ordinary reload in the returning live browser loaded the versioned entry script; keyboard Load decimal example produced $0.00 profit, $0.10 contribution and 1,000 whole-unit break-even. The previously failed live interaction is now verified at the corrective deployed revision. Final source/PLAN freshness against cefef31eb8b93a8d2b0b189b01d4e26216ec2ab8 passed; only reports follow it. See DEPLOYMENT.md for all three runs. Original accessibility/network limitations remain explicit.
