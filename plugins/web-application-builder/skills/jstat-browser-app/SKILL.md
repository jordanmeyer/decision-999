---
name: jstat-browser-app
description: Use jStat for browser statistical calculations with explicit assumptions and independently checked expected results. Use for a defined statistical need, not as proof that a model is valid.
---

# jStat for browser apps

Read [selection](../../references/library-selection.md), [workflow](../../references/workflow.md) and the `jstat` entry in [the approved inventory](../../references/libraries.json). Use only an approved entry and its exact packages/peers. Preserve the agreed plan; route missing prerequisites through [managed setup](../../references/managed-build.md). Load only the selected libraries.

For a single-period inventory simulator, read [inventory decisions](../../references/decision-models.md#single-period-inventory-decisions). Show an independently justified expected-profit benchmark and a meaningful risk tradeoff, not only repeated draws for a few arbitrary quantities.

## Usage pattern

Read [React and TypeScript integration](../../references/react-libraries.md). Copy this standalone example into `app/recipes/jstat.ts`. Install the inventory’s development type packages and copy any listed declarations before typechecking.

```ts
import stats from 'jstat';

export function sampleSummary(values: number[]) {
  if (values.length < 2 || values.some(value => !Number.isFinite(value)))
    throw Error('Provide at least two finite observations.');
  return { mean: stats.jStat.mean(values), variance: stats.jStat.variance(values, true) };
}
```

Document sample versus population conventions, units and supported input domains. Use deterministic functions by default; simulation random draws come from a local approved seedrandom instance and explicitly justified transforms, not hidden global random state.

Visual libraries follow [shared identity selection](../../references/workflow.md#shared-design); the supplied [theme assets](../../assets/library-themes/) implement the Duke default. Generated paths above are relative to the student's app, not the installed plugin.

## Verify

Check mean 4/sample variance 4/population variance 8/3, empty/singleton handling in app validation, and independently justified distribution examples. Record failures and observed production behavior through [Evaluate](../evaluate-browser-app/SKILL.md). Check the [official documentation](https://jstat.github.io/) for API detail, but do not replace pinned versions or add remote services.
