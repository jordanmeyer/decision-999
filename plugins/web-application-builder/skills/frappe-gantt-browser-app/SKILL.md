---
name: frappe-gantt-browser-app
description: Build a task schedule with start/end dates, progress and dependencies using Frappe Gantt. Use for project scheduling views, not automatic resource optimization.
---

# Frappe Gantt for browser apps

Read [selection](../../references/library-selection.md), [workflow](../../references/workflow.md) and the `frappe-gantt` entry in [the approved inventory](../../references/libraries.json). Use only an approved entry and its exact packages/peers. Preserve the agreed plan; route missing prerequisites through [managed setup](../../references/managed-build.md). Load only the selected libraries.

For project plans, read [roadmaps, resources and milestones](../../references/decision-models.md#roadmaps-resources-and-milestones). Preserve requested resources and milestones in the application model even when the chart alone cannot represent them.

## Usage pattern

```js
import Gantt from 'frappe-gantt';
import './vendor/frappe-gantt.css';
import './theme/frappe-gantt.css';
// Construct once in a persistent, visible container; hide it when switching views.
const gantt = new Gantt(element, [{ id: 'a', name: 'Prepare',
  start: '2026-01-05', end: '2026-01-07', progress: 0 }],
  { view_mode: 'Day', readonly: true, popup: false });
```

The pinned version registers document listeners and provides no destroy method. Keep one instance and its container mounted for the document lifetime; initialize on first visible use, then hide/show the same container and refresh its data as needed. Removing DOM children does not release the instance. Do not recreate it on each tab or route visit. For a component that must repeatedly unmount, choose another approved presentation or obtain maintainer review of a verified teardown strategy.

Copy dist/frappe-gantt.css from the installed package into app/vendor; its export map does not expose a CSS import. Use a bab-gantt wrapper. Start with read-only visualization and accessible date controls outside it. Validate date changes in the model before refreshing. Avoid untrusted task names/HTML; show imported descriptions separately with textContent. Do not infer a feasible schedule from a diagram.

Visual libraries use the relevant [theme assets](../../assets/library-themes/) with the bundled [Campus Designer](../campus-designer/SKILL.md). Generated paths above are relative to the student's app, not the installed plugin.

## Verify

Check January 5–7 dates against a text schedule, dependency labels, timezone/date boundaries, popup disabled, narrow scrolling and repeated view switching: the same SVG/instance must survive and document listener registrations must not grow. Record failures and observed production behavior through [Evaluate](../evaluate-browser-app/SKILL.md). Check the [official documentation](https://docs.frappe.io/gantt/introduction) for API detail, but do not replace pinned versions or add remote services.
