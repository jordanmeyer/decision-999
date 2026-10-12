# Evaluation

## Exploratory round

Uncommitted implementation:25/25 independent model checks passed in the real Codex in-app browser at /tests/. This was exploratory, not a publishable source-bound result. No numerical failures observed.

## Round 1 — failed UI reset

Tested commit: `da73c02e791af86533f10afd3b254181617d5c1d`. Relevant paths: app/, tests/, .github/workflows/. Whole-project inspection found no other executable tooling or package files. Agreed PLAN.md existed and matched the committed plan; relevant staged/unstaged diffs and untracked listing were clean before testing.

25/25 model tests passed. Production copy at http://127.0.0.1:9312/fresh-pricing/ loaded relative CSS/modules and showed $4.00 and80 units. Inputs .30/.20/100/1000 produced $0.00 and1,000 units. Price1.005 showed a precision error and hid old results as required.

FAIL: clicking Reset example restored input values but left “Results unavailable. Correct1 field above.” and hidden results. A second read confirmed it was persistent. Cause: queueMicrotask(update) ran before native form reset completed in the observed browser. Fix: schedule update with requestAnimationFrame after the native reset. Model unchanged; no new domain agreement required. Round1 is not passing.

## Round 2 — reset fixed; enlarged narrow text failed

Checkpoint `5539205e5d486faa19c3644d0a893c3f206d9553`. Production reset now restores visible $4.00/80 units after price1.005; keyboard Enter on Reset also works. Tab order price→cost→fixed→quantity→reset was observed, including focus outline. Zero/negative margin with fixed costs explained impossibility; negative margin with zero fixed costs explained zero-sales break-even and losses from positive sales. Console warnings/errors observed: none.

Desktop frame1280px and narrow requested320px (measured319px due host scaling) showed no horizontal overflow at16px root text. FAIL: with32px root text (200%) the narrow document grew to354px. Inspection traced this to the narrow grid's implicit minimum width and unbreakable heading word. Fix: use minmax(0,1fr) for narrow grid and allow heading emergency wrapping. No change to model or agreed scope. Read-only browser evaluation could not access iframe.contentDocument; the committed same-origin review helper measured its own frame and exposed the actual dimensions visibly.

## Round 3 — final local acceptance passed, tooling limits noted

Tested commit: `fba817d8e56a5eff79198cddeef960d4187844e2`. Relevant source paths remain app/, tests/ (including review.html), .github/workflows/. No other executable tooling exists in this plain project. The full agreed PLAN.md at that commit was read and compared; no substantive or editorial plan change since agreement. All three freshness diffs exited0 and untracked relevant-source listing was empty before and after final checks. The production files compare byte-for-byte with app/. Screenshots and report-only commits after this checkpoint do not change executable source or the plan.

Method: actual Codex in-app browser via cua_repl, DOM/accessibility snapshots, native/Playwright field interaction and keyboard events, screenshot inspection, computed-style reads, local HTTP logs, Git2.50.1, Python3.9.6. Existing Node22.19.0/npm10.9.3 were verified but not used. Browser engine/version was not exposed by the tool; attempted navigator access was unavailable in its constrained evaluator. No headless substitute or invented browser version.

Model page http://127.0.0.1:9311/tests/ visibly reported **25 passed;0 failed** after final checkpoint. Each test is named visibly and its expected values/derivations are committed in tests/tests.js and PLAN.md. Coverage: synthetic default and one fewer unit; exact dime at1000 and999; nonintegral and exact division; zero/negative contribution with positive fixed costs; all zero-fixed-cost margin signs; all zeros; no sales; input maxima; break-even above cap; string/precision/bounds rejection; exact grouped currency; marginal-profit/fixed-cost invariants; independent brute-force enumeration across544 small cases. The enumeration increments units until costs are covered and does not reuse the app ceiling formula.

| Actual browser check | Expected | Observed | Result |
| --- | --- | --- | --- |
| Production initial19.95/7.40/1000/80 | profit4, break-even80 | $4.00;80 units | Pass |
| Production .30/.20/100/1000 | profit0; break-even1000 | $0.00;1,000 units | Pass |
| Price1.005 | reject precision; hide old result | associated error; values hidden | Pass |
| Reset after invalid precision | restore fields and initial visible result | $4.00;80 units | Pass after fix |
| Keyboard field traversal/reset | price,cost,fixed,quantity,reset; Enter restores | observed order and restored output | Pass |
| Price1/cost1/fixed5 | impossible because no contribution | clear zero-contribution explanation | Pass |
| Price1/cost2/fixed5 | impossible because sales worsen loss | clear negative-contribution explanation | Pass |
| Price1/cost2/fixed0 |0-unit break-even, positive sales lose | explicit explanation | Pass |
| Price.01/cost0/fixed1000000 |100000000 break-even above cap |100,000,000 units and supported-range note | Pass |
| Maximum-money/unit scenario | exact999999000000 profit; narrow wrapping | $999,999,000,000.00; no overflow | Pass |
| Desktop review frame |1280px no overflow |1280px viewport/document | Pass |
| Narrow review frame requested320px | no horizontal overflow |319px viewport/document (host fractional scaling) | Pass |
| Narrow200% text | no horizontal overflow |319px viewport/document; root32px | Pass after fix |

Responsive evidence is explicitly **frame-based**, not a resized desktop window or physical device. No browser-wide viewport override was applied. Desktop screenshot shows two columns; narrow stacks assumptions/results, with enlarged heading words wrapping as necessary. The same-origin review helper exposes actual dimensions visibly; it stays under tests/ and is excluded from publication. Screenshots are in evidence/desktop.jpg, evidence/narrow.jpg and evidence/narrow-200-percent.jpg. The last is the fixed enlarged layout. Actual keyboard interaction was also checked top-level on the production app. Full screen-reader and physical touch testing remain unverified.

Actual sampled colors: navy headings/button rgb(1,33,105), white result panel/inputs, graphite helper/status rgb(102,102,102), cast iron body/input rgb(38,38,38), royal focus rgb(0,83,155). Calculated contrast: gray/paper5.14, gray/white5.74, navy/paper13.20, white/navy14.76, white/royal7.75, royal/paper6.93, ink/white15.13, copper/white4.62. Focus was visibly indicated and retained on reset; errors have text and aria-invalid/aria-describedby, not color alone. System Georgia/Arial match documented substitutions. No animation, so reduced-motion behavior is static. No institutional marks or endorsement claims. This is scoped review, not accessibility certification.

HTTP log observation: production document, style.css, app.js and model.js all returned200 from the local prefixed path. A browser-requested /favicon.ico returned404; the calculator does not require an icon. Source inspection found no remote assets, fetch, XMLHttpRequest, analytics or persistence. This is not a comprehensive network capture or a universal isolation claim.

Console: early application interactions returned no errors/warnings. Later the browser's accumulated log contained two unassigned MutationObserver errors (04:28:24Z and04:29:13Z) without source URLs. App/tests contain no MutationObserver. These coincided with constrained inspection activity, but provenance was not proven; do not present this as a completely clean console. Attempted direct iframe.contentDocument and navigator reads were unavailable in the read-only evaluator; helper measurements and reported version gap replace those checks. Attempting a second background tab for isolated console checking was rejected by the browser tool as unsupported in a subagent. No app behavior failed in the final round.

The simulated student accepted the assumptions/limitations for local handoff only; exact review is in TRIAL.md. Licensing/publication decisions remain pending. No Work routing, actual student validation, live deployment, GitHub Actions run or source link was claimed.
