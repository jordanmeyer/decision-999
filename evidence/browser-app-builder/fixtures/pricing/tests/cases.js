import { pricing } from '../app/model.js';
const base = { price: 20, cost: 12, quantity: 100, fixed: 500 };
export const cases = [
  ['Profit from hand calculation', () => pricing(base).profit === 300],
  ['Continuous break-even', () => pricing(base).breakEven === 62.5],
  ['Whole-unit break-even', () => pricing(base).wholeUnits === 63],
  ['Below break-even loses money', () => pricing({ ...base, quantity: 62 }).profit === -4],
  ['Whole-unit break-even covers cost', () => pricing({ ...base, quantity: 63 }).profit === 4],
  ['Zero margin cannot cover fixed cost', () => pricing({ ...base, price: 12 }).breakEven === null],
  ['Negative margin cannot cover fixed cost', () => pricing({ ...base, price: 11 }).breakEven === null],
  ['Zero quantity loses fixed cost', () => pricing({ ...base, quantity: 0 }).profit === -500],
  ['No fixed cost breaks even at zero', () => pricing({ ...base, fixed: 0 }).breakEven === 0],
  ['Nonfinite input is rejected', () => { try { pricing({ ...base, price: NaN }); return false; } catch { return true; } }],
  ['Negative input is rejected', () => { try { pricing({ ...base, quantity: -1 }); return false; } catch { return true; } }],
];
