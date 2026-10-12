# How Approval Studio was built

## The opening request

“I want to redesign the purchase-request approval process in a fictional company. Let me change the process diagram, edit activity times and staffing, split routine versus exceptional requests, and see which stage constrains throughput. I need an explanation of the calculations and a way to edit without dragging.”

## Planning and model

The [actual simulated planning exchanges](PLANNING-CONVERSATION.md) selected mutually exclusive forward routes, fixed touch and wait inputs, and daily productive team capacity. They are teaching records, not a real student endorsement. The [plan](PLAN.md) and [decisions](DECISIONS.md) define the formulas and JSON boundaries.

## Why the revision matters

The October 9 review found that 471.5 minutes appeared as a turnaround result while Finance was at 114.3% load. The owner authorized the revised guidance: name the bottleneck first, label the arithmetic nominal time excluding congestion, separate per-visit and weighted time, and make every edit reachable. Changing procurement from 30% to 10% saves 101 nominal minutes while Finance still needs 480 minutes/day against 420 available. More capacity and shorter routes answer different questions.

## Recipes and implementation

Browser App Builder Build, Evaluate, Deploy and React Flow guidance informed the workflow. Campus Designer supplies unchanged navy/royal colors and local OFL EB Garamond/Open Sans fonts without institutional marks or affiliation. React Flow 12.12.0 draws the process; React 19.3.0 manages the UI. Plain JavaScript owns validation and calculations independently. No runtime service or remote font is used.

## Evidence and limits

[Evaluation rounds](EVALUATION.md) and [independent reviews](REVIEW.md) retain prior failures and tested commits. [Deployment](DEPLOYMENT.md) distinguishes what has actually gone live. New revision checks are added after they run, never inferred from implementation. This is an exclusive-routing workload model: no parallel work, rework, queueing, staffing optimization or completion forecast.
