import { simulate } from './model.js';
document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  const values = Object.fromEntries([...new FormData(event.target)].map(([key, value]) => [key, Number(value)]));
  const rows = simulate(values.stock, values.maxDemand, values.days, values.seed);
  const unmet = rows.reduce((total, row) => total + row.unmet, 0);
  const remaining = rows.reduce((total, row) => total + row.remaining, 0);
  document.querySelector('#result').textContent = `${rows.length} days: ${unmet} unmet units; ${remaining} remaining units. Seed: ${values.seed}.`;
});
