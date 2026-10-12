---
name: motion-browser-app
description: Add purposeful interface animation with Motion to a browser app. Use for state transitions that aid understanding; avoid animation for its own sake.
---

# Motion for browser apps

Read [selection](../../references/library-selection.md), [workflow](../../references/workflow.md) and the `motion` entry in [the approved inventory](../../references/libraries.json). Use only an approved entry and its exact packages/peers. Preserve the agreed plan; route missing prerequisites through [managed setup](../../references/managed-build.md). Load only the selected libraries.

## Usage pattern

```js
import { animate } from 'motion';
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const playback = animate(element, { transform: ['translateY(8px)', 'translateY(0px)'] },
  { duration: reduced ? 0 : 0.2 });
```

Animate position or size rather than fading Duke blue. Use shared base.css. Stop playback on teardown. Calculate simulation results independently of frames, then animate the result. Honor changed reduced-motion preferences during long sessions.

Visual libraries use the relevant [theme assets](../../assets/library-themes/) with the bundled [Campus Designer](../campus-designer/SKILL.md). Generated paths above are relative to the student's app, not the installed plugin.

## Verify

Check reduced-motion and normal settings, interruption/cleanup, keyboard focus and identical model results with animation disabled. Record failures and observed production behavior through [Evaluate](../evaluate-browser-app/SKILL.md). Check the [official documentation](https://motion.dev/docs) for API detail, but do not replace pinned versions or add remote services.
