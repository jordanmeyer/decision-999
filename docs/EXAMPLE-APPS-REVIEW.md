# Web Application Builder examples: review checklist

Review of the ten live examples linked from the Web Application Builder listing, done on October 9, 2026, against each app's opening brief (`evidence/web-application-builder/recipe-examples/2026-10-09/BRIEFS.md`). Each app was viewed at 1440, 390 and 320px, with page height, horizontal overflow, broken images, small targets and loaded fonts measured, and its main interactions exercised. P1 items undercut what the example teaches or contradict its brief, P2 items are visible design defects, and P3 items are polish.

The apps are strong in places: every one has a clear decision question, synthetic data, honest limits and a working core interaction, and none overflows horizontally at 320px. The pattern below is that several of them stop one step short of the lesson an MBA student most needs, and that they share the same design habits.

## Across all ten

### Concept and teaching value

- [ ] **P1 · Make the default scenario show the lesson.** Several defaults hide the point. The simulator's 20% risk limit never binds, the optimizer's fractional and whole-batch answers are identical ($0.00 gap), the process model shows a finite elapsed time while Finance is at 114% load, and the presentation's stakes are a $300 one-day pop-up. Choose defaults where the tension is visible on first load.
- [ ] **P1 · Show students how each app was made.** These are worked examples, but no app links to its brief, simulated planning conversation or PLAN.md; the footer offers only “Source code” and “Third-party notices”. Add a short “How this was built” link or panel: the opening request, the plan, the skills and libraries used, and the evaluation evidence.
- [ ] **P1 · Present the gallery as problems, not libraries.** The listing shows ten text links labeled by stack (“Mantine, ECharts, Tabulator”). Lead with the business question and add a thumbnail of each app; keep the libraries as secondary detail.
- [ ] **P2 · Match names between the listing and the apps.** The listing says “Executive operating dashboard” and “Bakery resource allocation”; the apps say “Stillwater Coffee” and “Batch & Balance”. Use one name for each, or show both.
- [ ] **P2 · Make the synthetic data look less engineered.** For example, each visible paid-social tote line in the returns sample returns 55–62% of its units. Add realistic noise so that students find the pattern rather than being handed it.
- [ ] **P2 · Pick one interaction pattern for edits.** Some apps recalculate live; others need “Apply screen”, “Apply assumptions”, “Apply project settings” or “Apply task changes”. Prefer live recalculation, or explain why an app applies changes together.
- [ ] **P3 · Give each example a one-line “what you'll learn”.** For example: “why a direct join double-counts”, “how a bottleneck caps throughput regardless of routing”.

### Design system

- [ ] **P1 · Load the design skill's typefaces.** None of the ten apps loads EB Garamond or Open Sans; all use Georgia and Arial, and none declares the skill's stack. The listing claims “consistent Duke colors and typography”. Bundle the OFL-licensed font files locally, as the directory site does (no remote fonts needed), and use the published stacks.
- [ ] **P2 · Use lining figures for headline numbers.** Georgia's default old-style figures make KPIs like “$300”, “63” and “4 / 12” bounce below the line. Set `font-variant-numeric: lining-nums tabular-nums` on numbers and tables (this also follows from the item above).
- [ ] **P2 · Remove forced line breaks in headlines.** Headlines hard-code `<br>` mid-phrase (“A footprint worth / investigating.”, “Will the promise / survive the plan?”, “Make every / minute count.”). Break between sentences or let them wrap with `text-wrap: balance`.
- [ ] **P2 · Stop using “↗” on actions.** “Find the best mix ↗” and “Render silent MP4 ↗” use the arrow that conventionally means a link that leaves the site.
- [ ] **P2 · Shorten the pages.** Apart from the presentation, desktop pages run 2,000–3,900px and phone pages 3,400–6,700px. Use tabs or disclosure for secondary sections (model notes, contracts, audit tables) so the decision and its main view fit in one or two screens.
- [ ] **P3 · Enlarge small targets.** Controls under 24px: 29 in the executive dashboard (in-table “Inspect store” and store links), 31–32 in the market screen (map controls and attribution), 9 in the roadmap (dependency checkboxes).

### Numbers, copy and tone

- [ ] **P2 · Drop cents from whole-dollar figures.** Examples: “$132,000.00” in the executive ledger, “$91,182.00” in the returns KPIs, “$955.00” in the optimizer. Keep cents only where the lesson is cent-level reconciliation.
- [ ] **P2 · Use one date format per app.** The roadmap shows “Nov 29, 2026”, “2026-11-29” and the browser's mm/dd/yyyy picker together.
- [ ] **P2 · Cut jargon aimed at engineers.** Examples: “95% Wilson interval”, “Unicode code points”, “Utf8” and “Int64” column labels, “Between bounds”, “bfcache”. Explain in business terms or move the term into the method notes.
- [ ] **P3 · Consolidate disclaimers.** Every app repeats fiction, synthetic-data and no-affiliation notices in several places. One clear statement near the top and one in the footer is enough; the remainder reads as hedging.

## Executive operating dashboard (Stillwater Coffee)

Concept

- [ ] **P1 · Put the evidence inside the board briefing.** “Open board briefing” is the best feature here (three questions, each with a recommended decision), but it is a small text dialog with no chart. For a board walk-through, show the relevant evidence with each question (for example, Harbor Wharf's labor hours against its sales).
- [ ] **P2 · Make the trend chart support its headline.** “Contribution has a trajectory” sits over a 0–40% axis that flattens a 23–26% line. Use a tighter axis or show the change explicitly.
- [ ] **P3 · Add a year-over-year margin view.** Sales are compared with last year, but contribution margin only with last month.

Design

- [ ] **P2 · Fix the “Target 20%” label,** which collides with the September point.
- [ ] **P2 · Make the regional filter look like a filter.** The bars repeat their values in boxes underneath that are actually buttons, so the values appear twice and the affordance is hidden.
- [ ] **P2 · Tidy the ledger.** It scrolls inside the page, clips headers (“Contribution, U…”), shows whole dollars with “.00”, and repeats the month column in single-month view. The separate sort dropdown duplicates the sortable headers.
- [ ] **P2 · Make the main ledger accessible rather than hiding an “accessible ledger table” behind a disclosure.**
- [ ] **P3 · Make the disabled “Inspect selected store” state clear.** It looks like an enabled grey button.

## Sales and returns explorer (Common Goods)

Concept

- [ ] **P2 · Give the cohort chart enough months to show a trend.** Three points on a zero-based axis say very little.
- [ ] **P2 · Add a product × channel view.** The brief asks for product and channel patterns, but the main chart compares only one dimension at a time.
- [ ] **P3 · Show the step from revenue to profit,** or say more prominently why revenue is the right lens here.

Design

- [ ] **P2 · Stop the navy sidebar running the full page height;** most of it is empty.
- [ ] **P2 · Remove boilerplate that doesn't fit the data.** “Chart shows the top 12; table shows the top 100” appears over three groups.
- [ ] **P2 · Align the audit table.** Product and Channel are centered while the other columns aren't.
- [ ] **P3 · Show KPIs without cents** (“$91,182.00”).

## Seasonal order simulator (Seasonal Order Lab)

Concept

- [ ] **P1 · Teach the newsvendor result, not just three options.** Comparing 400, 500 and 600 units hides the core idea. With these inputs the critical ratio is (45 − 21) / (45 − 10) ≈ 0.69, so the profit-maximizing order is about 560 units, between the options shown. Add an expected-profit curve across order quantities and mark the critical-ratio quantity.
- [ ] **P1 · Make the risk limit bind by default.** All three options pass the 20% limit with loss estimates of 1.7–5.6%, so the risk-versus-return chart shows no tradeoff. A default of around 5% would make the screen change the answer.
- [ ] **P2 · Replace or supplement the cumulative-distribution chart** with a histogram or a simple probability-of-loss view; few MBA students read CDFs comfortably.
- [ ] **P2 · Simplify the decision rule.** The “95% Wilson upper bound” screen is sound statistics but a hard first read; lead with the plain estimate and keep the interval as a detail.

Design

- [ ] **P2 · Remove the triple repetition.** The option cards, the scatter chart and the decision ledger show the same numbers.
- [ ] **P3 · Use rounder tick labels** (the contribution axis ends at “$12.2K”).

## Approval process model (Approval Studio)

Concept

- [ ] **P1 · Stop reporting a finite elapsed time when a team is over capacity.** Finance is at 114% load, yet the headline still says 471.5 min per request because waits are entered constants. Flag the result as unbounded, or let waiting time respond to utilization with a simple queueing approximation.
- [ ] **P2 · Separate per-visit from weighted minutes.** The step table shows Procurement as 7.5 touch and 144 wait “per request” while the diagram shows 25m and 480m, without saying that the table is weighted by the 30% share.

Design

- [ ] **P1 · Fix the clipped edit panel.** “Edit without dragging” is cut off at the bottom of the diagram (the route share field is only partly visible).
- [ ] **P2 · Make node details readable.** The touch and wait text on each node is tiny at desktop, and the whole diagram shrinks to an unreadable thumbnail on phones. Offer a list view of the steps on narrow screens.
- [ ] **P3 · Reword “1 over capacity”** to something like “Finance is over capacity”.

## Launch roadmap (Launch Ledger)

Concept

- [ ] **P1 · Add what the brief asked for: resources and milestones.** The brief asks to make “the gap between scheduled dates and actual resource feasibility clear” and to include milestones. The app has task dependencies only, with no people, capacity or milestones.

Design

- [ ] **P2 · Put task names on the Gantt bars.** “01 · 5d” forces students to cross-reference the table.
- [ ] **P2 · Draw the promised date on the chart,** and use the empty right third of the chart area.
- [ ] **P2 · Replace the bare file input** (“Choose File · No file chosen”) with a button that matches “Export current JSON”.
- [ ] **P3 · Reword the confirmation** “Example delay loaded; baseline restored to the original example”, which reads as a contradiction.

## Geographic market screen (Replenish)

Concept

- [ ] **P1 · Explain why rankings move.** The brief asks for this. Raising the growth weight from 25 to 70 moves Tennessee ahead of Georgia, but the app only says “Screen applied”. Show each rank change with its cause (here, Tennessee's 10.8% growth against Georgia's 8.4%).
- [ ] **P2 · Add a sensitivity view.** For example, the weight range over which the current leader stays first.
- [ ] **P3 · Consider fictional regions.** Real states with invented commercial data invite “Georgia ranks first” as a takeaway despite the disclaimers.

Design

- [ ] **P2 · Fix the map color scale.** The top bin covers 60–100, so the four leading markets (61–67.5) share one color, and the scale mixes teal with blues instead of running light to dark.
- [ ] **P3 · Drop the filler statistics** (“12 candidate states · 04 explicit priorities”) and the large empty pinned-comparison state, or pre-pin the top three.

## Fulfillment SQL explorer (Fulfillment Lab)

Concept

- [ ] **P2 · Start beginners with simple queries.** The first starter query is a multi-CTE join. Order the starters from a one-table SELECT up to the join trap.
- [ ] **P2 · Default to the larger dataset, or make the switch obvious.** The brief asks for a substantial dataset; the app opens on the three-order hand-check case.
- [ ] **P2 · Show money in dollars in the table.** The chart converts cents to dollars, but the table shows “17500”.

Design

- [ ] **P2 · Remove the data-type rows** (“Utf8”, “Int64”) from the results header.
- [ ] **P3 · Left-align the “Query results” heading;** it is the only centered heading on the page.
- [ ] **P3 · Make the schema easier to use from the editor,** for example click-to-insert table and column names.

## Bakery resource allocation (Batch & Balance)

Concept

- [ ] **P1 · Teach the value of capacity.** The brief asks for binding constraints and a way to explore new capacity, but the app says zero slack “does not establish the value of adding capacity” and leaves students to re-solve by hand. Show the marginal value of each binding resource (for example, what 60 more oven minutes are worth), with one-click “+capacity” tests.
- [ ] **P2 · Graph the two-product lesson.** The feasible-region chart is the classic picture of a two-product problem and is missing; the lesson also still lists a third product at zero.
- [ ] **P2 · Show the rounding comparison only when it differs.** It reads “$0.00 above the whole-batch allocation” in the default case.

Design

- [ ] **P2 · Promote the decision, not trivia.** The largest number in the hero is “12 boxes in every batch”.
- [ ] **P3 · Replace “Between bounds” and “At demand ceiling”** with plain statements.

## Analytical presentation (Desk / Day)

Concept

- [ ] **P1 · Use a decision worth a board's time.** The brief is a board-level product-launch recommendation; the deck argues for a one-day campus pop-up making $300.
- [ ] **P2 · Add the charts and appendix the brief asked for.** There is one chart across six slides and no appendix explaining the model.
- [ ] **P2 · Update live in the room.** The assumptions slide needs “Apply assumptions”; sliders or live inputs suit a meeting.

Design

- [ ] **P2 · Add a visible full-screen or presenter mode.** The deck lives in a page frame with no obvious way to present it.
- [ ] **P3 · Use lining figures** for “$300” and “63” (see the typeface item above).

## Product-concept video studio (Foldline Studio)

Concept

- [ ] **P2 · Offer the range the brief asked for.** It asks for “a few carefully designed templates” and editable colors; the app has two templates, two lengths and two fixed color schemes.
- [ ] **P3 · Simplify the export step.** The telemetry and license text is necessary but dense; a short summary with details on demand would keep the classroom flow moving.

Design

- [ ] **P2 · Fix the headline break in the composition.** The preview renders “A little order. A / little more room.”; break between sentences.
- [ ] **P2 · Show time, not frames,** on the scrubber (“1 / 360”).
- [ ] **P2 · Widen the Orientation menu;** its label is cut off (“Landscape · 960×54”).

## Not verified in this review

- CSV import in the returns explorer, a full simulator run with new inputs, and an actual video export were not exercised.
- The executive dashboard rendered blank in one 390px composite capture; separate measurements at 390px showed full content, so this is treated as a capture timing issue.
