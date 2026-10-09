# Fulfillment Lab

A local SQL workspace for a fictional wholesale desk-accessory supplier. Explore unshipped order value by region and product, inspect the grain of four related tables, and compare a mistaken shipment-event join with the correct line-level aggregation.

The tiny example reconciles **$550 ordered = $275 shipped + $275 unshipped**. The deliberately mistaken join reports $750. A second deterministic dataset has 2,400 orders, 7,200 order lines, 12 products and 9,900 shipment events.

## Run

Use Node 22.19.0 and npm 10.9.3. From this folder:

```sh
npm ci
npm run build
npm run preview -- --port 9514
```

Open `http://127.0.0.1:9514/bab-example-sql/`. For the real browser integration suite, run `npm run test:browser -- --port 9513` and open `http://127.0.0.1:9513/tests/`.

## What to try

- Run “The duplicate-join trap” and inspect its SQL.
- Switch to the large dataset, then compare regions and products.
- Edit a SELECT or CTE and run with Ctrl/⌘+Enter. A failed query retains its text and identifies any older result.
- Inspect exact BIGINT/DECIMAL values, download the shown rows, or save the SQL.
- Cancel a costly query, reset the local database and run again.

The engine and worker are bundled locally. DuckDB's native prepared-statement parser and read-only transactions restrict queries; external access and extension loading are disabled and configuration is locked. See [DECISIONS.md](DECISIONS.md) for the boundary and [EVALUATION.md](EVALUATION.md) for actual evidence and limitations.

This is an independent classroom example with synthetic data. It has no institutional affiliation or endorsement. Public commits use the authorized course identity Jordan Meyer <jordanmeyer@protonmail.com>. Source destination: [bab-example-sql](https://github.com/jordanmeyer/bab-example-sql).
