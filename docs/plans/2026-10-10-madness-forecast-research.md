# Collect historical tournament forecasts

This living ExecPlan follows `~/.codex/PLANS.md`. The previous completed plan is archived as `docs/plans/2026-10-10-madness-womens.md`.

## Purpose / Big Picture

Find and pull the most complete accessible published forecasts for men's and women's tournaments from 2016 onward, then report which can support Tournament Atlas. This is preparation for a possible source selector. The user's current request explicitly says not to incorporate the sources yet. Do not change or publish the application.

## Progress

- [x] (2026-10-10) Inspected existing application coverage and primary-source candidates.
- [x] Recovered public KenPom, Torvik, ESPN, Silver Bulletin, numberFire and Neil Paine tables; recorded partial and inaccessible sources.
- [x] Audited probability ranges, cumulative ordering and complete-coverage stage totals, preserving precision and missing values.
- [x] Saved raw extracts, image evidence, normalized inventory and reproducible audit script.
- [x] Finished the year-by-year coverage report, audited 99 recovered tables, and verified that the app remains unchanged.

## Complete-history investigation

- [x] (2026-10-10) Expanded Wayback searches to uncollapsed capture indexes and archived women’s data paths; inspected toRvik source/data and wehoop source.
- [x] Retrieved all selected uncollapsed March/April Current Odds/default men’s captures and all seven women’s captures; audited 56 full tables across 63 responses.
- [x] Recorded complete-history gaps, public repository/index findings, Common Crawl service failures, and a reviewable publisher request (not sent).
- [ ] Obtain the missing original published history. The requested complete men’s/women’s archive remains unfulfilled; no interpolation or reconstruction will be substituted.

## Follow-up progress

- [x] (2026-10-10) Investigated Torvik published updates specifically. Recovered and audited nine full post-game tables across men’s 2019, 2021, 2023 and 2025, plus two opening tables. Saved a separate `torvik-history/` report and reproducible audit. Earlier uncertainty about any recoverable Torvik timeline is resolved; complete daily and women’s post-game coverage remains unestablished. No app changes.

## Surprises & Discoveries

KenPom supplies opening forecasts for every played men's year from 2016 through 2026, plus four recovered Sweet 16 updates. Torvik supplies actual published seven-stage tables for men from 2018 and women from 2025. Its 2024 men's Pre-Tourney option already resolves Wagner–Howard. Silver Bulletin's public 2024 women's regional images cover all 68 teams. ESPN's archived 2017 and some 2018 tables cover the field; later captures expose only 50 rows. An early 2018 table has 68 rows but includes Boise State instead of Penn, so row count alone does not prove coverage. Missing First Four probabilities, rounded zeros and exact results require distinct representations.

## Decision Log

2026-10-10: Acquisition and reporting are authorized; implementation and publication are deferred under the explicit research-only request. The earlier draft overextended the selector objective into immediate implementation; this revision corrects that scope before any application changes.

2026-10-10: Preserve publisher values and bounds. Never infer omitted teams' probabilities, turn rounded zero into elimination, or reconstruct a publisher's forecast from eventual outcomes. Keep capture time separate from publication time. Do not bypass paywalls or certificate errors.

2026-10-10: Separate complete opening fields, complete surviving fields, partial fields and late snapshots. A full row set at championship eve is not an opening forecast. Repeated archive captures are not necessarily new probability matrices.

## Outcomes & Retrospective

The application remains unchanged. Collected data support additional providers, including women's forecasts for 2024–2026, but no source selector or production integration has been tested. Complete source-level team joins, redistribution review and UI behavior belong to any future integration task. The report records actual recovered coverage rather than implying an exhaustive archive.

## Context and Orientation

The app is `/Users/jordan/Projects/bab-example-madness`, live at https://jordanmeyer.github.io/bab-example-madness/. Existing data contain 83 men's and 74 women's FiveThirtyEight snapshots for 2016–2019 and 2021–2023, plus men's Torvik-rating reconstructions for 2024–2026. The existing women's later years contain results only.

This repository owns research evidence at `evidence/web-application-builder/madness/2026-10-10/forecast-sources/`. Preserve unrelated catalog/config edits, `.claude/`, and other review documents.

## Plan of Work

Collect public tables using standard HTTP downloads and browser tools where needed. Save source URLs, dates, selected options and original precision. Inspect every year exposed by the named providers and follow other useful primary-source leads. Retain inaccessible and incomplete findings as limitations rather than inventing data.

Normalize column order into cumulative stages for auditing, without integrating into the application's team-ID schema. Validate uniqueness, ranges, stage ordering and probability mass with rounding tolerance. ESPN coverage is checked against actual tournament rosters, including the documented historical LIU identifier alias.

Write a year-by-year report identifying complete usable candidates and material limitations. Finish with whitespace checks and confirmation that the app is unchanged. No site build or deployment is needed for research artifacts.

## Concrete Steps

Run `python3 evidence/web-application-builder/madness/2026-10-10/forecast-sources/audit.py` to regenerate `inventory.json` from preserved raw files. Inspect counts and source dates. Run `git diff --check` in this repository and `git status --short` in the app. Link the report and primary sources in the final response.

## Validation and Acceptance

Every promoted candidate has recovered rows, identifiable source and known coverage. Complete tables pass probability-mass checks. Four public Silver regional images provide independent transcription evidence. KenPom 2026 simulation counts sum exactly to the expected 32, 16, 8, 4, 2 and 1 million. Torvik selected year and Pre-Tourney option were inspected in the browser. Incomplete ESPN fields remain explicitly incomplete. 2020 remains cancelled. Search results alone do not establish a recovered full forecast.

## Idempotence and Recovery

Keep source extracts and corrected parsers; rerun the audit without contacting sources. Do not overwrite user changes or alter the application. Failed optional downloads leave collected files intact. Keep paid spreadsheets and invalid-certificate sources out of the recovered inventory.

## Artifacts and Notes

`README.md` explains coverage, source limitations and reproduction. `raw/` holds useful factual extracts and four public table screenshots. `inventory.json` preserves normalized probability strings. `audit.py` verifies those extracts. No credentials, caches, generated application bundles or complete article copies are included.

## Interfaces and Dependencies

Research tooling uses Python's standard library; it is not an application prerequisite. Any future integration must handle missing First Four values, rounded bounds, dated snapshots, independent provider histories and unchanged recorded results. No new runtime dependency is introduced here.
