---
name: vis-timeline-browser-app
description: Build interactive event timelines or interval roadmaps with local data using vis-timeline. Use Frappe Gantt for task dependency schedules.
---

# vis-timeline for browser apps

Read [selection](../../references/library-selection.md), [workflow](../../references/workflow.md) and the `vis-timeline` entry in [the approved inventory](../../references/libraries.json). Use only an approved entry and its exact packages/peers. Preserve the agreed plan; route missing prerequisites through [managed setup](../../references/managed-build.md). Load only the selected libraries.

For project roadmaps, read [resources and milestones](../../references/decision-models.md#roadmaps-resources-and-milestones). Use named point events for milestones, and model resource feasibility separately when requested.

## Usage pattern

Read [React and TypeScript integration](../../references/react-libraries.md). Copy this standalone example into `app/recipes/vis-timeline.tsx`. Install the inventory’s development type packages and copy any listed declarations before typechecking.

```tsx
import { useEffect, useRef } from 'react';
import { Timeline } from 'vis-timeline/standalone';
import 'vis-timeline/styles/vis-timeline-graph2d.css';

export function Example() {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const timeline = new Timeline(host.current!, [{ id: 1, content: 'Launch preparation',
      start: new Date(2026, 0, 5), end: new Date(2026, 0, 8) }], {
      start: new Date(2026, 0, 1), end: new Date(2026, 0, 15), showCurrentTime: false,
      template: item => { const label = document.createElement('span'); label.textContent = item.content; return label; } });
    return () => timeline.destroy();
  }, []);
  return <section className="bab-timeline"><div ref={host} />
    <p>Preparation: January 5–7, 2026, ending at midnight January 8 in local time.</p></section>;
}
```

Wrap the container with bab-timeline. Use the standalone entry but install the required peers from the inventory. Document local-calendar versus UTC instants; do not parse date-only strings inconsistently. Imported labels become text nodes. Destroy the instance on teardown.

Visual libraries follow [shared identity selection](../../references/workflow.md#shared-design); the supplied [theme assets](../../assets/library-themes/) implement the Duke default. Generated paths above are relative to the student's app, not the installed plugin.

## Verify

Check exact dates, selected event details, narrow horizontal navigation, timezone assumptions and destroy/recreate. Record failures and observed production behavior through [Evaluate](../evaluate-browser-app/SKILL.md). Check the [official documentation](https://visjs.github.io/vis-timeline/docs/timeline/) for API detail, but do not replace pinned versions or add remote services.
