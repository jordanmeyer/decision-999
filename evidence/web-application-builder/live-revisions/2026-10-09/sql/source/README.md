# Fulfillment Lab

A local SQL workspace for a fictional wholesale desk-accessory supplier. Explore unshipped order value by region and product, inspect the grain of four related tables, and compare a mistaken shipment-event join with the correct line-level aggregation.

The tiny example reconciles **$550 ordered = $275 shipped + $275 unshipped**. The deliberately mistaken join reports $750. The default deterministic dataset has 2,400 orders, 7,200 order lines, 12 products and 9,900 shipment events.

## Run

Use Node 22.19.0 and npm 10.9.3. From this folder:

```sh
npm ci
npm run build
npm run preview -- --port 9716
```

Open `http://127.0.0.1:9716/bab-example-sql/`. For the real browser integration suite, run `npm run test:browser -- --port 9715` and open `http://127.0.0.1:9715/tests/`.

## What to try

- Start with a one-table SELECT, then filter/sort and count orders by region.
- Use the tiny join-trap button to compare the $750 mistaken join with the $550 total.
- Continue to the region and product queries to investigate unshipped value.
- Open a schema table and insert a table or column at the editor selection.
- Edit a SELECT or CTE and run with Ctrl/⌘+Enter. A failed query retains its text and identifies any older result.
- Known integer money fields display exact USD; raw values and original names remain in downloaded CSV. Other aliases retain their query units. Storage types are available in a disclosure.
- Cancel a costly query, reset the local database and run again.

The engine and worker are bundled locally. DuckDB's native prepared-statement parser and read-only transactions restrict queries; external access and extension loading are disabled and configuration is locked. See [DECISIONS.md](DECISIONS.md) for the boundary and [EVALUATION.md](EVALUATION.md) for actual evidence and limitations.

This is an independent classroom example with synthetic data. It has no institutional affiliation or endorsement. Public commits use the authorized course identity Jordan Meyer <jordanmeyer@protonmail.com>. Source destination: [bab-example-sql](https://github.com/jordanmeyer/bab-example-sql).

The current revision uses locally bundled EB Garamond/Open Sans with retained licenses, a concise learning objective and [How this was built](BUILD-STORY.md). All data is invented. The browser integration suite adds beginner-query and money-formatting boundaries to the original enforcement checks. See EVALUATION.md for observed rounds rather than assuming build success proves UI correctness.
