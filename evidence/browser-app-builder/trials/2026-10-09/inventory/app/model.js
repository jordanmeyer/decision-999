import seedrandom from 'seedrandom';

export const defaults = { seed: 'classroom-1', days: 30, start: 35, min: 0, max: 12, lead: 2, point: 15, quantity: 30, target: 60 };
export const bounds = { days: [1, 90], start: [0, 10000], min: [0, 1000], max: [0, 1000], lead: [1, 30], point: [0, 10000], quantity: [1, 10000], target: [0, 10000] };
export function validate(input) {
  if (typeof input.seed !== 'string' || !input.seed.trim() || input.seed.length > 80) throw Error('Seed must contain 1–80 characters.');
  for (const [key, [min, max]] of Object.entries(bounds)) {
    if (!Number.isInteger(input[key]) || input[key] < min || input[key] > max) throw Error(`${key}: enter a whole number from ${min} to ${max}.`);
  }
  if (input.min > input.max) throw Error('Minimum daily demand must not exceed maximum.');
  return input;
}
export function demandSequence(seed, days, min, max) {
  const random = seedrandom(seed);
  return Array.from({ length: days }, () => min + Math.floor(random() * (max - min + 1)));
}
export function simulate(demand, input, policy) {
  let stock = input.start;
  let pipeline = [];
  return demand.map((requested, index) => {
    const day = index + 1;
    const opening = stock;
    const arrivals = pipeline.filter(order => order.day === day).reduce((sum, order) => sum + order.units, 0);
    pipeline = pipeline.filter(order => order.day !== day);
    const fulfilled = Math.min(stock + arrivals, requested);
    stock += arrivals - fulfilled;
    const position = stock + pipeline.reduce((sum, order) => sum + order.units, 0);
    const ordered = policy === 'daily' ? (position <= input.point ? input.quantity : 0) : (day % 7 === 0 ? Math.max(0, input.target - position) : 0);
    if (ordered) pipeline.push({ day: day + input.lead, units: ordered });
    return { day, opening, arrivals, demand: requested, fulfilled, unmet: requested - fulfilled, stock, ordered, pending: pipeline.reduce((sum, order) => sum + order.units, 0) };
  });
}
export function summarize(rows) {
  const total = key => rows.reduce((sum, row) => sum + row[key], 0);
  const demand = total('demand');
  return { demand, fill: demand ? 100 * total('fulfilled') / demand : 100, meanStock: total('stock') / rows.length, unmet: total('unmet'), pending: rows.at(-1).pending };
}
export function run(input) {
  validate(input);
  const demand = demandSequence(input.seed, input.days, input.min, input.max);
  return Object.fromEntries(['daily', 'weekly'].map(policy => [policy, simulate(demand, input, policy)]));
}
export function toCSV(results, input) {
  const fields = ['day', 'opening', 'arrivals', 'demand', 'fulfilled', 'unmet', 'stock', 'ordered', 'pending'];
  const quote = value => `"${String(value).replaceAll('"', '""')}"`;
  const keys = Object.keys(defaults);
  return [['policy', ...keys.map(key => `input_${key}`), ...fields].join(','), ...Object.entries(results).flatMap(([policy, rows]) => rows.map(row => [policy, ...keys.map(key => input[key]), ...fields.map(key => row[key])].map(quote).join(',')))].join('\r\n');
}
