# Tournament Atlas — October 9, 2026

A real user requested a recreation of the archived FiveThirtyEight tournament explorer, with a selector for every year since 2016. They then requested a replacement online probability model for the years without FiveThirtyEight forecasts and explicitly authorized the new public repository, Pages, and gallery listing.

- [Live application](https://jordanmeyer.github.io/bab-example-madness/)
- [Source repository](https://github.com/jordanmeyer/bab-example-madness)
- [Public build story](https://jordanmeyer.github.io/bab-example-madness/build-story.html)
- [Plan](https://github.com/jordanmeyer/bab-example-madness/blob/main/PLAN.md)
- [Evaluation](EVALUATION.md) and [first live deployment](DEPLOYMENT.md)

## Comparison-review update

At the user’s request, an independent reviewer compared the original and recreation in the browser. Six findings and a long-name connector regression were corrected. The [review record](fidelity-review/review.md) preserves failed rounds and ends in a bounded pass. Source checkpoint `34bd4335e7c8297b5534e3ce2fa35b41db05a5d0` passed 74/74 Node and browser checks; current assets are `main-DHFdrHeu.js` and `style-B25DorEd.css`. Historical data and model derivation are unchanged. [Correction evidence](fidelity-review/README.md) distinguishes direct browser checks, source review and screenshot inspection. Earlier results below describe the initial release.

## Coverage

The men’s tournaments 2016–2026 are all selectable. Seven played years through 2023 retain 83 genuine FiveThirtyEight daily snapshots. The three later years use frozen pre-tournament T-Rank Barthag ratings, the documented neutral-court log5 formula, and exact propagation over possible opponents. They have one distinctly labeled initial reconstruction each; no later forecast history is invented. All ten played years have actual results separately, and 2020 explains cancellation.

## Evidence

The 72 automated cases passed in Node and the browser. Independent review checked 670 scheduled game records (669 played games), 39,508 original forecast probabilities, 204 later-year rating joins, and all 1,428 reconstructed probabilities. An independent implementation agreed within 3.33e-16. Reproduction from retained raw inputs matched all eleven delivered years, the index, and three frozen rating files exactly.

The application’s relevant source checkpoint is `2f44204`; implementation is `59f0fad`. First published commit `77e6e4021a51dda201bfeeb32f413ff73ec20bd4` passed [Actions run 38013910203](https://github.com/jordanmeyer/bab-example-madness/actions/runs/38013910203). Documentation follow-up `659f9d18778b5ec5f76bbf032f1ae5bd422246eb` passed [run 38014017853](https://github.com/jordanmeyer/bab-example-madness/actions/runs/38014017853); relevant source and generated application assets are unchanged.

Live checks verified 2023 Houston’s 22.085% title chance, 2026 Michigan’s separate 17.762% reconstruction, Michigan’s actual 69–63 title win over UConn, the cancellation state, source link, and build-story page. Browser logs showed no errors/warnings during representative interactions. A returning-browser reload after the documentation deployment loaded the expected `main-CeFH68Bc.js`, rendered Houston’s 22.085% original forecast, and logged no errors/warnings. No changed-JavaScript cache update is claimed.

Local review rendered at 1439 and 727 CSS pixels. A later foreground live-site check measured a genuine 375 × 900 CSS-pixel viewport: no body overflow, a default table with keyboard horizontal scrolling, and selection-driven regional navigation. This is browser emulation; actual screen-reader speech, physical phone touch, novice usability, clean-machine setup, Windows, and predictive calibration remain outside this evidence.

## Reproduce

Clone the linked source, use Node 22.19.0/npm 10.9.3, run `npm ci`, `node tests/run.mjs`, and `npm run build`. Run `npm run test:browser -- --port 9741` and open `/tests/`; run `npm run preview -- --port 9742` and open `/bab-example-madness/`. Source-data reacquisition instructions are in the source repository’s `data-preparation/README.md`; normal app/test builds require no Python or external data download.

Local durable source: `/Users/jordan/Projects/bab-example-madness`. Only generated `dist/` output is published; full reports, tests, preparation tools, and frozen model inputs remain in source.

## Review records

- [Reference inspection](bab-madness-reference.md)
- [Data review](bab-madness-data-review.md)
- [Derived-model review](bab-madness-derived-review.md)
- [Application review and six corrected findings](bab-madness-app-review.md)
- [Data reproduction review](bab-madness-reproduction-review.md)
- [Browser test results](browser-tests.txt)
- [Year-selector observations](year-selector-observations.json)
- [Observed same-origin asset inventory](observed-assets.json)

The screenshots are actual rendered output. Source review and observed assets do not prove arbitrary JavaScript cannot transmit information. These are configured-machine results, not student outcomes.

## Gallery publication and cleanup

Gallery commit `51220d0637258302b32838c6dc0308f5c1fe4b7a` passed https://github.com/jordanmeyer/decision-999/actions/runs/38014329974. The live plugin page contains Tournament Atlas with the correct application link, ECharts library label, model distinction, screenshot, and build-story route. Local keyboard traversal reached the walkthrough and the install copy button displayed “Copied.” Existing featured-order changes and unrelated files were preserved without being committed. Owned test, application-preview, and directory-preview processes were stopped.
