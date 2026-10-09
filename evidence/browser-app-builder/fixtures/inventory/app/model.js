export function inventory(stock, demand) {
  if (![stock, demand].every(Number.isInteger) || Math.min(stock, demand) < 0) throw new Error('Use nonnegative whole units.');
  return { remaining: Math.max(0, stock - demand), unmet: Math.max(0, demand - stock) };
}

// Reproducible illustrative uniform daily demand, not a calibrated business model.
export function simulate(stock, maxDemand, days, seed) {
  if (![stock, maxDemand, days, seed].every(Number.isInteger) || Math.min(stock, maxDemand, days) < 0) throw new Error('Use whole-unit inputs.');
  let state = seed >>> 0;
  return Array.from({ length: days }, () => {
    state = (Math.imul(1664525, state) + 1013904223) >>> 0;
    const demand = Math.floor(state / 4294967296 * (maxDemand + 1));
    return { demand, ...inventory(stock, demand) };
  });
}
