# Tournament Atlas: how this was built

How does a favorite become a champion? Explore men's tournament brackets from 2016–2026, separating original FiveThirtyEight forecasts through 2023 from T-Rank/log5 reconstructions for 2024–2026 and actual results.

This example responds to a real user request to recreate the useful interactions of FiveThirtyEight's 2015 dashboard and add every year since 2016. The user subsequently requested another documented probability model for later years. This was not a simulated student conversation, and the historical inputs are not synthetic fixtures.

- [Application](https://jordanmeyer.github.io/bab-example-madness/)
- [Compact build story](https://jordanmeyer.github.io/bab-example-madness/build-story.html)
- [Source repository](https://github.com/jordanmeyer/bab-example-madness)
- [Actual request and planning choices](https://github.com/jordanmeyer/bab-example-madness/blob/main/BUILD-STORY.md)
- [Plan and model boundaries](https://github.com/jordanmeyer/bab-example-madness/blob/main/PLAN.md)
- [Evaluation and failed rounds](https://github.com/jordanmeyer/bab-example-madness/blob/main/EVALUATION.md)
- [Deployment record](https://github.com/jordanmeyer/bab-example-madness/blob/main/DEPLOYMENT.md)
- [Independent source and interaction review](../madness/2026-10-09/bab-madness-app-review.md)
- [Independent model review](../madness/2026-10-09/bab-madness-derived-review.md)
- [Reproduction review](../madness/2026-10-09/bab-madness-reproduction-review.md)

## Data and interpretation

The seven played tournaments from 2016 through 2023 contain 83 genuine archived FiveThirtyEight snapshots. The last available snapshots precede their championship games. Results are separate evidence, and selecting a team does not condition the published probabilities.

The 2024–2026 model uses frozen T-Rank ratings from before the First Four and Bart Torvik's documented neutral-court log5 formula. Exact bracket propagation averages over every possible opponent. Each year has one separately labeled reconstruction, not a forecast published by FiveThirtyEight or T-Rank and not an invented daily history. Ratings remain fixed; there are no added injury, venue, matchup-specific, or rating-uncertainty adjustments. The cancelled 2020 tournament has no invented field.

Recipe library: Apache ECharts. Native HTML/SVG supplies the bracket and sortable table. Campus Designer provides the visual direction and locally licensed fonts, without publisher or institutional marks.

## Evidence and limits

The local automated data/model suite passed 72 of 72 checks. Independent review verified data normalization, model mathematics and exact reproduction of all delivered years and frozen rating inputs. Review corrections included stale finalist labels, incorrect accessible descriptions, VCU's no-contest status, replay reset, an eliminated First Four team's bracket overlay, restored-page charts, regional navigation, and misleading rounding of tiny probabilities.

The gallery preview is an actual local production screenshot of the 2026 reconstruction captured on October 9, 2026. GitHub Actions succeeded for the published commit, and live checks verified both model sources, the 2026 title result, cancellation, and build-story/source links. The source repository's deployment record identifies the exact commit and observations. Configured-Mac observations do not certify model calibration, full accessibility, phone-device behavior, clean-machine installation, or novice usability. These results are separate from the earlier nine-app synthetic campaign and its 285-check total.
