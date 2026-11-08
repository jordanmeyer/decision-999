---
name: echarts-browser-app
description: Build analytical charts for dashboards or interactive presentations using bundled Apache ECharts. Use when charts explain local data or model results.
---

# Apache ECharts for browser apps

Read [selection](../../references/library-selection.md), [workflow](../../references/workflow.md) and the `echarts` entry in [the approved inventory](../../references/libraries.json). Use only an approved entry and its exact packages/peers. Preserve the agreed plan; route missing prerequisites through [managed setup](../../references/managed-build.md). Load only the selected libraries.

For executive or uploaded-data dashboards, read the matching [decision-model guidance](../../references/decision-models.md#executive-dashboards). For inventory or ranking charts, read only that model’s section. Choose the view that explains the decision, not the chart type that is easiest to render.

## Usage pattern

Read [React and TypeScript integration](../../references/react-libraries.md). Copy this standalone example into `app/recipes/echarts.tsx`. Install the inventory’s development type packages and copy any listed declarations before typechecking.

```tsx
import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export function Example() {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = host.current!;
    let disposed = false;
    let chart: echarts.ECharts | undefined;
    const observer = new ResizeObserver(() => chart?.resize());
    void document.fonts.ready.then(() => {
      if (disposed) return;
      const css = getComputedStyle(element);
      chart = echarts.init(element);
      chart.setOption({ animation: false, aria: { enabled: true },
        textStyle: { fontFamily: css.fontFamily },
        tooltip: { renderMode: 'richText' },
        xAxis: { type: 'category', data: ['Revenue', 'Cost'] },
        yAxis: { type: 'value', name: 'Dollars' },
        series: [{ type: 'bar', data: [390, 234],
          itemStyle: { color: css.getPropertyValue('--duke-navy-blue').trim() },
          emphasis: { disabled: true }, blur: { itemStyle: { opacity: 1 } } }] });
      observer.observe(element);
    });
    return () => { disposed = true; observer.disconnect(); chart?.dispose(); };
  }, []);
  return <section><div ref={host} style={{ height: 280 }} />
    <p>Revenue: $390. Cost: $234. Synthetic example.</p></section>;
}
```

Use echarts.js and tokens.js. The adapter preserves bar/pie/scatter fills in emphasis and selection, prevents blur fading, and disables line emphasis color lifting. Keep these settings when customizing series; other series types need explicit solid interaction styles and a rendered-state check. Give the chart a measured height. Use a ResizeObserver to resize it; resize again when a containing slide/view becomes visible. Dispose the chart and observer on teardown. Provide a text/table equivalent with units and non-color labels. Avoid HTML tooltip formatters for imported strings.

Visual libraries follow [shared identity selection](../../references/workflow.md#shared-design); the supplied [theme assets](../../assets/library-themes/) implement the Duke default. Generated paths above are relative to the student's app, not the installed plugin.

Choose round, readable tick steps and precision appropriate to the decision; reserve exact values for tooltips or the table. Avoid incidental decimal ticks such as 12.2K when a nearby round interval communicates the same scale. Recheck label collisions after resizing and on extreme inputs.

## Verify

Check normal, hover/highlight, selected and blurred marks against the original solid colors; do not rely on initial palette inspection. Check displayed values against independently derived totals, initial hidden containers, narrow layout, text alternatives, and cleanup after navigation. Record failures and observed production behavior through [Evaluate](../evaluate-browser-app/SKILL.md). Check the [official documentation](https://echarts.apache.org/handbook/en/) for API detail, but do not replace pinned versions or add remote services.
