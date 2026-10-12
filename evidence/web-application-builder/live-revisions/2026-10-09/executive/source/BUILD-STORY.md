# How Stillwater Coffee was built

## The original request

“I'm the COO of a fictional specialty coffee chain. I need a board-ready executive dashboard to see which stores are healthy, where contribution is slipping, and what to investigate this month. I want to compare regions and stores, examine a meaningful operating table, and walk the board through a few decisions. This is a classroom example with synthetic data.”

## Planning and choices

The [simulated planning exchange](PLANNING-CONVERSATION.md) is an actual recorded exchange between developer and coordinating agent, not a real student interview. It selected 12 mature stores, six months, store contribution excluding headquarters/taxes/financing, and labor/product-cost investigations. [PLAN.md](PLAN.md) defines the complete model, assumptions, independent reference cases and revision acceptance; [DECISIONS.md](DECISIONS.md) records changes.

The October 9 live revision puts a chart and comparison table inside each board question, adds synthetic same-store prior-year margin, makes the primary ledger a native sortable table, and loads licensed local fonts. The original Tabulator component and duplicate fallback table were removed because one accessible primary interface is clearer. No university marks or endorsement are used.

## Recipes

Browser App Builder supplied the Plan, Build, Evaluate and Deploy workflow. Mantine/React provide controlled filters and focus-aware dialogs; Apache ECharts provides the analytical views. Native HTML provides the operating ledger. Campus Designer guidance supplies published blues and locally bundled EB Garamond/Open Sans, with OFL notices. Vite bundles all runtime assets; no external service or customer data is involved.

## Evidence and limits

[EVALUATION.md](EVALUATION.md) retains failed and passing developer rounds, exact source checkpoints and observed browser results. [REVIEW.md](REVIEW.md) records independent review; [DEPLOYMENT.md](DEPLOYMENT.md) distinguishes the deployed version. A source build is not evidence of live publication. The model supports an investigation, not causal staffing or expansion conclusions. All figures and stores are synthetic.
