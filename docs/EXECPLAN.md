# Recreate the archived tournament forecast explorer

This living ExecPlan follows `~/.codex/PLANS.md`. The previous checklist plan, with its unresolved human/device gates intact, is preserved in `docs/plans/2026-10-09-example-checklist-incomplete.md`.

## Purpose / Big Picture

Create a Browser App Builder example recreating the useful interactions of the archived FiveThirtyEight 2015 men’s tournament dashboard. Include every year 2016–2026, a four-region bracket, probability table and genuine forecast history where available. Clearly distinguish actual results from predictions and explain the cancelled 2020 tournament.

## Progress

- [x] (2026-10-09) Inspected the actual original in the browser and commissioned independent source/data research.
- [x] Preserved the incomplete previous plan and unrelated working-tree changes.
- [x] Created an isolated application and verified Node 22.19.0/npm 10.9.3.
- [x] Located complete result records for ten played years and archived forecast CSVs for 2016–2023 excluding 2020.
- [x] User requested another probability model. Verified pre-tournament T-Rank ratings and implemented a separately labeled log5 reconstruction for 2024–2026.
- [x] Normalize, attribute and independently check source data: 670 scheduled games, 39,508 original probabilities, and 1,428 reconstructed probabilities.
- [x] Implement bracket, table, snapshot controls and team-history chart.
- [x] Final 72/72 Node and browser checks passed; production interactions, repository base path, desktop and narrow layouts inspected.
- [x] Independent source/model review passed after six corrections; the final formatting, regional-navigation and publication-link delta also passed.
- [x] User authorized publication. Saved durable source at `/Users/jordan/Projects/bab-example-madness`, published it, and verified exact-commit Actions success and live known answers.
- [x] Prepared the gallery entry, validated the repository/package, and checked desktop/narrow rendering, keyboard links and copy feedback.
- [x] Gallery commit `51220d0` deployed successfully; verified the live entry, target URL and library/model wording. Stopped all three owned preview/test processes.

## Surprises & Discoveries

The original is a forecast explorer, not a bracket-picking simulator. Its timeline selects recorded forecasts. FiveThirtyEight stopped updating sports forecasts in June 2023. ESPN supplies later result facts but those are not probabilities. The 2021 Oregon–VCU game is a no-contest, and the 2018 LIU seed sentinel requires an evidenced correction. The user’s reference selects men. Archived daily forecasts do not have precise live timestamps.

## Decision Log

2026-10-09: Reimplement independently using native HTML/SVG for the fixed bracket/table and approved ECharts for team forecast history. Do not copy publisher code, logos or proprietary fonts. Use canonical Campus Designer local fonts/colors.

2026-10-09: Develop in an isolated temporary application, then save the completed Git repository at `/Users/jordan/Projects/bab-example-madness`. Preserve course configuration/catalog edits. The user requested a replacement online model for later years. Use dated T-Rank Barthag ratings, neutral-court log5 pairwise probabilities, and exact opponent-weighted bracket propagation. Keep one pre-tournament snapshot per year; do not invent daily history. The reconstruction is neither a published T-Rank bracket forecast nor a continuation of FiveThirtyEight’s model.

## Outcomes & Retrospective

The application and later-year model are implemented. An independent calculation reproduced all 1,428 reconstructed probabilities within floating-point precision. Source/model review passed after six corrections. Final checks passed 72/72 in Node and the browser. Relevant source checkpoint `2f44204` was published in `77e6e40`; a report-only follow-up `659f9d1` also deployed successfully. Live original/reconstructed probabilities, actual results, cancellation, source and build-story links were verified. The gallery change is live with successful exact-commit Actions verification. No actual screen-reader or novice-usability pass is claimed.

## Context and Orientation

Course root: `/Users/jordan/Projects/decision-999`. Read Browser App Builder Setup/Plan/Build/Evaluate and the canonical Campus Designer references. App source lives in `app/`; browser cases in `tests/`; ignored build output in `dist/`. Evidence belongs in `evidence/browser-app-builder/madness/2026-10-09/`. Data research is in `/private/tmp/bab-madness-research/`; normalized delivery in `/private/tmp/bab-madness-data/`.

A forecast has seven cumulative probabilities: reach Round of 64, Round of 32, Sweet 16, Elite Eight, Final Four, title game, and champion. Game rounds run 0(First Four) through 6(titlegame). Use each year’s actual semifinal pairing and shared First Four bracket slots. Exact source URLs, licenses, dates and corrections accompany normalized data. Do not copy large raw publisher scripts into course evidence.

## Plan of Work

Finish source discovery and normalization. Check 68 teams, 67 game slots, next-game links, champions, region pairings, probability bounds and round totals. Preserve no-contest status and original daily snapshot dates. Bundle data for same-origin runtime use.

Build bilateral bracket, sortable heatmap table, year/snapshot controls and a selected-team history chart. Keyboard selection must match hover. Reset stale selection and playback on year changes. Forecast mode cannot expose future outcomes as known facts. Results mode shows actual outcomes and scores; unavailable probabilities remain unavailable. Narrow layouts retain a readable table or region view.

Verify shared pure model functions and actual production-browser interactions. Independently review the app, correct findings and simplify unused concepts. Prepare concrete source/evaluation records before any final publication approval still needed.

## Concrete Steps

In the app folder, install the exact approved packages once, then use `npm ci`, `npm run build`, `npm run test:browser -- --port 9741` and `npm run preview -- --port 9742`. Run the plugin dependency checker. Record real URLs and stop only owned servers. A maintainer-only data ingestion script may use existing Python; the generated app does not require Python.

Inspect staged files, make an ordinary local source checkpoint with the previously approved course Git attribution, and record evaluation applicability. If gallery files change, run `python3 scripts/build.py`, `python3 scripts/check.py`, `claude plugin validate .` and `git diff --check`. Preserve unrelated edits.

## Validation and Acceptance

Select all years 2016–2026; 2020 must clear stale content. Check First Four, Oregon–VCU no-contest, LIU seed correction, real champions and year-specific pairings. Probabilities lie in [0,1], decrease across later rounds, and sum approximately to 64/32/16/8/4/2/1 allowing source rounding. Verify named values independently from source CSVs.

Test numeric sorting, exact probability tooltips, playback stop/reset, team selection, chart resizing, back navigation, desktop/narrow rendering and same-origin assets. Production preview must work under `/bab-example-madness/`. Local checks do not establish live deployment, actual screen-reader speech, novice usability or phone touch behavior.

## Idempotence and Recovery

Preserve existing examples, archives, settings and history. Retain failed rounds and correction evidence. Data downloads occur during development, with no visitor-side external requests. Failed retrieval must leave prior data intact. Inspect/reuse an authorized repository on deployment retry.

## Artifacts and Notes

Deliver source, readable handoffs, attributed data, reproducible checks and review/browser evidence. Reference inspection: `/private/tmp/bab-madness-reference.md`. User reference: https://web.archive.org/web/20240411121651/https://projects.fivethirtyeight.com/madness-2015/index.html#mens.

## Interfaces and Dependencies

Use managed Vite 8.3.4 and ECharts 6.1.0 with a lockfile, notices and local canonical fonts. Load static local JSON by year. Model functions are shared by UI and tests. Data ingestion is maintainer tooling, separate from the browser runtime.

Revision note (2026-10-09): Completed model substitution, independent audits, UI corrections and live publication. The initial local narrow trial measured 727 CSS pixels; a subsequent foreground live check verified 375 × 900 CSS pixels. Physical touch, screen-reader and novice checks remain unverified. The persisted-pageshow handler was reviewed, but the actual Back trial loaded a fresh document. Unrelated featured-order and generated-catalog edits remain uncommitted.
