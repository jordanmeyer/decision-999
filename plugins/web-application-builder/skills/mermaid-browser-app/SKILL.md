---
name: mermaid-browser-app
description: Render explanatory flowcharts or process diagrams from authored text with Mermaid. Use React Flow when users must drag nodes or edit connections directly.
---

# Mermaid for browser apps

Read [selection](../../references/library-selection.md), [workflow](../../references/workflow.md) and the `mermaid` entry in [the approved inventory](../../references/libraries.json). Use only an approved entry and its exact packages/peers. Preserve the agreed plan; route missing prerequisites through [managed setup](../../references/managed-build.md). Load only the selected libraries.

## Usage pattern

```js
import mermaid from 'mermaid';
import { mermaidTheme } from './theme/mermaid.js';
mermaid.initialize(mermaidTheme());
const { svg } = await mermaid.render('process-diagram', 'flowchart LR; A[Order] --> B[Ship]');
element.innerHTML = svg; // Only SVG returned by strict Mermaid, not raw imported HTML.
```

Use mermaid.js/tokens.js and the inventory KaTeX override. Keep securityLevel strict, htmlLabels false, authored diagram definitions and unique render IDs. No external image/icon packs or click links. Never concatenate CSV text into diagram source; show imported data separately as text. Catch parse errors and preserve the last valid diagram.

Visual libraries use the relevant [theme assets](../../assets/library-themes/) with the bundled [Campus Designer](../campus-designer/SKILL.md). Generated paths above are relative to the student's app, not the installed plugin.

## Verify

Check nodes and labels, malformed syntax, strict rendering, local assets, text alternative, and safe errors without raw HTML injection. Record failures and observed production behavior through [Evaluate](../evaluate-browser-app/SKILL.md). Check the [official documentation](https://mermaid.js.org/) for API detail, but do not replace pinned versions or add remote services.
