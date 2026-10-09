import { pricing } from './model.js';
document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  const values = Object.fromEntries([...new FormData(event.target)].map(([key, value]) => [key, Number(value)]));
  const result = pricing(values);
  document.querySelector('#result').textContent = `Profit: ${result.profit.toFixed(2)}. ` +
    (result.breakEven === null ? 'No break-even volume: contribution margin is not positive.' :
      `Break-even: ${result.breakEven.toFixed(2)} units; ${result.wholeUnits} whole units.`);
});
