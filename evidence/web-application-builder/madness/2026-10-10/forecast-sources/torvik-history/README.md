# Torvik published history recovery — October 10, 2026

**The requested complete men's and women's forecast history has not been recovered.** Published post-game forecasts are recoverable for some men's tournaments. No women's post-game sequence was recovered. The application remains unchanged.

The expanded pass examined 63 archive responses. Fifty-six contain complete 68-team, seven-stage tables that pass numeric audits. Forty-nine still have an unresolved title forecast; these represent 29 distinct probability matrices after removing repeated values. The other seven have a resolved champion. Seven responses contain no usable team table. These counts describe archived captures, not complete daily histories.

## Recovered coverage

Archive capture dates below are UTC. They are not exact publisher update times. Some captures occur during an active round; they must not be labeled as including every game on that calendar date.

| Competition / year | Distinct forecast matrices | Capture dates carrying forecasts | Post-game history status |
| --- | ---: | --- | --- |
| Men 2016 | 0 | None | Missing |
| Men 2017 | 2 | March 18; April 15 | First-round update; late-captured championship matchup forecast |
| Men 2018 | 2 | March 14, 16 | Opening and after first-round games |
| Men 2019 | 1 | March 23 | Partial tournament history |
| 2020 | — | Tournament cancelled | Not applicable |
| Men 2021 | 6 | March 14, 15, 16, 18, 19, 21, 22, 23 | Opening plus three later updates; repeated probabilities on several dates |
| Men 2022 | 1 | March 16 | Opening only |
| Men 2023 | 2 | March 19, 26 | Two later updates |
| Men 2024 | 2 | March 18, 19 | Opening only |
| Men 2025 | 11 | March 18, 19, 21, 23 | Opening plus partial first/second-round history |
| Men 2026 | 0 | March archive responses lacked usable tables | Existing separately collected Pre-Tourney table is not a timeline |
| Women 2016–2024 | 0 | None recovered from Torvik | Missing |
| Women 2025 | 2 | March 18 only | Opening only; no post-game sequence |
| Women 2026 | 0 | Indexed responses lacked usable tables | Existing separately collected Pre-Tourney table is not a timeline |

The 2017 April 15 capture contains Gonzaga 63.5% / North Carolina 36.5% for the championship, although the final had already been played by the capture date. This is a stale forecast retained on the source page, not a forecast published April 15. Its original update timestamp remains unknown.

Correction to the first report: the March 16, 2018 capture is **post-game**, not simply an opening table. Older pages use numeric 100 rather than checkmarks for reached stages. Classification based only on checkmark counts missed that distinction. The post-tournament 2021 table also retains non-binary earlier-stage cells despite a resolved champion; those cells do not make it a valid new forecast snapshot.

The nine post-game tables first recovered remain verified: March 23, 2019; March 21–23, 2021; March 19 and 26, 2023; and three captures on March 21/23, 2025. The expanded collection adds older 2017/2018 material and additional opening tables. For example, Gonzaga's title probability moves 33.2% → 33.7% → 40.2% in the three 2021 post-game captures. These are captured Torvik outputs, not reconstructed estimates.

## Searches completed

- **Wayback, full capture indexes:** queried `barttorvik.com/tourneytime.php` and `barttorvik.com/ncaaw/tourneytime.php` with `matchType=prefix`, without daily collapse. The indexes returned 124 men's captures for 2016–2026 and seven women's captures. All men's March/April captures using Current Odds/default source and all seven women's captures were retrieved. Alternate model settings are not additional dates and were excluded from this pass.
- **Women's archive details:** three March 18, 2025 captures have opening probabilities; April 27 has completed results; October 7, 2025 and May 10/June 28, 2026 contain no usable team table. No indexed mid-tournament women's capture was found in this query.
- **Archived data paths:** inspected the broader domain index and the women's prefix filtered for JSON, CSV, odds, tournament, archive, prediction and simulation paths. The women's filtered index has 13 URLs, including ratings/roster/results-related JSON and the already known tournament page variants. No dated tournament-probability file series was identified. A wildcard-subdomain query unexpectedly broadened to the whole domain and hit its limit; it was not treated as an exhaustive women's result. Explicit-prefix queries replaced it.
- **Live site controls:** Current Odds offers year/model selection, not a forecast-date selector. The Time Machine exposes historical team ratings. Those are not a published round-by-round tournament probability archive.
- **toRvik source:** `bart_tourney_odds` accepts year and odds variant and scrapes the same tournament page; there is no date argument. [Pinned source](https://github.com/andreweatherman/toRvik/blob/8ef7ffe3f893aed93bc3196ca862718a508cb197/R/bart_tourney_odds.R).
- **toRvik data repository:** inspected the complete 2,322-entry tree. It includes ratings by date, game/player data, schedules and pregame probabilities, but no tournament advancement archive. [Repository revision](https://github.com/andreweatherman/toRvik-data/tree/46d1036443ca452fdd1c6cf25cf5dff50de68337).
- **wehoop source:** the women's Torvik functions retrieve season ratings and game schedules, not dated tournament advancement probabilities. [Pinned source](https://github.com/sportsdataverse/wehoop/blob/cd0e4e39480689ec1aab3765a8a0faa3e1599a71/R/bart_wbb.R).
- **Other public repository/search leads:** model projects using Torvik ratings did not establish an archive of the publisher's original outputs.
- **Arquivo.pt:** exact URL version-history queries returned zero results for both tournament pages.
- **Common Crawl:** March/April 2025 and March/April 2026 index requests returned 502/503/504 errors; a focused women's prefix retry also timed out. This route remains **unverified**, not a confirmed empty archive.

These findings do not prove that Torvik has no private backups or that no other public copy exists. They do show that the checked public interfaces cannot presently supply the requested complete history.

## Evidence and reproduction

Each `torvik-*-archive-*.json` records the exact archive URL, original URL, capture time, retrieval time/URL, source HTML digest, selected option when present, year and raw table cells. `discovery/` holds the full prefix indexes, women's file-path index, Arquivo.pt empty responses, unusable archive extracts, and a capture-by-capture summary.

Run from the course repository:

```sh
python3 evidence/web-application-builder/madness/2026-10-10/forecast-sources/torvik-history/audit.py
```

The audit checks 56 complete tables for unique teams, valid probabilities, decreasing cumulative probabilities, and stage totals within rounding tolerance. Table footer rows are excluded explicitly. This checks data consistency, not forecast accuracy, exact publication timing, or finished application integration. Team names still need the application's ID mapping before incorporation.

The source HTML omits closing `tr` tags. Parsing therefore closes a previous row on the next opening `tr` or the end of `tbody`. The initial strict parser saw only headers; inspecting the HTML identified the cause. Downloads intermittently encountered connection refusals; a paced sequential retry recovered all selected captures. Full HTML, third-party scripts, cookies and credentials are not retained here.

## Required next evidence

The most useful next step is an export or confirmation from Torvik: original dated outputs for both competitions, their earliest available years, timestamps/timezones and update frequency, plus reuse terms. A [reviewable request is prepared](PUBLISHER-REQUEST.md) but **has not been sent**. Sending a message requires user authorization. Missing snapshots will not be filled with reconstructed probabilities and presented as published history.
