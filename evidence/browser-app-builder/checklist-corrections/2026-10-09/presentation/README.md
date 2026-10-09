# Presentation remaining-checklist corrections

Current126-item checklist scope. Current application source `4cf804db7629bef1fdf618b1d0d03ddd68c108bc` qualifies speaker-note assumptions; JavaScript/model/CSS/tests remain unchanged from `debbe173666df2b5ec41b4a12f1a14918ca4a920`. Prior44-case browser/live records remain historical. No student, screen-reader or fresh browser success is inferred from Node tests.

## Per-ID disposition

| ID | Correction or evidence boundary |
| --- | --- |
| ALL-02 | Four bounded prediction/control/answer/limitation tasks in BUILD-STORY; concise app link. |
| ALL-05 | Current narrow slide uses outer page flow; live input/result/back/continuation routes, plus all-slides reading. Root verified both local routes in narrow/desktop slide and reading modes. Remaining full-layout checks are separate. |
| ALL-07 | Reload/copy guidance directly beside editable assumptions; policy record remains durable copy path. |
| ALL-08 | Not applicable: original Sales footer. |
| ALL-11 | OPEN: actual screen-reader complete-task evidence required; source/DOM checks are not speech observations. |
| ALL-12 | Relative typography and scaled SVG geometry, authored320px and separate1280px/200%-text frames. Root verified319px local routes, maximum-value results/charts/tables and1280px/200% live/economics/risk/sensitivity views. Remaining assumptions/error/appendix/notes layout views are itemized in REMAINING-UI-CHECKS.md. |
| ALL-14 | Record includes all inputs, alternatives, scaling, stress policy, funding, gates and limits; adds full-first tradeoff and one-period/no-learning-value interpretation. Root inspected actual40001/full480072 clipboard with policy and alternatives; blank-price copy was disabled until Restore. |
| ALL-16 | OPEN: actual novice walkthrough required; participant tasks prepared separately. |
| DECK-01 | Narrow current slide expands in page flow instead of nested scrolling. Explicit links between inputs/result and continuation to gates; all-slides reader also available. Root retested both focus/scroll routes successfully in319px narrow,1280px desktop and both Read all views. |
| DECK-04 | “Copy policy recommendation” and record header distinguish calculated governance result from student judgment or approval. |
| DECK-10 | Source improvement: removed same-index Reveal slide refresh on each valid edit, disabled redundant whole-slide live region and made app title/input statuses concise. OPEN: actual screen-reader navigation/edit/invalid speech observations still required. |
| DECK-12 | Reversible all-slides document path reuses seven sections/current model, all three charts, policy labels, appendix and individual speaker notes. Read mode clears hidden/inert and switches wrapper to document semantics. Root observed preserved inputs and both local routes across narrow/desktop reading and slide modes. |
| DECK-13 | Optional assignment requires a different question, alternatives, defensible rule and validation plan; no second optimization model added. |
| DECK-14 | Prominent cover/live/release explanation of full-first governance. At1450/$100000fixed it explicitly says pilot has higher base result, smaller stress loss and lower funding and asks what strategic benefit justifies full scale. Root observed the exact counterexample and explanation in production; the actual45-case browser suite passed. |
| DECK-15 | Visible30% demand/25% fixed assumptions plus one-period/no-learning-value boundary. Task asks what pilot reveals and how that evidence changes a later decision; no second-stage engine added. |

## Root production review tasks

Model browser suite http://127.0.0.1:9705/tests/ (45 cases). Production http://127.0.0.1:9706/bab-example-presentation/ . Local production-only desktop.html, narrow.html, narrow390.html, text200.html copies at the same base; publishing build omits them.

1. Fresh default remains pilot:$264000 base/−$81600 stress/$1896000 funding. Challenge assumptions:20k→defer,60k→full:$1920000/$192000. Numeric arrow keys stay in field; Previous/Next/selector still navigate.
2. Enter price180,cost108,quantity1450,fixed100000. Cover/live/release reason must state full-first preference and pilot advantage, not merely passing gates. Risk table: full4400/−37360/256600 and pilot6320/−6208/71980, both pass. Copy policy recommendation and inspect all quantities/units, explicit preference, one-period and no-approval language.
3. Read all slides: all7 sections visible, non-inert and accessible, all3 charts rendered, every note visible, appendix/current amounts preserved. Selector jumps to a section and focuses it. Edit assumptions in reading mode; all numbers update. Return to slides: only current section interactive, state preserved. Enter/exit presenter mode; reading toggle is disabled while presenting, then recovers. Restore/reload/history remain aligned.
4. Invalid blank price: retained-values warning and copy disabled; repeated invalid keystrokes need no whole-slide live-region refresh. Restore valid values clears warning; inspect title/status DOM only as supporting evidence, not speech verification. Reveal's aria-status is off/hidden; current content remains accessible. Actual screen-reader task stays open.
5. narrow.html: actual320 CSSpx (record host rounding), Challenge→input→“Go to live result”→“Back to inputs”→“Continue to release gates”→Next/selector. Each active slide overflowY must be visible/clientHeight==scrollHeight; only tables/charts may scroll horizontally. Inspect all slides and read-all mode, notes, controls and labels. Capture metrics after mode changes, not just first load.
6. text200.html:1280 iframe/root32px/deck32px. Choose each chart slide after enlargement so chart geometry uses scale2. Read all slides and inspect captions/policy/input controls/notes. Chart tick/value labels must be readable, not merely within page bounds. Capture metrics. No global viewport change.
7. Inspect initial startup, local font requests, source/story links and browser console. Retain actual failures with correction checkpoint.

## Human evidence gates

ALL-16 participant protocol is in NOVICE-TASKS.md; no completed novice session yet.

ALL-11/DECK-10 screen reader: record reader/browser/version; navigate cover→live inputs, change a number, recover blank price, interpret risk table/three charts, copy recommendation, switch all-slides→slides and navigate appendix. Record actual words/repetition, retained-state clarity and focus. Concise DOM status ownership is a design change, not proof of audible behavior.

## Developer evidence

45/45 model cases pass in Node, including exact policy counterexample, fixed loss boundary, cent/quantity extremes and unchanged default. Fresh dependency check/install/build pass. Root browser review pending. No new failed numerical round. Source inspection caught Reveal's inert attribute and CSS specificity requirements before checkpoint; read mode clears inert and its mobile display rule overrides the single-slide rule.

## Source checkpoint and initial root observations

Source9bb8a19846870a7f0c216ff55c32253d6534e82a. Root actual browser observed45/45 model cases, seven-section/three-chart reading view,1450/$100000fixed exact full/pilot metrics and prominent full-first explanation, and Return to slides then selector preserving inputs. Root confirmed Reveal aria-status remains aria-hidden=true/aria-live=off after mode cycling/navigation; generic DOM snapshot text is not evidence of audible duplication. Actual320px/200% layout, complete production checks and final independent review remain pending. Human screen-reader/novice gates unchanged. Participant sheet is NOVICE-TASKS.md.

## Current root browser witness — correction source 9bb8a19, status follow-up c5e033a

Root observed 45/45 passing model cases in the actual browser, all seven sections and three charts in Read all slides, and the exact 1450-kit/$100,000-fixed counterexample at application source `9bb8a19846870a7f0c216ff55c32253d6534e82a`. Full base/stress/funding were $4,400 / −$37,360 / $256,600; pilot values were $6,320 / −$6,208 / $71,980. The prominent full-first policy explanation exposed the pilot's better displayed figures. Returning to slides and selecting assumptions preserved inputs.

Root also confirmed Reveal's aria-status remains aria-hidden=true and aria-live=off after mode cycling/navigation. Generic duplicate text in a DOM snapshot is not evidence of actual screen-reader duplication or successful speech behavior. The current source `c5e033a2e2df414a7d08afdc5dfd1cdac15ed9f1` only restores the live/invalid status after leaving presentation mode; targeted presenter-exit verification remains pending. No model/layout rerun is claimed for that follow-up.

This is a report-only update. Full production, copy, 320px and 200% text review and final independent acceptance remain pending. ALL-11, ALL-16 and DECK-10 human evidence gates stay open; no novice or assistive-technology session is inferred from these checks.

## Retained intraslide-link failure and correction

Root's actual319px production check at c5e033a found Go to the live result failed for both Enter and pointer activation: the target stayed1332px below the frame top in an1100px-high frame, with focus on the link/deck. Source inspection confirmed Reveal's delegated hash-link handler navigated to the containing slide instead of the target. This is a failed DECK-01/ALL-05 path, not a successful layout result.

Source `debbe173666df2b5ec41b4a12f1a14918ca4a920` handles only the two input/result anchors directly: prevent default, stop the click before Reveal, focus the existing target without an implicit jump, then scroll the target start into view. Ordinary input focus remains unchanged. Syntax/build/diff checks passed, source is clean, and QA frames are restored on9706. Both directions in desktop slide scrolling, narrow page flow and Read all slides await actual root recheck; no unchanged numerical suite rerun or publication is claimed.


Remaining gaps and reproducible checks are consolidated in [REMAINING-UI-CHECKS.md](REMAINING-UI-CHECKS.md). This instruction sheet adds no completed evidence.

## Root retest closes the intraslide-link failure — source debbe173

Root actually verified both input/result link directions in319px narrow and1280px desktop production, in slide mode and Read all slides. Focus was exactly `#live-result` or `#assumptions`, and each target was visible. The eight retained observations are in course `browser-anchor-retest.json`; narrow result top was33.81px in an1100px-high frame with319px document width/scroll width. The earlier c5e failure remains above.

Present/Exit restored Current valid assumptions, closing the status follow-up. Blank price produced the retained-values warning on release gates and disabled Copy; Restore recovered. Quantity ArrowUp changed40000 to40001 while focus stayed on quantity and the fourth slide remained selected. The actual clipboard contained40001, full base480072 and the policy/alternatives, rather than merely showing a copy-success message.

The separate200%-text production frame measured root/deck32px and1280px document/scroll width. Root inspected the live output and retained `enlarged-live-result.png`. This closes that specific result-view observation, not all chart, table or maximum-value layout checks. No screen-reader speech or novice observation is claimed. App source remains debbe173666df2b5ec41b4a12f1a14918ca4a920; this report changes no application behavior and reruns no unchanged model suite.

## Root maximum-value and chart-layout witness — source debbe173

Root inspected the actual 319px production presentation with price1000, cost0, quantity1000000 and fixed cost100000000. The live result remained readable at $900 million base contribution, $500 million stress contribution and $100 million funding; course `narrow-maximum.png` preserves that view. The economics, risk and sensitivity chart slides were visually inspected with their zero references, labels, legends and exact alternatives. Two ArrowRight presses scrolled the narrow alternatives table to scrollLeft245 of272 while retaining the fourth slide. An earlier reading of0 was taken before native scrolling finished, not a remaining failure.

In the separate1280px frame with root text32px, the risk SVG measured1124px wide with24px chart text and was readable; `enlarged-maximum-risk.png` preserves the result. Root also inspected the enlarged economics ($1 billion sales less $100 million fixed = $900 million contribution) and all five sensitivity rows, including quantity0→−$100 million and1000000→$900 million. These observations close the specified maximum-value/chart/table views. They do not assert that every view on all seven slides or any screen-reader task passed. No application source changed and the unchanged45-case model suite was not repeated.

## Live speaker-note scope finding and targeted correction

Root's live edit to price20/cost12/quantity100/fixed500 correctly produced full300/−20/funding1700 and pilot115/19. A generic DOM snapshot still held original amounts. Full source review traced that text to Reveal's navigation-time `.aria-status` clone, which the app already marks aria-hidden=true and aria-live=off. Reveal later changes only its text, not those attributes. The visible Speaker notes disclosure uses the current slide's static aside instead; root opened it and confirmed that it did not contain the stale whole-slide amounts. This was not evidence of stale visible numerical results or audible duplication.

The exposed note did have an ambiguous teaching boundary: it stated20,000/60,000 outcomes without saying which costs apply. Source checkpoint `4cf804db7629bef1fdf618b1d0d03ddd68c108bc` explicitly names the Lower/Stronger presets, their restored board-case $180 price/$108 unit cost/$2.4m fixed cost, and the possibility of a different result after quantity-only edits under other costs. PLAN and the linked experiment carry the same qualification. JavaScript, numerical model, CSS and tests are unchanged. Production build passed; root's targeted actual disclosure/Read all check is pending. No repeated45-case suite or new screen-reader claim.

## Root targeted speaker-note retest — source4cf804d

Root tested `http://127.0.0.1:9706/bab-example-presentation/` at application source `4cf804db7629bef1fdf618b1d0d03ddd68c108bc`. Price20/cost12/quantity100/fixed500 retained the correct full300/−20 and pilot115/19 results with funding1700. Opening the actual Speaker notes disclosure showed the explicit demand-preset assumption reset ($180/$108/$2.4m) and quantity-only qualification. Read all slides showed the same corrected fourth-slide note. In both modes, Reveal's old navigation snapshot remained aria-hidden=true and aria-live=off. Course `presentation/browser-notes-retest.json` retains the actual observation.

Targeted review passed. Earlier numerical, chart, input/result focus and clipboard observations still apply because app JavaScript, model, CSS and tests are unchanged from debbe173. The only application change is the qualified note; the production build and this actual disclosure/reading-mode check cover that change. The unchanged45-case suite was not repeated. Hidden-DOM configuration is not a screen-reader speech observation; that human gate remains open. This report-only follow-up is not a live publication claim.
