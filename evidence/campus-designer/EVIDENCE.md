# Campus Designer example evidence

On October 7, 2026, the plugin was renamed from Duke Designer (`duke-designer`) to Campus Designer (`campus-designer`), and this folder from `evidence/duke-designer/`, so the name does not suggest an official Duke tool. The preserved review records, reports and provenance below keep the original name; only folder names changed, so every recorded hash still matches.

The listing reuses the completed **October 2, 2026 Codex exercise** from the “Review design skill” chat. Three separate builders created fictional event, research and student-organization webpages; separate reviewers inspected all three and owned one verdict each. Corrections continued until every current artifact passed. This is an iterative design review, **not a one-shot success rate, repeated-generation benchmark, model comparison, or accessibility certification**. No Claude API call or new model evaluation was used to import this evidence on October 6.

This folder sits outside the installable plugin, so installing Campus Designer downloads only the skill and two display screenshots. It moved from `plugins/duke-designer/assets/` on October 6; paths in [provenance.json](provenance.json) are relative to this folder, and every recorded hash still matches.

## Results and scope

| Example | Final independent verdict | Resolved findings |
| --- | --- | --- |
| AI and leadership symposium | [Round 3 PASS](assessment/reviews/event/round-3.md) | E1: narrow enlarged layout overflow; E2: unreadable enlarged registration labels |
| Responsible AI research initiative | [Round 2 PASS](assessment/reviews/research/round-2.md) | R1: enlarged white text escaped its navy panel |
| MBA AI/product student organization | [Round 2 PASS](assessment/reviews/student-organization/round-2.md) | S1: save control name omitted its visible label; S2: enlarged narrow layout overflow |

The listing's “3 of 3 example pages passed independent review” and “5 defects caught in review and fixed” count these artifacts and findings. Each page passed after one (research, student organization) or two (event) rounds of fixes. They do not measure general skill accuracy. The [coordination record](assessment/checklist.md) preserves the failed rounds; the [review brief](assessment/reviewer-brief.md) explains reviewer independence and required checks. Each final report identifies its exact reviewed source version. All 12 public HTML/CSS/JavaScript/font hashes were checked against the [final verification record](assessment/final-verification.json) during import and matched.

The recorded browser was Chrome 154.0.8037.97. Review covered normal 1440px desktop and 390px mobile rendering, 320px reflow, computed-font-size doubling and root font size at 200%, keyboard operation, visible focus, relevant state labels and demo completion, font loading, and source/brand checks. Exact matrices differ by example and are recorded in the reports and checks. Text-enlargement simulations are not a native-browser-zoom certification. No screen-reader, physical-device or cross-browser certification, real registration/membership service, production mark authorization, student outcome, adoption, cost or timing claim is made.

## Screenshots and example

The event review's final full-page captures are preserved unchanged at [1440px](assessment/reviews/event/round-3/1440-normal.png) (1440×3891) and [390px](assessment/reviews/event/round-3/390-normal.png) (390×5693). The listing shows display crops of the top of each, 1440×900 and 390×844, in `plugins/campus-designer/assets/desktop.png` and `mobile.png`. They were cropped with macOS `sips`, starting one pixel row down, and not otherwise altered. The directory card image, `plugins/campus-designer/assets/cover.png`, is a 1440×810 headless-Chrome render of the student-organization page (the viewport height was reduced from 900 on October 6 so the crop ends above the navy purpose band) after one post-review edit: at the maintainer's request on October 6, its sample-session panel background changed from Dandelion to Ginger Beer (recorded in [provenance](provenance.json) with the reviewed file's hash). The reviewer's original capture, [`1440-normal-full.png`](assessment/reviews/student-organization/round2/1440-normal-full.png), and the original in the sibling project are unchanged; the review PASS covers the version before this edit. The page visibly identifies itself as fictional and unaffiliated.

[Open the example](example.html) to use the same event page offline; the listing links to it as “Open the full page.” The original [HTML](examples/event/index.html), [CSS](examples/event/style.css), [JavaScript](examples/event/script.js) and font remain preserved. The single file embeds the original CSS and font and moves the unchanged script from a deferred external script to the end of the body. No content, style declarations, font bytes or interaction logic were changed. The review PASS applies to the preserved original files; the single-file packaging is a derivative, not a separately scored evaluation.

The event page's Open Sans font is distributed under the [SIL Open Font License](OFL.txt), included here and inside the example's HTML comment. Georgia remains a system fallback and is not redistributed. The skill itself bundles no font.

The listing’s “Try asking” prompt is an everyday request of the kind a Duke student or staff member might make, not the reviewed brief. The reviewed event brief asked for a fictional Duke symposium on AI and leadership with an agenda, speakers and demo registration, labeled fictional, claiming no affiliation and using no logos, with rendered desktop/mobile review; the event reports record it. The screenshots show the output of that reviewed brief, not of the listing prompt.

## Inspect or reproduce the browser checks

All three passed examples are under `examples/`, along with prior/final reports, final recorded checks and final review scripts under `assessment/`. The original exercise used a locally installed Playwright path; the copied scripts change only that import to `require('playwright')`. [Provenance](provenance.json) records every copied file's source-relative path and SHA-256; script entries also record their original hashes. Two historical review documents replace local workspace/runtime prefixes with source-relative paths and the Playwright package name; their original hashes are also recorded. The original sibling project was read only.

From this folder, make a scratch copy so rerunning checks cannot replace the historical record:

```sh
review_dir=$(mktemp -d)
cp -R . "$review_dir/"
cd "$review_dir"
npm install --no-save playwright
python3 -m http.server 8080 --bind 127.0.0.1
```

With that server running, in another terminal change to the same scratch directory and run these browser scripts (Node.js and Google Chrome required):

```sh
node assessment/reviews/event/round-3/inspect.cjs
node assessment/reviews/research/recheck-2.cjs
node assessment/reviews/student-organization/round2.cjs
```

These scripts inspect existing static artifacts; they make no model API calls. They write new screenshots and check records into the scratch copy. Port 8080 must be free before starting the server. Inspect the new screenshots and recorded states rather than treating script exit as a design verdict. New browser/font environments may render differently.

The retained evidence is curated: original source files, final check scripts/results, all review-round reports, and final normal desktop/mobile screenshots. Reports also name additional stress-state screenshots from the original workspace that are not bundled here; running the scripts produces those again. Deferred [skill-improvement proposals](assessment/skill-proposals.md) remain proposals, not an implemented skill change.
