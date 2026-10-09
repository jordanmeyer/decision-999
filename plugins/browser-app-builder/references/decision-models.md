# Decision models and teaching views

Read only the section matching the agreed application. These are conditional guidance for business teaching apps, not requirements to add every model or view to every app. Keep the opening brief's audience, decision and requested capabilities intact. If a requested feature cannot be supported, settle the change in Plan rather than quietly substituting a simpler lesson.

## Executive dashboards

A briefing should pair each proposed decision with the evidence needed to assess it: the relevant chart or compact comparison, metric definitions and the next investigation. A dialog of recommendations without evidence is insufficient for a board walkthrough. Choose the comparison period the decision needs; if the brief asks about annual performance, include prior-year margin as well as sales, with like-for-like coverage and missing-history behavior.

Make analytical charts support their claims. For a small trend in a percentage, show the change in percentage points or a clearly labeled tighter line-chart axis; do not truncate a bar axis to exaggerate a difference. Check reference labels against every plotted point. A regional filter must look and behave like a filter, with its selection apparent; avoid repeating values in disguised buttons. Keep the main operating ledger usable with keyboard and assistive technology instead of relegating it to a hidden alternate report. Remove columns fixed by the active filter and redundant sort controls; preserve meaningful headers and numeric alignment.

## Uploaded sales and returns

Define the grain and join keys before joining exports. Reconcile unmatched records, duplicated keys, return timing and partial returns before showing a net-sales claim. Use enough periods for the proposed trend and enough overlap/noise that synthetic data rewards investigation rather than encoding the answer in every row. Include plausible exceptions; retain a separate tiny hand-check fixture.

When the question concerns product *and* channel effects, provide their joint comparison (for example, a cross-tab or heatmap with counts), not only two interchangeable one-dimensional charts. Show gross sales, returns and net sales together. Call the result profit only if the necessary costs are present and the model accounts for them; otherwise explain why net revenue answers this narrower question. Truncation labels must reflect actual hidden rows. Align text labels left and comparable numbers right.

## Single-period inventory decisions

For a single-period order with selling price `p`, unit cost `c`, salvage `s`, exogenous demand and `p > c > s`, the unconstrained expected-profit benchmark is the demand quantile at `(p - c) / (p - s)`. State the assumptions; fixed cost paid regardless of quantity does not shift this benchmark. If ordering nothing avoids that cost, compare the no-order option separately. Other penalties, supply limits or demand-price relationships require a revised model. See [MIT's single-period inventory notes](https://ocw.mit.edu/courses/esd-260j-logistics-systems-fall-2006/755a26f6aaebae8928294146a2484cd4_lect14.pdf).

When teaching this decision, show expected profit over a meaningful range of quantities and mark the benchmark, feasible integer choice and risk-constrained recommendation. Three arbitrary options cannot establish the best order. Match the benchmark to the implemented demand distribution, including truncation or rounding; distinguish analytical expectations from Monte Carlo estimates. Reuse demand draws across quantities for a fair simulated comparison.

Choose an illustrative default where an agreed downside constraint changes the recommendation, then retain nonbinding and no-feasible-choice cases. Do not tune outcomes after seeing a lucky seed. Lead with estimated loss probability and a histogram or clear downside summary; explain any conservative uncertainty bound in method details. If the bound controls the recommendation, state that plainly beside it. Keep one primary comparison with details on demand rather than duplicating the same numbers in cards, charts and tables.

## Process capacity and elapsed time

Separate work per visit from expected work per arriving request. For a stage visited by 30% of requests, 25 minutes per visit contributes 7.5 minutes per request; label both the visit share and units. Use expected visit counts for repeated visits, and document routing/concurrency assumptions rather than treating every graph as a serial chain.

Compute offered workload and capacity in the same time period. If arriving work exceeds a team's available capacity, name that team and show the overload before a nominal time summary. A weighted sum of entered touch/wait constants is a *scenario time excluding congestion*, not a sustainable turnaround forecast. Keep it as a clearly subordinate diagnostic if useful; do not headline it as a feasible elapsed time. Do not relabel the arithmetic itself as infinity.

If the agreed model includes queueing, specify its arrival/service assumptions and validity range, and verify the selected approximation independently. A steady-state queue with sustained arrivals above service capacity has no finite stable waiting-time result; equality does not justify a universal formula either. A finite-horizon backlog model can still report bounded elapsed observations with its horizon and initial backlog stated. Do not invent a utilization-to-wait formula merely to make the diagram responsive. See [MIT's service-operations notes](https://ocw.mit.edu/courses/15-768-management-of-services-concepts-design-and-delivery-fall-2010/eadc63624af3de30d642f9463a1ed612_MIT15_768F10_lec09-10.pdf) for the assumptions behind standard queueing approximations.

Keep an ordinary, readable step list with all essential edits available outside the graph. It is the primary narrow-screen view when graph labels would shrink below readable size. The edit panel must remain fully reachable at the viewport sizes supported; avoid clipping it inside the fixed-height canvas.

## Roadmaps, resources and milestones

A dependency schedule answers when tasks can occur under precedence rules. Resource feasibility additionally needs assigned people/teams, availability and workload over time. When the brief asks for both, model both: show overload periods and affected tasks alongside the dependency dates. Do not silently claim automatic leveling or optimization. A compact capacity check is enough when that meets the brief, but omitting resources is not.

Represent milestones as named zero-duration events with defined dependency semantics, not ordinary tasks padded to one day for the chart. Show the promised date as a labeled chart marker and explain any launch variance. Use meaningful task names on bars, with full labels available without cross-referencing IDs. Choose a useful initial date range that covers the plan and commitment; preserve zoom/navigation for longer plans. Use one human-readable date style across authored labels, while retaining canonical date-only values for storage and native date controls. Describe native picker locale separately if it differs.

Verify an independently derived dependency delay, a resource conflict with unchanged precedence dates, a milestone and a recovery. Use explicit messages for loading a scenario versus restoring the baseline. Imports and exports should have equally legible controls.

## Market ranking and sensitivity

A weighted score needs stated direction, scaling, units, missing-value behavior and eligibility gates. Distinguish changes caused by normalized weights, underlying metrics and gates. After a change, compare previous/current ranks and explain material moves using actual metric contributions; “screen applied” is not an explanation. If the app promises sensitivity, hold other assumptions fixed and expose where the leader changes over the chosen weight range. Label a sampled sweep as approximate, including ties and ineligible markets.

Use a legend whose bins distinguish the observed comparison without overstating small differences. For ordered scores, use a sequential palette with a meaningful light-to-dark order from approved colors; keep no-data and ineligible states separate. Preserve exact scores and accessible rankings alongside the map. Show shortlist controls close to the comparisons; use a compact invitation or clearly labeled initial selections rather than a large empty panel. Omit counts that do not help the decision.

If invented commercial attributes on real geography would imply empirical recommendations, prefer fictional regions with plausible local geometry when geographic realism is not required. Otherwise make the separation between real boundaries and synthetic measures obvious in the map's immediate context, not only a footer. Do not manufacture a real-market conclusion.

## SQL learning explorers

Make starter queries a learning path: inspect one table, filter/sort, aggregate, then join and confront duplicate-counting. Explain each question and expected units without making raw storage types the headline. A schema browser should be useful from the editor; accessible insert-name controls may help. Insert controlled quoted identifiers, not executable snippets derived from imported labels.

When the brief asks for substantial exploration, open on the representative dataset or provide an unmistakable choice with row counts. Keep the small hand-check case available as a verification exercise. Label monetary units explicitly in both results and charts. A known `_cents` result may have a formatted dollar display while preserving its exact integer value; arbitrary query aliases must not trigger guessed currency conversion. Explain raw types and storage units in schema/method details. Preserve DECIMAL/BigInt precision and export semantics.

## Resource allocation and capacity value

For an allocation decision, lead with the feasible production mix, objective and limiting resources. Units per batch belong beside the relevant input/output, not in place of the decision. Explain statuses in business terms, such as “can make more within these limits” or “limited by expected sales,” without hiding mathematical definitions in method notes.

When the question includes additional capacity, provide deliberate increments with one-action re-solves. Compare the new optimum with the original under otherwise unchanged assumptions and report the objective gain, changed mix and newly binding constraints. If either solve is time-limited, label the comparison provisional and retain its bounds/status. Distinguish gross contribution gain from net benefit after buying capacity. Zero slack alone does not establish capacity value. For integer problems, the gain for an increment is a finite scenario result, not a shadow price valid for all increments. LP dual values, if used, need their model, units and validity range stated.

Teach integrality with a default or prominent lesson where the continuous relaxation and integer optimum differ; include the zero-gap case as an honest alternate. Do not pad the main view with a meaningless rounding comparison when they coincide. A two-variable teaching case should show its feasible region, objective direction, continuous solution and feasible integer choices. Remove inactive third-product clutter or explicitly label a projection and fixed remaining variables. Verify chart geometry against the actual inequalities; never present a 2D projection as a complete higher-dimensional feasible region.

## Analytical presentations

Match the opening audience and stakes. A board-level launch recommendation needs a consequential scoped decision, alternatives, economics, risk and a requested action. Do not shrink it into a one-day classroom sale without an explicit change to the brief. Synthetic scale is acceptable; invented evidence of real demand is not.

Build a short decision story with charts that support its claims and an accessible appendix for model equations, inputs, units, sources, sensitivity and limitations. The appendix may be reachable on demand without interrupting the main sequence. Choose multiple distinct charts only where they serve distinct questions rather than repeating one result. Cheap local calculations should update valid assumptions live during discussion; keep incomplete input and last-valid results visibly distinct. Explain an atomic Apply action only when a meaningful combined scenario or expensive run needs it.

Provide a visible presentation/full-screen control with an accessible fallback if the browser denies fullscreen, plus an obvious exit. Verify its keyboard/focus behavior and chart resize. Presenter tools must remain within the self-contained configuration. Preserve readable phone views even if the preferred meeting display is wide.
