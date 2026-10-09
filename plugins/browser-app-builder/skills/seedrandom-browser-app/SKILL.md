---
name: seedrandom-browser-app
description: Create reproducible local random streams for browser simulations using seedrandom. Use when repeating the same seed and inputs must reproduce an experiment.
---

# seedrandom for browser apps

Read [selection](../../references/library-selection.md), [workflow](../../references/workflow.md) and the `seedrandom` entry in [the approved inventory](../../references/libraries.json). Use only an approved entry and its exact packages/peers. Preserve the agreed plan; route missing prerequisites through [managed setup](../../references/managed-build.md). Load only the selected libraries.

## Usage pattern

```js
import seedrandom from 'seedrandom';
const random = seedrandom('hello.');
const first = random(); // documented reference: 0.9282578795792454
```

Create one local generator per run using an explicit string seed; never call Math.seedrandom or replace Math.random. Reset before repeat runs, record seed and sampling method, and keep calculations independent of animation. This is not cryptographic randomness.

Visual libraries use the relevant [theme assets](../../assets/library-themes/) with the bundled [Campus Designer](../campus-designer/SKILL.md). Generated paths above are relative to the student's app, not the installed plugin.

## Verify

Check the documented reference draw, a nontrivial independently specified sequence, identical/different seeds, deterministic limits and conservation relationships. Repetition alone does not prove model accuracy. Record failures and observed production behavior through [Evaluate](../evaluate-browser-app/SKILL.md). Check the [official documentation](https://github.com/davidbau/seedrandom) for API detail, but do not replace pinned versions or add remote services.
