# Batch & Balance — revised product plan

## Opening request and purpose

“I run a fictional maker's production workshop. We have limited machine time, labor and materials, and several products with different contributions and demand caps. I want the best feasible production mix, a clear explanation of binding constraints, and a way to explore new capacity. Let me see an infeasible case rather than silently changing my requirements.” The original planning conversation is simulated. The bakery translation keeps three resources and products; the 2026-10-09 user-authorized revision restores actual capacity experiments and a meaningful integrality lesson.

An operations lead chooses tomorrow's whole batches, 12 boxes each, to maximize contribution after variable costs. The first load shows the decision, current resource use, and extra-hour contribution gains. Editing assumptions clears old answers; Solve applies them together. Tiny teaching mode removes the third product from input/result/manual views and plots the exact two-product feasible region with feasible integer dots, fractional bound and integer optimum. Secondary manual/LP and model notes are disclosures. No backend or saved data.

## Model and bounds

Default capacity is480 prep/590 oven/360 packing minutes. Products breakfast/tea/celebration have per-batch use12/18/8,10/12/10,20/25/15; contribution25/22/40 USD; minimum batches4/3/2; maxima24/30/18. The original600-oven case remains a tested zero-gap alternate. Revised590 minutes makes the whole/fractional gap visible on first load.

Decision variables are nonnegative integer batches. Maximize sum(batch×contribution cents), subject to each sum(batch×minutes)≤capacity and explicit minimum/maximum product bounds. Capacity is whole0–10,000; use whole1–240; quantities whole0–100; contribution−500…500 USD with at most two decimals. Negative contribution can make commitments costly. No sequencing, spoilage, overtime prices, uncertainty, customer priority or fixed overhead. Ties may return any optimal allocation.

HiGHS1.15.3 runs in a local ES-module worker with bundled WASM. It solves integer, continuous relaxation and three integer capacity alternatives (each adds60 minutes to only one resource) after one loader initialization. Each solve has a5-second limit; main-thread deadline35 seconds covers the five solves. Returned objective, integrality and feasibility are independently checked. A time-limited result is provisional, never called optimal. Bounds above9940 skip the unsupported extra60-minute case; no clamping.

Capacity panels show new mix, additional gross contribution and newly binding resources. They compare otherwise unchanged assumptions. Costs of buying capacity are excluded. Integer capacity gains are finite scenario differences, not shadow prices per minute. One-click Add60 updates that actual capacity and re-solves, preserving a comparison with the preceding solved case. Cancel/edits terminate old workers and clear outdated results. Presets/reset fill all controls. Manual checks use the solved assumptions. Copy captures exact assumptions and limits; fractional input cents remain represented when needed.

## Known answers and teaching geometry

Independent Python enumeration: default has2,596 feasible mixes and unique5/8/16 batches, contribution$941, use460/586/360, slack20/4/0. The fractional upper bound is$946: summing oven and packing constraints gives26x+22y+40z≤950; subtracting x≥4 gives the objective≤946. The feasible point(4,43/7,622/35) attains it. Thus gap$5 is genuine.

Adding60 prep/oven/packing minutes separately yields$941/$987/$1,003 with mixes5/8/16,15/6/12,5/29/6; gross gains$0/$46/$62. The oven has4 minutes of slack initially yet a full extra hour is valuable; zero slack alone does not price capacity. Re-solving with600 oven minutes gives the original5/5/18,$955 and zero LP gap.

The two-product case has5x+4y objective,2x+y≤8,x+2y≤8,x+y≤6,0≤x,y≤8 whole, third product fixed0. Its polygon vertices are(0,0),(4,0),(8/3,8/3),(0,4),17 feasible integer points, integer optimum(3,2)/$23 and fractional bound(8/3,8/3)/$24. Rounding to(3,3) violates both first resources9>8. Draw the exact inequalities and objective line, not a projection of a three-product model. Integer dots are bounded to20 batches per axis at large edited scales, explicitly labeled.

## Design, provenance and evaluation

Use canonical local OFL-licensed EB Garamond/Open Sans, published fallback stacks and lining/tabular figures. Existing navy/royal design remains; remove arrows on solve actions, giant box-count trivia, forced headline breaks and opaque bound-status phrases. Native controls/tables, readable 320/390/1440px frames, clear disabled states. Public BUILD-STORY links actual original simulated planning, current decisions and evaluation. Preserve app/source names.

Use unchanged pinned HiGHS/Vite dependencies and notice generator. Run npm ci --cache /private/tmp/bab-npm-cache, packaged dependency check, scripts/oracles.py, browser tests on9703 and production on9704 under /bab-example-optimizer/. Check real worker/WASM, default and capacity known answers, tiny polygon, infeasible/cancel/retry/manual/copy, changed inputs/history before interactions, fonts, network observations, desktop/narrow keyboard. Commit source/PLAN before final evaluation; preserve failures and require independent review before push.
