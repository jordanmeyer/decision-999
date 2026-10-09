---
name: reveal-browser-app
description: Create interactive analytical slide presentations with reveal.js, including local charts and scenario controls. Clarify whether live means local interactivity or unsupported external data updates.
---

# reveal.js for browser apps

Read [selection](../../references/library-selection.md), [workflow](../../references/workflow.md) and the `reveal` entry in [the approved inventory](../../references/libraries.json). Use only an approved entry and its exact packages/peers. Preserve the agreed plan; route missing prerequisites through [managed setup](../../references/managed-build.md). Load only the selected libraries.

## Usage pattern

```js
import Reveal from 'reveal.js';
import 'reveal.js/reveal.css';
import './theme/reveal.css';
const deck = new Reveal(element, { embedded: true, hash: false, scrollActivationWidth: null, width: '100%', height: '100%',
  minScale: 1, maxScale: 1, center: false,
  keyboardCondition: 'focused', transition: 'none' });
await deck.initialize();
deck.on('slidechanged', () => chart?.resize());
```

Use .reveal > .slides > section markup. Do not import a stock theme over the Duke theme. Keep deck controls scoped, test inputs/selects without advancing slides, and resize charts after slide entry. Use embedded mode when part of a larger app. Disable automatic narrow-screen scroll activation for this embedded recipe. Percentage dimensions and unscaled text avoid shrinking controls to unreadable sizes on phones; constrain slide content and test clipping. No remote iframes, media or math CDN plugins. Destroy the deck on teardown.

Visual libraries use the relevant [theme assets](../../assets/library-themes/) with the bundled [Campus Designer](../campus-designer/SKILL.md). Generated paths above are relative to the student's app, not the installed plugin.

## Verify

Test slide navigation, focused numeric input arrows, hidden-to-visible charts, keyboard escape, narrow sizing and text equivalents for charts. Record failures and observed production behavior through [Evaluate](../evaluate-browser-app/SKILL.md). Check the [official documentation](https://revealjs.com/) for API detail, but do not replace pinned versions or add remote services.
