const prepared = `WITH shipped AS (
  SELECT line_id, SUM(shipped_units)::BIGINT AS shipped_units
  FROM shipment_lines
  GROUP BY line_id
), fulfillment AS (
  SELECT l.*, COALESCE(s.shipped_units, 0) AS shipped_units,
    l.ordered_units - COALESCE(s.shipped_units, 0) AS outstanding_units
  FROM line_items l
  LEFT JOIN shipped s ON l.line_id = s.line_id
)`;
export const queries=[
 {id:'inspect',title:'1 · Inspect the product table',note:'Start with one table: SELECT chooses columns, FROM chooses the table, and ORDER BY makes the result predictable. Try removing category or reversing the sort with DESC.',sql:`SELECT product, category
FROM products
ORDER BY product;`},
 {id:'filter',title:'2 · Filter and sort order lines',note:'WHERE keeps lines with at least 35 units. ORDER BY puts the largest first, and LIMIT keeps this first inspection short. Prices display as USD; the SQL stores cents.',sql:`SELECT line_id, ordered_units, unit_price_cents
FROM line_items
WHERE ordered_units >= 35
ORDER BY ordered_units DESC, line_id
LIMIT 20;`},
 {id:'aggregate',title:'3 · Count orders by region',note:'GROUP BY reduces many orders to one row per region. COUNT(*) counts orders because orders has one row per order. The large sample has 600 orders in each region.',sql:`SELECT region, COUNT(*)::BIGINT AS order_count
FROM orders
GROUP BY region
ORDER BY order_count DESC, region;`},
 {id:'regions',title:'4 · Where is value waiting?',note:'Outstanding order value by region. Aggregate shipments before joining; lines without shipments stay in the result.',sql:`${prepared}
SELECT o.region,
  SUM(f.outstanding_units * f.unit_price_cents)::BIGINT AS outstanding_cents
FROM fulfillment f
JOIN orders o ON f.order_id = o.order_id
GROUP BY o.region
ORDER BY outstanding_cents DESC, o.region;`},
 {id:'products',title:'5 · Which products drive the gap?',note:'Same correct line-level join, grouped by product instead of region.',sql:`${prepared}
SELECT p.product,
  SUM(f.outstanding_units * f.unit_price_cents)::BIGINT AS outstanding_cents
FROM fulfillment f
JOIN products p ON f.product_id = p.product_id
GROUP BY p.product
ORDER BY outstanding_cents DESC, p.product;`},
 {id:'totals',title:'6 · Reconcile every cent',note:'Gross equals shipped plus outstanding. These are merchandise order values, not profit or accounts receivable.',sql:`${prepared}
SELECT SUM(ordered_units)::BIGINT AS ordered_units,
  SUM(shipped_units)::BIGINT AS shipped_units,
  SUM(ordered_units * unit_price_cents)::BIGINT AS gross_cents,
  SUM(shipped_units * unit_price_cents)::BIGINT AS shipped_cents,
  SUM(outstanding_units * unit_price_cents)::BIGINT AS outstanding_cents
FROM fulfillment;`},
 {id:'mistake',title:'7 · The duplicate-join trap',note:'A deliberately mistaken join repeats order value for every shipment event. In the tiny case it reports $750 instead of $550. Compare the two rows, then inspect the SQL.',sql:`SELECT 'Mistaken: join every shipment event' AS method,
  SUM(l.ordered_units * l.unit_price_cents)::BIGINT AS gross_cents
FROM line_items l
LEFT JOIN shipment_lines s ON l.line_id = s.line_id
UNION ALL
SELECT 'Correct: count each order line once' AS method,
  SUM(ordered_units * unit_price_cents)::BIGINT AS gross_cents
FROM line_items;`},
 {id:'lines',title:'8 · Audit the line-level join',note:'See the units and exact cents behind each group. Larger results show at most 500 rows; add ORDER BY for a stable order.',sql:`${prepared}
SELECT f.line_id, o.region, p.product, f.ordered_units, f.shipped_units,
  f.outstanding_units,
  (f.outstanding_units * f.unit_price_cents)::BIGINT AS outstanding_cents
FROM fulfillment f
JOIN orders o ON f.order_id = o.order_id
JOIN products p ON f.product_id = p.product_id
ORDER BY f.line_id;`},
 {id:'unshipped',title:'9 · Orders with no shipments',note:'NOT EXISTS keeps an order only when none of its lines has a shipment event. A partially shipped order does not belong here.',sql:`SELECT o.order_id, o.region, o.ordered_on
FROM orders o
WHERE NOT EXISTS (
  SELECT 1 FROM line_items l
  JOIN shipment_lines s ON s.line_id = l.line_id
  WHERE l.order_id = o.order_id
)
ORDER BY o.order_id;`}
];
