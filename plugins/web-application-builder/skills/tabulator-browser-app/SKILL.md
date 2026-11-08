---
name: tabulator-browser-app
description: Build substantial interactive data tables with Tabulator for local dashboards, including sorting and filtering. Prefer native HTML tables for small read-only summaries.
---

# Tabulator for browser apps

Read [selection](../../references/library-selection.md), [workflow](../../references/workflow.md) and the `tabulator` entry in [the approved inventory](../../references/libraries.json). Use only an approved entry and its exact packages/peers. Preserve the agreed plan; route missing prerequisites through [managed setup](../../references/managed-build.md). Load only the selected libraries.

For operating ledgers and uploaded-data analysis, read the matching [dashboard guidance](../../references/decision-models.md#executive-dashboards). The main table must be the accessible working view; a hidden alternate table does not repair an unusable primary ledger.

## Usage pattern

Read [React and TypeScript integration](../../references/react-libraries.md). Copy this standalone example into `app/recipes/tabulator.tsx`. Install the inventory’s development type packages and copy any listed declarations before typechecking.

```tsx
import { useEffect, useRef } from 'react';
import { TabulatorFull } from 'tabulator-tables';
import 'tabulator-tables/dist/css/tabulator.min.css';

export function Example() {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = document.createElement('div');
    host.current!.append(element);
    let disposed = false;
    let table: TabulatorFull | undefined;
    // Defer creation beyond StrictMode's immediate setup/cleanup probe.
    queueMicrotask(() => {
      if (disposed) return;
      table = new TabulatorFull(element, { data: [
        { region: 'North', revenue: 240 }, { region: '<b>South</b>', revenue: 150 }],
        layout: 'fitColumns', columns: [
          { title: 'Region', field: 'region', formatter: 'plaintext' },
          { title: 'Revenue ($)', field: 'revenue', sorter: 'number' }] });
      table.on('tableBuilt', () => { if (disposed) table?.destroy(); });
    });
    return () => { disposed = true; table?.destroy(); element.remove(); };
  }, []);
  return <section className="bab-table"><div ref={host} /><p>Total revenue: $390.</p></section>;
}
```

Give the element class bab-table. Use local data and plaintext formatters for imported strings; do not configure AJAX. Wait for tableBuilt before calling filter/update APIs. Use a text totals summary and accessible controls outside the table. Destroy the instance on teardown.

Visual libraries follow [shared identity selection](../../references/workflow.md#shared-design); the supplied [theme assets](../../assets/library-themes/) implement the Duke default. Generated paths above are relative to the student's app, not the installed plugin.

## Verify

Check sorting, filtering, totals, HTML-like input displayed literally, keyboard use, narrow horizontal scrolling and cleanup. Record failures and observed production behavior through [Evaluate](../evaluate-browser-app/SKILL.md). Check the [official documentation](https://tabulator.info/docs/6.3) for API detail, but do not replace pinned versions or add remote services.
