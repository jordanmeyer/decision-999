---
name: mermaid-browser-app
description: Render explanatory flowcharts or process diagrams from authored text with Mermaid. Use React Flow when users must drag nodes or edit connections directly.
---

# Mermaid for browser apps

Read [selection](../../references/library-selection.md), [workflow](../../references/workflow.md) and the `mermaid` entry in [the approved inventory](../../references/libraries.json). Use only an approved entry and its exact packages/peers. Preserve the agreed plan; route missing prerequisites through [managed setup](../../references/managed-build.md). Load only the selected libraries.

## Usage pattern

Read [React and TypeScript integration](../../references/react-libraries.md). Copy this standalone example into `app/recipes/mermaid.tsx`. Install the inventory’s development type packages and copy any listed declarations before typechecking.

```tsx
import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

let renderId = 0;
export function Example() {
  const host = useRef<HTMLDivElement>(null);
  const [error, setError] = useState('');
  useEffect(() => {
    const element = host.current!;
    let disposed = false;
    void document.fonts.ready.then(async () => {
      if (disposed) return;
      const css = getComputedStyle(element);
      mermaid.initialize({ startOnLoad: false, securityLevel: 'strict', theme: 'base',
        flowchart: { htmlLabels: false }, themeVariables: {
          fontFamily: css.fontFamily, primaryColor: '#E2E6ED', primaryTextColor: '#262626',
          primaryBorderColor: '#012169', lineColor: '#012169' } });
      const { svg } = await mermaid.render(`process-${++renderId}`, 'flowchart LR; A[Order] --> B[Ship]');
      if (!disposed) element.innerHTML = svg;
    }).catch((reason: unknown) => { if (!disposed) setError(String(reason)); });
    return () => { disposed = true; element.replaceChildren(); };
  }, []);
  return <section><div ref={host} /><p>Process: Order, then Ship.</p>
    {error && <p role="alert">Diagram could not render: {error}</p>}</section>;
}
```

Use mermaid.js/tokens.js and the inventory KaTeX override. Keep securityLevel strict, htmlLabels false, authored diagram definitions and unique render IDs. No external image/icon packs or click links. Never concatenate CSV text into diagram source; show imported data separately as text. Catch parse errors and preserve the last valid diagram.

Visual libraries follow [shared identity selection](../../references/workflow.md#shared-design); the supplied [theme assets](../../assets/library-themes/) implement the Duke default. Generated paths above are relative to the student's app, not the installed plugin.

## Verify

Check nodes and labels, malformed syntax, strict rendering, local assets, text alternative, and safe errors without raw HTML injection. Record failures and observed production behavior through [Evaluate](../evaluate-browser-app/SKILL.md). Check the [official documentation](https://mermaid.js.org/) for API detail, but do not replace pinned versions or add remote services.
