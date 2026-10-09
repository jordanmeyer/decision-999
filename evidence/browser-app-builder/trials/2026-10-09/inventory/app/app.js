import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, LegendComponent, AriaComponent } from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';
import { echartsTheme } from './theme/echarts.js';
import { defaults, run, summarize, toCSV } from './model.js';
echarts.use([LineChart, GridComponent, TooltipComponent, LegendComponent, AriaComponent, SVGRenderer]);
const form = document.querySelector('#scenario');
const status = document.querySelector('#status');
const error = document.querySelector('#error');
const policy = document.querySelector('#policy');
const names = { daily: 'Daily reorder', weekly: 'Weekly order-up-to' };
const chart = echarts.init(document.querySelector('#chart'), echartsTheme(), { renderer: 'svg' });
const observer = new ResizeObserver(() => chart.resize());
observer.observe(document.querySelector('#chart'));
document.querySelector('#chart-panel').addEventListener('toggle', () => chart.resize());
window.addEventListener('pagehide', () => { observer.disconnect(); chart.dispose(); });
let input, results;
function ledger() {
  document.querySelector('#caption').textContent = `${names[policy.value]} · units`;
  document.querySelector('#rows').replaceChildren(...results[policy.value].map(row => {
    const tr = document.createElement('tr');
    for (const key of ['day', 'opening', 'arrivals', 'demand', 'fulfilled', 'unmet', 'stock', 'ordered', 'pending']) {
      const cell = document.createElement(key === 'day' ? 'th' : 'td');
      if (key === 'day') cell.scope = 'row';
      cell.textContent = row[key]; tr.append(cell);
    }
    return tr;
  }));
}
function render() {
  for (const field of form.querySelectorAll('input')) { field.removeAttribute('aria-invalid'); field.removeAttribute('aria-describedby'); }
  try {
    const next = Object.fromEntries([...new FormData(form)].map(([key, value]) => [key, key === 'seed' ? value : value.trim() ? Number(value) : NaN]));
    const output = run(next);
    input = next; results = output; error.textContent = '';
    document.querySelector('#run-label').textContent = `Seed “${input.seed}” · ${input.days} days · demand ${input.min}–${input.max} units/day · ${input.lead}-day lead`;
    document.querySelector('#summary').replaceChildren(...Object.entries(results).map(([key, rows]) => {
      const stats = summarize(rows); const block = document.createElement('article'); block.className = `policy ${key}`;
      block.innerHTML = `<h3>${names[key]}</h3><div class="metrics"><div class="metric"><strong>${stats.fill.toFixed(1)}%</strong><span>Fulfilled demand${stats.demand ? '' : ' (no demand)'}</span></div><div class="metric"><strong>${stats.meanStock.toFixed(1)}</strong><span>Mean end stock · units</span></div></div><p>${stats.unmet} units unmet · ${stats.pending} units pending at end</p>`;
      return block;
    }));
    chart.setOption({ animation: false, aria: { enabled: true }, tooltip: { trigger: 'axis', renderMode: 'richText' }, legend: { selectedMode: false, bottom: 0 }, grid: { left: 48, right: 16, top: 28, bottom: 60 }, xAxis: { type: 'category', name: 'Day', data: results.daily.map(row => row.day) }, yAxis: { type: 'value', name: 'Units', min: 0 }, series: Object.entries(results).map(([key, rows]) => ({ name: names[key], type: 'line', data: rows.map(row => row.stock), symbol: rows.length === 1 ? 'circle' : 'none', symbolSize: 10, lineStyle: { width: 3, type: key === 'weekly' ? 'dashed' : 'solid' }, emphasis: { disabled: true } })) }, true);
    ledger(); status.textContent = 'Comparison updated. Both policies use identical daily demand.';
  } catch (issue) {
    const field = form.elements[issue.field];
    error.textContent = field ? `${field.labels[0].textContent.trim()}: ${issue.message}` : issue.message;
    status.textContent = 'Results still show the last successful run. Correct the inputs and run again.';
    if (field) { field.setAttribute('aria-invalid', 'true'); field.setAttribute('aria-describedby', 'error'); field.focus(); }
  }
}
form.addEventListener('submit', event => { event.preventDefault(); render(); });
form.addEventListener('input', () => { status.textContent = 'Inputs changed. Run comparison to update results and export.'; });
document.querySelector('#reset').addEventListener('click', () => { for (const [key, value] of Object.entries(defaults)) form.elements[key].value = value; render(); });
policy.addEventListener('change', ledger);
document.querySelector('#download').addEventListener('click', () => {
  const url = URL.createObjectURL(new Blob([toCSV(results, input)], { type: 'text/csv;charset=utf-8' }));
  const link = document.createElement('a'); link.href = url; link.download = 'inventory-daily.csv'; link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  status.textContent = 'CSV downloaded for the last successful run; all inputs and both policies are included.';
});
render();
