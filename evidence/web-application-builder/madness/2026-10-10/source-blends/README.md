# Complete opening-source reconstruction


Evaluated source: `7568eb9f086e77cb435c961d630ab0ff05379765`. Source selection uses 37 complete opening fields across 20 competition/seasons, with Silver restricted to women 2024. Partial ESPN and late Neil Paine fields were excluded per the user. The 60 source/blend options contain 757 dated snapshots. All original archive/result fields remain unchanged. SOURCE-MODEL.md documents inverse identification, rounding, missing First Four assumptions, fixed strengths, prior-season fitting and chronological comparison.

Passed `node tests/run.mjs` (132/132 original checks), `node tests/source-model.mjs` (independent four-team arithmetic, inverse recovery, logistic calibration, 20 real brackets, exact completed outcomes and current/future-label isolation), and `node tests/generated-sources.mjs` (all opening memberships, source/blend snapshots, probability bounds/mass, arithmetic averages, eligibility and scoring). A fresh generation is byte-identical to committed output. Original dataset fields compare equal to the preceding revision. The production build and whitespace checks pass; the existing ECharts chunk-size warning remains.

Browser production checks at the repository base path: all 22 Men/Women/year selections return expected source options/cancellation. Women 2024 exposes Silver only; women 2026 exposes Torvik and its prior-2025 calibration, with no premature validation score. Men 2016 has no ensemble; sources newly observed in 2017/2018/2025 suppress the all-source ensemble. The 2023 comparison shows signed improvements and losses on explicit historical cohorts. Keyboard source selection, Home/End/arrow date controls, Alabama pin/history chart, Results and restoration were observed. Women's 2026 ensemble reaches UCLA at 100% after the final. A 375px iframe containing the production app has body scrollWidth 375, readable year/source controls, native table scrolling, and a comparison scroller of 352px around its 807px table. Desktop viewport measured 1195px.

Failures/corrections: restored a competition-click binding accidentally removed while replacing source markup, disabled stale source selection during a year load, retained original source reconciliation, and widened the phone year selector to prevent clipping. Browser zoom confused automated pointer coordinates, so keyboard controls and measured iframe dimensions were used. One MutationObserver error appeared in the browser's iframe instrumentation; no app MutationObserver exists and direct application checks had no captured errors. This does not certify physical touch, screen-reader behavior or novice usability.

Historical findings are deliberately candid: for the men 2023 comparison the ensemble's Brier improvement is about +0.0014 over KenPom, +0.0038 over Torvik, -0.0008 versus FiveThirtyEight and -0.0002 versus the equal average. Different source rows have explicitly different historical cohorts, each paired with the ensemble on the same games. No universal improvement claim is made. Silver's real printed 100.7% half-region total is normalized, with maximum marginal adjustment 0.3585 percentage point disclosed. No new dependencies or visitor-side external requests were introduced.


Reproduction: in the app repository run the three Node test commands above and `node scripts/build-sources.mjs /tmp/atlas-sources`. `source-audit.json` records fields, options, prior training years and fit residuals. `browser-selections.json` records all 22 actual UI states. `phone.jpg` records the 375px rendering. `live.jpg` shows the verified live source selector.


## Complete opening sources and blends — October 10, 2026

Evaluated source: `7568eb9`; published source/evaluation commit: `70900ddacdb51bf33e3ba1e952738731e751884e`. [GitHub Actions run 38064231670](https://github.com/jordanmeyer/bab-example-madness/actions/runs/38064231670) completed successfully for that exact commit.

A returning live browser loaded `main-DGtebEV4.js` and the source-blends data revision. Men 2023 exposes KenPom, Torvik, FiveThirtyEight, average and ensemble. Its ensemble shows Houston at 17% initially and the prior-season comparison includes the observed negative improvement versus FiveThirtyEight and the average. Women 2024 exposes Silver only, neither blend, and its final snapshot shows South Carolina as champion. Browser errors/warnings were empty. Source and data are served beneath the repository path. The production build excludes the temporary phone-layout harness. No application/test/tooling changes follow the evaluated checkpoint.

The documentation-only publication receipt is a follow-up to that tested deployment. EVALUATION.md and data-preparation/SOURCE-MODEL.md record the reproduction commands, field coverage, mathematical assumptions and remaining human/device acceptance limits.

Documentation receipt commit `16b4c3b731c4320d89bfe868aa3e76469797fcca` also passed [Actions run 38064373779](https://github.com/jordanmeyer/bab-example-madness/actions/runs/38064373779). Its evaluated application paths are unchanged. Temporary preview stopped and browser viewport override reset.
