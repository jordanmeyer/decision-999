---
name: mantine-browser-app
description: Build consistent React forms, controls and layouts with Mantine. Use when a React application needs a component library; keep simple forms on native controls within the common React baseline.
---

# Mantine for browser apps

Read [selection](../../references/library-selection.md), [workflow](../../references/workflow.md) and the `mantine` entry in [the approved inventory](../../references/libraries.json). Use only an approved entry and its exact packages/peers. Preserve the agreed plan; route missing prerequisites through [managed setup](../../references/managed-build.md). Load only the selected libraries.

For an executive dashboard or board briefing, read [the decision-model guidance](../../references/decision-models.md#executive-dashboards). Recommendations need evidence in the briefing itself; general forms do not require a briefing view.

## Usage pattern

Read [React and TypeScript integration](../../references/react-libraries.md). Copy this standalone example into `app/recipes/mantine.tsx`. Install the inventory’s development type packages and copy any listed declarations before typechecking.

```tsx
import { useState } from 'react';
import { MantineProvider, Button } from '@mantine/core';
import '@mantine/core/styles.css';

export function Example() {
  const [applied, setApplied] = useState(false);
  return <MantineProvider forceColorScheme="light" theme={{
    fontFamily: 'var(--duke-font-body)', primaryColor: 'duke', primaryShade: 6,
    colors: { duke: ['#E2E6ED', '#E2E6ED', '#E2E6ED', '#00539B', '#00539B',
      '#00539B', '#012169', '#012169', '#012169', '#012169'] } }}>
    <Button onClick={() => setApplied(true)} styles={{ root: {
      '--button-hover': '#00539B' } }}>Apply scenario</Button>
    <p role="status">{applied ? 'Scenario applied.' : 'Scenario ready.'}</p>
  </MantineProvider>;
}
```

For the supplied Duke adapter, load canonical tokens/base.css before calling the theme factory; it uses published solid colors, not generated Duke-blue tints. An independent identity adapts the project theme and factory together under shared design. Label inputs and errors, use controlled values when filters drive charts, and import only needed controls. No remote fonts.

Visual libraries follow [shared identity selection](../../references/workflow.md#shared-design); the supplied [theme assets](../../assets/library-themes/) implement the Duke default. Generated paths above are relative to the student's app, not the installed plugin.

## Verify

Inspect default/hover/focus/disabled colors, label/error association, keyboard submissions, overlays/portals and narrow layouts. Record failures and observed production behavior through [Evaluate](../evaluate-browser-app/SKILL.md). Check the [official documentation](https://mantine.dev/) for API detail, but do not replace pinned versions or add remote services.
