---
name: frappe-gantt-browser-app
description: Build a task schedule with start/end dates, progress and dependencies using Frappe Gantt. Use for project scheduling views, not automatic resource optimization.
---

# Frappe Gantt for browser apps

Read [selection](../../references/library-selection.md), [workflow](../../references/workflow.md) and the `frappe-gantt` entry in [the approved inventory](../../references/libraries.json). Use only an approved entry and its exact packages/peers. Preserve the agreed plan; route missing prerequisites through [managed setup](../../references/managed-build.md). Load only the selected libraries.

For project plans, read [roadmaps, resources and milestones](../../references/decision-models.md#roadmaps-resources-and-milestones). Preserve requested resources and milestones in the application model even when the chart alone cannot represent them.

## Usage pattern

Read [React and TypeScript integration](../../references/react-libraries.md). Copy this example into `app/recipes/frappe-gantt.tsx`, the listed declaration into `app/types/`, the installed `dist/frappe-gantt.css` into `app/vendor/frappe-gantt.css`, and the plugin's matching theme adapter into `app/theme/frappe-gantt.css`.

```tsx
import type { Task, Options } from 'frappe-gantt';
import ganttModule from 'frappe-gantt?url';
import structuralCss from '../vendor/frappe-gantt.css?inline';
import themeCss from '../theme/frappe-gantt.css?inline';
import tokens from '../theme/duke-tokens.css?inline';
import fonts from '../theme/duke-fonts.css?inline';

const tasks: Task[] = [{ id: 'a', name: 'Prepare',
  start: '2026-01-05', end: '2026-01-07', progress: 0 }];
const options: Options = { view_mode: 'Day', readonly: true, popup: false, scroll_to: 'start' };
// Only serialize controlled configuration; never concatenate imported strings into HTML/JS.
const json = (value: unknown) => JSON.stringify(value).replaceAll('<', '\\u003c');

export function Example() {
  const source = `<!doctype html><html lang="en"><head><meta charset="utf-8"></head>
    <body class="bab-gantt"><div id="gantt"></div><p id="status" role="status">Loading schedule…</p>
    <script type="module">
      const style = document.createElement('style');
      style.textContent = ${json(tokens + fonts + structuralCss + themeCss + '\nbody{color:var(--duke-cast-iron);margin:8px}')};
      document.head.append(style);
      try {
        const { default: Gantt } = await import(${json(new URL(ganttModule, location.href).href)});
        await document.fonts.ready;
        new Gantt(document.getElementById('gantt'), ${json(tasks)}, ${json(options)});
        document.getElementById('status').textContent = 'Preparation: January 5–7, 2026.';
      } catch (error) { document.getElementById('status').textContent = 'Schedule could not load: ' + error; }
    <\/script></body></html>`;
  return <section><iframe title="Synthetic preparation schedule" srcDoc={source}
    style={{ width: '100%', height: 320, border: 0 }} />
    <p>Preparation: January 5–7, 2026. A schedule does not establish resource feasibility.</p></section>;
}
```

The pinned version registers document listeners and provides no destroy method. This React recipe gives the chart its own same-origin iframe document: `frappe-gantt?url` resolves the pinned standalone ESM distribution, which has no further imports. Removing the frame disposes that document and its listeners. Importing Gantt in the parent and passing a child-document element would still register parent listeners; do not do that. This is lifetime isolation, not a security sandbox. Keep one instance per frame document; hide/show the frame for ordinary view changes. For frequently changing tasks, use a controlled same-origin message handler to call `refresh` inside the frame after validating the message; do not reconstruct on every render.

Copy dist/frappe-gantt.css from the installed package into app/vendor; its export map does not expose a CSS import. Apply copied theme styles inside the frame as well as the parent. Start with read-only visualization and accessible date controls outside it. Validate date changes in the model before refreshing. Avoid untrusted task names/HTML; show imported descriptions separately with textContent. Do not infer a feasible schedule from a diagram.

Visual libraries follow [shared identity selection](../../references/workflow.md#shared-design); the supplied [theme assets](../../assets/library-themes/) implement the Duke default. Generated paths above are relative to the student's app, not the installed plugin.

## Verify

Check January 5–7 dates against a text schedule, dependency labels, timezone/date boundaries, popup disabled, narrow scrolling and repeated view switching: hiding/showing retains the same frame/instance, while unmount/remount creates a fresh document without adding listeners to the parent. Record failures and observed production behavior through [Evaluate](../evaluate-browser-app/SKILL.md). Check the [official documentation](https://docs.frappe.io/gantt/introduction) for API detail, but do not replace pinned versions or add remote services.
