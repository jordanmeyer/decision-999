---
name: tabulator-browser-app
description: Build substantial interactive data tables with Tabulator for local dashboards, including sorting and filtering. Prefer native HTML tables for small read-only summaries.
---

# Tabulator for browser apps

Read [selection](../../references/library-selection.md), [workflow](../../references/workflow.md) and the `tabulator` entry in [the approved inventory](../../references/libraries.json). Use only an approved entry and its exact packages/peers. Preserve the agreed plan; route missing prerequisites through [managed setup](../../references/managed-build.md). Load only the selected libraries.

## Usage pattern

```js
import { TabulatorFull } from 'tabulator-tables';
import 'tabulator-tables/dist/css/tabulator.min.css';
import './theme/tabulator.css';
const table = new TabulatorFull(element, { data: rows, layout: 'fitColumns',
  columns: [{ title: 'Region', field: 'region', formatter: 'plaintext' },
    { title: 'Revenue', field: 'revenue', sorter: 'number' }] });
```

Give the element class bab-table. Use local data and plaintext formatters for imported strings; do not configure AJAX. Wait for tableBuilt before calling filter/update APIs. Use a text totals summary and accessible controls outside the table. Destroy the instance on teardown.

Visual libraries use the relevant [theme assets](../../assets/library-themes/) with the bundled [Campus Designer](../campus-designer/SKILL.md). Generated paths above are relative to the student's app, not the installed plugin.

## Verify

Check sorting, filtering, totals, HTML-like input displayed literally, keyboard use, narrow horizontal scrolling and cleanup. Record failures and observed production behavior through [Evaluate](../evaluate-browser-app/SKILL.md). Check the [official documentation](https://tabulator.info/docs/6.3) for API detail, but do not replace pinned versions or add remote services.
