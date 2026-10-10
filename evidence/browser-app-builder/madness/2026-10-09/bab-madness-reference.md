# Archived Madness dashboard: reference inspection

Inspected 2026-10-09 for the Browser App Builder recreation. This is a source-based inspection of the exact archived reference, not a claim of a successful rendered original-browser walkthrough.

## Primary sources accessed

- User reference: https://web.archive.org/web/20240411121651/https://projects.fivethirtyeight.com/madness-2015/index.html#mens
- Raw HTML was retrievable over HTTP using https://web.archive.org/web/20240411121651id_/https://projects.fivethirtyeight.com/madness-2015/index.html . The web text tool returned inaccessible, but curl with compression succeeded.
- HTML-linked archived application JavaScript: https://web.archive.org/web/20240411121651id_/https://projects.fivethirtyeight.com/madness-2015/js/app.js?v=6e2193d8a08dff432a0b4ae620bced6f
- HTML-linked archived application CSS: https://web.archive.org/web/20240411121651id_/https://projects.fivethirtyeight.com/madness-2015/css/app.css?v=f2d5c667ab5e019d68f676ee5e6734e0
- Publisher's original data repository: https://github.com/fivethirtyeight/data/tree/master/march-madness-predictions-2015
- Publisher's methodology: https://fivethirtyeight.com/features/how-our-march-madness-predictions-work/ (search index available; current URL no longer rendered by this tool).

Raw source copies for inspection only: `/private/tmp/bab-madness-reference.html`, `.js`, `.css`. Do not copy the archived application implementation or proprietary font/assets into the new example. Independently implement behavior and attribute data separately.

## What the reference actually does

1. Men/Women switch. `#mens` in the user's URL selects men; the original also has a women's dataset and corresponding bracket. Scope should be explicit if the new example initially implements men's tournaments only.
2. Bracket/Table switch on desktop. The principal view is a four-region, bilateral tournament tree: teams at the outer edges, rounds progressing inward, championship at the center. It is a forecast explorer, not a game-picking or user-simulation application.
3. Snapshot timeline across the tournament. Initial forecast, daily completed-game dates, and current/final forecast positions; round labels above the track; draggable handle and clickable dates. A Play/Pause control cycles recorded snapshots, at 500 ms in the old implementation. Dates with no available snapshot are inactive. Changing gender pauses and resets to the initial snapshot. The archived HTML's timestamp is Apr 5, 10:55 pm EDT; the timestamp of the archive capture is not the forecast timestamp.
4. Hover a team or a future bracket slot. If an unresolved slot is hovered, the application finds its most probable descendant at that round. It highlights that team's route through later stages, shows unconditional round-advancement probabilities along the path, and shows its title probability and logo in the center. Actual settled slots are filled with the known team. Unresolved slots are not all permanently populated with the favorite. Path thickness scales with probability (square root), and the current hovered stage is emphasized. Hover is a focus/exploration interaction, not a choice that conditions/recalculates the forecast.
5. Table view. Desktop columns: Region, Seed, Logo, Team, chance to reach Round of 64, Round of 32, Sweet 16, Elite Eight, Final Four, championship game, and win championship. All teams remain available; no pagination or search in the old app. Seed and probability sorting work numerically; initial ordering is bracket order. Probability columns default descending when selected. Headers stay visible while the table scrolls. Cells show probability heatmap shading, precise percent via tooltip, certainty as a checkmark, zero as a dash, and eliminated teams subdued. Mobile drops region/logo columns and uses a compact table.
6. Percentage formatting distinguishes small but nonzero `<1%` and very high but uncertain `>99%`; exact probabilities are accessible in tooltip text (three decimal percentage places). Do not confuse displayed rounded zero with elimination or rounded 100 with certainty.
7. Narrow behavior: original removes/hides the bracket under 980px and shows the table. It does not cram the full bracket into a tiny viewport. The recreation can improve this with an explicit region view or accessible local horizontal scroll, while retaining a reliable table alternative.
8. Data-download and methodology/credit links. Original fonts, school logos, and analytics are implementation details to replace, not necessary features to reproduce.

## Data contract needed for faithful behavior

For each year and tournament category: real field/team identifiers, display names, seed including First Four variants, correct region and region-to-semifinal mapping, bracket slot/order, snapshot date/time, alive/eliminated status, cumulative advancement probabilities for seven stages (First Four-to-R64 through champion), and settled game outcomes or enough explicit facts to mark reached stages. Each snapshot must represent a coherent forecast across the full field.

- Use explicit round names rather than the original 2015 men's “2nd/3rd round” terminology, which changed in 2016.
- Snapshot history is needed to recreate the slider honestly. A single pre-tournament forecast permits one available snapshot, not an invented daily timeline.
- Win probabilities are unconditional from the snapshot state; successive round columns must not be described as the probability of winning the next game once there. Conditional ratios may be a separate, clearly derived view, only where the denominator is nonzero.
- Advancement probability for each team must be nonincreasing across later rounds. At a coherent pre-tournament snapshot, cumulative column totals are approximately the number of slots in that round (64, 32, 16, 8, 4, 2, 1), allowing small rounding tolerance. First Four competitors share a berth; 68 teams must not each be assumed certain to reach the 64-team bracket.
- Later tournament snapshots include reached-round certainty, eliminated teams, and remaining uncertainty. A title winner-only final snapshot is not a useful default forecast comparison.
- Every selector option needs explicit coverage and provenance. 2020's cancellation must be shown as a cancellation/no tournament state; do not manufacture a 2020 bracket or forecasts. Forecast data not available for later years should never silently become outcome data or predictions from a different model presented as FiveThirtyEight's.
- Preserve provider/model, source URL, snapshot timestamp, units, license, ingestion date, and transformations. Historic public result facts and independently generated forecasts must be distinguished from the publisher's archived forecast.

## Useful analytical outcomes

- Compare a high seed with another team whose path makes its title probability higher or lower than seed alone suggests.
- Inspect why an excellent team can still have a low championship probability after several required wins.
- Follow how an upset changes contenders' paths across actual archived snapshots, with a visible date and data-provider label.
- Sort the table by a particular round to compare likely advancement without overinterpreting title odds alone.
- Compare years without pretending models, field rules, or available forecast timestamps are identical.

## Acceptance checks for the recreation

- Year selector exposes every year 2016–2026 and accurately labels coverage. 2020 renders a genuine no-tournament state; no stale previous-year teams or probabilities remain visible.
- Men's selected state is clear. If women are included, switch changes teams, bracket structure, source/snapshot and round coverage; no mixed records.
- Bracket has correct seeds, First Four placement, regions and semifinal pairing for each represented year; real tournament structure is not inherited blindly from 2015.
- Team mouse/focus/click selection reveals the same cumulative probabilities as the table. A future-slot focus selects only a possible descendant at that slot and is not described as an actual result.
- Year/category changes clear impossible selected teams and clamp/reset snapshot state. Play cannot keep running old-year frames and stops on its final frame or manual changes.
- Sorting uses full numeric probabilities, not rendered strings. Rounded percentages and zero/certainty states remain distinct.
- Accessible keyboard controls provide all hover information. Selected team/round/year/snapshot is represented in text. Do not rely only on color or line width.
- Table remains readable and locally scrollable on 320px widths and at 200% text; bracket can fall back to a region/table view. Names and percentages do not overlap.
- Data assertions cover monotonicity, valid bounds, team/slot uniqueness, expected field size, First Four accounting, year-specific region mappings and approximate round totals.
- Direct source links, limitations, and timestamp are discoverable beside the visualization. Provider gaps never look like confident forecasts.
- No external runtime assets/telemetry or school marks required. Duke/Campus Designer navy, system fonts, focus states and editorial layout can be applied to the independent recreation.
