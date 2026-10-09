import { TabulatorFull } from 'tabulator-tables';
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, AriaComponent } from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';
echarts.use([BarChart, GridComponent, TooltipComponent, AriaComponent, SVGRenderer]);
import 'tabulator-tables/dist/css/tabulator.min.css';
import './theme/duke-tokens.css';
import './theme/base.css';
import './theme/tabulator.css';
import './style.css';
import { echartsTheme } from './theme/echarts.js';
import example from './example.csv?raw';
import { parseSales, filterSales, totals, MAX_BYTES } from './model.js';

import { money } from './format.js';

const $ = id => document.getElementById(id);
let rows = parseSales(example);
const table = new TabulatorFull($('table'), {
  data: rows, initialSort: [{ column: 'id', dir: 'asc' }], columnHeaderSortMulti: false, height: 330, layout: 'fitDataStretch', placeholder: 'No matching sales.',
  columns: [
    { title: 'Row', field: 'id', sorter: 'number', width: 65 },
    { title: 'Region', field: 'region', formatter: 'plaintext', minWidth: 130 },
    { title: 'Product', field: 'product', formatter: 'plaintext', minWidth: 180 },
    { title: 'Units', field: 'quantity', sorter: 'number', width: 90 },
    ...[['Unit price', 'unitPrice'], ['Unit cost', 'unitCost'], ['Revenue', 'revenue'], ['Cost', 'cost'], ['Contribution', 'profit']].map(([title, field]) => ({ title: `${title} (USD)`, field, sorter: 'number', formatter: cell => money(cell.getValue()), minWidth: 165 }))
  ]
});
const ready = new Promise(resolve => table.on('tableBuilt', resolve));
ready.then(() => {
  $('sort').replaceChildren(...table.getColumnDefinitions().flatMap(column => ['asc', 'desc'].map(dir =>
    new Option(`${column.title}: ${column.sorter === 'number' ? (dir === 'asc' ? 'low to high' : 'high to low') : (dir === 'asc' ? 'A to Z' : 'Z to A')}`, `${column.field}:${dir}`))));
  $('sort').value = 'id:asc';
});
table.on('dataSorted', sorters => { if (sorters.length) $('sort').value = `${sorters[0].field}:${sorters[0].dir}`; });
$('sort').addEventListener('change', () => { const [field, dir] = $('sort').value.split(':'); table.setSort(field, dir); });
const chart = echarts.init($('chart'), echartsTheme(), { renderer: 'svg' });
const observer = new ResizeObserver(() => { if ($('chart').clientWidth) chart.resize(); });
observer.observe($('chart'));
$('comparison').addEventListener('toggle', () => { if ($('comparison').open) chart.resize(); });

function populateFilters() {
  for (const field of ['region', 'product']) {
    $(field).replaceChildren(new Option(`All ${field === 'region' ? 'regions' : 'products'}`, ''), ...[...new Set(rows.map(row => row[field]))].sort().map(value => new Option(value, value)));
  }
}
async function render() {
  const filtered = filterSales(rows, $('region').value, $('product').value);
  const sum = totals(filtered);
  $('matches').textContent = filtered.length ? `${filtered.length} of ${rows.length} sales rows match.` : `No matching sales. 0 of ${rows.length} rows; all totals are $0.00.`;
  for (const field of ['revenue', 'cost', 'profit']) $(field).textContent = money(sum[field]);
  chart.setOption({ animation: false, aria: { enabled: true }, tooltip: { trigger: 'item', renderMode: 'richText', formatter: params => `${params.name}: ${money(params.data.cents)}` },
    grid: { left: 75, right: 18, top: 25, bottom: 48 },
    xAxis: { type: 'category', data: ['Revenue', 'Cost', 'Contribution'], axisLabel: { interval: 0 } },
    yAxis: { type: 'value', name: 'USD' },
    series: [{ type: 'bar', colorBy: 'data', selectedMode: 'single', data: [sum.revenue, sum.cost, sum.profit].map(cents => ({ value: cents / 100, cents })), label: { show: true, position: 'top', formatter: params => money(params.data.cents) } }]
  });
  await ready;
  await table.replaceData(filtered);
}
async function restore() {
  await ready; table.setSort('id', 'asc');
  rows = parseSales(example); populateFilters(); $('file').value = '';
  $('status').textContent = 'Bundled synthetic example loaded: 3 sales rows.'; render();
}
$('file').addEventListener('change', async event => {
  const file = event.target.files[0];
  if (!file) return;
  $('file').disabled = true; $('example').disabled = true;
  try {
    if (file.size > MAX_BYTES) throw Error('CSV exceeds the 2 MB limit.');
    const incoming = parseSales(await file.text());
    rows = incoming; populateFilters(); await ready; table.setSort('id', 'asc');
    $('status').textContent = `Imported ${rows.length} sales rows. Local file remains in memory only.`; await render();
  } catch (error) { $('status').textContent = `Import rejected. ${error.message} Current data and filters are unchanged.`; }
  finally { $('file').disabled = false; $('example').disabled = false; $('file').value = ''; }
});
for (const id of ['region', 'product']) $(id).addEventListener('change', render);
$('reset').addEventListener('click', () => { $('region').value = ''; $('product').value = ''; render(); });
$('example').addEventListener('click', restore);
$('notices').href = import.meta.env.MODE === 'test' ? './public/THIRD-PARTY-NOTICES.txt' : `${import.meta.env.BASE_URL}THIRD-PARTY-NOTICES.txt`;
window.addEventListener('pagehide', event => { if (!event.persisted) { observer.disconnect(); chart.dispose(); table.destroy(); } });
restore();
