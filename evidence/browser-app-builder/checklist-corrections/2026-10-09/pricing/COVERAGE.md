# Original pricing trial — checklist correction coverage

Checklist: `evidence/browser-app-builder/reviews/2026-10-09-example-app-checklist.md`, PRICE-01–12 and applicable ALL items. Review date: October 9, 2026. Repository: `/private/tmp/bab-checklist-originals-2026-10-09/pricing`. Current source checkpoint: `7475b8bb130036fa77115b001c5c0fbec5e179f3`. No push or current live check. The review snapshot below predates version-4 asset references and the whitespace-only EOF cleanup; the new source checkpoint and appended evaluation are the current reference.

## Independent source review

Operations reviewer read the complete current model, app controller, HTML, styles, worked lesson, PLAN and historical EVALUATION. No remaining concrete source/model defect found after the prior copy-status/result-jump and browser-history fixes. Source/model PASS is bounded to that review; it is not a complete accessibility or instructional-readiness verdict. No browser or broad test rerun was performed for this review.

The model uses integer cents. Independently, (20−12)×100−500 = 300; 62 units give −4, 63 give +4, and minimum non-loss whole quantity is ceil(500/8) = 63. At price 22, 100 assumed sales give 500 while 70 give 200. A ten-cent contribution covers 100 at 1000 units, but 100.01 requires 1001. Zero fixed cost permits zero units without loss; negative contribution loses on every positive quantity, while zero contribution gives zero at every quantity. These statements are derivations, not browser observations.

PLAN now names the current copyable record, temporary reference and exact headline terms. It describes pending/reference behavior, browser-history invalidation, clipboard races and the bounded lesson. Historical EVALUATION rounds remain unchanged and apply only to their named commits; their earlier passes do not establish this revision's new comparison/copy/layout behavior.

## Per-requirement disposition

| ID | Current source / teaching disposition | Evidence and remaining verification |
| --- | --- | --- |
| PRICE-01 | Visible contribution × assumed sales − fixed-cost derivation; lesson predicts 100/62/63 before revealing answers. | Independent arithmetic above. Root reports 62-unit Back/recalculate task gives −4. |
| PRICE-02 | Subtitle identifies contribution/cost coverage and excludes optimization; lesson compares price 22 at assumed volumes 100 and 70. | Source and independent 500/200 answers reviewed. Uncoached interpretation remains open. |
| PRICE-03 | Preset renamed “Explore a ten-cent contribution”; worked 100/100.01 fixed-cost threshold lesson. | Source and independent 1000/1001 answers reviewed. Root edge-review aggregate recorded below. |
| PRICE-04 | “Minimum non-loss quantity” headline; distinct zero-fixed-cost explanations for negative, zero and positive contribution. | Root actual boundary transcript now records distinct negative/zero contribution with zero fixed cost, zero price/quantity, decimal and over-cap explanations; see browser-boundaries.json. |
| PRICE-05 | “Result after entered costs” label and nearby omitted-cost/assumed-sales boundary. | Source reviewed. |
| PRICE-06 | Positive-contribution distance to whole-unit coverage; explicit assumed-not-predicted sales; separate nonpositive-contribution explanation. | Default 100−63 = 37 independently derived. |
| PRICE-07 | Two-row reference/current table; one calculated case can replace the default reference; pending cannot be saved. | Root actual reference63units/$4 versus current62units/−$4 and pending-reference disabled; browser-reference-copy.json. |
| PRICE-08 | Stable heading, pending placeholder and comparison row remain when calculated numbers hide; prior copied notice/fallback clears. | Root actual319px and separate1280px/body32px edits retained quantity focus, readable titled pending region and reference/current Pending rows without outer overflow; Enter result-link focus and62/63 calculations passed. See browser-orientation.json. |
| PRICE-09 | Visible result links above and beside Calculate; successful result announced without taking focus on edits. | Root actual319px Enter on the result link focused results-title at viewport top; edits retained quantity focus. Physical mobile-keyboard-open behavior remains unobserved. |
| PRICE-10 | Copy record contains four assumptions, USD/period units, formula, result, threshold, limits and source; fallback text if clipboard fails. Stale asynchronous copy completion is ignored. | Root actual clipboard includes inputs, units, equation, result, threshold, limits and source. Clipboard-denial fallback remains source-reviewed only. |
| PRICE-11 | Distinct boundary text and lesson for zero price/quantity/fixed cost, cost above price, threshold over cap and decimal threshold. | Root actual eight-case transcript in browser-boundaries.json matches the independent outcomes, including distinct explanations. Model browser suite27/27 is separately reported. |
| PRICE-12 | Explicit separate demand-response assignment requires demand assumption/source or hypothetical range, objective, feasible prices, uncertainty and independent validation. | Optional extension disposition complete; no demand model or optimizer added. |
| ALL-02 | App links to prediction/change/worked-answer/limitation lesson. | Source reviewed; human learning outcome unverified. |
| ALL-05 | Visible results links before form and next to Calculate. | Root actual319px result-link Enter focused results-title at viewport top. Physical mobile-keyboard task remains separate under PRICE-09. |
| ALL-07 | In-tab reference/reset boundary appears beside reference editing; copy record is beside calculated answer and lesson says to copy before leaving. | No accounts or automatic persistence. Actual reference/copy task is recorded below; clipboard-denial fallback remains unobserved. |
| ALL-08 | Pricing provenance says maintainer-built teaching example from simulated planning. The specifically requested Sales lens footer is outside this repo. | No real-student or institutional endorsement claim introduced. |
| ALL-11 | Native labels, field-associated errors, result status and explicit result destination are present. | Actual screen-reader invalid recovery, comparison and answer task not observed; remains open. |
| ALL-12 | Responsive styles and separate test fixture exist. | Current 320px readability/reachable-control inspection and separate 200% text inspection remain open in this record. Historical 319px checks do not close the changed revision. |
| ALL-14 | Record carries units, all assumptions, inspectable formula, threshold/result, limitations and source URL. | Actual clipboard content inspected in browser-reference-copy.json; denied-clipboard fallback not exercised. |
| ALL-16 | Prediction and worked-answer lesson is available. | No uncoached novice participant observed. User will arrange a participant; no instructional-readiness claim. |

## Root actual-browser witness

Root supplied: **27 browser model tests passed; eight edge cases checked; browser Back retained edited quantity 62 with a pending result, then Calculate produced −4.** These are attributed root observations, not observations made by this source reviewer. The later browser-boundaries.json supplies the eight exact cases: 62/63 units (−4/+4), zero price (−1700/no threshold), negative contribution with zero fixed (−200/0), zero contribution with zero fixed (0/0), zero quantity (−500/63), one-cent contribution with one million fixed (−999999.99/100000000), and decimal boundary (−0.01/1001). Their full distinct displayed explanations are retained there. Dimensions and screen-reader/novice execution were not supplied with these reports. No current publication or live-site verification is claimed.

## Initial independent review snapshot (retained history)

SHA-256 of reviewed source, to distinguish this source review from the old HEAD and old evaluation rounds:

| File | SHA-256 |
| --- | --- |
| app/app.js | `283a6168052489e0dbfc9af4043f6a867aaa4db89a2542cc808ac8a74e900eaa` |
| app/model.js | `a53d776fa42e3991782954a217255bf64e518a43f07eaa2abb768f97712b5255` |
| app/index.html | `6fa02fcb8687e4c36b2e95868d25a270903f377b599bdc002067653f47a01921` |
| app/learn.html | `ae9d3a265be98423d60f1606b294d1082fdde5831e1e7da4a8c9ba0dc801a467` |
| app/style.css | `53844c0d85437332c8d38456a33f3fcb88b57108289dc81211999628eef35060` |

The initial reviewer changed only PLAN.md and this record, without an app edit or browser run. The later authorized handoff committed public source/PLAN/BUILD-STORY/tests, including tests/layout.html, then a report-only EVALUATION addition. The layout fixture doubles computed fonts on existing DOM inside a bordered iframe; it is authored text enlargement, not device zoom or mobile-keyboard evidence. New DOM requires reapplying enlargement. Pending gates above remain open; no push occurred.


## Current-checkpoint browser confirmation

Root subsequently reran the actual suite on the committed current files: **27/27 passed, zero failures** at source `7475b8bb130036fa77115b001c5c0fbec5e179f3`. No app/model/test changes followed. This adds current-source model evidence; pending layout, exports and human tasks remain open. Earlier observed-round qualifications are retained as history.


## Scoped current layout witness

Root reports a current319 CSS-pixel narrow result and a separate1280-frame authored200% text result were pictured and readable, with matching page client/scroll width. These are bounded result-view observations, not every disclosure/table/control state or native device zoom; ALL-12 stays pending for broader coverage.


## Actual reference and copied record

At source7475b8bb130036fa77115b001c5c0fbec5e179f3, root observed that a pending edit disabled Use current case as reference. The saved reference retained63units/$4.00 while the newly calculated current case showed62units/−$4.00. The actual clipboard included current inputs, the$8×62−$500=−$4 equation,63-unit minimum,62.50 theoretical threshold, assumption/cushion limitation and source URL. See browser-reference-copy.json. Clipboard-denial fallback, complete narrow/mobile-keyboard tasks, screen-reader and novice operation remain separate; this is not a full ALL-12 pass.


## Actual pending-state orientation and keyboard result route

Root inspected the current pricing app at source `7475b8bb130036fa77115b001c5c0fbec5e179f3` using native keyboard locator actions in the authored frame. At319 CSS pixels, editing quantity100→62 retained focus on quantity. The titled result region, explicit Inputs changed placeholder, reference values and current Pending cells remained readable with no document horizontal overflow. Enter on the result link focused #results-title at the viewport top; Calculate gave−$4 and the same link returned to that heading. In a separate1280px frame with computed body32px (authored200% text), changing62→63 preserved the same readable structure; the result link focused the heading and Calculate gave$4 with the matching63-unit announcement.

See browser-orientation.json, narrow-pending.png and enlarged-pending.png. These bounded actual observations verify PRICE-08 and the desktop-keyboard portion of PRICE-09. No physical mobile keyboard, screen-reader speech or novice outcome is claimed; PRICE-09 and the human gates remain open. No application edit or model-suite rerun accompanied this observation.
