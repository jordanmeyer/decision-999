# Decisions and limits

## Business meaning

Unshipped order value is outstanding units multiplied by the original line's unit price. It is not accounts receivable, profit, a due-date measure or a cancellation forecast. No tax, freight or cost data is invented. Shipments aggregate to line_id before the left join so multiple events do not inflate order value and lines with no shipments remain visible.

The tiny case was confirmed in the simulated planning conversation. The large case is deterministic and synthetic, with no user uploads or external datasets. The SQL is real and editable; the interface does not substitute precomputed answers. The independent row-arithmetic helper is used by tests, not the result UI.

## Native SQL boundary

An early JSON-AST approach was rejected because DuckDB-Wasm autoloaded its JSON extension. That failed approach remains as non-executing historical text in `tests/history`. It is not used by the app.

The shipped engine uses DuckDB's native tokenizer to remove one final delimiter without confusing semicolons inside strings/comments, including UTF-8 byte offsets. It passes original SQL text into a bounded SELECT subquery through **native prepare**, which rejects multiple statements. A native READ ONLY transaction independently rejects writes. Four authored local CSV names and their explicit schemas are registered before configuration is locked. Extension installation/autoload and external access are disabled; attempts to re-enable access fail. No regex SQL sanitizer is involved.

This is a local classroom SELECT workspace, not an adversarial multi-user database service. The selected EH bundle needs no cross-origin isolation headers. Source and build configuration bundle both worker and WASM using local Vite asset URLs. Browser asset inventory sees the worker, but does not expose its internal requests; that observation limit is retained in evaluation.

## Precision and presentation

Order prices use integer cents. BIGINT and DECIMAL results become exact strings; DECIMAL Arrow values are scaled without Number conversion. Original large SQL literals never round-trip through JavaScript JSON. DATE columns render ISO calendar dates. Other arbitrary DuckDB types use their Arrow string representation; the app does not promise a custom editor for nested types.

The optional chart requires exactly two columns, unique nonempty text categories, at most 20 uncapped rows and finite numeric values within safe display bounds. Numeric charts are approximate visualizations; the table remains the exact reference. A `_cents` measure is charted in USD and the table stays in cents. Category labels may truncate on narrow screens; full labels remain in the table.

CSV export includes at most the 500 shown rows, with text/header formula prefixes escaped. NULL exports as an empty CSV field; the table explicitly labels NULL. SQL export preserves the editor text. The result panel retains the SQL that produced its rows and signals when the editor differs.

## Recovery and ownership

Queries have a default eight-second deadline. Cancellation and timeout terminate the actual worker; reset creates a new database and retains the SQL. A generation guard discards stale completions after reset/dataset changes. Display is capped at 500 rows, fetched with one extra row for truncation detection; the cap does not bound intermediate computation. SQL is limited to 16 KiB, result columns to 30, and database memory to 128 MB.

One engine owns query execution; one UI owns controls/results. Native autocomplete is disabled so history restoration does not silently pair nondefault controls with a fresh default database. A persisted page keeps its worker; normal disposal closes it. There is no database persistence, account, backend, remote asset service or telemetry.

Simplification pass: removed JSON extension/parser statements entirely, retained native SQL parsing rather than a second parser, reused one engine generation guard for resets, and initializes the chart only when an eligible result exists. No speculative abstractions or duplicate result models were added.


## Authorized live revision, 2026-10-09

Default to the substantial existing data and start with one-table SELECT. Preserve the tiny case as an explicit hand-check action. Add WHERE/ORDER BY and GROUP BY steps before the joins; this teaches progressively without weakening the original business question. Schema buttons insert quoted controlled identifiers at the selection and return focus to the editor. Result provenance tracks custom edits, including schema insertions and browser return. Run remains explicit because partially edited SQL can be invalid or expensive.

Known integer money fields display exact dollars using BigInt, with currency in their headers. Unknown aliases stay raw; arbitrary suffixes do not imply dollars. Exports preserve raw numeric values and original column names. Raw storage types are secondary reference material. Local licensed fonts and one concise business explanation replace system-font substitutes and initial engine jargon. No engine enforcement or data-generation changes are required. DuckDB is approved by the current dependency inventory; the old candidate discussion remains as history.
