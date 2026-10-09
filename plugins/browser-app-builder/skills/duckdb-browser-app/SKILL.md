---
name: duckdb-browser-app
description: Build substantial local SQL data explorers using DuckDB-Wasm workers, real joins and aggregations, editable queries and table/chart results.
---

# Local SQL with DuckDB-Wasm

Read [selection](../../references/library-selection.md), [workflow](../../references/workflow.md) and `duckdb` in [inventory](../../references/libraries.json). Only an approved configuration may be used. Record tables, types, scale, query limits and expected joins/aggregations in the plan. Use [managed setup](../../references/managed-build.md).

Bundle the EH WASM and browser worker locally using Vite asset URLs. This single-thread configuration does not require cross-origin isolation headers unavailable on ordinary Pages. Do not copy CDN initialization examples or enable extension downloads.

```js
import * as duckdb from '@duckdb/duckdb-wasm';
import wasmUrl from '@duckdb/duckdb-wasm/dist/duckdb-eh.wasm?url';
import workerUrl from '@duckdb/duckdb-wasm/dist/duckdb-browser-eh.worker.js?url';
const db = new duckdb.AsyncDuckDB(new duckdb.VoidLogger(), new Worker(workerUrl));
await db.instantiate(wasmUrl);
await db.open({ maximumThreads: 1 });
const connection = await db.connect();
// Register the app's controlled local input before exposing editable SQL.
await db.registerFileText('local.csv', validatedCsvText);
await connection.query(`
  SET autoinstall_known_extensions=false;
  SET autoload_known_extensions=false;
  SET allowed_paths=['local.csv'];
  SET enable_external_access=false;
  SET lock_configuration=true;
`);
```

Before exposing editable SQL, turn off known-extension installation/loading and external access, allow only the fixed local input filenames the app actually needs, and lock configuration. Verify these database settings reject remote reads, extension loading and attempts to re-enable access; a regex filter is not a substitute. Register visitor file contents under controlled local names, never treat their filename or SQL text as a URL. Validate type/schema and import size; replace data transactionally.

Use actual SQL execution, a schema browser, useful example queries and clear loading/error/cancel states. Bound result display and query duration. Cancellation must terminate ongoing computation and permit a fresh usable database; reset the worker if graceful cancellation is unavailable. Render text values safely. Preserve DECIMAL/BigInt precision through display rather than coercing all Arrow values to Number. Close connections and terminate workers on disposal.

Retain the supplemental DuckDB notice when the distribution omits it. Apply [Campus Designer](../campus-designer/SKILL.md) to the selected table/chart interface. Verify independently calculated joins, groupings, nulls and exact-money outputs, invalid/expensive queries, cancellation/recovery, no external SQL access and production WASM/worker paths. Report first-load/bundle limits and actual browser support through [Evaluate](../evaluate-browser-app/SKILL.md).
