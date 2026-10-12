# Correct unequal-width bracket corners

The user's enlarged screenshot rejected the prior round-cap fix. Circular caps on a wider horizontal segment protruded past the next, narrower vertical segment. The earlier review incorrectly accepted this as a small shoulder. That failed round remains in the app's history and is explicitly marked rejected.

Evaluated application source: `58d7cdd5b1baffacf2312fc261b2f680c0fca20b`. Published report commit: `6766f1147e044e4c0f7ecf5c2686a090d22066ef`. The correction uses flat ends with an ellipse at each connection: its horizontal radius matches half the outgoing width, and its vertical radius matches half the incoming width. Three quarters lie inside the existing strokes; only the missing outer corner adds area. There are no orientation-specific formulas. Each radius follows its stroke during animation; unfinished paths preserve their dash positions when interrupted.

## Observed verification

The actual browser [rendering checks](rendered-checks.txt) passed 16/16. The test page loads the real app in an iframe and exercises its controls, DOM geometry and animations. It rasterizes 30 seams across Alabama, Maryland, Kansas, Arizona, Houston and Fairleigh Dickinson at 16 pixels per SVG unit, including mirrored bends and the title stem. Samples check for protrusions and missing corner fill. A negative control recreates the old caps and detects the precise overhang rejected by the user. Six frozen animation times, interrupted drawing, shrinking visible corners and clearing also pass.

The [independent review](review.md) includes source inspection and visual inspection of the Alabama rendering enlarged four times. It accurately attributes other rendered checks to the coordinator; the reviewer's browser surface was unavailable. The earlier numerical suite passed 80/80. A production build passed with `main-Dl6dz9Jv.js` and `style-DH0Cp_SR.css`; its 22 output files exclude tests, reviews and handoff documents. Data, probabilities, dependencies and workflow are unchanged.

[Production preview](alabama-desktop.jpg) and [enlarged actual SVG geometry](alabama-enlarged.jpg) show the corrected shape. The latter is explicitly an isolated geometry inspection, not a screenshot of the complete app. The coordinator also used an unpinned mouse preview in the production build. No production-tab console errors/warnings were observed. The iframe test tab logged three MutationObserver errors without source locations; their origin is unconfirmed, and no MutationObserver usage occurs in the app/test/chart/Vite-client sources searched. All visible assertions completed. Human accessibility, physical touch and other browser engines were not tested in this correction.

## Reproduce

In the application repository, use the locked dependencies and existing Node 22.19.0/npm 10.9.3. Run `npm run test:browser -- --port 9741`, open `http://localhost:9741/tests/route-rendering.html`, and expect 16/16 checks plus the enlarged geometry below the results. Ordinary motion must be enabled for timed checks; the harness does not change OS settings. Run `node tests/run.mjs` for the independent 80-case numerical suite.

Run `npm run build` followed by `npm run preview -- --port 9742`. Open `http://localhost:9742/bab-example-madness/`, choose 2023 and preview Alabama. Compare the 99% → 82% → 65% edges to the user's original complaint; each rounded corner should meet the narrower vertical edge without a lip. Hover rapidly, clear a pin and inspect mirrored and thin routes. Stop only the processes started for this verification.

## Publication receipt

[GitHub Actions run 38021951772](https://github.com/jordanmeyer/bab-example-madness/actions/runs/38021951772) is the exact run for the published commit. It completed successfully for `6766f1147e044e4c0f7ecf5c2686a090d22066ef`. A returning live tab loaded the exact reviewed assets, then an unpinned Alabama mouse preview showed five matching corner ellipses and flat path ends. The [live measurements](live-check.json) retain all six stroke widths and five radius pairs, and the [live screenshot](live-alabama.jpg) shows the result. Captured production console logs were empty.

Course build, repository checks and whitespace checks passed. Temporary verification servers and tabs were closed after use. Unrelated site configuration/catalog changes were preserved.
