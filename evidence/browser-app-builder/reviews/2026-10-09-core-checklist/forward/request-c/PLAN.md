# Product launch board briefing — proposed PLAN

Status: planning-only forward exercise, 2026-10-09. All student agreement is **simulated**, recorded in conversation.md and DECISIONS.md. These are invented teaching assumptions, not real market findings or observed app behavior.

## Opening brief and purpose

“I need an interactive board presentation recommending a new product launch. Show launch economics and market scenarios, include multiple useful charts and an appendix with the model, and let directors change assumptions during discussion. Public synthetic assumptions only.”

The users are fictional company directors choosing a full launch, limited launch or deferral of a fictional commercial product. The presentation recommends an explicit three-year investment alternative and states the authorization requested. Learning objective: weigh expected value, modeled downside and capacity before approving a launch, and observe when a changed assumption reverses the decision. This remains a board-level decision story; it is not reduced to a one-day sale or a static chart gallery.

| Requested capability | Behavior and acceptance |
| --- | --- |
| Interactive board recommendation | Headline choice, reasons, comparison with alternatives and requested upfront/annual-fixed budget authorization all use current valid assumptions. Default recommends full launch; 70% demand recommends limited. |
| Launch economics | Show unit contribution, upfront/fixed spend, annual operating cash flow and three-year NPV, with units, timing and exclusions. Independently reconcile the economic breakdown. |
| Market scenarios | Three explicitly synthetic demand paths and weights, plus a common demand multiplier. Show capped sales and lost demand. No claim that weights came from research. |
| Multiple useful charts | Scenario NPV comparison explains risk/return; first-year cash bridge explains economics; demand versus fulfilled units/capacity over three years explains scaling constraints. Each has a distinct claim and text/table equivalent. |
| Model appendix | One-click model/inputs/units/formulas/source/limitations/sensitivity section available from every main slide and returning to the previous slide and focus. No omitted equations or hidden scope changes. |
| Directors change assumptions during discussion | Cheap calculations update immediately on valid changes without reloading, moving focus or changing slide. Incomplete/invalid drafts remain visible with last-valid status. |
| Presentation mode | Visible presentation/fullscreen control, exit, focus behavior, fullscreen-denied fallback and chart resize. Readable narrow view is retained. |
| Public synthetic only | Every slide has a concise “Synthetic scenario” cue. No employer data, logos, empirical demand claims, endorsement or remote assets. |

No consequential requested capability is deferred. The simulated student explicitly excludes taxes, working capital, financing, terminal value, strategic waiting value and later expansion of the limited launch; each exclusion is shown as a model limit, not silently set to an empirically known zero.

## Data, alternatives and decision rule

All inputs below were proposed and accepted during the simulated interview. They are public synthetic teaching content authored for this exercise, with no borrowed data rights. USD values, units/year and percentage/year labels are explicit. The product need not be assigned a real company or market identity.

Shared defaults: selling price $120/unit, variable cost $70/unit, discount rate 10% annually, demand multiplier 100%, worst-scenario NPV floor −$1,000,000. The three-year horizon is fixed for this version, with investment at time 0 and operating cash flows at each year end.

| Alternative | Upfront investment | Annual fixed operating cost | Year 1 / 2 / 3 unit capacity |
| --- | ---: | ---: | --- |
| Full launch | $1,800,000 | $750,000 | 70,000 / 70,000 / 70,000 |
| Limited launch | $900,000 | $450,000 | 20,000 / 30,000 / 30,000 |
| Defer | $0 | $0 | 0 / 0 / 0 |

| Synthetic market scenario | Weight | Year 1 raw demand | Annual growth |
| --- | ---: | ---: | ---: |
| Downside | 25% | 24,000 units | 0% |
| Base | 50% | 40,000 units | 10% |
| Upside | 25% | 60,000 units | 15% |

The limited launch stays limited for all three years; no imagined expansion benefit. Deferral has zero modeled economic cash flow rather than a claimed zero strategic value. These simplifications must accompany the comparison.

For scenario s and year `t=1,2,3`, demand is `floor(baseDemand_s × (1+growth_s)^(t−1) × multiplier + 0.5)` whole units. Sales for alternative a are `min(demand, capacity_a,t)`. Unserved demand is demand−sales and has no explicit penalty; revenue is price×sales, variable cost is unitCost×sales, and year-end operating cash flow is `(price−unitCost)×sales−annualFixedCost_a`. No inventory is carried between years: capacity bounds annual sales and costs arise only for sold units.

`NPV_a,s = −upfront_a + sum(t=1…3, cashFlow_a,s / (1+discountRate)^t)`. Scenario-weighted NPV is `sum(weight_s × NPV_a,s)`. Also show minimum scenario NPV and the sum of weights for scenarios with NPV<0, explicitly conditional on the three assumed cases. Do not call that a calibrated loss probability or a continuous risk distribution. A zero-weight scenario remains visible, and the agreed worst-scenario floor still considers it; excluding a stress case is a separate model change, not a weight trick.

Eligible alternatives have worst-scenario NPV ≥ selected floor. Recommend the eligible alternative with greatest weighted NPV, including defer. Ties choose the lower upfront investment. If none meets a positive floor, say “No alternative meets this floor” and request a policy/assumption revision; do not relabel deferral as feasible. Negative contribution margin is permitted and shown plainly; it must not cause a break-even division or a hidden positive-margin assumption. For reference, full-launch annual operating break-even at default margin is `750000/50=15000` sold units, excluding upfront investment. Do not label that full investment recovery.

The requested action names the chosen upfront investment, annual fixed budget and modeled capacity. Default: “Approve the synthetic full-launch case: $1.8m upfront and $750k annual fixed operating budget, subject to the listed assumptions and validation.” The chart/detail includes variable cost exposure; the ask must not imply the fixed budget includes all procurement. If limited is selected, update to $900k and $450k. If defer/no feasible choice, replace the ask with the appropriate decision, not a stale launch approval.

Supported inputs are finite: nonnegative price, unit cost, upfront/fixed costs, base demand, capacities and multiplier; whole-unit capacities/base demand; growth ≥−100%; discount rate ≥0; each weight 0–100% with total 100%; downside floor may be positive or negative. Zero contribution is valid. Keep raw monetary calculations unrounded; round demand once, at each scenario/year after the full formula. Display USD in clearly labeled million/thousand units on charts and exact dollars in appendix tables; percentage changes use explicit percent labels. Invalid/blank/nonfinite fields do not become zero. Do not normalize a 90% or 110% weight total silently.

## Independent decision cases

../reference-calculations.py computes these by direct standard-library arithmetic independently of any app library. NPV acceptance tolerance is $0.01; demand/sales counts are exact integers. Display rounding is a separate check.

| Alternative | Downside NPV | Base NPV | Upside NPV | Weighted NPV |
| --- | ---: | ---: | ---: | ---: |
| Full, default | −$680,916.604057 | $1,789,406.461307 | $4,542,975.206612 | $1,860,217.881292 |
| Limited, default | $783,320.811420 | $1,256,649.135988 | $1,256,649.135988 | $1,138,317.054846 |
| Defer | $0 | $0 | $0 | $0 |

- First-load full launch passes the −$1m floor. Its expected advantage over limited is $721,900.826446, while its worst case is worse and the weighted negative-NPV share is 25% versus 0%. Recommendation must acknowledge that tradeoff.
- Full/base demand is 40,000 / 44,000 / 48,400 units. Annual operating cash flow is $1.25m / $1.45m / $1.67m; discounting and subtracting $1.8m gives the base NPV above.
- Full/base year-1 bridge: revenue $4.8m − variable cost $2.8m − fixed cost $.75m = operating cash flow $1.25m; subtract time-0 investment $1.8m gives undiscounted cumulative cash through year 1 of −$.55m. Show the timing difference; that bridge total is not year-1 NPV.
- Full/upside year-3 demand is 79,350 with 70,000 capacity, so fulfilled units=70,000 and lost demand=9,350. The capacity chart must show this binding limit. Limited/base demand growth does not increase its year-2/3 sold units beyond 30,000; this counterexample prevents an automatic “growth raises all profits” lesson.
- Meaningful counterfactual, multiplier=70%: full has weighted NPV $264,077.761082 and worst NPV −$1,576,183.320811, failing the floor. Limited has weighted NPV $959,954.921112 and worst NPV $69,872.276484, so it is recommended. Full/base units=28,000/30,800/33,880; limited/base sales=20,000/30,000/30,000. All recommendation text, charts and action must agree.
- Tighten the floor to $0 with other defaults: full fails, limited remains feasible and is selected. Set all demand to zero: both launches lose their investment and fixed spend; defer is selected under the original floor.
- Set discount=0: NPV is undiscounted operating cash sum minus upfront, so full/base is $2,570,000. Set price=unitCost: full/base NPV is `−1800000−750000×(1/1.1+1/1.1²+1/1.1³)`, about −$3,665,138.99; no divide-by-zero or invented break-even.
- Set weights to 25/40/25: show the 90% total error and last-valid results. Zero-weight stress case stays in worst-case evaluation. A positive floor greater than every alternative's worst case returns no feasible alternative instead of a fabricated recommendation.

## Main story, appendix and interaction

A short five-slide main sequence: (1) decision and requested authorization, (2) scenario NPV comparison for all alternatives, (3) selected alternative's first-year economics bridge, (4) three-year demand/sales/capacity with explicit constraints, (5) risks, recommendation conditions and requested action. Avoid duplicating the same metric chart under different titles. The economics slide has a scenario selector; changing it changes that chart and its labels without silently redefining the weighted recommendation.

Persistent visible assumptions control opens a compact panel containing economics, demand/scenario weights, alternative costs/capacity, discount and policy floor. Every complete valid input updates cheap deterministic calculations immediately. While a field is blank/invalid or weights fail to sum, mark affected results “Last valid assumptions” and expose the invalid draft; do not replace them with zeros. No Apply button is needed. Reset baseline is explicit. No auto-save or shared saving is implied.

The appendix is reachable from every slide and includes all editable inputs and values, formulas and units, timing/rounding, independently derived checks, data origin, the sensitivity/counterfactual cases above, and model exclusions. It returns to the same slide and triggering control. Use accessible in-page sections or an ordinary drawer with correct focus behavior, not remote presenter services. A print or downloadable deck is not in this initial brief and need not be invented.

Presentation mode has a visible entry button, fullscreen request, visible exit button and Escape. If browser fullscreen is denied/unavailable, embedded presentation remains usable and a plain message explains the fallback. Focus the deck deliberately on entry; restore the entry control on exit. While the deck itself owns DOM focus, arrows navigate slides. Focused number fields retain arrow step behavior and tables retain scrolling; Reveal must not intercept those keys. Recompute/announce current-slide contents through the documented public method without navigating away or losing input focus. Resize charts after slide entry, pane expansion and fullscreen transitions; dispose observers/charts/deck on teardown.

Use bundled Campus Designer direction, local EB Garamond/Open Sans and locally bundled chart/presentation themes; no institutional marks or affiliation. On 1,440×900 meeting view, charts and authorization are readable without a tiny scaled canvas. At 390×844, maintain unscaled text, stacked fields and readable charts/text alternatives, with ordinary vertical scrolling and no clipped appendix or fixed-height editor. Main evidence is reachable without hover. Bar axes start at zero and negative NPV has a clear zero line; colors have text/shape labels and selected/hover states preserve intended solids.

Acceptance includes keyboard-only slide/assumption/appendix/fullscreen round-trips, focused numeric arrows, invalid-to-valid editing, changing demand to 70% while on each evidence slide, labels matching every plotted value, hidden-to-visible chart resize, fullscreen refusal, narrow layout and current-slide announcement. Model and chart table values must reconcile against independent cases. These are planned checks; no browser test or visual pass is claimed.

## Selected skills, limits and handoff

Read Plan, shared workflow, selection, managed-build and analytical-presentation guidance, then approved `reveal-browser-app` and `echarts-browser-app` skills. Selected library IDs:

- `reveal`: reveal.js 6.0.2 for local interactive board slides; use the approved embedded/unscaled configuration, explicit DOM-focus keyboard condition, no remote presenter plugins or assets.
- `echarts`: echarts 6.1.0 for three analytical chart purposes; use local adapters, units, accessible tables, resize and state checks.

Managed Vite build without React, general form framework or financial package. Inventory toolchain is Node 22.19.0/npm 10.9.3 and Vite 8.3.4; actual setup remains unverified. Bundle libraries/fonts/licenses locally, retain notices and use the managed production evaluation path.

No material scope/model question remains in the simulated agreement. A real board case would require validated evidence and revised cash-flow scope, which this public synthetic exercise does not supply. Actual student agreement, Setup, Build, browser/production Evaluate and any deployment request remain outstanding. This plan neither builds nor publishes an app.
