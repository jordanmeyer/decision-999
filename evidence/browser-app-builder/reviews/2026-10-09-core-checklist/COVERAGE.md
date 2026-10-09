# Coverage of the example-app checklist

Audited 2026-10-09 against the complete `docs/EXAMPLE-APPS-REVIEW.md` and its cited opening briefs, using current source files. This is an audit of the upstream correction, not a claim that the nine deployed applications changed. The separate longer review was not used to expand this task.

Status meanings:

- **Fixed core**: an actual shared asset or gallery implementation changed. Its scope is named; it is not a claim about historical app output.
- **Preventive**: the responsible skill now instructs future builds and reviews to avoid the defect. Behavioral forward-testing is separate evidence; instructions cannot guarantee every future output.
- **Conditional**: an upstream correction applies when that domain, model or requested capability is present. It deliberately avoids imposing the example's model on unrelated apps.

## Exact upstream owners

Paths below are canonical; the bundled Campus Designer is generated from its canonical source.

| Key | Source and section |
| --- | --- |
| Plan | [plan-browser-app/SKILL.md](https://github.com/jordanmeyer/decision-999/blob/main/plugins/browser-app-builder/skills/plan-browser-app/SKILL.md), opening-brief coverage, first-load scenario and PLAN.md fields |
| Build | [build-browser-app/SKILL.md](https://github.com/jordanmeyer/decision-999/blob/main/plugins/browser-app-builder/skills/build-browser-app/SKILL.md), “Design with the bundled skill” and “Implement and verify” |
| Evaluate | [evaluate-browser-app/SKILL.md](https://github.com/jordanmeyer/decision-999/blob/main/plugins/browser-app-builder/skills/evaluate-browser-app/SKILL.md), “Establish expected behavior” and rendered review following “Bind results to source” |
| Deploy | [deploy-browser-app/SKILL.md](https://github.com/jordanmeyer/decision-999/blob/main/plugins/browser-app-builder/skills/deploy-browser-app/SKILL.md), step 2 “Prepare the public result” |
| Web | [canonical web.md](https://github.com/jordanmeyer/decision-999/blob/main/plugins/campus-designer/skills/campus-designer/references/web.md), “Content and responsive layout”, “Build accessible behavior”, “Inspect the output” |
| Type | [canonical typography.md](https://github.com/jordanmeyer/decision-999/blob/main/plugins/campus-designer/skills/campus-designer/references/typography.md), “Fallbacks”, “Choosing and obtaining fonts”, numerical-display default |
| Design review | [canonical review.md](https://github.com/jordanmeyer/decision-999/blob/main/plugins/campus-designer/skills/campus-designer/references/review.md), “Accessibility” and “Design quality” |
| Action style | [canonical SKILL.md](https://github.com/jordanmeyer/decision-999/blob/main/plugins/campus-designer/skills/campus-designer/SKILL.md#authority-labels), action-styling default |
| Font assets | [duke-fonts.css](https://github.com/jordanmeyer/decision-999/blob/main/plugins/campus-designer/skills/campus-designer/assets/duke-fonts.css), adjacent licensed fonts; generated starter theme copies; [plain](https://github.com/jordanmeyer/decision-999/blob/main/plugins/browser-app-builder/assets/starter/app/style.css) and [managed](https://github.com/jordanmeyer/decision-999/blob/main/plugins/browser-app-builder/assets/managed-starter/app/style.css) imports |
| Themes | [base.css](https://github.com/jordanmeyer/decision-999/blob/main/plugins/browser-app-builder/assets/library-themes/base.css), [tokens.js](https://github.com/jordanmeyer/decision-999/blob/main/plugins/browser-app-builder/assets/library-themes/tokens.js) and the selected library adapter |
| Gallery | [plugin.json](https://github.com/jordanmeyer/decision-999/blob/main/plugins/browser-app-builder/plugin.json), each `examples` entry's name/problem/lesson/preview/libraries/walkthrough; [build.py](https://github.com/jordanmeyer/decision-999/blob/main/scripts/build.py), example validation, rendering and asset copy; [site/style.css](https://github.com/jordanmeyer/decision-999/blob/main/site/style.css), `.app-example`; [gallery records](../../gallery/) |
| Domain: Executive | [decision-models.md — Executive dashboards](https://github.com/jordanmeyer/decision-999/blob/main/plugins/browser-app-builder/references/decision-models.md#executive-dashboards); ECharts, Mantine and Tabulator recipe pointers |
| Domain: Sales | [decision-models.md — Uploaded sales and returns](https://github.com/jordanmeyer/decision-999/blob/main/plugins/browser-app-builder/references/decision-models.md#uploaded-sales-and-returns); Papa Parse, Arquero and ECharts recipe pointers |
| Domain: Inventory | [decision-models.md — Single-period inventory decisions](https://github.com/jordanmeyer/decision-999/blob/main/plugins/browser-app-builder/references/decision-models.md#single-period-inventory-decisions); jStat, seedrandom and ECharts recipe pointers |
| Domain: Process | [decision-models.md — Process capacity and elapsed time](https://github.com/jordanmeyer/decision-999/blob/main/plugins/browser-app-builder/references/decision-models.md#process-capacity-and-elapsed-time); React Flow recipe pointer |
| Domain: Roadmap | [decision-models.md — Roadmaps, resources and milestones](https://github.com/jordanmeyer/decision-999/blob/main/plugins/browser-app-builder/references/decision-models.md#roadmaps-resources-and-milestones); Frappe Gantt and vis-timeline recipe pointers |
| Domain: Markets | [decision-models.md — Market ranking and sensitivity](https://github.com/jordanmeyer/decision-999/blob/main/plugins/browser-app-builder/references/decision-models.md#market-ranking-and-sensitivity); Leaflet and ECharts recipe pointers |
| Domain: SQL | [decision-models.md — SQL learning explorers](https://github.com/jordanmeyer/decision-999/blob/main/plugins/browser-app-builder/references/decision-models.md#sql-learning-explorers); DuckDB recipe pointer |
| Domain: Allocation | [decision-models.md — Resource allocation and capacity value](https://github.com/jordanmeyer/decision-999/blob/main/plugins/browser-app-builder/references/decision-models.md#resource-allocation-and-capacity-value); HiGHS recipe pointer |
| Domain: Deck | [decision-models.md — Analytical presentations](https://github.com/jordanmeyer/decision-999/blob/main/plugins/browser-app-builder/references/decision-models.md#analytical-presentations); Reveal recipe pointer |

## Across all nine — 17 items

| ID | Checklist requirement | Status | Exact owner and change |
| --- | --- | --- | --- |
| A1 | P1 Default scenario shows the lesson | Preventive + conditional | Plan/Evaluate require first-load lesson and meaningful counterfactual with independent expectations. Domain: Inventory requires risk tradeoff, Process distinguishes overload from entered times, Allocation exposes integrality, Deck retains decision stakes. |
| A2 | P1 Show how each app was made | Preventive + fixed core | Build/Deploy require compact provenance with opening request, planning decisions, recipes and actual evidence. Gallery adds all nine “How this was built” routes to real records. Historical app footers remain unchanged. |
| A3 | P1 Gallery leads with problems and thumbnails | Fixed core | Gallery renders business-question headings, actual recorded previews, app names and learning outcomes before secondary library details. Local implementation is changed; publication is not asserted here. |
| A4 | P2 Match app and gallery names | Fixed core + preventive | Gallery uses displayed names including Stillwater Coffee and Batch & Balance; Build requires one name across title, README and gallery. |
| A5 | P2 Synthetic data is less engineered | Preventive | Plan requires variation/counterexamples and separate tiny fixtures; Domain: Sales requires overlapping noise, plausible exceptions and enough periods. It does not fabricate new observations for historical examples. |
| A6 | P2 Consistent edit pattern | Preventive | Plan records live versus atomic edits; Build uses live cheap calculations and visibly pending Apply/Run states; Evaluate checks the chosen pattern. |
| A7 | P3 One-line learning outcome | Fixed core + preventive | Gallery has a truthful lesson for every historical example; Plan and Build require the learning objective in future examples. |
| A8 | P1 Load EB Garamond/Open Sans locally | Fixed core + preventive | Font assets bundle licensed normal faces and notices; both starters import them; Themes use canonical stacks. Build/Evaluate/Web require actual loaded-face evidence. Fresh starter production verification is in `design/README.md`; historical app fonts remain unchanged. |
| A9 | P2 Lining/tabular numbers | Fixed core + preventive | Type mandates lining/tabular KPI/amount/table figures; starter and theme root/headings explicitly apply them, including after font shorthand. Fresh numeric specimen verified; not a rereview of historical numbers. |
| A10 | P2 No forced mid-phrase headline breaks | Preventive + fixed core | Web permits sentence breaks and balanced natural wrapping; both starter headings use `text-wrap: balance`; Design review checks actual wraps. |
| A11 | P2 No external-link arrows on local actions | Preventive | Action style distinguishes functional indicators from decorative arrows, explicitly excludes calculation/render/download actions; Design review checks semantics. |
| A12 | P2 Shorter decision pages | Preventive | Web puts decision/assumptions/evidence together and moves secondary notes/contracts/audits to labeled tabs/disclosures. It retains required warnings and accessible primary evidence rather than enforcing arbitrary height. |
| A13 | P3 Larger dense-control targets | Fixed core + preventive | Web names table/map/checkbox/file controls with 24px-or-equivalent-spacing and larger primary-action defaults; Themes impose minimum button/select/summary dimensions. Design review requires measured targets. No claim that every vendor control now inherits the minimum. |
| A14 | P2 Omit unnecessary cents | Preventive | Build chooses display precision by decision/reconciliation need while retaining underlying exact values; Evaluate reviews units/rounding. |
| A15 | P2 One date format | Preventive + conditional | Build requires consistent human-readable dates; Domain: Roadmap separates authored display, canonical storage and native picker locale. |
| A16 | P2 Business language, technical detail on demand | Preventive | Build moves technical methods/types/contracts to disclosure; Domain: Inventory, SQL, Allocation and Video specify the main labels/units rather than engineering terms. |
| A17 | P3 Consolidate disclaimers | Preventive | Build consolidates synthetic/affiliation statements while retaining material model or telemetry disclosures. Web permits secondary disclosures but keeps important qualification beside the decision. |

## Executive operating dashboard — 8 items

| ID | Checklist requirement | Status | Exact owner and change |
| --- | --- | --- | --- |
| E1 | P1 Evidence in board briefing | Conditional | Domain: Executive requires the relevant chart/compact evidence, definitions and next investigation beside each proposed decision; Mantine/ECharts route here. |
| E2 | P2 Trend supports headline | Conditional | Domain: Executive uses percentage-point change or labeled tighter line axis; prohibits misleading truncated bar axes. |
| E3 | P3 Year-over-year margin | Conditional | Domain: Executive includes prior-year margin with sales when annual comparison is intended; verifies like-for-like coverage and missing history. |
| E4 | P2 Target label avoids September point | Preventive | Domain: Executive checks reference labels against plotted points; Evaluate requires non-clipped chart labels. The specific historical collision is not patched. |
| E5 | P2 Recognizable regional filter | Conditional | Domain: Executive requires a visible filter affordance/selected state without duplicate-value buttons. |
| E6 | P2 Ledger headers, fixed columns, redundant sorting/cents | Conditional + preventive | Domain: Executive keeps meaningful headers/alignment and removes filter-fixed columns/redundant sorting; Build owns currency precision. Narrow keyboard behavior remains Tabulator verification. |
| E7 | P2 Primary accessible ledger | Conditional | Domain: Executive and Tabulator's new pointer explicitly make the main working table accessible; hiding the usable table is insufficient. |
| E8 | P3 Clear disabled Inspect action | Preventive | Web “Build accessible behavior” now requires solid neutral unavailable styling, native disabled semantics and nearby explanation of the prerequisite, with “Select a store to inspect” as the concrete example. |

## Sales and returns explorer — 7 items

| ID | Checklist requirement | Status | Exact owner and change |
| --- | --- | --- | --- |
| U1 | P2 Enough cohort periods | Conditional | Domain: Sales requires enough periods for the proposed trend with representative variation. |
| U2 | P2 Product × channel view | Conditional | Domain: Sales requires a joint comparison with counts when the question involves both dimensions; separate one-dimensional views do not close it. |
| U3 | P3 Revenue-to-profit bridge or honest revenue scope | Conditional | Domain: Sales shows gross/returns/net and restricts “profit” to a model with requisite costs; explains the narrower revenue question otherwise. |
| U4 | P2 No empty full-height sidebar | Preventive | Web explicitly avoids empty sidebars spanning unrelated content; Evaluate removes empty panels in simplification. |
| U5 | P2 No irrelevant top-N boilerplate | Preventive | Domain: Sales and Build render limit notes only when rows were actually hidden. |
| U6 | P2 Audit table alignment | Preventive | Domain: Sales left-aligns labels and right-aligns comparable numbers; Build gives shared text/numeric alignment guidance. |
| U7 | P3 KPI figures without unnecessary cents | Preventive | Build's precision rule and Evaluate's rounding review apply to sales summaries. |

## Seasonal order simulator — 6 items

| ID | Checklist requirement | Status | Exact owner and change |
| --- | --- | --- | --- |
| S1 | P1 Expected-profit curve and critical ratio | Conditional | Domain: Inventory supplies the quantile benchmark under explicit price/cost/salvage assumptions, quantity sweep and distinction between analytical and simulated outcomes. Matching distribution/integer choices and no-order fixed-cost exception avoid an incorrect universal formula. |
| S2 | P1 Risk limit binds initially | Conditional | Domain: Inventory requires an illustrative binding constraint plus nonbinding/no-feasible cases without seed fishing; Plan/Evaluate verify first-load lesson. |
| S3 | P2 Histogram or understandable downside view | Conditional | Domain: Inventory leads with loss probability and histogram/clear downside summary rather than relying on a CDF. |
| S4 | P2 Simplified decision rule, interval detail | Conditional | Domain: Inventory uses plain loss estimates first, explains uncertainty in details and still discloses any bound controlling the decision. |
| S5 | P2 No triple repetition | Conditional | Domain: Inventory selects one primary comparison and reveals details on demand. |
| S6 | P3 Rounder axis ticks | Preventive | [ECharts skill](https://github.com/jordanmeyer/decision-999/blob/main/plugins/browser-app-builder/skills/echarts-browser-app/SKILL.md), guidance before “Verify”, now selects round readable steps and appropriate precision, preserves exact tooltips/table values, and checks collisions after resize/extreme inputs. |

## Approval process model — 5 items

| ID | Checklist requirement | Status | Exact owner and change |
| --- | --- | --- | --- |
| P1 | P1 No feasible elapsed-time headline under overload | Conditional | Domain: Process names overload before nominal entered-time arithmetic. It distinguishes steady-state instability, finite-horizon backlog and constants; does not falsely turn the arithmetic into infinity or invent a queue approximation. |
| P2 | P2 Per-visit versus weighted minutes | Conditional | Domain: Process labels visit share/count and both units, with the explicit 25 × 30% = 7.5 example and routing/concurrency assumptions. |
| P3 | P1 Fully reachable edit panel | Preventive | Domain: Process places essential ordinary edits outside the fixed-height canvas and requires the panel remain fully reachable. Web/Evaluate check clipping. |
| P4 | P2 Readable node details and narrow list | Conditional | Domain: Process makes a readable ordinary step list the primary narrow view when the graph would shrink labels below readability; retains all essential edits. |
| P5 | P3 Name overloaded team | Conditional | Domain: Process requires the team name beside the overload, rather than an unexplained count. |

## Launch roadmap — 5 items

| ID | Checklist requirement | Status | Exact owner and change |
| --- | --- | --- | --- |
| R1 | P1 Resources and milestones | Conditional | Domain: Roadmap models assignment, availability/workload and overloads separately from precedence, plus named zero-duration milestones. Plan/Evaluate block silent omission of requested capabilities. |
| R2 | P2 Task names on bars | Conditional | Domain: Roadmap uses meaningful task names with full labels available without ID cross-reference. |
| R3 | P2 Promised-date marker and useful range | Conditional | Domain: Roadmap shows the commitment marker, variance and initial range covering plan/commitment with navigation for longer schedules. |
| R4 | P2 Designed import control | Preventive | Domain: Roadmap gives import/export equally legible controls; Web includes file-picker buttons in target and label review. No need for a custom upload framework. |
| R5 | P3 Clear scenario/reset confirmation | Preventive | Domain: Roadmap distinguishes scenario loading from restoring baseline; Build messages describe the state actually loaded. |

## Geographic market screen — 5 items

| ID | Checklist requirement | Status | Exact owner and change |
| --- | --- | --- | --- |
| M1 | P1 Explain rank movement | Conditional | Domain: Markets compares previous/current ranks and attributes moves to normalized metric contributions, gates or changed measures, rather than generic applied status. |
| M2 | P2 Leader sensitivity | Conditional | Domain: Markets holds other inputs fixed, exposes leader changes over the chosen weight range, and labels sampled sweep/tie/eligibility limits. |
| M3 | P3 Consider fictional geography | Conditional | Domain: Markets prefers fictional regions where real geography is unnecessary, otherwise makes synthetic attributes versus real boundaries explicit near the map. |
| M4 | P2 Meaningful sequential legend | Conditional | Domain: Markets uses bins that distinguish the observed comparison, ordered light-to-dark approved colors and separate no-data/ineligible states; exact values remain accessible. |
| M5 | P3 Remove filler counts/large empty shortlist | Conditional | Domain: Markets omits nondecision counts and uses a compact invitation or clearly labeled starting shortlist instead of an oversized empty panel. |

## Fulfillment SQL explorer — 6 items

| ID | Checklist requirement | Status | Exact owner and change |
| --- | --- | --- | --- |
| Q1 | P2 Simple-to-complex starters | Conditional | Domain: SQL sequences inspection, filtering/sorting, aggregation and joins before the double-counting lesson. |
| Q2 | P2 Substantial default or clear choice | Conditional | Domain: SQL opens representative scale or gives an unmistakable scale choice with counts; retains the tiny verification exercise. |
| Q3 | P2 Dollars in known money results | Conditional | Domain: SQL gives explicit chart/table units and exact known-cents formatting; forbids guessing from arbitrary query aliases or losing BigInt/DECIMAL precision. |
| Q4 | P2 Raw types removed from main result header | Conditional | Domain: SQL puts raw storage types/units into schema/method detail rather than making them the result headline. |
| Q5 | P3 Consistent left-aligned result heading | Preventive | Web “Content and responsive layout” now aligns tool/table headings with their workspace rather than centering one above otherwise left-aligned content without a reason; Build also specifies text alignment. |
| Q6 | P3 Schema usable from editor | Conditional | Domain: SQL makes schema usable beside the editor and suggests accessible insertion of controlled quoted identifiers, preserving SQL safety. |

## Bakery resource allocation — 5 items

| ID | Checklist requirement | Status | Exact owner and change |
| --- | --- | --- | --- |
| O1 | P1 Value of additional capacity | Conditional | Domain: Allocation provides one-action increments/re-solves, objective/mix/constraint comparisons and gross-versus-net gain. Integer increments are finite scenario results, not invented shadow prices; time-limited comparisons remain provisional. |
| O2 | P2 Actual two-product feasible-region lesson | Conditional | Domain: Allocation shows actual inequalities, objective direction, relaxation and feasible integer choices; removes inactive-product clutter or labels the projection/fixed dimensions. |
| O3 | P2 Show rounding gap when meaningful | Conditional | Domain: Allocation exposes a nonzero integrality teaching case and honest zero-gap alternate, avoiding a padded “0.00 above” comparison. |
| O4 | P2 Decision before batch trivia | Conditional | Domain: Allocation leads with mix/objective/constraints; units per batch stay by their relevant controls. |
| O5 | P3 Plain bounds/demand language | Conditional | Domain: Allocation gives business-readable status examples with mathematical detail available on demand. |

## Analytical presentation — 5 items

| ID | Checklist requirement | Status | Exact owner and change |
| --- | --- | --- | --- |
| D1 | P1 Preserve board-level decision stakes | Conditional | Domain: Deck and Plan retain audience, consequential launch decision, alternatives, economics/risk and requested action; shrinking to a one-day sale requires explicit scope change. |
| D2 | P2 Evidence charts and model appendix | Conditional | Domain: Deck requires distinct chart purposes and reachable appendix with equations/inputs/units/sources/sensitivity/limits. Evaluate checks opening-brief coverage, not only formula tests. |
| D3 | P2 Live assumption updates | Conditional | Domain: Deck and Reveal choose live valid-input updates for inexpensive meeting calculations; incomplete inputs and last-valid results stay distinct. |
| D4 | P2 Visible presenter/fullscreen control | Conditional | Domain: Deck requires a visible mode, exit/fallback, focus behavior and resize checks, staying within self-contained browser capabilities. |
| D5 | P3 Lining figures | Fixed core + preventive | Type/Themes/starter numeric rules and Reveal adapter apply canonical figures; fresh design specimen checked, historical deck untouched. |

## Evidence and limits

This coverage record addresses the 69 applicable items: 17 common and 52 across nine applications. The checklist's separate “Not verified” note contains no additional defect: CSV import, new-input simulation and actual export were not exercised in that review; one 390px executive blank capture was treated as timing, not a proven app bug. No new pass is inferred from those omissions. Evaluate already requires actual import/export, model and production behavior; further execution evidence must be explicit.

[Domain changes](domain/CHANGES.md) records the fourteen skill validators, reference checks and model-source review. [Shared design verification](design/README.md) records fresh plain/managed starter and rendered numeric/font evidence, including the detected font-shorthand reset and correction. The gallery uses historical captures and labels the version boundary. Its structural implementation and future-build instructions must not relabel the nine historical outputs as fixed.

The initial audit found explicit gaps for E8 and S6 and weak coverage for Q5. Those findings were sent to the coordinator before asserting coverage. The coordinator added the disabled-action/prerequisite and heading-alignment sentences in canonical Web, and rounded-tick guidance in ECharts; their current source was re-read before updating these three rows. Every named checklist item now has an actual upstream owner and correction. This is prevention coverage, not a claim of 69 rendered app fixes. Integrated repository checks, current gallery rendering and independent forward-test outcomes belong in the main correction record; this table does not substitute static prose inspection for those checks.
