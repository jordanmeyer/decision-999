// Keep exact cents through presentation; chart coordinates may be approximate.
const dollars = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });
export function money(cents) {
  const amount = BigInt(cents), absolute = amount < 0n ? -amount : amount;
  return `${amount < 0n ? '-' : ''}$${dollars.format(absolute / 100n)}.${String(absolute % 100n).padStart(2, '0')}`;
}
