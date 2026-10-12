import { calculate, dollars, parseMoney, parseQuantity } from './model.js';

const form = document.querySelector('#scenario');
const fields = ['price', 'cost', 'fixed', 'quantity'];
const show = (id, text) => { document.getElementById(id).textContent = text; };

function update() {
  const inputs = {};
  let errors = 0;
  for (const name of fields) {
    const field = form.elements.namedItem(name);
    try {
      inputs[name] = (name === 'quantity' ? parseQuantity : parseMoney)(field.value);
      field.removeAttribute('aria-invalid');
      show(`${name}-error`, '');
    } catch (error) {
      field.setAttribute('aria-invalid', 'true');
      show(`${name}-error`, error.message);
      errors++;
    }
  }
  document.querySelector('#values').hidden = errors > 0;
  if (errors) {
    show('status', `Results unavailable. Correct ${errors} ${errors === 1 ? 'field' : 'fields'} above.`);
    return;
  }
  const result = calculate(inputs);
  show('status', `${dollars(result.profit)} ${result.profit < 0n ? 'loss' : 'profit'}. Break-even: ${result.breakEven === null ? 'not possible' : `${result.breakEven.toLocaleString('en-US')} units`}.`);
  show('profit-label', result.profit < 0n ? 'Loss for the period' : 'Profit for the period');
  for (const name of ['profit', 'revenue', 'variable', 'margin']) show(name, dollars(result[name]));
  show('fixed-result', dollars(inputs.fixed));
  show('break-even', result.breakEven === null ? 'Not possible' : `${result.breakEven.toLocaleString('en-US')} units`);
  let explanation;
  if (result.breakEven === null) {
    explanation = result.margin === 0n
      ? 'Price equals variable unit cost. Each sale contributes $0.00, so no quantity can cover the positive fixed costs.'
      : 'Price is below variable unit cost. Every sale increases the loss, so no quantity can cover the positive fixed costs.';
  } else if (inputs.fixed === 0n) {
    explanation = result.margin < 0n
      ? 'Zero sales breaks even because fixed costs are zero. Every positive sale loses money.'
      : result.margin === 0n
        ? 'Zero sales breaks even because fixed costs are zero. Every positive quantity also earns exactly $0.00 profit.'
        : 'Zero sales covers zero fixed costs. Each positive sale adds to profit.';
  } else {
    explanation = 'The first whole-unit quantity that covers fixed costs. One fewer unit still makes a loss.';
    if (result.breakEven > 1000000n) explanation += ' This is above the 1,000,000-unit scenario input limit.';
  }
  show('explanation', explanation);
}

form.addEventListener('input', update);
form.addEventListener('submit', event => event.preventDefault());
form.addEventListener('reset', () => requestAnimationFrame(update));
update();
