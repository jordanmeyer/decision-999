import { duke } from './tokens.js';
export function echartsTheme() {
  const d = duke();
  return { color: [d.navy,d.copper,d.teal,d.ironweed,d.royal], backgroundColor: d.paper,
    textStyle: { fontFamily: d.body, color: d.ink },
    title: { textStyle: { fontFamily: d.heading, color: d.navy } },
    categoryAxis: { axisLabel: { color: d.ink }, axisLine: { lineStyle: { color: d.muted } } },
    valueAxis: { axisLabel: { color: d.ink } },
    legend: { textStyle: { color: d.ink } } };
}
