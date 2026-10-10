# Add women’s tournaments to Tournament Atlas

This living ExecPlan follows `~/.codex/PLANS.md`. Keep Progress, Surprises & Discoveries, Decision Log and Outcomes & Retrospective current.

## Purpose / Big Picture

Visitors can switch between Men and Women using the existing segmented-button design and retain the selected year from 2016 through 2026. Both competitions have their actual bracket/results; verified archived women’s probabilities appear where available. Missing forecasts must never be invented or use post-tournament ratings.

## Progress

- [x] (2026-10-10) Inspected app, normalization tools and existing archived CSVs; confirmed women’s rows in the original forecast sources.
- [x] Acquire and validate women’s historical results and forecast coverage: 650 games and 74 archived snapshots.
- [x] Implement competition-aware loading, labels and controls.
- [x] Validate data, switching, layout, keyboard and source disclosures: 132 data/model, 95 women’s integration, 160 men’s layout and 25 route checks pass.
- [x] Published e959185; Pages 38029211918 succeeded and returning live browser verified both competitions and known answers. Evidence saved; temporary tabs/servers stopped.

## Surprises & Discoveries

The existing CSV archives contain both competitions. Women had 64 teams before 2022 and 68 afterward. Women’s regions have city names rather than the men’s compass names. Existing normalization assumes men’s field size, region format, champion IDs and one historical ID correction. Results and forecasts join by provider team IDs; any discrepancy requires explicit source reconciliation.

## Decision Log

2026-10-10: Preserve men’s frozen data and URLs. Put women’s yearly files under app/public/data/womens/ and add a competition dimension to index/loading/cache keys. Keep browser execution self-contained.

2026-10-10: Reuse actual archived women’s predictions and ESPN tournament facts. Investigate later pre-tournament probability evidence, but use clearly labeled results-only coverage if suitable historical forecast inputs cannot be verified. Do not feed completed-season ratings into a pre-tournament reconstruction.

## Outcomes & Retrospective

Delivered and verified live: Men/Women toggle, all years 2016–2026, 650 women’s games and 74 archived women’s snapshots. Source 7ae9c94; publication e959185; Pages 38029211918 succeeded. Checks pass: 132 data/model, 95 women’s interactions, 160 men’s layout and 25 route rendering. Four narrow labels were corrected after the initial browser failures. Women’s 2024–2026 remain explicitly results only because historical pre-tournament probability inputs were not established. No claim of novice or screen-reader acceptance. Evidence is in evidence/browser-app-builder/madness/2026-10-10/womens/.

## Context and Orientation

The app repository is /Users/jordan/Projects/bab-example-madness, on main. main.js loads yearly JSON, renders bracket/timeline/table and handles interaction. model.js contains probability/result helpers. data-preparation/download.py and normalize.py collect/normalize original sources; app/public/data contains bundled files. Tests are tests/run.mjs, tests/design-review.html and tests/route-rendering.html. The course repository /Users/jordan/Projects/decision-999 holds this plan and evidence. Preserve its unrelated site/config, generated marketplace changes and untracked review files. The app is already authorized for ordinary commits to jordanmeyer/bab-example-madness and GitHub Pages.

## Plan of Work

First collect March/April women’s scoreboards into /private/tmp/bab-madness-women and reuse the archived CSVs with exact recorded URLs/digests. Extend the preparation interface with an explicit gender parameter and gender-specific field sizes, championship cross-checks and region parsing; retain source evidence and validate all joins, bracket topology, scores and probability totals. Freeze normalized women’s files only after validation. Research later forecasts without substituting post-event information.

Next add Men/Women buttons next to Year, using the existing button-group/aria-pressed pattern. Cache and request identity include competition and year. Switching stops playback and disposes charts, resets selection and chooses the available forecast/results mode. Re-enable controls after loading and cancellation; prevent old network responses from replacing newer selections. Make bracket identity, sources and downloads use the selected competition. Preserve current name/route geometry and 2020 cancellation.

Finally test all women’s years and men/women/year switching, including identical numeric school IDs and 2020. Exercise real browser layouts and keyboard input, snapshot dates, scores and source links. Build, commit, publish, wait for matching Actions success and inspect the returning live browser. Record sanitized evidence under evidence/browser-app-builder/madness/2026-10-10/womens/.

## Concrete Steps

Use Python standard-library acquisition tools as maintainer tooling only. From the app, run node tests/run.mjs, npm run build, npm run test:browser -- --port 9741 and npm run preview -- --port 9742 with /Users/jordan/.nvm/versions/node/v22.19.0/bin on PATH. Visit localhost browser test/preview pages. Stop only owned servers and tabs. App writes require normal sandbox escalation.

## Validation and Acceptance

Every played women’s year has 64 teams/63 games before 2022 and 68/67 afterward, four valid regions and correct semifinal pairings. Snapshots have one row per team, bounded decreasing advancement probabilities and round totals 64/32/16/8/4/2/1. Results agree with independently published finals. 2020 has no field or predictions. Women’s 2023 initially favors South Carolina and Results identifies LSU; switching to Men restores men’s data without leaking women’s cached records. Verify all years, no viewport overflow at 375px, keyboard controls, exact publication and unchanged men’s fixtures.

## Idempotence and Recovery

Reuse frozen raw downloads after validating their content. Never rewrite history, overwrite unrelated data or silently guess joins. Preserve failed checks and explain unavailable forecasts. Check existing Actions status before retrying publication. No new repository or dependencies needed.

## Artifacts and Notes

Existing men’s source files and archive provenance supply reusable original CSVs. Save raw input digests and retrieval URLs in normalized women’s sources. Keep oversized raw inputs, caches and generated bundles out of the course repository.

## Interfaces and Dependencies

Use existing Vite, native HTML/SVG and ECharts. Add no runtime services. The catalog identifies both competitions; each yearly data file retains teams, games, forecasts, regionOrder and finalFourPairs. Gender controls and their pressed state reflect the actual loaded competition. Maintain the current source/notice disclosures and production repository base path.

Research note (2026-10-10): the frozen original CSVs supply all seven women’s forecast seasons. ESPN host-site labels in 2019 differed from bracket regions; archived team_region resolves these joins, with per-game provenance retained. Women’s source IDs need no translation. No vetted pre-tournament women’s input series was obtained for 2024–2026; those years intentionally remain results only. Full-season ratings must not masquerade as historical forecasts.
