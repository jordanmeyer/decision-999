export function pricing({ price, cost, quantity, fixed }) {
  if (![price, cost, quantity, fixed].every(value => Number.isFinite(value) && value >= 0 && value <= 1000000) || !Number.isInteger(quantity)) {
    throw new Error('Use amounts from 0 to 1,000,000 and a whole-unit quantity in that range.');
  }
  const [priceCents, costCents, fixedCents] = [price, cost, fixed].map(amount => {
    const cents = Math.round(amount * 100);
    if (amount !== cents / 100) throw new Error('Use amounts with at most two decimal places.');
    return cents;
  });
  const marginCents = priceCents - costCents;
  const breakEven = fixedCents === 0 ? 0 : marginCents > 0 ? fixedCents / marginCents : null;
  return { profit: (marginCents * quantity - fixedCents) / 100, breakEven, wholeUnits: breakEven === null ? null : Math.ceil(breakEven) };
}
