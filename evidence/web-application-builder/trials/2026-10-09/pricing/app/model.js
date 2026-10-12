export function parseMoney(value) {
  const text = value.trim();
  if (!/^(?:\d+(?:\.\d{1,2})?|\.\d{1,2})$/.test(text)) {
    throw new Error('Enter nonnegative USD with up to 2 decimal places, without commas or symbols.');
  }
  const [whole, fraction = ''] = text.split('.');
  const cents = BigInt(whole || '0') * 100n + BigInt(fraction.padEnd(2, '0'));
  if (cents > 100000000n) throw new Error('Enter $1,000,000 or less.');
  return cents;
}

export function parseQuantity(value) {
  const text = value.trim();
  if (!/^\d+$/.test(text)) throw new Error('Enter a nonnegative whole number of units.');
  const units = BigInt(text);
  if (units > 1000000n) throw new Error('Enter 1,000,000 units or fewer.');
  return units;
}

export function calculate({ price, cost, fixed, quantity }) {
  const margin = price - cost;
  return {
    margin,
    revenue: price * quantity,
    variable: cost * quantity,
    profit: margin * quantity - fixed,
    breakEven: fixed === 0n ? 0n : margin <= 0n ? null : (fixed + margin - 1n) / margin,
  };
}

export function dollars(cents) {
  const absolute = cents < 0n ? -cents : cents;
  return `${cents < 0n ? '−' : ''}$${(absolute / 100n).toLocaleString('en-US')}.${String(absolute % 100n).padStart(2, '0')}`;
}
