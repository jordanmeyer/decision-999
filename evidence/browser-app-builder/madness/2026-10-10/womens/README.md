# Women’s tournaments — October 10, 2026

Request: find women’s tournament data and add a Men/Women toggle matching the other controls.

Source checkpoint: `7ae9c94361920956d161f634a64d2782cfaf6049` in `jordanmeyer/bab-example-madness`. Publication commit: `e959185ea5c6ada11ecf026b4ae302e2b9efc34f`.

## Data and coverage

650 women’s games from ten played seasons, 2016–2026, and explicit cancelled 2020. Fields have 64 teams until 2021 and 68 from 2022. Original FiveThirtyEight archives contain 74 women’s snapshots across 2016–2019 and 2021–2023. Later women’s seasons are results only: research did not establish a vetted pre-tournament probability input series, and completed-season ratings were not substituted. Existing men’s frozen yearly files are unchanged.

Sources: original archived CSV URLs/digests in each women’s JSON; ESPN women’s March/April scoreboards; [NCAA championship records](https://www.ncaa.com/history/basketball-women/d1). FiveThirtyEight data attribution/license is retained. No remote visitor data calls, scraped articles, imagery, logos or player profiles are added. Only limited tournament facts are bundled.

The existing original CSV bytes retrieved October 9 were reused; women’s ESPN inputs were retrieved October 10. Raw inputs remain outside the source repositories at `/private/tmp/bab-madness-women/`. The app’s `data-preparation/README.md`, `download.py --gender womens` and `normalize.py --gender womens` document reproducible retrieval/normalization. Publisher endpoints may change. ESPN’s early-round host-site labels (notably Iowa City in 2019) were reconciled to original forecast bracket regions; each discrepancy is recorded, with sources. All women’s school IDs matched without translation.

## Observed checks

- `model-results.txt`: 132/132 data/model checks. Includes field sizes, topology, scores, numeric source values, cumulative probability totals and 74 original snapshot status calculations. Final scores are independently checked against NCAA records; this is not a second-source audit of every game fact.
- `browser-results.json`: 95/95 women’s interaction checks. Initial/final forecasts and Results across all played seasons; six-stage hover route; actual history chart; champion centering; download paths; 2020 recovery; no First Four before 2022; same-school-ID cache separation; rapid year/competition changes; playback/pin resets; phone layout.
- `mens-layout-results.json`: 160/160 existing layout/interaction checks, 2,984 rendered labels. Existing route rendering suite: 25/25.
- Production preview: Women 2023 South Carolina 64% initial title probability; LSU 102–85 final. Women 2026 UCLA 79–51, explicitly results only. Men 2023 Houston 22% after switching back. Keyboard toggles work; phone viewport and body both measure 375px. Desktop/phone screenshots are actual production output.

First browser round: 84/94 passed. Ten label-fit failures involved Albany (NY), Central Michigan, Missouri State and South Dakota in late forecasts/results. Reviewed narrow labels fixed those. An additional initial women’s route check brings the final suite to 95/95. Resizing harness emits its known ResizeObserver notification warning; production console is error-free. Build/whitespace checks pass; pre-existing bundle-size warning remains. A screenshot captured before the viewport override applied was replaced with an image verified at 375px; no false phone evidence is retained.

Reproduce from the app: `node tests/run.mjs`; `npm run test:browser -- --port 9741`, then `/tests/womens.html`, `/tests/design-review.html`, `/tests/route-rendering.html`. Build with `npm run build`, preview with `npm run preview -- --port 9742` at `/bab-example-madness/`. Tested configured Mac, Node 22.19.0, Vite 8.3.4 and Codex browser. Human screen-reader and novice-user acceptance remain unperformed. No new dependency or runtime service. Temporary servers/tabs stopped and viewport reset.

## Publication

[Pages run 38029211918](https://github.com/jordanmeyer/bab-example-madness/actions/runs/38029211918) completed successfully for the exact publication commit. The returning live browser, after each load completed, verified Women 2023 South Carolina 64%, LSU 102–85, Women 2026 UCLA 79–51 with results-only disclosure, Men 2026 reconstructed forecast, Men 2023 Houston 22%, then restored Women 2023. Screenshot: `live-womens-2023.jpg`. No production console errors observed. The first read immediately after network navigation still referenced hidden prior content; final verification waits for the app’s loading state to finish before asserting identity or saving evidence.
