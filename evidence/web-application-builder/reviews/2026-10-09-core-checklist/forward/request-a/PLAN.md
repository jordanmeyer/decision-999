# Approval process capacity explorer — proposed PLAN

Status: planning-only forward exercise, 2026-10-09. Agreement is **simulated**, as recorded in conversation.md and DECISIONS.md. Nothing here claims real student approval or observed app behavior.

## Opening brief and useful scope

“I want an interactive approval-process model for 480 weekly requests. Finance sees 30% and needs25minutes each visit; Finance has3150minutes/week. Other entered touch and wait times make the average471.5minutes. Let me edit the process and see how we could speed it up.”

The intended users are an operations manager and MBA students deciding which staffing, routing or work changes relieve an approval bottleneck. The smallest useful version models exclusive paths through an acyclic process, aggregates shared team workload, and compares an edited scenario with the baseline. Learning objective: distinguish work per visit, work per arriving request, capacity feasibility and entered elapsed-time assumptions.

| Requested capability | Planned behavior and acceptance |
| --- | --- |
| 480 arrivals, 30% Finance visits, 25 minutes/visit, 3,150 Finance minutes/week | Preserve first-load inputs. Show 144 Finance visits, 3,600 workload, 450-minute overload and 114.29% utilization. |
| Average of entered times is 471.5 minutes | Reproduce that weighted sum. Label it “Scenario time excluding congestion”; show overload before it and never call it sustainable turnaround or infinity. |
| Edit the process | Add/delete/rename/reorder steps; connect/disconnect exclusive routes; edit routing, team, touch/wait and team capacity in diagram and ordinary controls. Reject incomplete/nonterminating/cyclic routes. |
| See how to speed it up | Compare baseline/current capacity and entered-time totals; identify which changed inputs cause the difference. Include a one-action 20-minute Finance example. |
| A richer forecast | Student explicitly defers queueing, parallel work and repeated visits; the current inputs cannot support those results. No implicit promise of queue prediction. |

## Inputs, origins and model

All data is public synthetic teaching data. Finance inputs and total originate in the opening request; other rows were proposed by the planner and explicitly accepted in the simulated conversation. No actual employer process is represented. New labels/values belong to the app author; no institutional marks or endorsement claims.

| Stage / team | Expected visits per arrival | Touch min/visit | Entered wait min/visit | Team capacity min/week |
| --- | ---: | ---: | ---: | ---: |
| Intake / Intake | 1 | 8 | 60 | 6,000 |
| Manager review / Manager | 1 | 14 | 240 | 9,000 |
| Finance review / Finance | 0.30 | 25 | 140 | 3,150 |
| Complete request / Completion | 1 | 10 | 90 | 6,000 |

The routing is Start → Intake → Manager; Manager routes 30% to Finance and 70% to Completion; Finance → Completion → End. Every outgoing probability sums to 1. Each request follows exactly one outgoing route. No work runs in parallel. Start/end have no work or wait. Stage waiting already includes the entered waiting attributed to that stage; edges add none.

For a topological traversal, `v(start)=1` and `v(j)=sum(v(i) × routeShare(i,j))`. A connected, terminating exclusive-route DAG makes this the expected visits per arrival; no stage can repeat. A join adds arrival shares and does not synchronize parallel work. Team work per arriving request is `w(team)=sum(v(stage) × touch(stage))` for stages assigned to that team. Team offered work is `arrivals/week × w(team)`. Team utilization is work/capacity. Unused capacity is capacity−work, so overload is its negative when below zero. Capacity belongs to the team, never to each stage copy.

At current routing, the capacity-bound maximum arrivals is `min(capacity(team)/w(team))` over teams with positive work. It is an average-work capacity bound, not a queue stability or service-level guarantee. If no team has positive work, display “No modeled capacity limit” rather than divide by zero.

Scenario time excluding congestion is `sum(v(stage) × (touch + entered wait))` in minutes/arriving request. It is a weighted mean across exclusive paths. Show touch and entered wait subtotals as explanation. Never generate waiting from utilization. Work > capacity means offered work cannot be sustained with these resources. Equality means no headroom; work < capacity is a necessary capacity check, not proof of a turnaround forecast.

Arrivals are nonnegative whole requests/week. Minutes are finite nonnegative decimals. Capacity can be zero: positive assigned work means “No capacity,” utilization is shown as a textual unavailable ratio, and its arrival limit is zero; zero work plus zero capacity means no assigned workload, not 0/0. Routing shares are finite 0–100%, with an outgoing total accepted within 1e-8 of 100% for floating-point arithmetic; do not silently normalize incorrect user totals. Validate one start/end, reachable stages, an end path from every active stage, exclusive semantics and no cycles. Deleting a team with assigned stages requires reassigning those stages first; no silent capacity duplication. Currency and calendar/business-hour conversion are outside the model. Keep full precision internally; display time/work to one decimal, utilization to two, and maximum arrivals to one decimal plus a floor to whole requests where relevant.

## Independent expected cases

The shared ../reference-calculations.py uses standard-library arithmetic independently of any future app. It is a derivation aid, not evidence of an app test.

- First load: visits 144/week; Finance work `480 × .3 × 25 = 3,600`; overload 450; utilization `3,600/3,150 = 114.285714%`; capacity bound `3,150/(.3×25)=420` requests/week. Other team utilization is 64%, 74.666667% and 80%, providing real variation.
- Entered time: `68 + 254 + .3×165 + 100 = 471.5` minutes, comprising 39.5 touch + 432 entered wait. This number remains finite in the overload case and is subordinate to the capacity warning.
- Meaningful counterfactual: Finance touch 20 minutes gives work 2,880, headroom 270, utilization 91.428571%, whole-request capacity bound 525 and time 470 minutes. The capacity status changes even though entered time falls only 1.5 minutes.
- Equality: Finance touch 21.875 gives exactly 3,150 workload and 100% utilization. Show no headroom and no promised stable wait.
- Misleading improvement: reduce Finance entered wait 140→0. Scenario time falls by 42 to 429.5 minutes; Finance still needs 3,600 and remains overloaded.
- Shared resource: add a mandatory 5-minute Finance stage. Finance work per arrival becomes 12.5 and weekly workload 6,000, using the one 3,150 capacity value.
- Routing: remove the Finance route and send 100% through bypass. Finance work is zero and time is 422 minutes. A 30%/60% split is invalid and must not produce a fresh result. A Finance→Manager cycle is invalid. Zero arrivals produces zero workloads; entered times remain assumptions, not observed turnaround.

Arithmetic acceptance tolerance is 1e-8 for raw finite calculations, with display rounding checked separately.

## Interaction and design

Valid scalar changes recompute immediately. Incomplete or invalid fields are identified inline and associated with their controls; keep last-valid results visibly labeled as such and do not pretend a draft graph has been applied. Graph structure edits commit as one valid graph operation; an incomplete connection remains a draft until its routing totals and paths are valid. Baseline is immutable; “Restore baseline” replaces the scenario and explains that action. No persistence is needed in this version.

On desktop show the capacity summary, editable diagram, and ordinary step/routing/team editors. On narrow screens make the step list primary. Every essential action, including connection/deletion and percentage changes, must work without dragging. Editors live in normal page flow, never trapped in a fixed-height canvas. The baseline/current comparison includes text values and a short cause explanation; a chart library is unnecessary for four team rows.

Use the plugin's bundled Campus Designer direction and local EB Garamond/Open Sans; no institutional logo, endorsement or remote assets. Keep this an operations tool, with units beside inputs and warnings stated in words.

Acceptance must inspect 1,440×900 and 390×844 layouts: no clipped inputs or page-level horizontal overflow; readable labels; a reachable last editor; diagram pan/zoom without trapping the page. Keyboard can add/edit/delete/reconnect through forms, tab predictably, escape a draft edit, and restore baseline. Changes announce capacity status without moving focus. Selected nodes and status remain understandable without color. Test node/edge cleanup and diagram resize after layout changes. The actual build must record observations rather than marking these planned checks passed.

## Selected skills and handoff

- `plan-browser-app`, shared workflow, library selection and the process-capacity section of decision-models were read for this plan.
- Approved library ID `react-flow`: genuine editable nodes/routes justify `@xyflow/react@12.12.0`, with React/React DOM 19.3.0. Read `react-flow-browser-app`; use its base CSS and local adapter. Native forms handle all essential edits. No ECharts, Mantine or queue library is needed.
- Managed build; inventory toolchain is Node 22.19.0/npm 10.9.3, Vite 8.3.4 and React plugin 6.1.2. Actual local setup remains unverified and belongs in SETUP.md. Bundle dependencies/fonts/notices locally using the managed-build workflow.

Excluded by agreement: accounts, backend, live operational data, uploads, shared saving, queues, simulation of arrivals, parallel work, rework and automatic optimization. This is a manual what-if model. Publication is not authorized by this exercise.

Unresolved material model questions: none within the simulated scope. Actual student agreement, setup, build, browser/production evaluation and any publication request remain future steps. Hand off this folder's PLAN and DECISIONS to Build only after real agreement if used outside the exercise.
