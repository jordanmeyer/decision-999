import { inventory, simulate } from '../app/model.js';
export const cases = [
  ['Stock 10, demand 3 leaves 7', () => JSON.stringify(inventory(10, 3)) === '{"remaining":7,"unmet":0}'],
  ['Stock 10, demand 12 leaves 2 unmet', () => JSON.stringify(inventory(10, 12)) === '{"remaining":0,"unmet":2}'],
  ['Zero stock leaves all demand unmet', () => inventory(0, 4).unmet === 4],
  ['Identical seed reproduces the run', () => JSON.stringify(simulate(10, 20, 30, 42)) === JSON.stringify(simulate(10, 20, 30, 42))],
  ['No-demand limit leaves all stock', () => simulate(10, 0, 5, 42).every(row => row.remaining === 10 && row.unmet === 0)],
  ['Inventory conservation', () => simulate(10, 20, 100, 42).every(row => 10 + row.unmet === row.demand + row.remaining)],
  ['Fractional units rejected', () => { try { inventory(10, 1.5); return false; } catch { return true; } }],
];
