---
name: vis-timeline-browser-app
description: Build interactive event timelines or interval roadmaps with local data using vis-timeline. Use Frappe Gantt for task dependency schedules.
---

# vis-timeline for browser apps

Read [selection](../../references/library-selection.md), [workflow](../../references/workflow.md) and the `vis-timeline` entry in [the approved inventory](../../references/libraries.json). Use only an approved entry and its exact packages/peers. Preserve the agreed plan; route missing prerequisites through [managed setup](../../references/managed-build.md). Load only the selected libraries.

For project roadmaps, read [resources and milestones](../../references/decision-models.md#roadmaps-resources-and-milestones). Use named point events for milestones, and model resource feasibility separately when requested.

## Usage pattern

```js
import { Timeline } from 'vis-timeline/standalone';
import 'vis-timeline/styles/vis-timeline-graph2d.css';
import './theme/vis-timeline.css';
const label = document.createElement('span');
label.textContent = 'Launch';
const timeline = new Timeline(element, [{ id: 1, content: label,
  start: new Date(2026, 0, 5), end: new Date(2026, 0, 8) }],
  { start: new Date(2026, 0, 1), end: new Date(2026, 0, 15), showCurrentTime: false });
```

Wrap the container with bab-timeline. Use the standalone entry but install the required peers from the inventory. Document local-calendar versus UTC instants; do not parse date-only strings inconsistently. Imported labels become text nodes. Destroy the instance on teardown.

Visual libraries use the relevant [theme assets](../../assets/library-themes/) with the bundled [Campus Designer](../campus-designer/SKILL.md). Generated paths above are relative to the student's app, not the installed plugin.

## Verify

Check exact dates, selected event details, narrow horizontal navigation, timezone assumptions and destroy/recreate. Record failures and observed production behavior through [Evaluate](../evaluate-browser-app/SKILL.md). Check the [official documentation](https://visjs.github.io/vis-timeline/docs/timeline/) for API detail, but do not replace pinned versions or add remote services.
