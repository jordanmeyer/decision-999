# Fresh sales trial — simulation

Frozen plugin commit: 3966d48. No prior apps or evidence were inspected/copied. Only plugin starters/theme patterns are reused. Local build only; no actual Work routing.

## Exact simulated initial request

Help me create a sales dashboard. I want to import a local CSV of synthetic sales, filter by region or product, inspect and sort individual rows, and see revenue, cost and profit totals with a clear visual comparison. Please include bundled example data so someone can try it immediately.

## Exact focused questions

1. Who will use this and what decision should the dashboard support?
2. May I define CSV columns as region, product, quantity, unit_price, unit_cost in USD, with revenue=quantity×unit_price, cost=quantity×unit_cost, profit=revenue−cost (no tax/overhead/returns)? Should negative values be rejected and malformed imports rejected as a whole while preserving current data?
3. Is a bundled small synthetic dataset plus region/product intersection filters, sortable rows and a revenue/cost/profit chart sufficient; any key misleading interpretation to call out?

## Exact simulated answers (coordinator acting as student)

1) An MBA student reviewing synthetic regional product sales to decide what deserves closer investigation, not a claim of causal performance. 2) Agree to that exact schema, USD, nonnegative quantity/prices/costs; quantity whole units, money at most2 decimals. Reject extra precision instead of silent rounding. Reject the entire malformed import and preserve existing data. No tax/overhead/returns; label profit as contribution before overhead. 3) Yes to intersection filters, sorting, small bundled examples and a chart with text equivalent. Make empty filters explicit zero results. Call out that margin alone ignores overhead, inventory and sample differences; no causal or future-performance claims. Test HTML-like product names as literal text, quoted commas/escaped quotes, missing/extra fields and oversized files. Use practical file/row/input limits you document. Independent bundled example can be North Notebook quantity10 price20 cost12, South Pen quantity5 price30 cost18, North Notebook quantity2 price20 cost12: total390/234/156, North240/144/96; another product/region row may be added if you recompute references independently. Plan agreed after recording replies; proceed. Your library choice is yours; do not add a library to increase coverage.

## Selection before build

Selected papa-parse (papaparse 5.7.0), tabulator (tabulator-tables 6.6.1), echarts (6.1.0). CSV quoting requires a real parser; row inspection/sorting for up to 5,000 records justifies Tabulator; the visual comparison justifies ECharts. Managed Vite 8.3.4. Declined Arquero because two equality filters and three sums are simple native operations. Declined React Flow, vis-timeline, Frappe Gantt, Motion, Mantine, reveal, Mermaid, jStat and seedrandom: no graph editing, dates, animation, React, slides, diagram, statistics or randomness is needed. Selection sent to coordinator before build.

## Actual skill/reference reads

All relative to `plugin-under-test/plugins/browser-app-builder`: skills/setup-browser-app/SKILL.md, skills/plan-browser-app/SKILL.md, skills/build-browser-app/SKILL.md, skills/evaluate-browser-app/SKILL.md, skills/deploy-browser-app/SKILL.md, skills/papa-parse-browser-app/SKILL.md, skills/tabulator-browser-app/SKILL.md, skills/echarts-browser-app/SKILL.md, skills/campus-designer/SKILL.md. References: workflow.md, library-selection.md, libraries.json, managed-build.md, evaluation-freshness.md; campus-designer/references/identity.md, color.md, typography.md, web.md and review.md. Read managed starter files, selected theme adapters and ~/.codex/PLANS.md. No second designer copy or plugin modifications.

## Exact simulated evaluation review reply

Simulated student review: I accept the agreed model, explicit contribution-before-overhead meaning, import limits and documented local-only limitations. No publication authorization. Coordinator independently checked production: North totals240/144/96; North+Pen empty intersection0; keyboard reset and revenue ascending rows3,2,1; warning/error logs empty. Source URL can remain pending rather than point to wrong repository. Finish docs/freshness, retain failed chart-test round, stop own test server/tab, leave production preview running.
