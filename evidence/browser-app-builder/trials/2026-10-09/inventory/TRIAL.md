# Fresh inventory trial — simulated student conversation

This is a simulated student trial, not real student feedback or adoption. Frozen plugin commit3966d48. Built from an empty folder; only packaged starter/theme/recipes used, no previous evidence apps or trials inspected.

## Exact initial request

'Help me build a small inventory simulation. I want to see daily demand, stock remaining, unmet demand and replenishment over a month, and compare inventory policies. I need to rerun the same random scenario when discussing results with classmates, and inspect daily results rather than trust only a summary.'

## Exact planning questions

Inventory planning questions (simulation; not agreement yet): 1) Should unmet demand be lost sales or backorders, and should replenishment arrive before demand each day? 2) Which two policies should classmates compare: continuous daily reorder point + fixed quantity versus weekly order-up-to, with what default starting stock, lead time, demand range, and reorder/target levels? Suggested first version: 30 days, integer uniform daily demand 0–12 units, initial 35, two-day lead, reorder point 15 / quantity 30 vs review every 7 days / target 60. 3) Is the decision objective service level versus average end-of-day stock (no costs), and what misleading interpretation should the app explicitly warn against? 4) Is a shared seed with both policies receiving exactly the same daily demand, an inspectable daily table, and CSV download sufficient for class discussion?

## Exact simulated replies

Simulated student replies: 1) Lost sales, not backorders. Scheduled arrivals occur at start of day before demand. Orders placed at end of day d arrive at start of day d+L, with L restricted to positive whole days (default2). 2) Agree to your suggested 30-day defaults and policies. Daily reorder policy: after demand, if inventory position (on-hand plus outstanding orders) is at/below15, order30. Weekly policy: review at end of days7,14,21,28 and order max(0,60−inventory position). 3) Compare fulfilled-demand percentage and mean end-of-day stock; no costs or claim of optimality. Say uniform independent demand is a simplifying assumption, not a demand forecast. Define zero total demand as 100% fill rate with 'no demand' explanation. 4) Yes, exact same pre-generated demand sequence for both policies from shared seed, daily table and CSV download. Let me choose starting stock, horizon, demand min/max and policy levels within practical documented bounds. Include fixed-demand min=max for deterministic checks. Independent checks: start10, no arrivals, demand3 => stock7/unmet0; demand12=>stock0/unmet2. With start0 and no pending orders, demand0 and reorder quantity5/lead2, endday1 order5, day2stock0, startday3 receives5 (account for any later orders separately). Record these answers and the plan is agreed; proceed.

## Files actually read

Under frozen plugin `plugins/browser-app-builder/`: skills/{setup,plan,build,evaluate,deploy,seedrandom,echarts}-browser-app/SKILL.md; skills/campus-designer/SKILL.md; skills/campus-designer/references/{identity,color,typography,web,review}.md; references/{workflow,library-selection,managed-build,evaluation-freshness}.md; references/libraries.json; managed-starter package/config/source files, pages-managed.yml; ECharts/tokens theme adapters. Official seedrandom README (documented draws) and ECharts chart-size documentation were consulted.

## Selection before build

Managed mode: seedrandom3.0.5 for explicit reproducible local streams; ECharts6.1.0 for comparing time trajectories. Native table for 1–90 daily rows. Declined Tabulator (small noneditable table), jStat (uniform integer sampling), PapaParse (no import), Arquero (small simple aggregates), React/Mantine (native form), Motion (no animation needed), diagram/timeline/slide libraries (different tasks). No library was added solely to demonstrate use.

## Final simulated review

Coordinator independently exercised production four-day fixed-demand case through UI. Daily ledger exactly[7,4,1,3], ordersday2/day4=5; weekly[7,4,1,0], day4unmet2. Summary100.0%/83.3%, means3.8/3.0 display (3.75 rounded) and pending5/0. Inspected warning/error logs empty. Saved coordinator evidence separately. Simulated student review accepts agreed assumptions/limitations for local handoff only. No publication authorization.
