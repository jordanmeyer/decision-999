---
name: echarts-browser-app
description: Build analytical charts for dashboards or interactive presentations using bundled Apache ECharts. Use when charts explain local data or model results.
---

# Apache ECharts for browser apps

Read [selection](../../references/library-selection.md), [workflow](../../references/workflow.md) and the `echarts` entry in [the approved inventory](../../references/libraries.json). Use only an approved entry and its exact packages/peers. Preserve the agreed plan; route missing prerequisites through [managed setup](../../references/managed-build.md). Load only the selected libraries.

## Usage pattern

```js
import * as echarts from 'echarts';
import { echartsTheme } from './theme/echarts.js';
const chart = echarts.init(element, echartsTheme());
chart.setOption({ aria: { enabled: true }, tooltip: { renderMode: 'richText' },
  xAxis: { type: 'category', data: ['Revenue', 'Cost'] }, yAxis: { type: 'value' },
  series: [{ type: 'bar', data: [390, 234] }] });
```

Use echarts.js and tokens.js. Give the chart a measured height. Use a ResizeObserver to resize it; resize again when a containing slide/view becomes visible. Dispose the chart and observer on teardown. Provide a text/table equivalent with units and non-color labels. Avoid HTML tooltip formatters for imported strings.

Visual libraries use the relevant [theme assets](../../assets/library-themes/) with the bundled [Campus Designer](../campus-designer/SKILL.md). Generated paths above are relative to the student's app, not the installed plugin.

## Verify

Check displayed values against independently derived totals, initial hidden containers, narrow layout, text alternatives, and cleanup after navigation. Record failures and observed production behavior through [Evaluate](../evaluate-browser-app/SKILL.md). Check the [official documentation](https://echarts.apache.org/handbook/en/) for API detail, but do not replace pinned versions or add remote services.
