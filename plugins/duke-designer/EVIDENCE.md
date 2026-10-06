# Duke Designer example evidence

The listing reuses the completed **October 2, 2026 Codex exercise** from the “Review design skill” chat. Three separate builders created fictional event, research and student-organization webpages; separate reviewers inspected all three and owned one verdict each. Corrections continued until every current artifact passed. This is an iterative design review, **not a one-shot success rate, repeated-generation benchmark, model comparison, or accessibility certification**. No Claude API call or new model evaluation was used to import this evidence on October 6.

## Results and scope

| Example | Final independent verdict | Resolved findings |
| --- | --- | --- |
| AI and leadership symposium | [Round 3 PASS](assets/evidence/assessment/reviews/event/round-3.md) | E1: narrow enlarged layout overflow; E2: unreadable enlarged registration labels |
| Responsible AI research initiative | [Round 2 PASS](assets/evidence/assessment/reviews/research/round-2.md) | R1: enlarged white text escaped its navy panel |
| MBA AI/product student organization | [Round 2 PASS](assets/evidence/assessment/reviews/student-organization/round-2.md) | S1: save control name omitted its visible label; S2: enlarged narrow layout overflow |

The listing's three examples, three final passes, and five resolved implementation defects count these artifacts and findings. They do not measure general skill accuracy. The [coordination record](assets/evidence/assessment/checklist.md) preserves the failed rounds; the [review brief](assets/evidence/assessment/reviewer-brief.md) explains reviewer independence and required checks. Each final report identifies its exact reviewed source version. All 12 public HTML/CSS/JavaScript/font hashes were checked against the [final verification record](assets/evidence/assessment/final-verification.json) during import and matched.

The recorded browser was Chrome 154.0.8037.97. Review covered normal 1440px desktop and 390px mobile rendering, 320px reflow, computed-font-size doubling and root font size at 200%, keyboard operation, visible focus, relevant state labels and demo completion, font loading, and source/brand checks. Exact matrices differ by example and are recorded in the reports and checks. Text-enlargement simulations are not a native-browser-zoom certification. No screen-reader, physical-device or cross-browser certification, real registration/membership service, production mark authorization, student outcome, adoption, cost or timing claim is made.

## Screenshots and example

[Desktop](assets/desktop.png) and [mobile](assets/mobile.png) are byte-for-byte copies of the event review's final `assessment/reviews/event/round-3/1440-normal.png` and `390-normal.png`, respectively. They are full-page captures at 1440×3891 and 390×5693 pixels. They have not been cropped, recolored, regenerated or altered. The page visibly identifies itself as fictional and unaffiliated.

[Open the example](assets/example.html) to use the same event page offline. The original [HTML](assets/evidence/examples/event/index.html), [CSS](assets/evidence/examples/event/style.css), [JavaScript](assets/evidence/examples/event/script.js) and font remain preserved. The downloadable single file embeds the original CSS and font and moves the unchanged script from a deferred external script to the end of the body. No content, style declarations, font bytes or interaction logic were changed. The review PASS applies to the preserved original files; the single-file packaging is a derivative, not a separately scored evaluation.

The event page's Open Sans font is distributed under the [SIL Open Font License](assets/OFL.txt), included beside the example and inside its HTML comment. Georgia remains a system fallback and is not redistributed. The skill guidance itself still bundles no font; only these demonstration artifacts do.

The listing prompt restates the original event brief: a fictional Duke symposium about AI and leadership, agenda, speaker section and demo registration, with rendered desktop/mobile review. It is a practical reuse prompt, not a verbatim transcript or a promise to reproduce the exact composition. It replaces the unrelated pricing-workshop prompt.

## Inspect or reproduce the browser checks

All three passed examples are included under `assets/evidence/examples/`, along with prior/final reports, final recorded checks and final review scripts. The original exercise used a locally installed Playwright path; the copied scripts change only that import to `require('playwright')`. [Provenance](assets/evidence/provenance.json) records every copied file's source-relative path and SHA-256; script entries also record their original hashes. Two historical review documents replace local workspace/runtime prefixes with source-relative paths and the Playwright package name; their original hashes are also recorded. The original sibling project was read only.

From this plugin directory, make a scratch copy so rerunning checks cannot replace the historical record:

```sh
review_dir=$(mktemp -d)
cp -R assets/evidence/. "$review_dir/"
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

The retained evidence is curated: original source files, final check scripts/results, all review-round reports, and final normal desktop/mobile screenshots. Reports also name additional stress-state screenshots from the original workspace that are not bundled here; running the scripts produces those again. The imported research and student screenshots live beside their final checks. Deferred [skill-improvement proposals](assets/evidence/assessment/skill-proposals.md) remain proposals, not an implemented skill change.
