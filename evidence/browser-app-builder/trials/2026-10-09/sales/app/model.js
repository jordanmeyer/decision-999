import Papa from 'papaparse';

export const MAX_BYTES = 2_000_000;
const headers = ['region', 'product', 'quantity', 'unit_price', 'unit_cost'];

export function parseSales(text) {
  if (new TextEncoder().encode(text).length > MAX_BYTES) throw Error('CSV exceeds the 2 MB limit.');
  const parsed = Papa.parse(text.replace(/^\uFEFF/, ''), { skipEmptyLines: 'greedy', dynamicTyping: false });
  if (parsed.errors.length) throw Error(`Invalid CSV: ${parsed.errors[0].message}`);
  const [fields, ...data] = parsed.data;
  if (!fields || fields.length !== 5 || new Set(fields).size !== 5 || headers.some(h => !fields.includes(h)))
    throw Error('Use exactly these headers: region, product, quantity, unit_price, unit_cost.');
  if (!data.length || data.length > 5000) throw Error('CSV must contain 1–5,000 sales rows.');
  const rows = data.map((values, index) => {
    const fail = message => { throw Error(`Row ${index + 2}: ${message}`); };
    if (values.length !== 5) fail('expected exactly five fields.');
    const row = Object.fromEntries(fields.map((field, i) => [field, values[i].trim()]));
    for (const field of ['region', 'product']) if (!row[field] || row[field].length > 120) fail(`${field} must contain 1–120 characters.`);
    if (!/^\d+$/.test(row.quantity) || Number(row.quantity) > 1_000_000) fail('quantity must be a whole number from 0 to 1,000,000.');
    const cents = field => {
      if (!/^\d+(?:\.\d{1,2})?$/.test(row[field]) || Number(row[field]) > 1_000_000) fail(`${field} must be USD 0–1,000,000 with at most two decimals.`);
      const [dollars, fraction = ''] = row[field].split('.');
      return Number(dollars) * 100 + Number(fraction.padEnd(2, '0'));
    };
    const quantity = Number(row.quantity), unitPrice = cents('unit_price'), unitCost = cents('unit_cost');
    const revenue = quantity * unitPrice, cost = quantity * unitCost;
    return { id: index + 1, region: row.region, product: row.product, quantity, unitPrice, unitCost, revenue, cost, profit: revenue - cost };
  });
  const sum = totals(rows);
  if (!Number.isSafeInteger(sum.revenue) || !Number.isSafeInteger(sum.cost)) throw Error('Dataset totals exceed exact-cent calculation limits.');
  return rows;
}

export const filterSales = (rows, region = '', product = '') => rows.filter(row => (!region || row.region === region) && (!product || row.product === product));
export const totals = rows => rows.reduce((sum, row) => ({ revenue: sum.revenue + row.revenue, cost: sum.cost + row.cost, profit: sum.profit + row.profit }), { revenue: 0, cost: 0, profit: 0 });
