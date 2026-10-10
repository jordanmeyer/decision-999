# Tournament dashboard data research

Verified October 9, 2026. Men's tournament scope matches the supplied `#mens` reference.

## Deliverables

- Portable app data: `/private/tmp/bab-madness-data/` (`index.json`, eleven year files; 893 KB including validation).
- Reproducible research scripts, complete schema/provenance/rights notes, license and hashes: `/private/tmp/bab-madness-data-tools/`.
- Raw source cache: `/private/tmp/bab-madness-research/` (20 ESPN month JSONs and seven archived 538 CSVs). Do not bundle raw ESPN responses; they include unneeded athlete/branding metadata.

## Verified year coverage

|Year|Bracket games|Teams|538 snapshots|First snapshot|Last snapshot|Champion|
|---|---:|---:|---:|---|---|---|
|2016|67|68|12|2016-03-14|2016-04-02|Villanova|
|2017|67|68|12|2017-03-12|2017-04-01|North Carolina|
|2018|67|68|12|2018-03-12|2018-03-31|Villanova|
|2019|67|68|12|2019-03-17|2019-04-06|Virginia|
|2020|0|0|0|—|—|—|
|2021|67|68|11|2021-03-14|2021-04-03|Baylor|
|2022|67|68|12|2022-03-13|2022-04-02|Kansas|
|2023|67|68|12|2023-03-12|2023-04-01|Connecticut|
|2024|67|68|0|None|None|UConn|
|2025|67|68|0|None|None|Florida|
|2026|67|68|0|None|None|Michigan|

2021 includes one no-contest advancement, so 66 actual games were played; all other played years have 67. 2020 is cancelled with no official bracket or fabricated data.

## Primary sources

ESPN month endpoint: `https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard?dates=YYYYMM&groups=100&limit=1000`, queried March and April. All ten played years returned complete 68-team/67-game datasets. Date ranges returned400, month queries work. The endpoint is public but undocumented; no open-data license is asserted.

FiveThirtyEight CSV original: `https://projects.fivethirtyeight.com/march-madness-api/YEAR/fivethirtyeight_ncaa_forecasts.csv`. Live endpoints now redirect to ABC HTML, but genuine CSV archives were retrieved. Exact working URLs:

- 2016: https://web.archive.org/web/20170225054931id_/https://projects.fivethirtyeight.com/march-madness-api/2016/fivethirtyeight_ncaa_forecasts.csv
- 2017: https://web.archive.org/web/20230427192747id_/https://projects.fivethirtyeight.com/march-madness-api/2017/fivethirtyeight_ncaa_forecasts.csv
- 2018: https://web.archive.org/web/20180828014750id_/https://projects.fivethirtyeight.com/march-madness-api/2018/fivethirtyeight_ncaa_forecasts.csv
- 2019: https://web.archive.org/web/20230427215218id_/https://projects.fivethirtyeight.com/march-madness-api/2019/fivethirtyeight_ncaa_forecasts.csv
- 2021: https://web.archive.org/web/20220315183608id_/https://projects.fivethirtyeight.com/march-madness-api/2021/fivethirtyeight_ncaa_forecasts.csv
- 2022: https://web.archive.org/web/20220512011228id_/https://projects.fivethirtyeight.com/march-madness-api/2022/fivethirtyeight_ncaa_forecasts.csv
- 2023: https://web.archive.org/web/20230428024902id_/https://projects.fivethirtyeight.com/march-madness-api/2023/fivethirtyeight_ncaa_forecasts.csv

FiveThirtyEight publisher cutoff/license: https://github.com/fivethirtyeight/data/blob/master/README.md explicitly says sports forecasts stopped updating June13,2023 and datasets are CC-BY4.0 unless noted. License: https://github.com/fivethirtyeight/data/blob/master/LICENSE. The2018 directory directly links the forecast CSV and describes its fields: https://github.com/fivethirtyeight/data/tree/master/march-madness-predictions-2018.

NCAA independent champion/cancellation check: https://www.ncaa.com/history/basketball-men/d1. This confirms2026Michigan69–63UConn and2020cancelled.

2024alternative considered: https://www.natesilver.net/p/2024-march-madness-predictions. The article offers a separate paid spreadsheet, not an openly licensed replacement. No2024–2026forecast has been copied or invented. Actual results-only years preserve honest coverage.

## Corrections / interpretation boundaries

- 2018LIU Brooklyn seed99 in inactive ESPN record corrected to16 using official NCAA printable bracket: https://i.turner.ncaa.com/sites/default/files/external/printable-bracket/2018/bracket-ncaa.pdf. Map538ID2341 toESPNhistoricalID6446 for this year only; all other forecast IDs match directly.
- 2021Oregon–VCU ESPNgame401310924 `STATUS_UNCONTESTED`: normalize administrative1–0 to null scores and retainOregonadvancement. Do not describe as played.
- Historical538names preferred to mutableESPNbranding for forecastyears; publisherdatemetadata retained.
- Daily forecasts preserve exact `forecast_date`; they are not precise intraday timestamps and may include same-day results. Latestforecast precedeschampionship, so keep actualresults separate.
- NoESPN/NCAAlogos, articles, sitecode, photos or printablelayout copied; limitedfacts are independently arranged and attributed. CC-BYclaims apply only to538data. Noendorsementimplied.

## Validation

Passedcounts, uniqueIDs, allregional seeds, [4,32,16,8,4,2,1] rounds, actualFinalFourpairings, completewinner→nextgame topology, scorewinner checks, independentNCAAchampions, all68teamssnapshotcoverage, bounded/monotone probabilities and cumulative-round probability totals[64,32,16,8,4,2,1]. Maximumsumerror4e-8 (2016), others≈6e-12. Seevalidation.json. These prove structural coherence, not predictiveaccuracy nor a second-sourceauditofeverygame.

## User-requested alternative model, implemented

The updated2024–2026files are in `/private/tmp/bab-madness-data-derived/`. They contain one initialsnapshot each from dated T-Rankinputs and BartTorvik's documented neutral-courtlog5formula, integrated over all possiblebracket opponents. Label `T-Rank / log5 reconstruction`; not a forecast originally published by538orBartTorvik. The exactformulaandprimarysources, frozen68-teaminputs, explicitnamejoins, generator and sourcehashes are in `/private/tmp/bab-madness-data-tools/README.md`. Noactualtournamentresultsenterprobabilities. Older538files unchanged. Leadchampionshipprobabilities:2024Houston27.992116%,2025Houston22.068079%,2026Duke20.185605%. Derivedroundtotalsvalidatedwithin1e-10. Independentreviewinprogress.
