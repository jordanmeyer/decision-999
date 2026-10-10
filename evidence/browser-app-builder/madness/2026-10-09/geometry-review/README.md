# Original bracket geometry correction

The user rejected the previous card-based final rounds and requested the original’s round hierarchy, line widths, team-name positions and probability positions. The [independent comparison and review](review.md) records actual original measurements, two failed intermediate rounds and the final bounded desktop pass. The prior fidelity-review folder remains historical evidence; its pass did not establish the visual fidelity the user requested.

Tested source: `40c6a1e0b2036c7b7e02fc60a279f4954f1abdac`. Published correction/evaluation commit: `f8d1773d6d29e845a59abfac3be9add24aef3943`. Assets: `main-CGWQTFsc.js`, `style-DnBVnImn.css`. Production build and **74/74 Node/browser checks** passed from the clean source checkpoint. The existing 530.38 KB bundle warning remains. Historical data, model helpers, locked dependencies and deployment workflow are unchanged.

## Observed correction

A shared bilateral tree puts Final Four regional winners above/below each side’s championship branch at the global midpoint. The title display is above the central junction. Initial names remain outside; settled entrants appear on compact horizontal strips. Cumulative probabilities sit outside their route bands. Width follows `0.5 + 15 * sqrt(p)` with active gray underlays removed, preserving visibly thin long-shot routes.

The independent reviewer exercised the actual original and corrected production pages at 1280px. They caught and verified fixes for preview-dependent “most likely” slot targets and clipped team labels. Pinning Maryland and keyboard-focusing South’s Sweet 16 slot now previews Alabama at 81.951%, leaving Maryland pinned; leaving focus restores Maryland. The full report identifies what the reviewer did and did not test.

Coordinator checks additionally verified that Results preserves Fairleigh Dickinson’s known berth when eliminated Texas Southern is selected, with no active route for the eliminated team. At 375 × 900, the table defaults to a 343px container with body width 375. Bracket offers one complete horizontally scrollable tree; ArrowRight scrolled 40px, and selecting Houston scrolled its terminal into view at x225–350. No application error/warning logs were observed. The browser test page showed 74/74; only Vite debug connection messages appeared there.

## Captures and reproduction

`desktop.png` is the final complete initial page; `long-shot.png` shows Texas Southern’s extremely thin route; `late-forecast.png` shows the April 1 settled entrants and Connecticut’s 70% title forecast; `phone-table.png` shows the actual 375px table. The gallery’s parent `desktop.png` is a crop captured directly from the initial production bracket, with Houston selected. These are actual browser captures, not mockups.

Use Node 22.19.0/npm 10.9.3 in the linked application repository. Run `npm ci`, `node tests/run.mjs`, `npm run build`, `npm run test:browser -- --port 9741` and `npm run preview -- --port 9742`. Open `/tests/index.html` on 9741 and `/bab-example-madness/` on 9742. Use initial 2023, April 1, and Results; focus blank slots and compare selected-team details with transient routes. The current browser suite is retained in `browser-tests.txt`.

The pass covers the exercised geometry and interactions, not every name/year combination, pixel identity, actual screen-reader speech, physical touch or novice usability. Live publication is recorded after exact-commit verification.

## Live and gallery checks

Application commit `f8d1773` passed [Actions run 38016901031](https://github.com/jordanmeyer/bab-example-madness/actions/runs/38016901031). A returning browser loaded `main-CGWQTFsc.js`, showed Houston’s exact 22.085% initial forecast, distinct round columns and the reviewed route widths, with no finalist cards or observed console errors/warnings.

The refreshed gallery image loaded at 1198 × 1060 pixels. Its local listing was inspected at 1280px and 375px; keyboard navigation reached the build-story link and the copy control displayed “Copied.” The standard repository build/check, Claude manifest validation and whitespace checks passed. The initial 127.0.0.1 preview had an existing 33% browser zoom that produced blank captures; a separate IPv6 loopback preview at localhost:9743 provided the recorded actual-size gallery checks. This was a preview-tool limitation, not an application failure.
