# Seasonal order simulator — proposed PLAN

Status: planning-only forward exercise, 2026-10-09. Student agreement is **simulated**, documented in conversation.md and DECISIONS.md. No observed application results are claimed.

## Opening brief and useful scope

“Help me build a seasonal order simulator. Price45, cost21, salvage10. Demand is Normal(500,120), rounded to whole units with negatives clipped to zero. We will choose orders in batches of10. I need to balance expected profit and downside risk, with a defensible default example for an MBA class.”

MBA students choose a single seasonal order before demand is known. The useful first version compares every feasible 10-unit batch under a stated loss policy and shows simulated seasons. Learning objective: the expected-profit order and a risk-constrained order can differ, and neither a rounded continuous answer nor a favorable random seed proves the right choice.

| Consequential request | Behavior and check |
| --- | --- |
| Given economics and Normal(500,120) demand | First load preserves all given inputs. 120 means standard deviation. Demand is rounded and clipped, with a point mass at zero. |
| Orders in batches of 10 | Compare `Q ∈ {0,10,…,1000}`; no continuous quantity becomes a feasible recommendation. Mark the exact integer and feasible batch optima distinctly. |
| Expected profit and downside risk | Maximize model expected profit subject to model probability of negative profit ≤ selected cap. Show profit sacrificed relative to the unconstrained batch. |
| Defensible teaching default | Explicitly added synthetic $8,000 avoidable setup cost, 1,000-unit ceiling and 15% loss cap make the constraint bind. The default seed is not tuned. |
| Simulator | Reproducible Monte Carlo seasons, a selected-quantity profit histogram and estimated loss probability; the same demands serve all quantities. Compare simulation with independently calculated expectations. |
| Honest alternate outcomes | 25% cap is nonbinding; 5% leaves no feasible positive batch; the zero-fixed-cost preset shows a naturally low loss probability. No hidden deferrals of the requested decision. |

All assumptions are synthetic and author-provided. None represents an observed retailer, market or university result. Currency is illustrative USD per season/unit as labeled. No private records, import, backend, API, accounts, trading/purchasing action or publication are included.

## Model and units

Editable inputs: price `p=45 USD/unit`, unit procurement cost `c=21`, salvage `s=10`, pre-rounding demand mean `mu=500 units`, standard deviation `sigma=120 units`, avoidable fixed season cost `F=8000 USD`, maximum order `Qmax=1000 units`, risk cap `r=.15`. Batch size is the agreed constant 10; no extra batch-size option. `F` is incurred once if and only if `Q>0`. No stockout penalty, initial inventory, demand response to price, multiple periods, financing, tax or disposal constraints are modeled.

For a raw normal draw `X`, realized integer demand is `D=max(0,floor(X+0.5))`. For nonnegative integer `k` and positive sigma, `P(D≤k)=Phi((k+0.5−mu)/sigma)`; for `k<0`, it is zero. Thus `P(D=0)=Phi((0.5−mu)/sigma)`, approximately 0.0000157391 at the default. This folds all negative draws into zero; it is not a truncated normal conditioned on being positive. For sigma zero, demand is the single value `max(0,floor(mu+0.5))` and no inverse-normal call is needed.

At `Q>0`: sales `min(D,Q)`, leftovers `max(Q−D,0)`, unmet demand `max(D−Q,0)`, and profit `pi=p×sales+s×leftovers−c×Q−F`. At `Q=0`, profit is exactly zero because all cost is avoided. Loss means `pi<0` strictly; break-even is not a loss. Salvage applies to every leftover unit at the stated fixed rate.

Exact expected profit for positive integer Q is `(p−c)×Q − (p−s)×sum(k=0…Q−1, P(D≤k)) − F`. This finite-CDF sum exactly matches rounding and clipping without a normal-tail cutoff. Exact loss probability is 1 if maximum possible profit `(p−c)Q−F` is negative. Otherwise loss occurs for integer demands `D < ((c−s)Q+F)/(p−s)`, so evaluate the demand CDF at `ceil(threshold)−1`; negative cutoffs have probability zero. Implement strict inequality carefully at integral thresholds. `Q=0` has loss probability zero.

The familiar continuous critical fractile `(p−c)/(p−s)=24/35≈.685714286` implies 558.048626 units for an unclipped continuous normal. Display that only in model details. For the actual rounded/clipped distribution, the unconstrained whole-unit optimum is the smallest nonnegative integer Q with `P(D≤Q)≥24/35`, which is 558. Determine the 10-unit optimum by evaluating the actual feasible batches, not blindly rounding a quantile. Fixed F subtracts the same amount from every positive quantity; it does not shift that positive-quantity optimum. The avoidable cost does require a separate no-order comparison.

Recommendation: choose the feasible candidate with the largest exact expectation, including Q=0, under the exact loss constraint; tie goes to the smaller Q. If none of the positive batches passes, say “No positive order meets the loss limit; no order remains feasible.” If positive batches pass but all have nonpositive expected profit, explain that no order dominates/ties them. A zero result is not a failed calculation. Never call a feasible order universally safe: the cap is conditional on these synthetic assumptions.

Supported input domain: finite `p>c>s≥0`, `mu≥0`, `sigma≥0`, `F≥0`, `r` between 0 and 1 inclusive, and a positive whole Qmax divisible by 10. Keep values full precision; dollars display to cents, order units as integers, probabilities as percentages to two decimals with extra precision in details near the constraint. Blank, nonfinite, negative or out-of-domain inputs show field-specific errors; never coerce blank to zero or reorder p/c/s. Explain that other economic regimes need a revised teaching model.

## Independent numerical cases

../reference-calculations.py derives these with Python's standard-library NormalDist, separately from jStat and the eventual app. The critical-ratio reasoning is consistent with [MIT's Single Period Inventory Models, slides 10 and 17–19](https://ocw.mit.edu/courses/esd-260j-logistics-systems-fall-2006/755a26f6aaebae8928294146a2484cd4_lect14.pdf); the rounded-demand CDF sum and all numbers below are independently derived for this exercise.

| Case | Independent expected answer |
| --- | --- |
| Default, Q=550 / 560 / 570 | Expected profit $2,506.081619 / $2,509.272891 / $2,502.200024. Thus 560 is best among neighboring batches; enumeration verifies all 101 candidates. |
| Default 15% cap | Recommend 460: expected profit $1,972.227060, loss 14.5903309%. Q=470 has loss 15.1700682%, so is ineligible. Profit sacrifice vs 560 is $537.045831. |
| Unconstrained batch Q=560 | Loss probability 21.3064457%, which exceeds 15%. This is a binding constraint, not a cosmetically different chart. |
| Nonbinding: r=25% | Recommend 560 with the same $2,509.272891 expected profit. |
| No positive feasible: r=5% | No positive quantity passes; minimum positive-batch loss is at Q=340, about 8.521346%. Recommend no order, expected profit/loss 0. |
| No fixed cost, r=15% | Recommend 560, expected profit $10,509.272891, loss .3423797%; risk constraint is nonbinding. |
| Deterministic D=500 | At Q=460, sales=460, leftovers=0, profit=$3,040 and no losses. At Q=560, sales=500, leftovers=60, profit=$3,340 and no losses. Whole feasible optimum is Q=500, profit=$4,000. |
| Zero-demand deterministic case | Any positive order loses `11×Q+8000`; no order is preferred. No NaN histogram bounds. |
| Hand fixture D={0,300,500,800}, Q=460 | Profits {$−13,060, $−2,560, $3,040, $3,040}; mean $−2,385; 50% strictly negative; sales+leftovers always 460. |
| Strict zero-profit boundary | At F=0, Q=350, D=110, profit=0; D=109 gives −$35. Only the latter counts as a loss. |

Exact expected-dollar checks use $0.00001 absolute tolerance; exact probability checks 1e-8 absolute probability. Display checks use rounding rather than integer truncation.

## Randomness, interaction and visible evidence

Use local `seedrandom('2026-10-09-season-1')`, chosen before generating results. Sample 200,000 independent uniforms via `rng.double()` and inverse standard-normal CDF using jStat, then apply mu/sigma, rounding and clipping. Redraw a uniform only if it is exactly zero to avoid an infinite inverse; no rejection of negative demand. Never replace global Math.random. A run starts a fresh local generator; seed and sampling method are visible. Reuse the exact same integer demand vector for all quantities and all same-run comparisons; do not consume extra draws when changing selection or animation.

Exact model calculations update immediately after a valid input edit. Simulation runs separately on explicit “Run simulation,” in a native worker if needed for responsiveness. It applies one captured input/seed snapshot to curve, estimates and histogram together. While running, provide progress/cancel and retain the last complete result. After inputs change, label prior simulation “Uses previous assumptions—run again” and keep its source inputs accessible; exact and stale estimates must never appear as if they share inputs. Changing selected Q within an existing run uses that stored demand vector and needs no new seed. Restore-default resets fields and marks any mismatching simulation stale.

The primary view has one expected-profit-by-quantity curve, exact benchmark/risk-feasible markers and optional simulation estimates; a selected-quantity histogram with a labeled zero-profit boundary; and a concise estimated/model loss comparison. Put the constraint and profit sacrifice beside the recommendation. Use the full feasible quantity range; no three-arbitrary-option substitute. Provide an accessible quantity/result table and explanations as details, avoiding duplicate headline cards with identical numbers. Chart histograms show counts/percent of seasons and USD/season bins; include an explicit all-equal-output state. Demand/model details are secondary.

Randomness acceptance: same seed and inputs reproduce all draws/results exactly in the same bundled implementation; a distinct seed produces a different nontrivial vector; changing Q does not change demands. Verify the upstream documented `seedrandom('hello.')()` first draw 0.9282578795792454 and save a nontrivial upstream sequence fixture before build verification. Validate deterministic sigma=0 and the hand fixture independently of randomness. For stochastic mean at the selected quantities, compare with exact expectation within `4 × sample standard error + $1`; for loss proportion within `4 × sqrt(p_exact×(1−p_exact)/N) + 1/N`. These are stochastic diagnostic tolerances, not guaranteed bounds or a reason to search seeds. A miss prompts investigation/recording, not seed replacement. Exact analytical results govern the decision, so sampling uncertainty cannot silently change eligibility.

Use local Campus Designer direction, accessible ECharts colors and local fonts with notices. At 1,440×900 and 390×844, controls remain readable and charts reflow with text/table alternatives. Keyboard can change every assumption, select quantity, run/cancel, inspect details and reset without plot-only gestures; no result replacement moves focus. Loss/ineligible meaning has words/marks in addition to color. Check hover/selected/blurred colors, empty/stale/running/error states, chart resize and histogram totals.

## Skills, build and open work

Read Plan, shared workflow, selection, managed-build and the inventory-decision guidance, then these selected approved recipes:

- `echarts` / `echarts-browser-app`, package echarts 6.1.0: quantity evidence and downside distribution; local adapters and accessible alternatives required.
- `jstat` / `jstat-browser-app`, package jstat 1.9.6: normal CDF/inverse and deterministic statistics. It does not validate assumptions; independent CDF-sum cases do.
- `seedrandom` / `seedrandom-browser-app`, package seedrandom 3.0.5: repeatable local random stream; retain supplemental license. No global RNG modification.

Managed Vite build, no React or general table component. Inventory toolchain is Node 22.19.0/npm 10.9.3 and Vite 8.3.4; setup has not been performed. All packages, fonts, notices and runtime assets must be bundled locally. No remote scripts or services.

No material model questions remain within the simulated agreement. The nontrivial upstream RNG fixture and actual build/worker performance are technical verification work, not invented passes. Real student agreement, setup, Build and Evaluate remain outstanding. This planning exercise authorizes none of those steps automatically.
