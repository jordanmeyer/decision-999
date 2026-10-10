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
- [x] (2026-10-09) User requested a fresh comparison review of the original and live recreation; commissioned an independent reviewer with both URLs and the source.
- [x] Corrected all six comparison findings and a long-name connector follow-up; independent source/image re-review passed, supported by coordinator browser interactions.
- [x] Tested clean source `34bd433` with 74/74 Node/browser checks and a production build; pushed correction/report commit `c8b7e81`.
- [x] Verified correction deployment `c8b7e81` with successful Actions run 38015656925 and returning-browser known-answer checks.
- [x] Published gallery/evidence commit `7027598`, verified successful Actions run 38015993707 and the live image/count, and stopped all three owned preview/test processes. Temporary tabs were closed; the live app and gallery remain available.

- [x] (2026-10-09) Reopened visual fidelity after the user rejected the central-card layout; independently measured the original SVG geometry, settled labels, and probability widths.
- [x] Replace the card geometry with the original continuous bilateral bracket conventions.
- [x] Independently inspect initial/late/results routes, low-probability widths, keyboard previews and responsive output.
- [x] Publish the corrected application and refreshed gallery evidence after verification.

## Surprises & Discoveries

The original is a forecast explorer, not a bracket-picking simulator. Its timeline selects recorded forecasts. FiveThirtyEight stopped updating sports forecasts in June 2023. ESPN supplies later result facts but those are not probabilities. The 2021 Oregon–VCU game is a no-contest, and the 2018 LIU seed sentinel requires an evidenced correction. The user’s reference selects men. Archived daily forecasts do not have precise live timestamps.

The new comparison review reproduced defects missed by the prior source/model review: hovering or focusing a team changed its regional route while leaving another team's title odds in the center; selected semifinal cards lost text contrast on hover. Regional connectors stopped before the Final Four. At 1280 × 720, the first bracket row began around y699, compared with roughly y419 in the archived original. These are rendered behavior and layout findings, separate from the numerical checks.

The previous comparison pass was insufficient: connected cards still put Final Four and championship content in the same column, and repeated names/probabilities obscured the original diagram. Actual original inspection shows eleven shared round columns, four regional winners at quarter heights, two championship branches at the vertical midpoint, and a title display above their junction. Hover uses substantial probability-scaled bands (0.5 + 15√p pixels), not a thin colored trace. Initial internal slots are blank; only secured entrants receive internal name strips.

## Decision Log

2026-10-09: Reimplement independently using native HTML/SVG for the fixed bracket/table and approved ECharts for team forecast history. Do not copy publisher code, logos or proprietary fonts. Use canonical Campus Designer local fonts/colors.

2026-10-09: Develop in an isolated temporary application, then save the completed Git repository at `/Users/jordan/Projects/bab-example-madness`. Preserve course configuration/catalog edits. The user requested a replacement online model for later years. Use dated T-Rank Barthag ratings, neutral-court log5 pairwise probabilities, and exact opponent-weighted bracket propagation. Keep one pre-tournament snapshot per year; do not invent daily history. The reconstruction is neither a published T-Rank bracket forecast nor a continuation of FiveThirtyEight’s model.

2026-10-09: Keep a transient bracket preview consistent through every round and title odds while preserving explicit team selection for the longer detail panel. Connect the final rounds, reduce introductory space, and expose actual dated forecast choices. Retain the existing data models, independently implemented code and Campus Designer styling; fidelity does not require copying publisher assets.

2026-10-09: Restore the original continuous bracket topology, compact branch labels and separate probability annotations. Remove the central card layout and its content-measurement connectors. Keep data, replay/calendar and table behavior unchanged. Judge fidelity by actual reference comparisons, not by calculation checks or connected paths alone.

## Outcomes & Retrospective

The application and later-year model are implemented. An independent calculation reproduced all 1,428 reconstructed probabilities within floating-point precision. Source/model review passed after six corrections. Final checks passed 72/72 in Node and the browser. Relevant source checkpoint `2f44204` was published in `77e6e40`; a report-only follow-up `659f9d1` also deployed successfully. Live original/reconstructed probabilities, actual results, cancellation, source and build-story links were verified. The gallery change is live with successful exact-commit Actions verification. No actual screen-reader or novice-usability pass is claimed.

The requested comparison correction is complete. Six original findings and the long-name connector follow-up are fixed and independently re-reviewed. Clean source `34bd433` passed 74/74 Node/browser checks; correction deployment `c8b7e81` and report follow-up `09a22ac` both succeeded. Gallery `7027598` deployed successfully and the live page loads the 1280 × 1040 connected-bracket preview with the updated 74-check wording. Human accessibility and novice/device gates remain outside the bounded pass. The lesson is that source/model tests did not replace a rendered comparison with the requested reference.

The original-geometry correction supersedes the earlier card-layout acceptance. Independent actual-browser comparison passed the continuous tree, line-width encoding, name placement and probability placement after two follow-up fixes. Source `40c6a1e` passed 74/74 checks; application `f8d1773` and gallery `fbcb0b9` deployed successfully and were verified live. No model/data changes were made.

## Context and Orientation

Course root: `/Users/jordan/Projects/decision-999`. Read Browser App Builder Setup/Plan/Build/Evaluate and the canonical Campus Designer references. App source lives in `app/`; browser cases in `tests/`; ignored build output in `dist/`. Evidence belongs in `evidence/browser-app-builder/madness/2026-10-09/`. Data research is in `/private/tmp/bab-madness-research/`; normalized delivery in `/private/tmp/bab-madness-data/`.

A forecast has seven cumulative probabilities: reach Round of 64, Round of 32, Sweet 16, Elite Eight, Final Four, title game, and champion. Game rounds run 0(First Four) through 6(titlegame). Use each year’s actual semifinal pairing and shared First Four bracket slots. Exact source URLs, licenses, dates and corrections accompany normalized data. Do not copy large raw publisher scripts into course evidence.

## Plan of Work

Finish source discovery and normalization. Check 68 teams, 67 game slots, next-game links, champions, region pairings, probability bounds and round totals. Preserve no-contest status and original daily snapshot dates. Bundle data for same-origin runtime use.

Build bilateral bracket, sortable heatmap table, year/snapshot controls and a selected-team history chart. Keyboard selection must match hover. Reset stale selection and playback on year changes. Forecast mode cannot expose future outcomes as known facts. Results mode shows actual outcomes and scores; unavailable probabilities remain unavailable. Narrow layouts retain a readable table or region view.

Verify shared pure model functions and actual production-browser interactions. Independently review the app, correct findings and simplify unused concepts. Prepare concrete source/evaluation records before any final publication approval still needed.

### Comparison correction milestone

Revise `app/main.js`, `app/style.css` and `app/index.html` in the application repository in response to the independent original-versus-recreation review. Hover and keyboard focus must show one consistent team's route and title probability; exiting the bracket preview must restore the selected team. Final-round connectors must make the regional winners' progress legible. Selected cards must retain readable hover/focus colors. Reduce the header/control stack and provide individually selectable recorded dates with honest time spacing. Any pure date/route logic introduced belongs in `app/model.js` with meaningful regression cases in `tests/cases.js`. Preserve data files and sources.

The reviewer inspects the production preview at desktop and narrow widths after corrections, and reports remaining failures to the developer until the identified issues pass. Record findings, corrections and the exact source checkpoint under `evidence/browser-app-builder/madness/2026-10-09/fidelity-review/`. Run the existing calculation suite and browser checks, build with the locked dependencies, then push ordinary commits to the already authorized application repository. Verify the exact Actions deployment and live interactions. Refresh the gallery screenshot/evidence and publish those course changes only after the relevant repository checks pass, leaving unrelated local edits intact.

### Original geometry correction

Replace the independent regional/card layout with one shared coordinate system. Round labels, regional branch junctions, semifinal convergence, championship horizontal branches and title stem must agree. Use a probability width scale consistent across stages, place annotations outside thick bands, and show compact names only for known entrants (plus outer initial teams). Internal undecided branches remain accessible hover/focus targets without visible placeholders. Review upper/lower and left/right routes, tiny probabilities, late snapshots/results, and first-round play-in behavior. Retain the prior review as a failed visual acceptance round. New evidence lives under `evidence/browser-app-builder/madness/2026-10-09/geometry-review/`.

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

Revision note (2026-10-09, comparison review): Reopened UI work at the user's request after an independent rendered comparison found misleading partial preview state, hover contrast and fidelity defects. Prior numerical validation remains useful but does not establish that these interactions passed.

Revision note (2026-10-09, corrected candidate): Six fidelity findings and a content-resize connector defect are fixed. The independent reviewer’s browser became unavailable during follow-up; their pass explicitly uses source review, independently inspected screenshots and coordinator-attributed interaction measurements. The final source checkpoint is `34bd4335e7c8297b5534e3ce2fa35b41db05a5d0`, with 74/74 checks and unchanged historical data.

Revision note (original geometry): Source `40c6a1e` replaces cards with one bilateral coordinate tree and retains models/data. Independent actual-browser comparison passed after fixing most-likely targets and compact labels. Coordinator verified Results and actual 375px layouts. Clean 74/74 Node/browser checks and production build passed; publication `f8d1773` passed Actions run 38016901031 and returning-browser checks. Refreshed gallery source/image passed repository checks plus 1280px/375px rendering, keyboard and copy inspection; course commit `fbcb0b9` passed Actions run 38017160406 and its live image/link were verified. App report follow-up `6f98ed0` also deployed successfully. All four owned preview/test processes were stopped; temporary tabs were closed.
