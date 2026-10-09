export function pricing({ price, cost, quantity, fixed }) {
  if (![price, cost, quantity, fixed].every(Number.isFinite) || Math.min(price, cost, quantity, fixed) < 0) {
    throw new Error('Use finite, nonnegative inputs.');
  }
  const margin = price - cost;
  const breakEven = fixed === 0 ? 0 : margin > 0 ? fixed / margin : null;
  return { profit: margin * quantity - fixed, breakEven, wholeUnits: breakEven === null ? null : Math.ceil(breakEven) };
}
