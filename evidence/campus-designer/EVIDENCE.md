# Campus Designer example evidence

On October 7, 2026, the plugin was renamed from Duke Designer (`duke-designer`) to Campus Designer (`campus-designer`), and this folder from `evidence/duke-designer/`, so the name does not suggest an official Duke tool. The preserved review records, reports and provenance below keep the original name; only folder names changed at that time. Subsequent example edits are recorded below and in provenance.

The listing reuses the completed **October 2, 2026 Codex exercise** from the “Review design skill” chat. Three separate builders created fictional event, research and student-organization webpages; separate reviewers inspected all three and owned one verdict each. Corrections continued until every current artifact passed. This is an iterative design review, **not a one-shot success rate, repeated-generation benchmark, model comparison, or accessibility certification**. No Claude API call or new model evaluation was used to import this evidence on October 6.

This folder sits outside the installable plugin, so installing Campus Designer downloads only the skill and two display screenshots. It moved from `plugins/duke-designer/assets/` on October 6; paths in [provenance.json](provenance.json) are relative to this folder, and the recorded hashes matched at import.

## Results and scope

### October 8, 2026 — developer-requested link styling fix

Credit to **Jordan Meyer, the plugin developer**, for requesting removal of decorative link arrows and supplying two screenshots showing “Registration demo ↗” and “Try the registration demo ↗” in the event example. Both showed links in the [event example](examples/event/index.html) before the follow-up removal below.

Implemented in plugin **0.3.1**: `skills/campus-designer/SKILL.md` prohibits decorative arrows on links, including navigation and button-styled calls to action, whether rendered as text, icons or CSS. Its `references/review.md` checklist now checks this preference. This is developer-requested design guidance, not a Duke brand requirement or an accessibility finding.

The initial change updated instructions and the review checklist, without a new generation or independent rendered review. Historical review screenshots, source hashes and verdicts remain unchanged and may show arrows. The original five-defect count is unchanged. The October 2 assessment's statements that the skill was unchanged describe that earlier exercise; its three deferred proposals remain unimplemented.

### October 2, 2026 — independent example reviews

| Example | Final independent verdict | Resolved findings |
| --- | --- | --- |
| AI and leadership symposium | [Round 3 PASS](assessment/reviews/event/round-3.md) | E1: narrow enlarged layout overflow; E2: unreadable enlarged registration labels |
| Responsible AI research initiative | [Round 2 PASS](assessment/reviews/research/round-2.md) | R1: enlarged white text escaped its navy panel |
| MBA AI/product student organization | [Round 2 PASS](assessment/reviews/student-organization/round-2.md) | S1: save control name omitted its visible label; S2: enlarged narrow layout overflow |

The listing's “3 of 3 example pages passed independent review” and “5 defects caught in review and fixed” count these artifacts and findings. Each page passed after one (research, student organization) or two (event) rounds of fixes. They do not measure general skill accuracy. The [coordination record](assessment/checklist.md) preserves the failed rounds; the [review brief](assessment/reviewer-brief.md) explains reviewer independence and required checks. Each final report identifies its exact reviewed source version. All 12 public HTML/CSS/JavaScript/font hashes were checked against the [final verification record](assessment/final-verification.json) during import and matched.

The recorded browser was Chrome 154.0.8037.97. Review covered normal 1440px desktop and 390px mobile rendering, 320px reflow, computed-font-size doubling and root font size at 200%, keyboard operation, visible focus, relevant state labels and demo completion, font loading, and source/brand checks. Exact matrices differ by example and are recorded in the reports and checks. Text-enlargement simulations are not a native-browser-zoom certification. No screen-reader, physical-device or cross-browser certification, real registration/membership service, production mark authorization, student outcome, adoption, cost or timing claim is made.

## Screenshots and example

The event review's original full-page captures remain unchanged at [1440px](assessment/reviews/event/round-3/1440-normal.png) and [390px](assessment/reviews/event/round-3/390-normal.png). The listing's `desktop.png` (1440×900), `mobile.png` (390×844), and student-organization `cover.png` (1440×810) are fresh Chrome captures of the current examples after the October 8 arrow removal. They are previews of the edited pages, not the original independent-review captures.

At the maintainer's request on October 6, the student-organization sample-session panel background changed from Dandelion to Ginger Beer. On October 8, **Jordan Meyer, the plugin developer**, also requested that the examples follow the new no-arrow guidance. Decorative arrows were removed from all three pages' links and demo buttons, including footer links and generated membership suggestions; unused arrow styling was removed. The [provenance record](provenance.json) retains original source hashes alongside current hashes and change notes. The sibling source and historical review reports/captures remain unchanged; their PASS verdicts apply to the versions they reviewed.

October 8 verification used Chrome 154.0.8037.98 at 1440, 390 and 320 CSS pixels: all three pages had no horizontal overflow or arrow text in links/buttons. Keyboard focus remained visible; keyboard activation completed and reset event registration, followed the research project link, and generated all three membership suggestions without arrows. The standalone event registration also completed. Desktop and narrow captures were inspected and the three listing previews refreshed. This focused maintainer check does not replace the historical independent review or repeat its enlarged-text matrix. To reproduce, serve this folder, open each page at those widths, tab to the actions and exercise those demo states.

[Open the example](example.html) to use the current event page offline. This single file embeds the current [HTML](examples/event/index.html), [CSS](examples/event/style.css), [JavaScript](examples/event/script.js) and font. It carries the same arrow removal; the font bytes and interaction logic are unchanged. It remains a derivative, not a separately scored evaluation.

The event page's Open Sans font is distributed under the [SIL Open Font License](OFL.txt), included here and inside the example's HTML comment. Georgia remains a system fallback and is not redistributed. The skill itself bundles no font.

The listing’s “Try asking” prompt is an everyday request of the kind a Duke student or staff member might make, not the reviewed brief. The reviewed event brief asked for a fictional Duke symposium on AI and leadership with an agenda, speakers and demo registration, labeled fictional, claiming no affiliation and using no logos, with rendered desktop/mobile review; the event reports record it. The screenshots show the output of that reviewed brief, not of the listing prompt.

## Inspect or reproduce the browser checks

The three current examples, with the post-review edits above, are under `examples/`, along with prior/final reports, final recorded checks and final review scripts under `assessment/`. The original exercise used a locally installed Playwright path; the copied scripts change only that import to `require('playwright')`. [Provenance](provenance.json) records every copied file's source-relative path and SHA-256; script entries also record their original hashes. Two historical review documents replace local workspace/runtime prefixes with source-relative paths and the Playwright package name; their original hashes are also recorded. The original sibling project was read only.

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

The retained evidence is curated: current example files with original hashes in provenance, final historical check scripts/results, all review-round reports, and final normal desktop/mobile screenshots. Reports also name additional stress-state screenshots from the original workspace that are not bundled here; running the scripts produces those again. Deferred [skill-improvement proposals](assessment/skill-proposals.md) remain proposals, not an implemented skill change.
