# Published FiveThirtyEight selection — 2026-10-10

Source checkpoint `76bdea8`; published `6d863a32d063ff32aed449942e0b7ddabffebd2f`. [Exact-commit Pages run](https://github.com/jordanmeyer/bab-example-madness/actions/runs/38068148607) succeeded.

`tests/published-forecasts.html` in the application repository passes 82/82 checks across 14 archived competition/seasons, comparing all 73,332 displayed stage probabilities and all snapshot dates to the original archives. `browser-results.json` retains the actual results. Reproduce with `npm run test:browser -- --port 9751`, then open `/tests/published-forecasts.html`.

Production and live checks: men 2023 ends April 1 with UConn 70%, San Diego State 30%; April 3 is marked unavailable, not filled with a reconstruction. Women 2023 ends March 31 with Iowa 55%, LSU 45%. Switching Torvik/FiveThirtyEight restores the correct timelines and provenance labels. Original data, reconstructions and blend coefficients remain unchanged; the selector alone uses the published archive for FiveThirtyEight. Model/archive checks pass 132/132; generated-source tests pass. Build/whitespace checks pass with the existing ECharts size warning. Temporary preview processes stopped and tab closed.

The live screenshot demonstrates the published source label, archived end date and unavailable championship-day forecast. No claim of complete daily publisher history beyond the retained snapshots.
