---
name: seedrandom-browser-app
description: Create reproducible local random streams for browser simulations using seedrandom. Use when repeating the same seed and inputs must reproduce an experiment.
---

# seedrandom for browser apps

Read [selection](../../references/library-selection.md), [workflow](../../references/workflow.md) and the `seedrandom` entry in [the approved inventory](../../references/libraries.json). Use only an approved entry and its exact packages/peers. Preserve the agreed plan; route missing prerequisites through [managed setup](../../references/managed-build.md). Load only the selected libraries.

For inventory decisions, read [the model guidance](../../references/decision-models.md#single-period-inventory-decisions). Reuse the same generated demand sample across quantities when that matches the model; do not select a seed merely because its outcome makes the desired story look good.

## Usage pattern

Read [React and TypeScript integration](../../references/react-libraries.md). Copy this standalone example into `app/recipes/seedrandom.ts`. Install the inventory’s development type packages and copy any listed declarations before typechecking.

```ts
import seedrandom from 'seedrandom';

export function seededDraws(seed: string, count: number): number[] {
  if (!Number.isInteger(count) || count < 0 || count > 100_000)
    throw Error('Draw count must be an integer from 0 to 100,000.');
  const random = seedrandom(seed);
  return Array.from({ length: count }, () => random());
}
```

Create one local generator per run using an explicit string seed; never call Math.seedrandom or replace Math.random. Reset before repeat runs, record seed and sampling method, and keep calculations independent of animation. This is not cryptographic randomness.

Visual libraries follow [shared identity selection](../../references/workflow.md#shared-design); the supplied [theme assets](../../assets/library-themes/) implement the Duke default. Generated paths above are relative to the student's app, not the installed plugin.

## Verify

Check the documented reference draw, a nontrivial independently specified sequence, identical/different seeds, deterministic limits and conservation relationships. Repetition alone does not prove model accuracy. Record failures and observed production behavior through [Evaluate](../evaluate-browser-app/SKILL.md). Check the [official documentation](https://github.com/davidbau/seedrandom) for API detail, but do not replace pinned versions or add remote services.
