# Tournament Atlas design checklist correction — October 10, 2026

Source checkpoint: `72fb26c2b55b93f87c4f810a90398b85b28ee27f` in [bab-example-madness](https://github.com/jordanmeyer/bab-example-madness). Main application implementation is `d93f75a`; the final checkpoint shortens the story navigation after phone inspection. The user supplied `docs/MADNESS-DESIGN-REVIEW.md`; its Campus Designer direction supersedes the earlier literal black-strip and continuous navy-ramp styling.

Coordinator verification: **82/82 design/interaction checks**, **80/80 data/model checks**, **16/16 actual route-rendering checks**. These are not a new independent-agent review or human accessibility test. Frozen data, calculations, dependencies and publication workflow compare unchanged against `6766f11`.

## Reproduce

Use Node 22.19.0/npm 10.9.3 in the app repository. Run `npm ci`, `node tests/run.mjs`, `npm run build`. Run `npm run test:browser -- --port 9741` and open `http://localhost:9741/tests/design-review.html` and `/tests/route-rendering.html`. Separately run `npm run preview -- --port 9742` and open `http://localhost:9742/bab-example-madness/`. Both servers bind to loopback. Stop them after use.

`design-checks.json` retains actual observed browser outcomes. It covers all ten played years' initial/last/Results states and measures 2,984 rendered names, plus every potential narrow name and per-season uniqueness. It checks 1024px alignment, 375px scrolling/type floor, whole-canvas hover, roving keyboard focus, known probabilities, score tooltips, special years, and the active rounded-zero 2016 Fairleigh Dickinson case. `route-rendering.txt` records 16 checks including 30 seams across six teams, a negative control for the rejected round caps, frozen animation checkpoints, interruption, retirement and clearing.

Screenshots are actual production-preview browser captures. `desktop.jpg` is 1313×1000, `phone.jpg` is 375×890, and `table.jpg` is desktop. `keyboard-route.jpg` and `late-detail.jpg` use a separately observed 1193×909 effective viewport; the browser's requested dimensions differed from its reported dimensions for that tab, so no 1313px claim is made for those images. `story-phone.jpg` is the corrected 375px story. The phone table had no internal vertical scroll, no page overflow, and no visible labels below 12px. The desktop pin scroll settled 16px from the top of the viewport. Representative production error/warning logs were empty.

## Failed rounds and corrections

The first candidate passed 46/63 checks: actual Open Sans exposed narrow labels missed by short-code/Arial assumptions. A reviewed map, used only when measured names exceed their slot, brought this to 62/63; the remaining three labels were shortened and every full field remained distinguishable. Visual inspection then caught hairlines crossing text; strips now end at the hairline. A phone story header wrapped and was corrected by shortening the navigation label. The final suite expanded to 82 meaningful checks. `first-round-failures.json` preserves the initial failure evidence.

Source review found that the initial 2016 archive records FDU's title probability as zero while its alive flag is true. The new elimination copy now checks that flag before naming an actual loss, avoiding disclosure of future results. The display describes the published precision and does not declare the active team out.

Reduced-motion instant scrolling is source-reviewed; actual preference emulation was unavailable and no operating-system setting changed. Physical touch, screen-reader speech, novice usability, other browser engines and model calibration remain separate unverified checks. The pre-existing Vite warning for the 538.93 KB minified ECharts/application chunk remains.

## Checklist outcomes

| Item | Correction and evidence |
|---|---|
| One column | Centered 1004px explorer plus gutters; 1024px left/right alignment assertion and desktop screenshot. |
| Titles | Tournament Atlas is the masthead H1; one subtitle/dek, no home eyebrow. |
| Empty center | Ranked active contenders: 2023 Houston 22%, Alabama 16%, Texas 8%; list clears title slot. |
| Detail placement | Detail precedes First Four; actual pin scrolling observed. |
| Printed strips | Transparent Cast Iron 600 names above hairlines; 16px height. |
| Selection versus loss | Dandelion/Navy selection; plain Graphite 400 losers. |
| Team codes | Measured full bracket names with reviewed narrow labels; distinct labels for all 680 team records. Unresolved First Four uses an explicit berth label, with both full names in tooltip, accessible label and First Four section. |
| Bracket font | Local Open Sans; all-season rendered fit verified. |
| Probabilities | 13px Open Sans 600, 15px emphasis for focused/hovered round. |
| Strip height | Uniform 16px, with 2px space between paired positions. |
| Eliminated center | Alabama: “Out · lost to San Diego St. in the Sweet 16”; active rounded-zero forecasts remain active. |
| Status wrap | “Through Mar 25 games”; partial-day accuracy retained. |
| Round headings | 12px, one upper rule. |
| Calendar | Month-boundary labels, no leading zero, 15px current date, functional Play icon, actual-date round bands. |
| Single snapshot | 2024–2026 replace the track with date/model summary; no disabled Play. |
| Precision | Whole visible percentages and <1%/>99%; exact tooltips/download remain. |
| One-point history | Compact sentence until a second snapshot; history chart then appears. |
| Palette | White, Hatteras, Shale Blue, Prussian Blue, Navy; browser verifies exact published RGB values. |
| Table emphasis | Reached checks unfilled; no fills before Sweet 16; title column stronger rule/weight. |
| Table density | Rendered desktop rows at most 33px. |
| Text alignment | Team/Region left, numbers right. |
| Phone scrolling | No vertical table cap; measured visible and scroll heights equal. |
| Sort arrows | Active column visible; other indicators on hover/focus only. |
| Results scores | All advanced slots expose winner-first score or no-contest tooltip; all ten championship scores appear at rest. |
| Disabled controls | 2020 buttons neutral even when pressed; actual computed colors checked. |
| 2020 rule | Removed panel's duplicate top border. |
| Minimum type | 12px floor including seeds, chart ticks and phone labels. |
| Neutral roles | Panels Whisper Gray, pin/selected table Ginger Beer, lost text Graphite, hover outline. |
| Phone hierarchy | Shorter masthead/dek; hover guidance hidden for `hover:none` devices. Physical touch not tested. |
| Phone date density | First/last/current labels only; intermediate marks retained. |
| About | Stacked disclosures/prose in a 65ch column. |
| Footer | Source credit, license link and affiliation disclaimer. |

Publication results are recorded in `deployment.json` after verifying the exact Actions commit and returning live browser. Historical review evidence remains in its original dated folders.
