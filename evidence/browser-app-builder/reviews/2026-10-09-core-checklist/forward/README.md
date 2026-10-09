# Forward planning exercises — 2026-10-09

Three fresh requests were exercised through the current Browser App Builder Plan workflow. These are **simulated conversations and proposed plans**, not real student approvals, application builds or successful runtime evaluations. Only this `forward/` folder was authored by the exercise agent.

| Request | Outputs | Principal independently calculated decision |
| --- | --- | --- |
| A: approval process | [PLAN](request-a/PLAN.md), [simulated conversation](request-a/conversation.md), [decisions](request-a/DECISIONS.md) | Finance requires 3,600 min/week against 3,150 capacity. The 471.5-minute input sum remains a congestion-excluding diagnostic. Cutting Finance touch to 20 min gives 2,880 min/week and changes the capacity status. |
| B: seasonal ordering | [PLAN](request-b/PLAN.md), [simulated conversation](request-b/conversation.md), [decisions](request-b/DECISIONS.md) | Given explicitly simulated approval of an $8,000 avoidable seasonal cost and 15% loss cap, the exact rounded-demand model selects 460 units versus the 560-unit unconstrained batch. |
| C: board launch briefing | [PLAN](request-c/PLAN.md), [simulated conversation](request-c/conversation.md), [decisions](request-c/DECISIONS.md) | A three-year full launch has $1.860m weighted NPV versus $1.138m limited. A 70% demand multiplier changes the recommendation to limited launch and violates the full-launch downside floor. |

Each plan retains its opening request, describes coverage/explicit deferrals, states model formulas/units/invalid states, records selected skill IDs and build mode, and includes default/counterfactual/boundary and keyboard/narrow/presentation checks. Main audiences and decision scales were kept intact.

## Work actually performed

- Read the plugin's Plan skill, shared workflow, library-selection guide, managed-build guide, library inventory and the relevant process/inventory/analytical-presentation model guidance.
- Read selected recipes: React Flow for A; ECharts, jStat and seedrandom for B; reveal.js and ECharts for C. Library choices and pinned inventory versions are recorded in each plan, without installing packages.
- Derived numerical expectations using Python standard-library arithmetic and NormalDist. Read the MIT single-period inventory notes linked by the plugin to cross-check the critical-ratio context; the rounded-demand finite sum and numeric cases are independent derivations.
- Ran [reference-calculations.py](reference-calculations.py), saving actual output in [reference-results.json](reference-results.json). Command from repository root: `python3 evidence/browser-app-builder/reviews/2026-10-09-core-checklist/forward/reference-calculations.py`. It prints the JSON record and asserts meaningful scenario/boundary results; it does not import application code.
- Inspected the saved output against plan figures and corrected the two failed checks recorded below. Exact workload/time, inventory means/probabilities/recommendations, launch NPV tables, counterfactuals and displayed cash components now match the saved reference output to their stated display precision.

The review checklist and current ExecPlan were not consulted by this forward agent. Selected recipe instructions and decision-model guidance were read because the Plan workflow explicitly directs their use. The exercise did not modify the plugin.

## Failed checks preserved

| Finding | Original incorrect plan statement | Independent evidence | Correction/status |
| --- | --- | --- | --- |
| B hand-fixture arithmetic, caught during coordinator review and exercise arithmetic review | Profits `[-13060,-2560,3040,3040]` had mean −$1,135. | Sum is −$9,540; dividing by four gives −$2,385. Saved output: `inventory.hand_fixture`. | PLAN corrected to −$2,385; reference script asserts that value. Earlier proposal was wrong; this is not recorded as a first-pass success. |
| C cash-bridge transcription, caught by coordinator review | 40,000 units at $70 variable cost was labeled $2m, while cash flow was correctly $1.25m. | Cost is $2.8m. `$4.8m−$2.8m−$.75m=$1.25m`; minus $1.8m upfront gives −$.55m cumulative cash. Saved output: `board.base_full_year1_bridge`. | PLAN corrected to $2.8m. This checks the displayed decomposition, not merely the NPV total. |

## Limitations and remaining work

- No genuine student interview took place. Added inputs, policies and approvals are explicitly simulated; a real project must obtain real domain agreement.
- No app source, runtime install, Node/npm setup, random stream, Monte Carlo run, browser preview, accessibility test, chart rendering, production build, publication or deployment was performed. All such checks in PLAN are proposed future acceptance work.
- Python arithmetic checks planning numbers, not jStat accuracy, RNG compatibility, UI implementation or the validity of business assumptions. Numerical tolerances, seed behavior and independent deterministic cases are specified, but browser results are not observed.
- B's nontrivial upstream RNG sequence fixture is a named technical verification item still to establish before build evaluation. The documented first seedrandom draw is included; no longer sequence was invented.
- The default scenario choices satisfy the simulated domain decisions; they are not empirical evidence, optimal real-business policy or institutional endorsement. C's scenario weights are assumptions, and the simplified NPV model intentionally omits major real investment factors agreed in the simulated interview.
- Planning uncovered no blocking plugin instruction or unavailable capability. The substantive problems encountered were the two numerical transcription mistakes above, both corrected from independently executed arithmetic. The coordinator still needs to assess these planning outcomes; this artifact does not certify the workflow.
