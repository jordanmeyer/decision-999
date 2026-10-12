// Only documented integer money fields carry USD units. Arbitrary aliases stay raw.
const moneyNames = new Set(['unit_price_cents', 'gross_cents', 'shipped_cents', 'outstanding_cents']);
export const isMoney = field => field.typeId === 2 && moneyNames.has(field.name);
export const isNumeric = field => [2, 3, 7].includes(field.typeId);
export function exactDollars(value) {
  const cents = BigInt(value), amount = cents < 0n ? -cents : cents;
  const dollars = (amount / 100n).toLocaleString('en-US');
  const fraction = amount % 100n;
  return `${cents < 0n ? '-' : ''}$${dollars}${fraction ? '.' + String(fraction).padStart(2, '0') : ''}`;
}
export const fieldLabel = field => isMoney(field) ? field.name.replace(/_cents$/, '').replaceAll('_', ' ') + ' (USD)' : field.name;
export const resultValue = (field, value) => value === null ? 'NULL' : isMoney(field) ? exactDollars(value) : value;
