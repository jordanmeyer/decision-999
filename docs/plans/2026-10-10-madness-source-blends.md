# Reconstruct tournament forecasts and compare source blends

This living ExecPlan follows `~/.codex/PLANS.md`. The preceding research plan is preserved at `docs/plans/2026-10-10-madness-forecast-research.md`.

## Purpose / Big Picture

Tournament Atlas will let visitors select a forecast source for each men’s or women’s season, follow recalculated odds after actual games, compare the arithmetic average of sources, and select a logistic ensemble learned only from earlier seasons. A year-dependent accordion will report historical predictive performance honestly, including when the ensemble is worse or has no independent test history. Silver Bulletin is limited to women’s 2024.

## Progress

- [x] (2026-10-10) Inspected the clean application, recovered source inventory, current propagation code, design guidance and existing tests.
- [x] Archived the research plan and recorded this implementation plan.
- [x] Normalize source tables and map every available team; resolve incomplete/late input presentation.
- [x] Implement and independently test bracket-conditioned reconstruction from source odds.
- [x] Fit prior-year-only logistic ensembles and chronological historical comparisons.
- [x] Generate source timelines and provenance for all available seasons/competitions.
- [x] Add source dropdown and year-dependent comparison accordion.
- [x] Validate calculations, missing-history rules, browser interactions, narrow layout, and production output.
- [x] Update evaluation/deployment records and publish the authorized application update; verify live output.

## Surprises & Discoveries

Published advancement probabilities do not uniquely determine pairwise win chances. The app’s existing reconstruction requires 68 Torvik ratings and cannot directly handle women’s 64-team fields or other sources. An explicit inverse model is needed. Existing inventory includes late snapshots and incomplete ESPN fields, which cannot truthfully become complete opening forecasts. The user selected complete opening fields only. The retained 37 fields span 20 competition/seasons.

## Decision Log

2026-10-10: Preserve recovered publisher inputs and label all recalculated timelines as app reconstructions. Do not call reconstructed probabilities official updates. Fit without current-season outcomes; use only actual completed results to condition subsequent dates.

2026-10-10: Fit men and women separately. Show average only with at least two sources. Show ensemble only with prior-year observations for current source inputs; a first appearance such as Silver women 2024 cannot borrow unrelated sources or men’s outcomes. Evaluate chronologically: train on seasons strictly before the tested season. Report held-out performance separately from in-sample fit and never assert guaranteed improvement.

2026-10-10: Prototype a bracket-specific inverse probability model before production integration. Each pair of teams can meet at only one node of the bracket. Fit neutral maximum-entropy matchup probabilities at that node to the source’s cumulative advancement probabilities. This accommodates stage-specific source assumptions without claiming to recover the publisher’s hidden ratings. Preserve rounding bounds and measure fit error. If a source cannot support a usable fit, investigate rather than silently dropping it.

## Outcomes & Retrospective

Implemented 37 source fields, 60 source/blend options and 757 reconstructed daily snapshots. Independent model and generated-data checks pass, alongside 132 original archive checks. Browser source routing passed all 22 competition/year selections (including two cancelled states). Published source/evaluation commit 70900dd passed exact-commit Pages run 38064231670; a returning live browser verified source selection, comparison and Silver-only women 2024. All application deliverables are complete.

## Context and Orientation

Course repository: `/Users/jordan/Projects/decision-999`. Application: `/Users/jordan/Projects/bab-example-madness`; live URL `https://jordanmeyer.github.io/bab-example-madness/`. Its `app/main.js` controls views and reads yearly JSON under `app/public/data/`. `app/model.js` contains probability formatting, result paths and snapshot interpretation. `scripts/derive-forecasts.mjs` currently generates three Torvik-rating opening snapshots. `tests/run.mjs` runs existing calculation/data checks. Vite builds static assets with `npm run build`.

Recovered inputs live at `evidence/web-application-builder/madness/2026-10-10/forecast-sources/` in the course repository. `inventory.json` normalizes 99 tables. `torvik-history/` contains additional archived opening and post-game tables, including a pristine 2024 opening alternative. Original app JSON contains FiveThirtyEight forecasts and actual dated games. Preserve all original publisher data so the new generator is reproducible without network retrieval.

## Plan of Work

### Source preparation

Create build-time normalized source inputs with exact team IDs, publication dates or explicitly unknown dates, raw probability bounds, missing-value indicators and source URLs. Prefer earliest complete opening tables, repair the 2024 Torvik starting table with its March 18 archive, and retain FiveThirtyEight opening values. Missing first-four probabilities require explicit inferred estimates rather than invented publisher values. Preserve original files. Verify all team mappings and field membership, not just row counts.

### Reconstruction and blend calculations

Implement a reusable binary bracket tree supporting 64 and 68 teams. Leaves are teams, internal nodes are games, and each parent combines the two possible winner distributions. Fit source matchup chances from its earliest usable probabilities before conditioning on later outcomes. Subsequent snapshots lock only games completed by that Eastern-time date and recompute every unresolved branch exactly. The average is the arithmetic mean of eligible source probabilities at the same date.

Fit a regularized logistic model, meaning a weighted sum of source log-odds passed through a probability curve, using prior-season actual game outcomes and source-derived pregame chances. Preserve matchup reversal symmetry and document missing-source treatment after inspecting coverage. Freeze regularization without tuning on the displayed year. The ensemble’s pairwise probabilities feed the same bracket propagation, preserving coherent advancement totals.

Historical comparison uses earlier seasons evaluated one at a time with training only on still earlier seasons. Compare individual sources, average and ensemble on the same games where the sources exist; report game count, seasons, Brier score (mean squared probability error), log loss (penalty for confident wrong predictions), and signed improvement. Where there is fitting history but no independent test season, say so rather than displaying training accuracy as proof of improvement.

### Application and verification

Add a labeled source select beside year and preserve the user’s established toolbar grouping. Changing source resets to a valid date and updates bracket, table, detail, coverage, downloads and methodology. Add a full-width accordion under the existing disclosures that updates with competition and year. Avoid claims that all source combinations have historical support. Existing results mode remains independent of forecast choice.

Use deterministic fixtures to prove conditional propagation, exact completed outcomes, no future-result leakage, valid probability sums, complementary matchup predictions, ensemble training cutoffs, and single-source/first-year option rules. Run original tests and the new model tests. Build, preview and inspect actual UI at desktop and narrow widths, including keyboard selection, source/date changes, cancellation, and all competition/year combinations. Record model residuals and historical metrics. Publish only after those checks pass, then verify the exact deployment and live behavior.

## Concrete Steps

From the application run `node tests/run.mjs`, the new source-model test runner, the reproducible forecast generator, and `npm run build`. Use `npm run preview -- --port 9752` for production output at `/bab-example-madness/`. Stop only preview processes started for this task. Use ordinary commits and the existing main-branch Pages workflow. In the course repository preserve unrelated config/catalog changes and run `git diff --check` for changed evidence and plan files.

## Validation and Acceptance

Every available year/league lists its applicable sources, with Silver only in women’s 2024. Every reconstructed timeline has provenance and changes only as known games are included. A four-team synthetic bracket must match hand-derived conditional probabilities. Changing a future winner must leave earlier forecasts and current-year fitted parameters unchanged. Completed stages equal zero or one exactly; unresolved probabilities are finite and cumulative; round totals match the bracket.

The first applicable season has no ensemble. Women’s 2024 has neither blend. A source first appearing later cannot acquire coefficients learned from its own future outcomes. Historical comparison must use matching test games and strict chronological cutoffs, report negative improvement where observed, and distinguish unavailable validation from zero error. Browser checks must demonstrate source switching and accordion changes, not just presence of option labels. Live publication remains incomplete until the pushed revision’s Pages deployment and behavior are observed.

## Idempotence and Recovery

Keep source inputs immutable, generate into a temporary output before replacing production JSON, preserve source-fit failures, and use ordinary commits. Do not overwrite research archives or user work. Do not send publisher messages or purchase access. App writes outside the course workspace must use the host’s required permission mechanism.

## Artifacts and Notes

Save mathematical fixtures, fit residuals, source joins, training years, scoring outputs and browser observations with the application and sanitized course evidence. The research inventory is evidence of recovered values, not a claim that arbitrary missing data can be reconstructed.

## Interfaces and Dependencies

Keep the plain JavaScript/Vite application and existing ECharts dependency. New calculation modules use JavaScript and build-time standard-library tooling; no visitor-side service or secret is introduced. Yearly JSON will carry source metadata, reconstructed snapshots, optional average/ensemble, and historical comparison data. Preserve original forecasts separately from generated source timelines.

Revision note (2026-10-10): User authorized multi-source reconstruction and historical logistic blends, superseding the earlier research-only restriction. The user chose complete opening fields only; partial ESPN and late Neil Paine inputs are excluded.

2026-10-10 implementation findings: Women 2024 Silver has a real published 100.7% half-region Elite Eight total. Normalization changes its largest marginal by 0.3585 percentage point; this is explicitly disclosed. Fit maximum for other sources is below 0.177 percentage point. Chronological results do not consistently favor the ensemble: for the 2023 men comparison it trails FiveThirtyEight and the arithmetic average slightly. Fixed ridge, per-season weighting, missing-feature imputation and source-history eligibility are documented in the application SOURCE-MODEL.md.

Completion audit: every complete recovered opening field is selectable in its competition/year; 2020 remains cancelled; all source timelines condition after actual game days; average and ensemble obey coverage/history rules; historical table uses chronological held-out seasons and reports gains or losses. Reproduction is byte-identical and original data fields are unchanged. Local 375px rendering, all 22 year/competition states and the live deployment are observed. Screen-reader, physical-phone and novice-user checks remain outside this requested model expansion, as previously agreed.

Final publication: documentation follow-up 16b4c3b passed run 38064373779. App working tree is clean; temporary preview stopped and viewport restored. Sanitized evidence is in `evidence/web-application-builder/madness/2026-10-10/source-blends/`.
