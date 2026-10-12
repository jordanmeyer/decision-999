# Tournament Atlas review corrections: data and model support

October 9, 2026. Scope: generated labels, snapshot meaning, completed-stage/loss helpers, data-model regressions. No UI fidelity claim is made here.

## Changes

`data-preparation/normalize.py` owns a single season-independent compact-name policy. It starts with the historical full name, uses stable school-ID aliases for conventional shorter names, and applies ordinary State/Saint/directional abbreviations. It preserves `name` and `shortName`. Added `bracketName` and `superShortName` to all 680 team-season records. The latter uses the frozen ESPN abbreviation with explicit historical LIU / New Orleans exceptions; it does not fetch mutable contemporary branding. Paired First Four labels use the two super-short names.

`app/model.js` derives each archived snapshot’s status from actual certainty in the archived probability arrays: a game is included when its advancing team has probability 1 at that game’s output stage and the other team has probability 0. The game day uses America/New_York. Across all 83 archived snapshots, every post-initial entry includes all scheduled outcomes on its recorded date; each season stops at 66 of 67 outcomes, before the championship. The 2021 no-contest is an included advancement, not a played game. No intraday timestamp is claimed. A constructed partial-day case is explicitly labelled “Includes 1 of 2 March 14 games”.

Added pure route-stage and per-slot elimination helpers, plus a selected-team result status. An eliminated Sweet 16 team retains the earlier winning strips; only its Sweet 16 strip is marked as a loss. Completed forecasts do not receive uncertain probability route bands.

## Reproduction and preservation

Used the retained raw directory `/private/tmp/bab-madness-research`, whose inputs were already recorded by `data-preparation/source-inventory.json`:

```
python3 data-preparation/normalize.py --raw /private/tmp/bab-madness-research --out /private/tmp/madness-checklist-normalized
node scripts/derive-forecasts.mjs --data /private/tmp/madness-checklist-normalized --ratings data-inputs --out /private/tmp/madness-checklist-derived
node tests/run.mjs
```

Normalized earlier years and derived 2024–2026 were copied into the app only after comparing against the pre-edit Git HEAD. All 680 original team identities, all 670 game records, and all 86 complete forecast arrays compare exactly equal. Thus no scores, winners, probabilities, ratings, or outcomes were changed. Only label fields and explanatory forecast prose were added to the data.

## Meaningful verification

80/80 Node checks passed, including six new checks covering canonical-label completeness and uniqueness across all played years, unresolved route stages, per-game loss strip/status, known snapshot coverage, all 83 archive phases, and partial-day wording. Existing numeric source facts and exact log5 propagation checks continue passing.

A native macOS AppKit Arial-BoldMT 12px measurement checked all 680 bracket names, all 680 short names, and all 40 First Four pairs. Final maxima:

- `bracketName`: UNC Greensboro 97.34765625px (102px allowance).
- `superShortName`: GWEB 37.330078125px (48px allowance).
- paired labels with ` / `: SEMO / AMCC 80.888671875px (102px allowance).

The check script is `/private/tmp/madness-measure-labels.swift` and its output is `/private/tmp/madness-label-metrics.txt`. This is maintainer verification using already-installed tools, not a student or app dependency. Browser rendered width checks are still required because CSS controls the actual available width.

## Failed rounds retained

First all-year font pass caught historical full names not present in the most recent season: Maryland-Baltimore County, College of Charleston, North Carolina St., Alabama-Birmingham, and UC-SantaBarbara. Corrected centrally by school ID to UMBC, Charleston, NC State, UAB, and UCSB. No year-specific UI lookup was introduced.

The initial partial-day synthetic test selected a March 15 UTC game whose Eastern date was March 15 rather than March 14; it therefore removed an already-unresolved outcome and correctly failed. Fixed the test to the explicit March 14Eastern Pittsburgh/Mississippi State game ID 401522116; the partial-day helper then passed.

The first native Swift measurement attempt could not write its default compiler cache under sandbox permissions. Re-ran with an explicit permitted temporary module-cache directory; no permission boundary was bypassed. A scratch Swift CGFloat/Double mismatch was corrected before metrics were produced.

## Remaining acceptance

UI agent must use these fields/helpers, preserve full names in accessible labels, and verify actual all-year bracket render widths, late snapshots, Results mode, and keyboard behavior. This record does not substitute for browser review or screen-reader/user acceptance.
