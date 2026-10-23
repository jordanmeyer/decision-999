# Additional tournament forecasts: recovered coverage

Collected October 10, 2026. **Research only: no sources were incorporated into Tournament Atlas and nothing was published.**

The collection contains 99 audited tables/captures: Ken Pomeroy 14, Bart Torvik 10, ESPN BPI 72, Silver Bulletin 1, numberFire 1 and Neil Paine 1. Of these, 53 have complete coverage of their published field or surviving field. Multiple captures can repeat the same probabilities. Complete coverage does not mean a complete daily history, seven published stages, or a pre-tournament snapshot.

`inventory.json` contains every recovered table's URL, date, original probability strings, normalized stage order, coverage, notes and raw-file checksum. `raw/` preserves extracts and four public Silver table screenshots. `audit.py` reproduces numeric checks. An additional undated JThom extract is retained as an unapproved lead, outside the normalized inventory.

## Follow-up: expanded Torvik history search

A subsequent search recovered additional published opening and post-game tables. The separate collection now contains 56 complete archive tables, including 49 captures with an unresolved title forecast (29 distinct probability matrices). It still does **not** establish complete men's or women's history. The original 99-table inventory below remains unchanged. See [the expanded recovery report](torvik-history/README.md) for exact coverage, corrected 2018 classification, additional searches and unresolved gaps.

## What could be added

| Provider | Recovered coverage | Fit and limitation |
| --- | --- | --- |
| Ken Pomeroy | Men: opening forecast for every played year 2016–2026; Sweet 16 updates for 2016, 2018, 2019, 2026 | 68 opening teams and six cumulative stages; updates have 16 survivors and four stages. First Four qualification is omitted. |
| Bart Torvik | Men: 2018, 2019, 2021–2026. Women: 2025–2026 | All 68 teams, seven stages. Actual published tables, distinct from the app's current rating-based reconstructions. One selected Pre-Tourney table per year, not a recovered daily archive. |
| ESPN BPI | Complete men's fields: 2017 and four 2018 captures; partial tables for 2019 and 2021–2026 | Six stages. Later captures expose only 50 teams. Missing teams must remain unavailable. |
| Silver Bulletin | Women: 2024, all 68 teams and seven stages | Public regional images provide one-decimal probabilities. Transcribed and checked; full precision paid files were not accessed. |
| numberFire / Brandon Gdula | Men: 2025 opening forecast, all 68 teams | Six stages from published simulations; no First Four column. |
| Neil Paine composite | Men: 2025 championship-eve snapshot, all 68 rows | Seven columns, but prior rounds are already results. Useful late forecast, not an opening alternative. |

## Year-by-year availability

These are recovered candidates, not options already added to the app. “Opening” means the source's opening publication; Torvik's label and timing caveat below still apply. Existing FiveThirtyEight counts are shown separately.

| Year | Existing FiveThirtyEight men / women | New complete men's candidates | New complete women's candidates |
| --- | --- | --- | --- |
| 2016 | 12 / 10 | KenPom opening + Sweet 16 | None recovered |
| 2017 | 12 / 10 | KenPom opening; ESPN history | None recovered |
| 2018 | 12 / 10 | KenPom opening + Sweet 16; Torvik; ESPN history from March 14 | None recovered |
| 2019 | 12 / 10 | KenPom opening + Sweet 16; Torvik | None recovered |
| 2020 | Cancelled | No played tournament | No played tournament |
| 2021 | 11 / 10 | KenPom opening; Torvik | None recovered |
| 2022 | 12 / 12 | KenPom opening; Torvik | None recovered |
| 2023 | 12 / 12 | KenPom opening; Torvik | None recovered |
| 2024 | None | KenPom opening; Torvik | Silver Bulletin opening |
| 2025 | None | KenPom opening; Torvik; numberFire opening; Neil Paine championship eve | Torvik |
| 2026 | None | KenPom opening + Sweet 16; Torvik | Torvik |

The current app additionally has men's Torvik-rating reconstructions for 2024–2026 and recorded results. This collection does not relabel those reconstructions as Torvik's published probabilities.

## Primary sources and important details

### Ken Pomeroy

Public opening tables: [2016](https://kenpom.com/blog/2016-ncaa-tournament-log5/), [2017](https://kenpom.com/blog/2017-ncaa-tournament-forecast/), [2018](https://kenpom.com/blog/2018-ncaa-tournament-probabilities/), [2019](https://kenpom.com/blog/2019-ncaa-tournament-probabilities/), [2021](https://kenpom.com/blog/ncaa-tourney-forecast/), [2022](https://kenpom.com/blog/2022-ncaa-tournament-probabilities/), [2023](https://kenpom.com/blog/2023-tourney-forecast/), [2024](https://kenpom.substack.com/p/ncaa-tournament-win-probabilities), [2025](https://kenpom.substack.com/p/2025-ncaa-tournament-probabilities), [2026](https://kenpom.substack.com/p/the-2026-ncaa-tournament-odds).

Recovered Sweet 16 updates: [March 24, 2016](https://kenpom.com/blog/sweet-16-probabilities/), [March 19, 2018](https://kenpom.com/blog/sweet-16-probabilities-2/), [March 25, 2019](https://kenpom.com/blog/2019-sweet-16-probabilities/), [March 26, 2026](https://kenpom.substack.com/p/sweet-16-possibilities).

The [corrected 2026 CSV](https://github.com/kenpom/tourney_predictions/blob/21354254edf58fa247f036a20d9e03a5409142e0/ncaa_2026.csv) records one million simulations. Counts sum exactly to 32, 16, 8, 4, 2 and 1 million across its stages. Duke's title count is 213,534. Other years use varying precision and less-than bounds; these remain strings in the inventory. Duplicate presentations of the same table were deduplicated only after checking agreement.

### Bart Torvik

[Men's tournament odds](https://barttorvik.com/tourneytime.php?conlimit=All&src=pre&year=2026) expose 2018–2019 and 2021–2026. [Women's odds](https://barttorvik.com/ncaaw/tourneytime.php?conlimit=All&src=pre&year=2026) expose 2025–2026. Each saved extract records the selected year, All teams and Pre-Tourney Odds.

No exact historical timestamp is supplied for this option. Men's 2024 already resolves Wagner–Howard in the First Four, so it cannot be described as pristine Selection Sunday. Current, last-ten and other choices are rating variants, not dated snapshots. Women's regional labels require joining by team to the actual bracket rather than blindly copying compass labels. The women's 2025 title estimates include Connecticut 41% and South Carolina 27.1%; 2026 includes Connecticut 54.3% and UCLA 19.4%.

### ESPN BPI

The Wayback collection targets [ESPN's tournament projection table](https://www.espn.com/mens-college-basketball/bpi/_/view/tournament). Each raw record preserves the exact archive URL, capture timestamp, publisher update date, team IDs and missing-field report. Count rows and verify actual tournament membership: the first two 2018 captures have 68 rows but omit Penn and include Boise State. The historical LIU Brooklyn identifier alias is explicitly accounted for.

| Year | Captures | Distinct probability tables | Full actual fields | Publisher date range |
| --- | ---: | ---: | ---: | --- |
| 2017 | 22 | 10 | 22 | 2017-03-12T22:40Z → 2017-04-02T03:27Z |
| 2018 | 6 | 6 | 4 | 2018-03-11T22:36Z → 2018-03-30T08:05Z |
| 2019 | 8 | 8 | 0 | 2019-03-20T07:45Z → 2019-04-01T07:45Z |
| 2021 | 1 | 1 | 0 | 2021-03-25T07:45Z → 2021-03-25T07:45Z |
| 2022 | 8 | 7 | 0 | 2022-03-15T07:45Z → 2022-04-04T07:45Z |
| 2023 | 3 | 3 | 0 | March 12, 2023 → April 3, 2023 |
| 2024 | 13 | 12 | 0 | March 18, 2024 → April 8, 2024 |
| 2025 | 8 | 8 | 0 | March 19, 2025 → April 5, 2025 |
| 2026 | 3 | 3 | 0 | March 19, 2026 → March 31, 2026 |

2017 contains ten distinct probability tables across 22 captures. The four complete 2018 fields are dated March 14, 15, 16 and 30; the earliest is already after the first First Four games. All recovered 2019 and 2021–2026 tables contain only 50 rows. Later-round use may be possible after checking that all surviving teams are present, but that has not been established for every capture. No full 2016 table or women's BPI history was recovered. Current historical pages can contain completed results; these were not substituted for archived forecasts.

### Other recovered providers

[Silver Bulletin's women's 2024 forecast](https://www.natesilver.net/p/2024-womens-march-madness-predictions), published March 19, supplies four public regional images: Albany 1 (17 teams), Albany 2 (17), Portland 3 (18) and Portland 4 (16). The 68-team stage totals agree within rounding. South Carolina's title probability is 41.2%. Raw screenshots and regional transcriptions are retained. The paid precision download was not accessed.

[Brandon Gdula's 2025 numberFire-based forecast](https://www.fanduel.com/research/2025-men-s-college-basketball-tournament-predictions-and-stage-odds-for-each-round), published March 17, supplies 68 teams after expanding View Full Table. It reports six stages from 100,000 simulations, with one-decimal probabilities. Duke is 23% to win the title.

[Neil Paine's 2025 composite](https://neilpaine.substack.com/p/2024-25-ncaa-tournament-forecast) links a [downloadable Datawrapper table](https://datawrapper.dwcdn.net/xFJtS/1/). The recovered CSV is updated April 6 at 05:41:55, timezone unspecified; it has 68 teams and two-decimal values. It is a championship-eve forecast with prior rounds resolved. This composite is its own source, not an independently recovered forecast from each rating system it incorporates. The 2026 article's currently available post-championship view did not yield an additional useful forecast snapshot.

## Found, but not ready to add

- **Silver Bulletin beyond women's 2024:** men's 2024 and men's/women's 2025–2026 pages advertise fuller data, but the public portions inspected do not expose complete opening matrices. Complete spreadsheets/history require paid access. No paywall was bypassed. Examples: [2025 opening archive](https://www.natesilver.net/p/archive-original-silver-bulletin), [2026 men](https://www.natesilver.net/p/2026-march-madness-ncaa-tournament-predictions), [2026 women](https://www.natesilver.net/p/2026-womens-march-madness-predictions).
- **Dolphin:** indexed historical pages suggest useful dated tables, but [the source](https://www.dolphinsim.com/ratings/) failed certificate validation. No full table was recovered and no security warning was bypassed.
- **TeamRankings:** [historical predictions](https://betiq.teamrankings.com/college-basketball/predictions/) expose selected outcomes such as Final Four/title, not the complete round-by-round matrix needed here. A title probability cannot determine missing round probabilities.
- **JThom:** [the public table](https://www.jthomanalytics.com/basketball/ncaa-tourney/?conf=All%20Teams) exposes 365 teams and seven stages, but a dated fixed tournament field was not established. The extract is a research lead, excluded from the audited inventory.
- **Opta women's 2025:** the [public article](https://theanalyst.com/articles/2025-womens-ncaa-tournament-predictions-who-will-win-march-madness) did not yield a complete recoverable matrix in this search.

This is an account of recovered material, not proof that additional archives do not exist. Public accessibility also does not establish permission to redistribute a provider's entire dataset; source terms need review before publication.

## Compatibility rules for a future integration

1. Map cumulative chances of reaching R64, R32, Sweet 16, Elite Eight, Final Four, final and champion. KenPom, ESPN and numberFire omit R64 qualification; show it as unavailable instead of inventing a value.
2. Preserve publisher precision, less-than bounds and checkmarks. A rounded zero does not prove elimination; a rounded 100 does not prove a game was won. Completed results need their own dated evidence.
3. Keep each provider's own snapshot dates. Do not manufacture daily histories from one pre-tournament table or interpolate between published snapshots.
4. Join names to existing team IDs and verify the actual field. The audit checks probability math and ESPN field membership; it is not a completed adapter for every provider.
5. Label late and incomplete snapshots honestly. Never substitute eventual results for missing contemporaneous forecasts or treat missing teams as zero.

## Reproduce and inspect

From the course repository root:

```sh
python3 evidence/web-application-builder/madness/2026-10-10/forecast-sources/audit.py
```

The audit regenerates `inventory.json`, checks unique team names, column lengths, valid ranges and decreasing cumulative probabilities, and checks complete-coverage stage sums with published rounding tolerance. KenPom 2026 also has exact integer simulation-total checks. It currently validates 99 tables. It does not claim to validate model accuracy or complete application integration.

To reacquire a table, open its `url` in the raw record. KenPom text tables can be extracted directly; retain their bounds and decimal strings. Use the pinned GitHub revision for the 2026 CSV. For Torvik, select the recorded year, All and Pre-Tourney Odds and copy the full table. For numberFire expand View Full Table. For Neil Paine use the Datawrapper table's Get Data download. For Silver compare all four retained regional images with the JSON transcription.

ESPN discovery used the Internet Archive CDX endpoint with `url=espn.com/mens-college-basketball/bpi/*`, years 2016–2026, HTTP 200 HTML, a tournament URL filter and daily capture collapse. This returned 579 candidate captures before narrowing to actual tournament-table URLs. Exact successful capture URLs are retained in each raw record. Downloads intermittently failed with connection refusals; sequential retries recovered the selected candidates. The stored dataset is sufficient to repeat the audit without live network access.

A first KenPom Sweet 16 parsing attempt missed a team because its row used a single-space column gap. The parser was corrected, and all 16 teams and remaining-stage totals then passed. This is why the checks include probability mass and team coverage rather than only successful parsing.

No browser UI, application build, source selector, live deployment, or returning-browser behavior was changed or claimed verified in this research task.
