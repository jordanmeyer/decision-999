---
name: motion-browser-app
description: Add purposeful interface animation with Motion to a browser app. Use for state transitions that aid understanding; avoid animation for its own sake.
---

# Motion for browser apps

Read [selection](../../references/library-selection.md), [workflow](../../references/workflow.md) and the `motion` entry in [the approved inventory](../../references/libraries.json). Use only an approved entry and its exact packages/peers. Preserve the agreed plan; route missing prerequisites through [managed setup](../../references/managed-build.md). Load only the selected libraries.

## Usage pattern

Read [React and TypeScript integration](../../references/react-libraries.md). Copy this standalone example into `app/recipes/motion.tsx`. Install the inventory’s development type packages and copy any listed declarations before typechecking.

```tsx
import { useEffect, useRef, useState } from 'react';
import { animate } from 'motion';

export function Example() {
  const result = useRef<HTMLParagraphElement>(null);
  const [quantity, setQuantity] = useState(100);
  useEffect(() => {
    const element = result.current!;
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    const playback = animate(element, { transform: ['translateY(8px)', 'translateY(0px)'] },
      { duration: preference.matches ? 0 : 0.2 });
    const stop = () => { playback.stop(); element.style.transform = 'none'; };
    preference.addEventListener('change', stop);
    return () => { preference.removeEventListener('change', stop); stop(); };
  }, [quantity]);
  return <section><button onClick={() => setQuantity(value => value + 10)}>Add ten units</button>
    <p ref={result}>Profit: ${8 * quantity - 500}</p></section>;
}
```

When using Duke blue, animate position or size rather than fading it. Keep the selected app theme and its reduced-motion rules. Stop playback on teardown. Calculate simulation results independently of frames, then animate the result. Honor changed reduced-motion preferences during long sessions.

Visual libraries follow [shared identity selection](../../references/workflow.md#shared-design); the supplied [theme assets](../../assets/library-themes/) implement the Duke default. Generated paths above are relative to the student's app, not the installed plugin.

## Verify

Check reduced-motion and normal settings, interruption/cleanup, keyboard focus and identical model results with animation disabled. Record failures and observed production behavior through [Evaluate](../evaluate-browser-app/SKILL.md). Check the [official documentation](https://motion.dev/docs) for API detail, but do not replace pinned versions or add remote services.
