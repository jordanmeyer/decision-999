---
name: reveal-browser-app
description: Create interactive analytical slide presentations with reveal.js, including local charts and scenario controls. Clarify whether live means local interactivity or unsupported external data updates.
---

# reveal.js for browser apps

Read [selection](../../references/library-selection.md), [workflow](../../references/workflow.md) and the `reveal` entry in [the approved inventory](../../references/libraries.json). Use only an approved entry and its exact packages/peers. Preserve the agreed plan; route missing prerequisites through [managed setup](../../references/managed-build.md). Load only the selected libraries.

Read [analytical presentations](../../references/decision-models.md#analytical-presentations) to preserve the intended audience, decision stakes, evidence and requested model appendix. Include a visible presentation mode and use live valid-input updates for inexpensive local meeting scenarios.

## Usage pattern

Read [React and TypeScript integration](../../references/react-libraries.md). Copy this standalone example into `app/recipes/reveal.tsx`. Install the inventory’s development type packages and copy any listed declarations before typechecking.

```tsx
import { useEffect, useRef, useState } from 'react';
import Reveal, { type RevealApi } from 'reveal.js';
import 'reveal.js/reveal.css';

export function Example() {
  const host = useRef<HTMLDivElement>(null);
  const [error, setError] = useState('');
  useEffect(() => {
    const container = host.current!;
    let disposed = false;
    let ready = false;
    let deck: RevealApi | undefined;
    // Each effect owns separate DOM; late initialization cannot touch its replacement.
    const element = document.createElement('div');
    element.className = 'reveal';
    element.tabIndex = 0;
    element.style.height = '320px';
    element.innerHTML = '<div class="slides"><section><h2>Scenario</h2><label>Price <input type="number" value="20"></label></section><section><h2>Decision</h2><p>Compare assumptions before choosing.</p></section></div>';
    container.append(element);
    void document.fonts.ready.then(async () => {
      if (disposed) return;
      deck = new Reveal(element, { embedded: true, hash: false, scrollActivationWidth: 0,
        width: '100%', height: '100%', minScale: 1, maxScale: 1, center: false,
        keyboardCondition: () => document.activeElement === element, transition: 'none' });
      await deck.initialize();
      ready = true;
      if (disposed) deck.destroy();
    }).catch((reason: unknown) => { if (!disposed) setError(String(reason)); });
    return () => { disposed = true; if (ready) deck?.destroy(); element.remove(); };
  }, []);
  return <section><div ref={host} />{error && <p role="alert">Slides could not load: {error}</p>}</section>;
}
```

Use .reveal > .slides > section markup. Do not import a stock theme over the selected app theme. Make the deck element keyboard-focusable. Its arrow navigation should run only when that element has DOM focus; focused fields and table scrollers keep their native keys. The pinned library's 'focused' condition tracks pointer focus and is unsuitable for this rule. Resize charts after slide entry. After replacing calculations on the current slide, call the public `deck.slide(deck.getIndices().h)` to refresh Reveal's native announcement (for a horizontal deck). Verify the applied values, focus, scroll and slide remain consistent; do not call internal announcement methods. Use embedded mode when part of a larger app. Disable automatic narrow-screen scroll activation for this embedded recipe. Percentage dimensions and unscaled text avoid shrinking controls to unreadable sizes on phones; constrain slide content and test clipping. No remote iframes, media or math CDN plugins. Destroy a ready deck on teardown. If unmounted during initialization, detach its owned DOM, let initialization settle, then destroy it. In this pinned version, calling `destroy()` before readiness prevents initialization from finishing but does not remove the earlier window load listener.

Visual libraries follow [shared identity selection](../../references/workflow.md#shared-design); the supplied [theme assets](../../assets/library-themes/) implement the Duke default. Generated paths above are relative to the student's app, not the installed plugin.

## Verify

Test slide navigation, focused numeric input arrows, hidden-to-visible charts, keyboard escape, narrow sizing and text equivalents for charts. Unmount during `initialize()`, then verify the old instance finishes cleanup and a remounted deck works without accumulated window load listeners. Record failures and observed production behavior through [Evaluate](../evaluate-browser-app/SKILL.md). Check the [official documentation](https://revealjs.com/) for API detail, but do not replace pinned versions or add remote services.
