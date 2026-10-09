# Browser App Builder: example-app improvement checklist

Re-reviewed October 9, 2026 after the live revisions. Audience: students learning what they can build, instructors choosing worked examples, and recruiters inspecting the resulting work.

## Verdict and scope

The revisions resolve much of the first review. The nine current library examples now have explicit lessons, public build stories, stronger default cases and substantially clearer interfaces. The next pass should concentrate on remaining interpretation problems, a few interaction regressions, and teaching tasks that require students to reason from the evidence.

This review covers **all 12 currently listed live apps**: nine revised library examples and three explicitly labeled original trials. The video example has been removed from the plugin and gallery, so its entire checklist is removed. The new October 9 trial evidence is not a substitute for the October 8 trial apps still linked publicly; those unpublished trials were not treated as the live originals.

Repository checkpoint: `7a8a760`; Browser App Builder `0.2.3`. Application source applicability is recorded in [the live revision index](../live-revisions/2026-10-09/README.md) and [deployed checkpoints](../live-revisions/2026-10-09/status.json). Existing unrelated local changes were preserved. No app code, catalog entry or deployment was changed by this review.

### How to use this checklist

- **P1:** resolve before presenting the affected app as a fully worked current assignment; includes significant teaching gaps as well as defects.
- **P2:** a focused next-revision improvement or remaining verification task.
- **P3:** optional student extension, not a requirement to enlarge the shipped example.
- **Observed:** reproduced live or established directly by the linked current source. Source-only reproductions are identified.
- **Improve:** a design or teaching judgment, not a claim that the app violates its plan.
- **Verify:** evidence still needed; not a confirmed failure.

Surviving IDs are retained. Removed IDs are not reused. All remaining boxes are unchecked proposed work. A build story already in place, a limitation already stated, or an optional extension is not counted as a broken feature.

This revision retains **126 items: 15 P1, 101 P2 and 10 P3**. It removes **79 of the previous 192 items** as resolved, superseded, out of scope or redundant; keeps and updates the other **113**; and adds **13 new findings/improvements**. New items are collected under each app’s “New findings in this pass” subheading.

### What was removed

| Area | Retired IDs | Reason |
| --- | --- | --- |
| ALL | ALL-01, ALL-03, ALL-04, ALL-06, ALL-09, ALL-10, ALL-13, ALL-15 | Learning objectives, build stories/library roles, state wording and original-trial separation now exist. Broad qualification/adaptation requests were redundant with the new material; decorative-arrow findings no longer apply to the revised examples. |
| EXEC | EXEC-03, EXEC-07, EXEC-08, EXEC-09, EXEC-10 | September case is separately labeled; duplicate ledgers/sort controls and missing peer context are fixed. |
| UPLOAD | UPLOAD-03, UPLOAD-06, UPLOAD-09, UPLOAD-10 | Dollar/unit denominators are explicit; Email is no longer an artificial zero-return group; truncation is conditional; the dollar-sort purpose is explicit. |
| SIM | SIM-01, SIM-02, SIM-03, SIM-08, SIM-09, SIM-11 | Three-option-only and close-500/600-choice criticisms are obsolete. Full search, exact expectation, visible risk tradeoff, result-first layout and a histogram replace them; model-versus-sampling uncertainty is explained. |
| PROC | PROC-01, PROC-02, PROC-03, PROC-06, PROC-10 | Overload/nominal-time distinction, readable diagram alternatives, the central routing lesson, exclusive-branch wording and weighted units are now supplied. |
| ROAD | ROAD-03, ROAD-04, ROAD-05, ROAD-07, ROAD-09 | Resource checks, readable names and the promise marker are implemented. The method already distinguishes float from promise buffer and supplies an exclusive-end calendar example. New milestone behavior is reviewed separately. |
| MKT | MKT-02, MKT-04, MKT-05, MKT-08, MKT-11 | Rank sensitivity, normalized shares/rank explanations, map symbols and useful starting pins are implemented. Component details already show capped values and their arithmetic. |
| SQL | SQL-02, SQL-03, SQL-05, SQL-06, SQL-13 | Beginner progression, explicit mistaken/correct labels and dollar formatting resolve the old teaching/display requests. Outstanding-value limitations and historical query-boundary checks already exist. |
| OPT | OPT-01, OPT-03, OPT-04, OPT-06, OPT-08, OPT-10, OPT-11 | Default integer gap, small-case explanation/geometry, units, capacity experiments, collapsed inputs, manual opportunity cost and previous-solve comparison are implemented. |
| DECK | DECK-02, DECK-03, DECK-05, DECK-06, DECK-07, DECK-08, DECK-09, DECK-11 | The old pop-up, fixed opening, generic release advice, old break-even graphic and combined-column table are gone. Speaker notes and live-state behavior address the former argument/keyboard requests; redundant spacing item is consolidated into narrow-flow review. |
| VID | VID-01–VID-14 | Example removed from the current listing and recipes; all 14 items are out of scope. |
| DONE | DONE-01–DONE-07 | General closure instructions were consolidated into prose below, rather than counted as seven additional app defects. |

The original trials remain useful historical/simple examples. Their items below describe what would be needed to use them as current worked assignments. Keeping them explicitly historical is also a valid scope choice; do not retrofit the entire newer feature set into them.

### Evidence and limits

Fresh browser inspection opened every listed app, examined its visible and accessible structure, and checked narrow output at **390 × 844 actual CSS pixels**. Desktop checks of revised apps used **1280 × 720**. The original pricing and inventory layouts were re-opened at narrow width; their prior desktop evidence was not relabeled as fresh. Narrow spot checks are not a physical-device, 320px, enlarged-text or screen-reader certification.

Fresh interactions included the executive briefing, Email filtering and keyboard matrix selection, the 90/10 process policy, the packaging-delay preset, growth weight 70 and map detail, the SQL tiny join trap, the optimizer two-product case and 10,000-minute capacity boundary, the presentation’s lower-demand preset, the inventory delayed-delivery case, and the sales reversed-date state. The roadmap milestone and presentation policy counterexamples were independently run against the saved current model modules. Source inspection also checked export grain, focus ownership, loading/cancel placement and current model boundaries.

The [revision index](../live-revisions/2026-10-09/README.md) reports 285 passing checks across nine historical browser suites. Those are prior evidence, not 285 fresh checks by this reviewer. The [original trial report](../trials/2026-10-08/README.md) retains the earlier apps’ sources/evidence. This pass did not repeat file imports, every download, all numerical suites, browser-engine support, or screen-reader testing. The canonical Campus Designer skill at `plugins/campus-designer/skills/campus-designer/SKILL.md` and its references remain the design baseline, not an affiliation claim.

## Highest-value sequence

1. Repair or explain the roadmap sign-off/completion dependency: **ROAD-14**.
2. Correct the surviving invalid sales state and market terminology: **SALES-01, MKT-01**.
3. Fix the new matrix focus loss and ambiguous export grain: **UPLOAD-14/15**.
4. Make the presentation’s policy preference explicit when displayed metrics favor the pilot: **DECK-14**.
5. Finish mobile/result navigation and action placement: **UPLOAD-07, DECK-01, OPT-14**.
6. Supply bounded prediction/explanation exercises; retain the successful new defaults and build stories. Decide whether the original trials are historical examples or active assignments before investing in their extension work.

## Collection-wide improvements

- [ ] **ALL-02 · P2 · Improve — Finish the teaching path with a prediction and an answer.** The nine new build stories now explain the brief, design decisions, libraries and evidence. Keep those links. Add a short student exercise where still missing: predict a result, change specified controls, reconcile the answer, and name one limitation. Put the task and answer in the walkthrough, with a concise link from the app; do not add another long instructional panel to every screen.
- [ ] **ALL-05 · P2 · Observed — Finish the mobile route to the result.** The simulator and optimizer now put results ahead of collapsed assumptions, and several apps have useful view controls. At 390px the returns workspace still occupies most of the first screen, while the roadmap and original trials put lengthy introductions/forms ahead of results. Add visible result links where this remains a problem; retain the working keyboard skip links. Do not undo the successful result-first revisions.
- [ ] **ALL-07 · P2 · Improve — Put persistence guidance beside substantial editing.** Several apps already say that reload resets the example and provide JSON or text exports. Keep those statements. Where students author SQL, graph edits or a decision rationale, make the appropriate save/export path visible beside that work, before they leave the tab. This is a placement and recovery task, not a request for accounts or automatic storage.
- [ ] **ALL-08 · P2 · Observed — Align the original Sales lens footer with its provenance.** The gallery now clearly separates the original trials from the revised examples. Sales lens itself still says “Independent student exercise.” Change that to an unambiguous maintainer-built/simulated teaching-example description. Preserve the genuine simulated-planning history; do not imply a real student outcome.
- [ ] **ALL-11 · P2 · Verify — Finish accessibility verification on complete tasks.** Retain the existing keyboard and browser evidence, then cover the remaining complete tasks with an actual screen reader: invalid input recovery, chart/table interpretation, modal-to-detail focus, and slide navigation. The new matrix focus failure is separately reproduced in UPLOAD-14. Having a table or an accessible name is useful evidence, but does not alone establish that the whole lesson is accessible.
- [ ] **ALL-12 · P2 · Verify — Check 320px and enlarged text beyond the current spot checks.** Fresh narrow observations used an actual 390 × 844 CSS-pixel viewport. Check 320px and 200% text enlargement separately, especially model disclosures, long imported names, modal tables, the presentation’s inner scrolling, and dense chart labels. Record actual dimensions and reachable controls; the absence of page overflow is not a readability check.
- [ ] **ALL-14 · P2 · Improve — Make existing exports independently interpretable.** Several copied rationales now carry extensive assumptions and limitations. Concentrate remaining work on the returns summary and SQL result exports, which still lose analytical context, and the older trials if promoted to current assignments. Keep CSV machine-readable; a small companion note or explicit metadata columns is enough.
- [ ] **ALL-16 · P1 · Verify — Run actual student walkthroughs before claiming instructional readiness.** Ask a novice to interpret the default, make a predicted change, recover from an invalid input, and explain a limitation without coaching. Record confusion and revise the lesson. Existing automated reviews and passing browser checks do not establish learning outcomes.

## 1. Executive operating dashboard — Stillwater Coffee

[Live app](https://jordanmeyer.github.io/bab-example-executive/) · [Source snapshot](../live-revisions/2026-10-09/executive/source/app/app.jsx) · [Model](../live-revisions/2026-10-09/executive/source/app/model.js)

**Keep:** The native ledger now has one sort interface and a smaller column set; the briefing includes charts and exact comparisons; regional context stays company-wide. September still shows $1,441,000 sales, $341,800 contribution, 23.7% margin and four stores below 20%. Preserve the explicit contribution boundary and the separate September board agenda.

### Concept and teaching

- [ ] **EXEC-01 · P2 · Improve — Add a student investigation before the supplied board answer.** The revised briefing now includes indexed sales/hours, cost evidence and comparison tables. Ask students to predict Harbor Wharf’s driver, inspect the evidence, and propose a next check before revealing the supplied investigation. Preserve the caution that revenue productivity alone does not justify staffing cuts.
- [ ] **EXEC-02 · P2 · Observed — Make adjacent KPI comparison periods easier to distinguish.** Sales and margin now compare with the same month last year, while contribution compares with the preceding month. The labels are correct, but adjacent cards still invite a common-period reading. Visually group the comparison bases or explain the choice briefly. Update any exercise that still assumes margin is month-over-month.
- [ ] **EXEC-04 · P2 · Improve — Teach weighted margin with a concrete counterexample.** Add a two-store exercise where averaging percentages gives the wrong group margin. Let students reconcile total contribution divided by total sales with the headline value; keep this small and use existing records.
- [ ] **EXEC-05 · P2 · Improve — Explain the consequence of changing the target.** Show a short before/after count or ask “Which stores change status if the target rises to 25%?” State beside the result that changing the classroom threshold changes the classification, not operating performance.
- [ ] **EXEC-06 · P2 · Improve — Give the analyst a compact takeaway.** Allow a local copy of the selected scope, key values, evidence inspected, and next investigation. The app currently has strong questions but no simple record of what a student concluded. A text record is enough; no reporting subsystem is needed.

### Design and interaction

- [ ] **EXEC-11 · P2 · Improve — Make the cost bridge communicate contribution impact.** A cost increase currently appears as a positive cost-line change even though it reduces contribution. Label the distinction or add a signed “effect on contribution” column so students can reconcile the bridge without mentally reversing signs.
- [ ] **EXEC-12 · P2 · Verify — Test the entire briefing-to-detail round trip.** Open all three questions, inspect their evidence, dismiss the store modal, and verify a sensible focus destination on desktop and narrow screens. The earlier review recorded a passing simple Escape/focus-return path. Retain current evidence for the chained modal workflow rather than inferring it from that simpler path.

### New findings in this pass

- [ ] **EXEC-13 · P2 · Observed — Restore a direct text equivalent for regional comparison.** The new company-wide regional chart fixes the loss of peer context, but its accessible name only says that values appear on bars. Unlike the monthly chart, it has no adjacent exact-value table or textual regional summary. In the inspected accessible structure the regional numbers are absent. Add the three regional margins as concise text/table values; do not require a screen-reader user to reconstruct aggregates from store rows.

## 2. Sales and returns explorer — Common Goods

[Live app](https://jordanmeyer.github.io/bab-example-uploads/) · [Interface](../live-revisions/2026-10-09/uploads/source/app/app.js) · [Model](../live-revisions/2026-10-09/uploads/source/app/model.js)

**Keep:** The richer sample has 384 sales lines, 326 return events and eight cohorts: $291,788 gross less $51,827 returns equals $239,961 net. Paid social falls first to second. The product × channel matrix, visible denominators, view controls and conditional truncation messages resolve several earlier requests.

### Concept and teaching

- [ ] **UPLOAD-01 · P2 · Improve — Update the rank-reversal exercise to the richer sample.** Paid social now falls from first on gross to second on net: $110,356 − $33,604 = $76,752, behind Organic search at $94,765. Use the product × channel matrix to ask whether the aggregate channel story holds within products and months. Retire the old first-to-third/$21,308 answer; keep revenue distinct from profit and acquisition efficiency.
- [ ] **UPLOAD-02 · P1 · Improve — Demonstrate cohort maturity rather than only warning about it.** Show the same sale before and after a later return, or provide paired dated sample exports. Students should see why a newer cohort's apparently better return rate can reflect less observation time.
- [ ] **UPLOAD-04 · P2 · Improve — Give the aggregate-before-join rule a visible raw example.** Select one sale with multiple return events and show those events, their sum, and the resulting single joined row. The current audit table exposes totals but not the raw return-event path that explains the central data lesson.
- [ ] **UPLOAD-05 · P2 · Observed — Replace single-group rank narration.** Filtering Channel to Email now shows real returns, but still says its rank moves from #1 to #1 “among the 1 matching groups.” State that one group is selected and describe its retained revenue/return rate. Only narrate comparative movement when multiple groups can be compared.

### Design and interaction

- [ ] **UPLOAD-07 · P2 · Observed — Put a visible analysis shortcut above mobile import controls.** Import instructions are now collapsed, but the narrow sidebar still shows the introduction, sample identity, reset, downloads and contract before analysis. At 390px the analysis heading only reaches the bottom of the first screen. Add a visible “View sample analysis” link near the sample identity, or move secondary downloads into the disclosure; keep the existing keyboard skip link.
- [ ] **UPLOAD-08 · P2 · Improve — Preserve source identity after importing.** The interface changes the dataset label to “Your local files,” discarding the visible filenames. Show the two selected filenames and their row counts so a student can verify which pair is being analyzed; do not persist file contents.
- [ ] **UPLOAD-11 · P2 · Observed — Attach cohort/filter context to exported summaries.** The summary CSV contains grouped values and ranks but not the selected month/product/channel or observation boundary. Add enough metadata to prevent a filtered summary from being mistaken for all-company totals.
- [ ] **UPLOAD-12 · P2 · Verify — Exercise the two-file import as a student task.** Download both samples, inspect headers, introduce an unmatched return and an over-return, and verify rejection leaves the previous dataset and source identity intact. Then import a corrected pair. Prior evidence covers validation; this review did not repeat file selection.
- [ ] **UPLOAD-13 · P3 · Improve — Offer refund-month analysis only as a separate extension.** If added, explicitly switch the time basis and labels rather than silently reusing the cohort chart. A student should be able to reconcile the two views and explain why net sales by cohort is not cash movement by month.

### New findings in this pass

- [ ] **UPLOAD-14 · P2 · Observed — Preserve keyboard focus when a matrix cell filters the data.** In Trends & interactions, activate “Everyday tee, Email: 8.7% · 33 / 380 units” with Enter. The filters correctly apply, but renderMatrix replaces the focused button and document.activeElement becomes BODY. Retain focus on the corresponding cell or move it to a clearly labeled filtered-result summary, and announce the applied product/channel. Also provide a nearby route back to the full matrix.
- [ ] **UPLOAD-15 · P2 · Observed — Name what the global summary export will contain.** The new Trends & interactions view shows a monthly chart and a product × channel matrix, while Export summary still serializes view.groups using the Compare by choice in the hidden Revenue comparison view. With default grouping, it exports channel rows rather than monthly or matrix rows. Label the export with its grouping, expose that choice beside the action, or offer view-specific exports; the screen and downloaded grain must be predictable.

## 3. Seasonal order simulator — Seasonal Order Lab

[Live app](https://jordanmeyer.github.io/bab-example-simulator/) · [Interface](../live-revisions/2026-10-09/simulator/source/app/app.js) · [Model](../live-revisions/2026-10-09/simulator/source/app/model.js)

**Keep:** The new search checks every integer quantity from 1 to 5,000, using exact expected contribution and a simulated loss screen. The live 3% default chooses 469 units at about $6,068; the unscreened peak is 558 at about $6,510. Preserve the explicit $442 tradeoff, critical-ratio explanation, reproducibility and new downside histogram.

### Concept and teaching

- [ ] **SIM-04 · P2 · Improve — Teach the risk limit using the new full quantity search.** Use the current 3% default: 469 units and $6,068 exact expected contribution versus the unscreened 558-unit peak at $6,510. Ask students to raise the limit to 20%, then explain why the peak becomes eligible and what the $442 difference buys in the default case. Include a no-qualifying-quantity case and distinguish the displayed point estimate from the upper endpoint used to screen.
- [ ] **SIM-05 · P2 · Improve — Use certainty to distinguish comparisons from the searched optimum.** The certainty preset still supports exact payoffs for the editable 400/500/600 quantities: $5,600/$8,000/$6,900. Ask for these predictions first, then explain why the new 1–5,000 search chooses 500. The three inputs are comparison markers now, not the complete decision set.
- [ ] **SIM-06 · P2 · Improve — Make the conditioned-demand distribution tangible.** For a low underlying mean and high deviation, show the resulting mean and a small demand summary beside the input. The current wording is correct but “underlying mean” is easy to mistake for expected realized demand.
- [ ] **SIM-07 · P2 · Improve — Explain common random numbers through an experiment.** Show that every searched quantity, including the three editable comparisons, faces the same demand/cost draw within a run. A small selected-scenario row can teach why this is a fairer comparison than independently drawing a new world for each quantity.

### Design and interaction

- [ ] **SIM-10 · P2 · Improve — Bring the selected order’s downside into the recommendation.** The new downside disclosure includes a histogram, fifth percentile, median, inventory and missed demand. Link directly to it from the 469-unit recommendation or show a compact fifth-percentile value there. Call the percentile a simulated tail summary, not a worst-case bound.
- [ ] **SIM-12 · P2 · Verify — Check the extreme-input graphics as well as the numbers.** Include zero deviation, identical min/max costs, very low mean/high deviation, no qualifying option, and a risk boundary near an interval endpoint. Inspect curve labels, zero lines, result text, and copied assumptions together.
- [ ] **SIM-13 · P3 · Improve — Use correlated demand/cost as a student extension.** Keep the shipped independent model small. A separate exercise can ask what changes when demand and landed cost move together, requiring an explicit new assumption and fresh validation rather than a hidden correlation control.

### New findings in this pass

- [ ] **SIM-14 · P2 · Observed — Show initialization and running state for the expanded search.** A fresh live load initially displayed an empty dark recommendation strip, empty chart area and empty comparison body before results appeared. The source waits for fonts, then synchronously performs the 5,000-quantity × 10,000-draw risk sweep, without a visible loading state. Show a short preparing/running message and prevent duplicate starts. Measure responsiveness on the intended student hardware before deciding whether a worker is necessary; this observation does not establish a slow-device failure.
- [ ] **SIM-15 · P2 · Improve — State that the recommended quantity assumes the launch goes ahead.** The method correctly says that every allowed order pays the launch cost and that no-launch is outside the comparison. Repeat that boundary beside “Order N units,” particularly when all feasible orders have negative expected contribution under a loose loss limit. Offer “best quantity if proceeding” language or a prominent warning; do not imply that optimizing quantity alone establishes that launching is worthwhile.

## 4. Approval process model — Approval Studio

[Live app](https://jordanmeyer.github.io/bab-example-process/) · [Interface](../live-revisions/2026-10-09/process/source/app/app.jsx) · [Model](../live-revisions/2026-10-09/process/source/app/model.js)

**Keep:** The app now leads with Finance overload and calls elapsed arithmetic nominal time excluding congestion. The 90/10 policy still changes 471.5 to 370.5 minutes/request while Finance remains 114.3% loaded. The desktop workspace and readable narrow step/route list resolve the tiny-diagram issue; retain both weighted and per-visit audit values.

### Concept and teaching

- [ ] **PROC-04 · P2 · Improve — Explain the risk-tiered name at the policy change.** The 90/10 example is still named “Risk-tiered routing,” although it only changes route shares. Say that risk classification and control effectiveness are assumed, not modeled. The new overload headline correctly separates nominal time from achievable turnaround; preserve that distinction.
- [ ] **PROC-05 · P2 · Improve — Teach the meaning of productive capacity.** Show that 420 productive minutes is not automatically one employee's paid working day. Give a short example translating staffing, availability, and productive share into the entered team capacity, without adding an HR model.

### Design and interaction

- [ ] **PROC-07 · P2 · Improve — Make route-share editing a coherent transaction.** Changing one branch of a 70/30 split temporarily breaks the 100% total. Offer a small route-group editor or an Apply step so students can edit both values before the model rejects the draft; keep invalid-state reporting explicit.
- [ ] **PROC-08 · P2 · Improve — Add a simple undo for structural edits.** Deleting a review step or route can break the model, while the visible recovery path is restoring the example or importing a file. A one-step undo or recoverable draft snapshot would make experimentation less costly without requiring a full editing-history system.
- [ ] **PROC-09 · P2 · Verify — Keep the selected graph element in view after panning.** Form and canvas selection are already linked. Check the remaining navigation case: pan a selected step off-screen, then select it through the form. Ensure the student can locate it with a direct reveal/fit action or appropriate viewport movement. Do not add a second selection state.
- [ ] **PROC-11 · P2 · Improve — Make baseline replacement and preset replacement unmistakable.** State which values and graph positions are captured, and whether a preset replaces the baseline as well as the draft. Add a small change summary so the student's comparison survives interpretation even if they intentionally replace its reference.
- [ ] **PROC-12 · P2 · Verify — Test a novice's complete graph-edit cycle.** Add a review step, connect it, allocate branch shares, assign capacity, recover from a loop, export, and reimport. Verify that errors name the relevant steps and that keyboard forms can complete the same task as pointer controls.
- [ ] **PROC-13 · P3 · Improve — Offer capacity relief as an extension experiment.** Ask students to find a feasible arrival rate or capacity change and explain what it does not establish about waiting time. Keep stochastic queue simulation separate unless it becomes the explicit objective of a new example.

### New findings in this pass

- [ ] **PROC-14 · P2 · Observed — Match mobile instructions to the steps-and-routes view.** The readable narrow list is a successful replacement for the tiny graph. At 390px, however, its introduction still says “Drag steps or connect their handles” and refers to forms “below the diagram.” Use guidance for selecting steps and editing routes on this view, and retain drag instructions only where the canvas is present.

## 5. Launch roadmap — Launch Ledger

[Live app](https://jordanmeyer.github.io/bab-example-roadmap/) · [Interface](../live-revisions/2026-10-09/roadmap/source/app/app.js) · [Model](../live-revisions/2026-10-09/roadmap/source/app/model.js)

**Keep:** The current plan exposes six overloaded days as well as November 29 dependency readiness and two days of promise buffer. Packaging +5 produces December 2, three days later and one day late. Named chart labels, a promise marker, zero-duration milestones and batched Apply improve the example substantially. Resource checks diagnose conflicts; they do not automatically level the schedule.

### Concept and teaching

- [ ] **ROAD-01 · P1 · Improve — Explain why a five-day task delay produces a three-day launch delay.** Walk through Packaging's two days of float and the shift in the controlling dependency. Show the affected path beside the date change so students learn scheduling logic rather than just operating a Gantt chart.
- [ ] **ROAD-02 · P2 · Observed — Disclose preset replacement before clicking.** The revised status is clearer after activation, but the buttons still say “Packaging +5 days” and “Safety +3 days.” Clicking loads an example and sets the comparison baseline to the original launch plan. Rename them “Load packaging-delay example” and “Load safety-delay example,” or add a short replacement notice beside them. Dirty-state protection does not explain what happens to an already applied custom plan or baseline.
- [ ] **ROAD-06 · P2 · Improve — Explain earliest permitted start with a visible case.** Give one task an external release date, show the idle gap it creates, and explain why changing the promise does not move the work. This demonstrates the difference between a scheduling constraint and a management target.

### Design and interaction

- [ ] **ROAD-08 · P2 · Improve — Compare baseline and revised dates in one view.** The current selector switches between schedules, and the table gives end deltas. Add a lightweight ghost baseline or a compact changed-tasks summary so a student does not have to remember bar positions while toggling.
- [ ] **ROAD-10 · P2 · Improve — Bring the relevant editor closer to the selected task.** The editor follows the chart and a full table. Make task names in the table select the editor and move focus appropriately; preserve the dropdown as an alternative. Avoid a long manual scroll after identifying a task to change.
- [ ] **ROAD-11 · P2 · Improve — State the editing boundary clearly.** The UI edits the existing tasks; it does not expose a general add/delete task workflow even though JSON supports other plans. Either call it a scenario editor for the supplied launch or add a minimal safe add/remove flow if creating a new roadmap is part of the teaching objective.
- [ ] **ROAD-12 · P2 · Verify — Test milestone dependencies as well as critical-path styling.** Existing revision evidence covers delays, capacity, invalid edits and milestones. Extend the check to a milestone that actually gates a successor, an independently delayed terminal milestone, and a resource repair that preserves dates. Chart labels, task dates, headline finish and “Ready to launch” must express the same intended completion rule; ROAD-14 documents the current counterexample.
- [ ] **ROAD-13 · P3 · Improve — Offer a working-day calendar as a separate student extension.** Require explicit weekend/holiday rules and new date tests. Do not silently change the current calendar-day model, which is a useful simple baseline.

### New findings in this pass

- [ ] **ROAD-14 · P1 · Observed — Make sign-off an actual dependency and reconcile the completion milestone.** In samplePlan, “Design sign-off” depends on packaging but no task depends on sign-off; Pilot batch depends directly on packaging and supplier. Reproduced against the saved current model: set design-ready.release to 2026-12-04. Pilot still starts November 17 and finishes at the November 21 boundary; Ready to launch stays November 29, while the headline finish becomes December 4 because it takes the maximum over every task. If sign-off is a gate, connect it to the work it authorizes. Ensure Ready to launch gathers all required terminal work, or rename the headline/milestone so their different meanings are explicit. Retain this dependency-level case as a regression check.
- [ ] **ROAD-15 · P2 · Improve — Teach one resource repair that does not merely buy more capacity.** The revised default correctly reveals six overloaded days and explains that 1.6 people clears them without moving dates. Add an exercise using float/release dates to move competing work, then compare both overload and promise effects. Show why dates can be dependency-feasible yet not staff-feasible. Keep automated resource leveling outside scope; a hand-worked repair teaches the new model better.

## 6. Geographic market screen — Replenish

[Live app](https://jordanmeyer.github.io/bab-example-markets/) · [Interface](../live-revisions/2026-10-09/markets/source/app/app.js) · [Model](../live-revisions/2026-10-09/markets/source/app/model.js)

**Keep:** The new sensitivity view explains a real ranking reversal: default Georgia 67.50 versus Tennessee 67.00; growth weight 70 puts Tennessee first. The whole-number growth sweep reports Georgia at 0–27 and Tennessee at 28–100. Preserve fixed scoring anchors, visible normalization, causal rank-change explanations and separate pinned comparisons.

### Concept and teaching

- [ ] **MKT-01 · P1 · Observed — Rename the prominent revenue metric to market size.** Top cards say “$10M revenue,” whereas the method explains that this is assumed total addressable annual market, not company revenue. Use “Addressable market, USD/year” consistently in cards, controls, tables, and copied rationale; retain the distinction near the ranking.
- [ ] **MKT-03 · P2 · Improve — Explain the setup gate as a feasibility assumption.** The Florida case is ideal: a higher ceiling changes eligibility abruptly, not gradually. Show “newly eligible” and its reason, and ask whether the ceiling includes contingency. Preserve equality-as-eligible behavior explicitly.
- [ ] **MKT-06 · P2 · Improve — Make the missing-data policy a conscious lesson.** Louisiana stays unranked even with zero growth weight. This is documented and intentional, not a computation defect. Explain why the app requires complete data, and invite students to debate that policy without converting missing growth to zero.
- [ ] **MKT-07 · P2 · Improve — Clarify what four weighted scores leave out.** Ask whether size and growth double-count opportunity, whether delivery cost proxies route density adequately, and whether the fictional competition index is meaningful. A small assumptions worksheet is more useful than adding more arbitrary score factors.

### Design and interaction

- [ ] **MKT-09 · P2 · Improve — Keep score precision from implying certainty.** The new sensitivity panel usefully shows that Georgia’s 67.50 and Tennessee’s 67.00 can reverse after a small change in priorities. Add a short “close under these assumed weights” interpretation beside those headline scores, or use rounded display values with precise arithmetic in detail. Do not round before ranking or imply a statistical confidence level.
- [ ] **MKT-10 · P2 · Improve — Keep gate failures visually distinct from low scores.** The map groups excluded/unscored states together while the table explains different causes. Add a clear legend/detail distinction between ineligible, missing-data, and low-priority-but-eligible states; retain non-color symbols.
- [ ] **MKT-12 · P2 · Verify — Check narrow map interaction without stealing page navigation.** Test panning, zooming, keyboard escape/focus, selecting small states, hiding the map, and reaching the equivalent selector/table. The narrow map was visually inspected; that is not evidence for all touch and keyboard paths.
- [ ] **MKT-13 · P3 · Improve — Add editable synthetic assumptions only as a bounded extension.** Let students test one market's growth or delivery estimate with provenance and reset behavior. Do not add live geocoding, commercial data feeds, or location collection to demonstrate this lesson.

### New findings in this pass

- [ ] **MKT-14 · P2 · Improve — Make adaptive map colors unsuitable for unqualified before-and-after claims.** The new legend explicitly says that bands separate the four highest distinct values, so it is not an undocumented algorithm. However, each edit can change thresholds: the same shade across two screenshots does not imply the same priority score, and a tiny score difference can cross a full color band. Add this interpretation to the sensitivity exercise and copied/saved comparison guidance, or provide fixed bands when comparing scenarios. Preserve the useful rank labels and exact values.

## 7. Fulfillment SQL explorer — Fulfillment Lab

[Live app](https://jordanmeyer.github.io/bab-example-sql/) · [Interface](../live-revisions/2026-10-09/sql/source/app/app.js) · [Queries](../live-revisions/2026-10-09/sql/source/app/queries.js) · [Engine](../live-revisions/2026-10-09/sql/source/app/engine.js)

**Keep:** The live default now starts with the large dataset and a one-table query; the starter sequence moves toward joins. The tiny join trap displays $750 and $550 explicitly as USD, with raw cents retained in CSV. Preserve exact arithmetic, read-only local execution, result provenance and explicit mistaken/correct row labels.

### Concept and teaching

- [ ] **SQL-01 · P2 · Improve — Expose the raw hand-check rows next to the join lesson.** The revised app explains Line A and supplies beginner queries, but the hand-check disclosure still gives totals rather than all four raw lines and shipment events. Add compact exact rows or a one-click inspection query for each relevant table. Students should be able to reconstruct $750 versus $550 from the raw grain without first understanding the full CTE.
- [ ] **SQL-04 · P2 · Improve — Give the large dataset its own known-answer investigation.** The app now starts with 2,400 orders and a simple products query. Retain that beginner progression. Add a bounded business question using the larger variation, with the expected result and a clause-by-clause path from inspection to the answer. The tiny dataset should remain the proof of the join rule, rather than being the only explained analytical conclusion.

### Design and interaction

- [ ] **SQL-07 · P2 · Observed — Explain why an automatic chart is absent.** Source rules require exactly two suitable columns, unique nonempty categories, at most 20 rows, and uncapped results. When a query fails those chart rules, show a short reason and one example query that satisfies them; otherwise students may think the chart broke.
- [ ] **SQL-08 · P2 · Improve — Protect an edited query when selecting a starter.** Changing the starter currently replaces the editor contents. Offer a simple restore-previous-query action or make replacement explicit before students lose a custom query. Keep Save SQL as the durable local path.
- [ ] **SQL-09 · P2 · Observed — Clarify what “Download shown rows” exports.** The source exports all retained result rows, up to 500, while the visible page contains up to 50. Label the button with the actual export count and distinguish result cap from table pagination. Do not imply a complete uncapped database export.
- [ ] **SQL-10 · P2 · Improve — Include result provenance in the saved workflow.** Saving SQL and downloading CSV are separate actions, and the CSV alone omits dataset identity and query text. Offer a paired note or clearly named files so a student can reproduce the exported answer.
- [ ] **SQL-11 · P2 · Verify — Recheck keyboard arrival in long narrow SQL.** The new default query is short and avoids the old initial long-CTE problem. Verify the issue specifically after selecting an advanced starter: activate the editor skip link at narrow width, inspect horizontal position/caret behavior, and reach the label and start of the query. Add wrapping or a deliberate view-reset only if that path still obscures the query. Do not move the cursor during ordinary editing.
- [ ] **SQL-12 · P2 · Improve — Translate execution errors into the next useful action.** Keep the precise database error, but add concise guidance for an unknown column, malformed SQL, timeout, and cancellation. Keep old results visibly attributed to the old query; do not make a failed query look like a new answer.

## 8. Bakery resource allocation — Batch & Balance

[Live app](https://jordanmeyer.github.io/bab-example-optimizer/) · [Interface](../live-revisions/2026-10-09/optimizer/source/app/app.js) · [Model](../live-revisions/2026-10-09/optimizer/source/app/model.js)

**Keep:** The revised default visibly needs integer optimization: $941 whole-batch contribution versus a $946 fractional bound. Extra-hour comparisons show $0 prep, $46 oven and $62 packing gains. The two-product lesson returns $23 versus $24 and now includes a genuine feasible-region graphic, with the third product removed from that lesson. The 10,000-minute limit correctly suppresses an unsupported +60-minute experiment.

### Concept and teaching

- [ ] **OPT-02 · P1 · Improve — Explain why the selected mix beats an intuitive alternative.** Ask students to maximize the highest-contribution product first, check the resulting resource/commitment violations, and compare with the valid optimum. The existing manual-mix checker supplies the mechanism; add the reasoning task.
- [ ] **OPT-05 · P2 · Improve — Turn the improved infeasibility explanation into an exercise.** The revised source calculates minimum-commitment resource use and explains conflicts when infeasible. Supply one exact input change that reaches this state, ask students which constraint fails before solving, and show the independent minimum-use calculation. No new infeasibility engine is needed.
- [ ] **OPT-07 · P2 · Improve — Make omitted production constraints concrete.** Ask whether oven capacity represents total minutes, simultaneous trays, or a sequenced machine. Explain that the current additive resource model is not a timed production schedule, even if its total-minute allocation is feasible.

### Design and interaction

- [ ] **OPT-09 · P2 · Improve — Make the next solve reachable from the pending result.** Collapsing the operating assumptions greatly improves the default page. After an edit clears results, provide a direct route from the pending-result panel to the solve action. The action currently lives below all coefficients inside the assumptions disclosure. Keep stale allocations hidden, but do not make a student retrace the entire form to apply one change.
- [ ] **OPT-12 · P2 · Verify — Check solver states in the actual UI.** Exercise cancel/retry, editing during a solve, infeasible commitments, and a feasible-but-not-proven-optimal response if reproducibly inducible. Keep simulated adapter states labeled as such; prior evidence says a real timeout was not induced.
- [ ] **OPT-13 · P3 · Improve — Use overtime cost as a separate modeling extension.** Ask students to introduce purchased capacity with a cost and justify its bounds. Do not expand the core example until they can explain the original objective and constraints.

### New findings in this pass

- [ ] **OPT-14 · P2 · Observed — Put cancellation beside the busy result.** On initial load and preset solves, the result says “You can cancel” while the only Cancel solve button is inside the collapsed operating-assumptions disclosure, after all inputs. Expose the existing cancellation action in the busy panel or open a compact solve bar. A student should not have to open a long form to find the action the message promises.
- [ ] **OPT-15 · P2 · Observed — Call a demand cap an assumed maximum.** The improved Bound status column still labels a product at its maximum “Limited by expected sales.” The method correctly describes a deterministic ceiling, not a demand forecast. For example, with oven capacity 10,000, Breakfast boxes reaches 24 batches and receives that label. Use “At assumed demand maximum” and retain the distinction between a sales cap and guaranteed sell-through.

## 9. Interactive analytical presentation — Desk / Day

[Live app](https://jordanmeyer.github.io/bab-example-presentation/) · [Interface](../live-revisions/2026-10-09/presentation/source/app/app.js) · [Model](../live-revisions/2026-10-09/presentation/source/app/model.js)

**Keep:** This is now a seven-slide board-scale full-launch/pilot/defer argument, with live recommendations, charts, speaker notes, a model appendix and concrete release gates. Default pilot funding is $1,896,000, with $264,000 base result and −$81,600 stress result; the 20,000-unit preset visibly defers. Retire the former pop-up and static-reference-case criticisms.

### Concept and teaching

- [ ] **DECK-01 · P2 · Observed — Make the narrow presentation’s scroll ownership obvious.** The rebuilt deck is substantially clearer, but the live assumptions slide still scrolls internally within a scrolling page. At 390 × 844, the viewport cuts through “Restore valid values,” and both inner and outer scrollbars are visible; the live result is farther inside the slide. Use a mobile document flow or an explicit continuation/result affordance. Verify a reader can move between inputs, result and slide navigation without mistaking the visible portion for the whole slide.
- [ ] **DECK-04 · P2 · Improve — Distinguish the generated policy record from a student decision.** The new record now includes recommendation, alternatives, scaling, policy and specific release gates. It still records the model’s prescribed choice rather than the student’s judgment. Either label it “Copy policy recommendation” or let the learner append their decision, reason and next evidence test locally. Do not treat a copied calculation as an approved business decision.

### Design and interaction

- [ ] **DECK-10 · P2 · Verify — Check revised slide announcements with a screen reader.** Fresh snapshots again expose a whole-slide announcement as well as the slide content, including the live assumptions/results. Test whether a screen reader repeats the full content on navigation and on individual number edits, and ensure validation does not trigger an excessive announcement. This is a verification concern, not a confirmed audible duplication.
- [ ] **DECK-12 · P2 · Improve — Offer an all-slides reading path.** The revised seven-slide argument, notes and appendix deserve a simple document/print reading mode. Preserve current assumptions and policy labels in that view. This would also make comparison and classroom annotation easier; a PowerPoint exporter or new document subsystem is unnecessary.
- [ ] **DECK-13 · P3 · Improve — Have students replace the decision policy and argument.** Use the new full-launch/pilot/defer story as the worked example. An extension should require a different question, explicit alternatives, a defensible decision rule, and a validation plan—not just different prices or business names. Keep the numerical model as small as the new argument permits.

### New findings in this pass

- [ ] **DECK-14 · P2 · Observed — Explain the full-first policy when the pilot dominates the displayed metrics.** The full-first preference is disclosed in the appendix and copied record, so this is not an arithmetic defect. But the prominent recommendation only cites passing gates. Reproduced with price $180, cost $108, quantity 1,450 and fixed cost $100,000: full launch yields $4,400 base, −$37,360 stress and $256,600 funding; pilot yields $6,320 base, −$6,208 stress and $71,980 funding. Both pass, yet the app recommends full launch. Put the governing preference beside that recommendation and ask students what strategic benefit justifies it, or change the rule to a stated objective. Do not quietly call passing gates the best economic choice.
- [ ] **DECK-15 · P2 · Improve — Separate a smaller launch from the value of learning through a pilot.** The app now names a staged pilot and correctly asks for a later scale decision. Its arithmetic nevertheless compares one-period operating options; it does not value information or model a second-stage rollout. Make this a specific discussion question: what evidence will the pilot reveal, and how would it change the later decision? Keep the 30% demand/25% fixed-cost assumptions visible when interpreting the pilot advantage. A two-stage optimization model is unnecessary unless that becomes the lesson.

## 10. Pricing calculator — Notebook pricing lab

[Live app](https://jordanmeyer.github.io/bab-trial-pricing-2026-10-08/) · [Public source](https://github.com/jordanmeyer/bab-trial-pricing-2026-10-08/tree/main/app) · [Trial evidence](../trials/2026-10-08/README.md)

**Keep:** the small four-input model, integer cents, whole-unit versus theoretical break-even, deliberate stale-result hiding, and explicit absence of demand forecasting. Editing price to $10 hid the old result until Calculate; calculation then showed negative contribution and no break-even at positive fixed cost.

### Concept and teaching

- [ ] **PRICE-01 · P1 · Improve — Turn the default into a visible derivation.** Show $8 contribution × 100 units − $500 = $300, then compare 62 units (−$4) and 63 units (+$4). Let students predict before calculating. This is more useful than presenting the formula only in the final assumptions paragraph.
- [ ] **PRICE-02 · P1 · Improve — Make clear that this is a contribution/break-even tool, not a price optimizer.** The caveat already says this, but the title invites a broader interpretation. Use a subtitle and a worked price/volume comparison that explicitly holds or changes volume by assumption.
- [ ] **PRICE-03 · P2 · Improve — Rename the decimal preset around its lesson.** “Load decimal example” describes a test case, not a business question. Explain that a ten-cent contribution needs 1,000 units to cover $100, and why changing fixed cost by one cent changes the required whole-unit quantity.
- [ ] **PRICE-04 · P2 · Improve — Distinguish a minimum non-loss quantity from exact break-even.** With zero fixed cost, the answer is zero units, but negative contribution means every positive sale loses money; zero contribution means every quantity breaks even. The explanation already handles this in prose. Make the headline terminology equally precise, as the newer presentation does.
- [ ] **PRICE-05 · P2 · Improve — Make the modeled cost boundary visible in the profit label.** “Profit for this period” can be read as full business profit. Prefer “Result after entered costs” or “Modeled operating result,” retaining the concise explanation of omitted costs and unsold inventory.
- [ ] **PRICE-06 · P2 · Improve — Add a margin-of-safety explanation for the current scenario.** Show how far assumed sales sit above/below whole-unit cost coverage, while clearly stating that assumed sales are not predicted demand. Keep the arithmetic inspectable and handle nonpositive contribution separately.

### Design and interaction

- [ ] **PRICE-07 · P2 · Improve — Add a small comparison using existing arithmetic.** Let students compare the current case with the default or one saved alternative. A two-row table is enough; a full dashboard or optimization engine would obscure the simple lesson.
- [ ] **PRICE-08 · P2 · Observed — Maintain orientation when edits hide the result.** The current stale-state policy is safe, but removing all numbers creates a largely empty result panel. Keep a stable “Inputs changed—calculate to update” placeholder and preserve enough layout structure to avoid a jarring visual jump.
- [ ] **PRICE-09 · P2 · Improve — Give the narrow layout a direct route from Calculate to the answer.** After a successful calculation, announce the result and offer a clear result jump without unexpectedly stealing focus on every edit. Verify the form and output remain usable with the mobile keyboard open.
- [ ] **PRICE-10 · P2 · Improve — Let students take away the four assumptions and answer.** Add one copyable scenario record with units, the formula, and model limits. This is sufficient for an assignment; persistent storage is unnecessary.
- [ ] **PRICE-11 · P2 · Verify — Review the edge explanations as teaching content.** Exercise zero price, cost above price, zero fixed cost, zero quantity, a threshold beyond the supported quantity limit, and the decimal case. Require distinct and accurate language for each condition, not only passing arithmetic assertions.
- [ ] **PRICE-12 · P3 · Improve — Offer demand response as a separate extension.** Require an explicit demand assumption and validation plan before calling any resulting price “best.” Keep the core example deterministic and transparent.

## 11. Inventory simulation — Inventory policy lab

[Live app](https://jordanmeyer.github.io/bab-trial-inventory-2026-10-08/) · [Public source](https://github.com/jordanmeyer/bab-trial-inventory-2026-10-08/tree/main/app) · [Trial evidence](../trials/2026-10-08/README.md)

**Keep:** explicit within-day event order, inventory-position ordering, fixed lead time, reproducible demand, and a daily ledger. The delayed-delivery preset produced 75% fill, five unmet units, three orders, two ending units, and six still on order.

### Concept and teaching

- [ ] **INV-01 · P1 · Improve — Present a single run as a sample path.** A seeded 30-day fill rate of 73.2% is one realization, not the policy's expected service level. Put that distinction beside the KPI, and ask students to compare seeds before drawing a policy conclusion.
- [ ] **INV-02 · P1 · Improve — Teach inventory position in the ledger.** Orders use closing stock plus outstanding orders, but the table only shows closing stock and newly ordered units. Add on-order quantity and the position used by the reorder decision, with one row-level calculation explaining why an order was or was not placed.
- [ ] **INV-03 · P1 · Improve — Give the delayed-delivery preset a day-by-day walkthrough.** Show opening stock, arrivals, demand, sales, closing stock, position, and the next due date for the five-day case. Ask students to predict day 2 and day 3 before revealing the ledger.
- [ ] **INV-04 · P2 · Improve — Name the exact replenishment policy.** This is an end-of-day review placing at most one fixed-size order when position is at or below the point. It is not a continuous-review implementation or an order-up-to rule. Put that distinction near the controls and discuss the effect when the order quantity is very small.
- [ ] **INV-05 · P2 · Improve — Explain fill rate versus days without a stockout.** The current KPI is units sold divided by units demanded. Add a short example where one bad day produces different unit fill and stockout-day measures, without presenting them as interchangeable service levels.
- [ ] **INV-06 · P2 · Improve — Show why “more stock is better” is not a complete policy answer.** Costs are deliberately absent, so higher inventory may improve fill without any modeled penalty. State that this app compares service consequences, not economic optimality; use average/ending inventory as a visible tradeoff if added.
- [ ] **INV-07 · P2 · Improve — Explain horizon effects and outstanding orders.** The delayed example places an order on the final day. Label that as the continuing policy operating beyond the reporting window, and distinguish on-hand from pipeline stock. Do not imply the final order was received or consumed during the five days.

### Design and interaction

- [ ] **INV-08 · P2 · Improve — Add a small stock/arrival timeline.** A ledger is excellent for proof but poor for seeing repeated depletion and delivery cycles. Use a simple native SVG with an exact table alongside it; the no-library starting example need not gain a charting dependency.
- [ ] **INV-09 · P2 · Improve — Support a controlled policy comparison.** Compare two reorder points or order quantities against the same generated demand path and display both fill and inventory outcomes. This is the smallest useful next step from “run a simulation” to “learn about a policy.”
- [ ] **INV-10 · P2 · Improve — Make long ledgers navigable.** At the supported 365-day horizon, use pagination, a compact summary, or a chosen day range. Keep all rows available for an explicit export or inspection rather than forcing a long unstructured scroll.
- [ ] **INV-11 · P2 · Improve — Preserve the complete run specification in a local record.** Include all policy inputs, seed, event convention, and summary; optionally export the ledger. Students should be able to reproduce a classmate's result without retyping values from a screenshot.
- [ ] **INV-12 · P2 · Verify — Test explanations at policy boundaries.** Check initial zero stock, demand zero, order quantity below typical demand, lead time longer than the horizon, and inventory position exactly equal to the reorder point. Preserve N/A for zero-demand fill rate and demonstrate why it is not 100% evidence of good service.
- [ ] **INV-13 · P3 · Improve — Use multiple replications as an advanced extension.** Report variability across runs and distinguish it from daily variability inside one run. Keep the deterministic five-day example as the first lesson so simulation machinery does not hide the inventory mechanics.

## 12. Sales dashboard — Sales lens

[Live app](https://jordanmeyer.github.io/bab-trial-sales-2026-10-08/) · [Public source](https://github.com/jordanmeyer/bab-trial-sales-2026-10-08/tree/main/app) · [Trial evidence](../trials/2026-10-08/README.md)

**Keep:** local CSV processing, an inspectable table, integer-cent totals, active filters, and a concise no-framework implementation. The default has three records totaling $390 revenue, $234 product cost, $156 contribution, and 17 units. North + Pen correctly produces no matches. A reversed date range also produces zero totals, but that is a different state requiring correction.

### Concept and teaching

- [ ] **SALES-01 · P1 · Observed — Do not present an invalid date range as zero sales.** Reproduction: From October 3, 2026 and Through October 1, 2026. The app shows the correct validation alert but also $0 totals and “No sales match this view.” Suppress or clearly mark results invalid until the range is corrected; reserve zero/no-match results for a valid filter.
- [ ] **SALES-02 · P1 · Observed — Replace the three-row demo with a meaningful analytical sample.** Retain the tiny three-row case as a hand-check preset, but add a modest synthetic dataset with time variation, differing margins, and at least one loss-making transaction/product. All current rows have the same 40% contribution rate, so there is little to discover.
- [ ] **SALES-03 · P1 · Observed — Remove the perfect product/region confounding in the teaching dataset.** Current North rows are all Notebooks and the South row is a Pen. Include both products in both regions so students can compare within product or region and see why an aggregate difference need not be a regional effect.
- [ ] **SALES-04 · P1 · Improve — Give the dashboard an actual question.** For example, “Which product-region combination contributes the most, and does the answer change after adjusting for volume?” Supply a worked answer using the richer sample and explain the limits of the available costs.
- [ ] **SALES-05 · P2 · Improve — Use consistent contribution terminology.** “Contribution profit” is qualified below, but students encounter different names across this app, pricing, and the executive dashboard. Prefer “Contribution after product cost” here and explain which costs are absent; do not imply the same cost scope across all apps.
- [ ] **SALES-06 · P2 · Improve — Teach totals versus margins.** Add a weighted contribution rate only if it serves the central comparison, and derive it from aggregate contribution/revenue. Include a dataset where the highest revenue group is not the highest contribution or rate group.
- [ ] **SALES-07 · P2 · Improve — State the row grain and duplicate policy.** The CSV has no transaction identifier. Explain whether identical rows may be separate legitimate sales and whether imports are summed without deduplication. Do not silently invent an identifier or remove duplicates based only on matching values.

### Design and interaction

- [ ] **SALES-08 · P2 · Observed — Make the accepted 10,000-row size usable.** Source renders every matching row directly into the DOM. Add simple pagination or a visible display limit with access to the complete filtered data. Measure a real maximum-size synthetic file before promising comfortable browser use.
- [ ] **SALES-09 · P2 · Improve — Add one comparison graphic or grouped summary.** A compact contribution-by-product/region view would communicate a pattern the transaction table does not. Keep exact values in the table, and use native browser code to preserve the example's introductory scope.
- [ ] **SALES-10 · P2 · Improve — Make date coverage visible before filtering.** Show the dataset's first/last date and explain that Through is inclusive. Offer a dataset-range reset; this reduces empty results caused by choosing dates outside a small sample.
- [ ] **SALES-11 · P2 · Improve — Make no-match recovery specific.** For North + Pen, show the active combination and a direct clear-filter action near the empty result. Keep the data-loaded state distinct from no dataset, rejected import, and invalid dates.
- [ ] **SALES-12 · P2 · Improve — Add a local export of the current analytical view.** Include matching rows and a simple summary with active filters and source identity. If export is deliberately omitted to keep this a starter, state that boundary in the lesson and make it the first extension exercise.
- [ ] **SALES-13 · P2 · Verify — Run the actual CSV correction workflow with a novice.** Download the template, add a row, import it, then introduce a malformed quote or invalid date and correct it. Confirm the old dataset remains identifiable after rejection, and that resetting the sample clears the relevant filters and errors.
- [ ] **SALES-14 · P3 · Improve — Use the returns explorer as the next assignment.** Explain exactly what must change when one sale can have many return events: identifiers, row grain, aggregate-before-join logic, and cohort interpretation. This gives the simple dashboard a purposeful place in the collection.

## Closing items without adding unnecessary scope

For a confirmed defect, preserve a reproduction and verify the resulting behavior; add a focused regression check only for a real model or state boundary. For a teaching improvement, have someone follow the exercise and explain the answer without private context. Record which live revision was actually reviewed. Automated arithmetic checks, UI observation and novice learning evidence answer different questions.

After revising an app, remove duplicated instructions and move secondary detail to one clear home. Keep local-only operation, bounded examples and the existing public evidence. Optional extensions should normally become assignments rather than immediate maintainer work. Do not add accounts, live services, generalized editors or new frameworks to satisfy this checklist.

## Review artifact validation

The 12 app sections, 126 unique checklist IDs, priority totals and local Markdown destinations were checked. `python3 scripts/check.py` passed during this review, including its clean temporary build and catalog/designer consistency checks. `git diff --check` passed; the untracked checklist received its own whitespace and link checks. The direct-build sandbox limitation recorded in the first review was not retried; the checker supplies the clean-build validation. Only this review document was edited; no application changes, commits or deployments were made.
