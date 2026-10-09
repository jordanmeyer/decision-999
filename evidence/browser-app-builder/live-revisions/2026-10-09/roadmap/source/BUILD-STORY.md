# How Launch Ledger was built

## Opening request

“We're coordinating a small product launch with work across research, design, procurement and go-to-market. I'd like an interactive roadmap that exposes dependencies, shows what a delay changes, and makes the gap between scheduled dates and actual resource feasibility clear. We need a useful initial plan, editable dates, milestones and a readable task view.”

## Actual planning records

[PLANNING-CONVERSATION.md](PLANNING-CONVERSATION.md) is the original simulated planning exchange, not a real student endorsement. It selected calendar-day dependencies and a fixed baseline but narrowed the initial implementation too far. The app owner's October9 revision request restores team capacity and true milestones. [PLAN.md](PLAN.md) and [DECISIONS.md](DECISIONS.md) define the current contract and reasons.

## The lesson

The dependency path is5+10+4+7+1=27 days, Nov2 to Nov29. The promise is Dec1. Yet Launch team needs1.3 people on Nov15–16 and1.6 on Nov17–20 against1 available. Raising capacity to1.6 clears that conflict without moving dates. Packaging+5 instead moves completion to Dec2. Dates, people and promise are different constraints. Milestones are events that use zero days and capacity.

## Recipes and implementation

Browser App Builder Build, Evaluate, Deploy and Frappe Gantt guidance shaped the workflow. Frappe Gantt1.2.2 visualizes dates in one persistent instance; plain JavaScript calculates precedence and daily resource demand independently. Safe textContent names replace empty vendor labels. Milestones render as zero-width points/diamonds, and the promised date gets a separate marker. Campus Designer informs color and local OFL EB Garamond/Open Sans typography without institutional marks or affiliation. Exact dependencies remain pinned; no runtime service or remote font is used.

## Evidence and limits

[Evaluation](EVALUATION.md) preserves actual checks and prior failed rounds; [independent review](REVIEW.md) identifies reviewed commits; [deployment](DEPLOYMENT.md) identifies what went live. Revised evidence is added only after running it. Capacity is constant by calendar day; no automated leveling, probability, holidays, cost model or safety validation is promised. Local JSON stays in memory until export.
