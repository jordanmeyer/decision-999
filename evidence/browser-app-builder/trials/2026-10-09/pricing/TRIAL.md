# Simulated pricing trial

All interview text below is simulated coordinator feedback, not real student evidence. Frozen plugin commit: 3966d48. No previous evidence apps or trial source inspected.

## Exact initial request

Help me build a pricing calculator. I want to vary price, variable unit cost, fixed costs and quantity, see the resulting profit, and know how many whole units I must sell to break even. I need currency calculations I can trust and clear explanations when break-even is impossible.

## Exact questions

1) Who will use this and what decision should it support—single-product, single-period scenario planning with a fixed quantity and no demand forecast?
2) May I use USD, nonnegative price/unit cost/fixed costs with at most two decimal places, and nonnegative whole-unit quantity; reject extra decimals rather than round silently?
3) Should break-even mean the minimum whole quantity yielding nonnegative profit, so fixed costs=0 permits 0 units even when margin is negative; positive fixed costs and zero/negative contribution should say impossible with an explanation?
4) Proposed initial example price $19.95, variable cost $7.40, fixed costs $1,000, quantity 80; assumptions exclude tax, financing, capacity and volume discounts. Where could this model most mislead your intended user?

## Exact reply

Simulated student replies: 1) Yes: MBA single-product, single-period scenario planning; quantity is my assumption, not a demand forecast. 2) Yes, USD and integer cents, nonnegative whole units. Reject extra decimal currency precision with a clear message. A practical first-version cap of $1,000,000 per monetary input and 1,000,000 units is fine; make bounds explicit. 3) Yes. With zero fixed costs and nonpositive margin, explain that zero sales breaks even, while positive sales either earn zero contribution or lose money; do not imply profitable growth. Positive fixed costs with nonpositive margin cannot break even. 4) Agree to the proposed example and exclusions. The misleading result is treating price/quantity as independent forecasts: warn that raising price may reduce demand, and this tool does not predict that. Independent reference: $19.95−$7.40=$12.55; ×80=$1,004; minus $1,000=$4; minimum whole-unit break-even 80. Include decimal edge case price .30, cost .20, fixed 100 =>1,000 units, zero profit at1,000. The plan is agreed once these replies are recorded; proceed locally. Do not add a chart/library solely because this is a library trial.

## Selection

Selected library IDs: none. Plain native HTML form and browser BigInt integer cents satisfy exact currency arithmetic and whole-unit ceiling without dependency or bundle overhead. No chart was requested; textual revenue/cost/profit breakdown explains four inputs directly. Selection communicated to coordinator before building.

Declined: ECharts (no chart needed); Mantine/React Flow (no React or editable diagram); Tabulator/Arquero/Papa Parse (no dataset, transformations or import); jStat/seedrandom (deterministic arithmetic, no statistics/simulation); reveal (no slides); Mermaid (formula prose suffices); Motion (no useful animation); vis-timeline/Frappe Gantt (no events/schedule). No library-specific skills loaded because none selected.

## Actual files read

All paths below are relative to `/private/tmp/browser-app-builder-fresh-2026-10-09/plugin-under-test/plugins/browser-app-builder/`:

- skills/setup-browser-app/SKILL.md
- skills/plan-browser-app/SKILL.md
- skills/build-browser-app/SKILL.md
- skills/evaluate-browser-app/SKILL.md
- skills/deploy-browser-app/SKILL.md
- skills/campus-designer/SKILL.md
- skills/campus-designer/references/identity.md
- skills/campus-designer/references/color.md
- skills/campus-designer/references/typography.md
- skills/campus-designer/references/web.md
- skills/campus-designer/references/review.md
- references/workflow.md
- references/library-selection.md
- references/libraries.json
- references/evaluation-freshness.md
- assets/starter/app/index.html, app.js, style.css
- assets/pages.yml

Also read `/Users/jordan/.codex/PLANS.md`. Managed setup and library recipes were not needed. Tools verified locally, not installed. Setup starter copied and its module/button checked before original implementation.

## Exact final simulated review request

Pricing evaluation for simulated student review: exact cents/whole-unit model passed25 independent groups. Real browser found/fixed reset timing, then narrow200% text overflow; both failed rounds preserved. Final app warns price may reduce demand, excludes taxes/financing/capacity/discounts, treats quantity as assumption, caps inputs at$1m/1m units yet shows larger mathematical break-even. No libraries/runtime notices; no source license file found in frozen starter checkout, so owner publication licensing remains unresolved. Please confirm simulated review accepts assumptions/limitations for local handoff (no publication).

## Exact final simulated review reply

Simulated student review: I accept these model assumptions and limitations for the local handoff. Show the computed break-even even when above the quantity-input cap, with a clear note that it exceeds the supported scenario range. Keep the licensing/publication destination as explicit pending deployment decisions; this approval is for local evaluation only, not publication. Record the failed reset/overflow rounds and final corrections. Send final test/production URLs and checkpoint when ready; leave previews running for my check.
