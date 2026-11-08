---
name: arquero-browser-app
description: Transform, group and summarize local tabular data with Arquero. Use when dashboard calculations need substantive table operations beyond simple array code.
---

# Arquero for browser apps

Read [selection](../../references/library-selection.md), [workflow](../../references/workflow.md) and the `arquero` entry in [the approved inventory](../../references/libraries.json). Use only an approved entry and its exact packages/peers. Preserve the agreed plan; route missing prerequisites through [managed setup](../../references/managed-build.md). Load only the selected libraries.

For sales/returns analysis, read [uploaded sales and returns](../../references/decision-models.md#uploaded-sales-and-returns). Verify join grain and totals before building joint product/channel comparisons.

## Usage pattern

Read [React and TypeScript integration](../../references/react-libraries.md). Copy this standalone example into `app/recipes/arquero.ts`. Install the inventory’s development type packages and copy any listed declarations before typechecking.

```ts
import * as aq from 'arquero';

type Sale = { region: string; revenue: number; cost: number };
export function summarizeSales(rows: Sale[], region: string) {
  const selected = rows.filter(row => row.region === region);
  if (!selected.length) return { revenue: 0, cost: 0 };
  const totals = aq.from(selected).rollup({
    revenue: aq.op.sum('revenue'), cost: aq.op.sum('cost') });
  return { revenue: Number(totals.get('revenue', 0)), cost: Number(totals.get('cost', 0)) };
}
```

Use authored expressions only. Validate typed input before constructing the table and define empty-result behavior. Keep exact currency accounting in bounded integer cents; do not assume grouping solves rounding or overflow. Do not compile expressions supplied through CSV. For authored filters that close over local variables, use `aq.escape(d => ...)`; minification can rename lexical variables while `.params({ name })` keys stay unchanged, breaking parsed expressions only in production. Verify the production filter with nonempty and empty results.

Visual libraries follow [shared identity selection](../../references/workflow.md#shared-design); the supplied [theme assets](../../assets/library-themes/) implement the Duke default. Generated paths above are relative to the student's app, not the installed plugin.

## Verify

Compare unfiltered and filtered aggregates with hand calculations; test null/missing values, empty groups, rounding and large bounded amounts. Record failures and observed production behavior through [Evaluate](../evaluate-browser-app/SKILL.md). Check the [official documentation](https://idl.uw.edu/arquero/) for API detail, but do not replace pinned versions or add remote services.
