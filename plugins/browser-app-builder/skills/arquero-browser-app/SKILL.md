---
name: arquero-browser-app
description: Transform, group and summarize local tabular data with Arquero. Use when dashboard calculations need substantive table operations beyond simple array code.
---

# Arquero for browser apps

Read [selection](../../references/library-selection.md), [workflow](../../references/workflow.md) and the `arquero` entry in [the approved inventory](../../references/libraries.json). Use only an approved entry and its exact packages/peers. Preserve the agreed plan; route missing prerequisites through [managed setup](../../references/managed-build.md). Load only the selected libraries.

## Usage pattern

```js
import * as aq from 'arquero';
const totals = aq.from(rows).rollup({ revenue: aq.op.sum('revenue'), cost: aq.op.sum('cost') }).object();
```

Use authored expressions only. Validate typed input before constructing the table and define empty-result behavior. Keep exact currency accounting in bounded integer cents; do not assume grouping solves rounding or overflow. Do not compile expressions supplied through CSV.

Visual libraries use the relevant [theme assets](../../assets/library-themes/) with the bundled [Campus Designer](../campus-designer/SKILL.md). Generated paths above are relative to the student's app, not the installed plugin.

## Verify

Compare unfiltered and filtered aggregates with hand calculations; test null/missing values, empty groups, rounding and large bounded amounts. Record failures and observed production behavior through [Evaluate](../evaluate-browser-app/SKILL.md). Check the [official documentation](https://idl.uw.edu/arquero/) for API detail, but do not replace pinned versions or add remote services.
