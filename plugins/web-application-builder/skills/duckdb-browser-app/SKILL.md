---
name: duckdb-browser-app
description: Build substantial local SQL data explorers using DuckDB-Wasm workers, real joins and aggregations, editable queries and table/chart results.
---

# Local SQL with DuckDB-Wasm

Read [selection](../../references/library-selection.md), [workflow](../../references/workflow.md) and `duckdb` in [inventory](../../references/libraries.json). Only an approved configuration may be used. Record tables, types, scale, query limits and expected joins/aggregations in the plan. Use [managed setup](../../references/managed-build.md).

For learning explorers, read [SQL learning paths and units](../../references/decision-models.md#sql-learning-explorers). Starter queries, dataset scale and readable results are part of the teaching product, not only engine validation.

Bundle the EH WASM and browser worker locally using Vite asset URLs. This single-thread configuration does not require cross-origin isolation headers unavailable on ordinary Pages. Do not copy CDN initialization examples or enable extension downloads.

Read [React and TypeScript integration](../../references/react-libraries.md). This standalone `app/recipes/duckdb.tsx` example queries authored synthetic rows in a native read-only transaction. It has no editable SQL or imported files; add those only with the checks below. Each run owns a worker, a hard deadline and cancellation.

```tsx
import { useEffect, useRef, useState } from 'react';
import * as duckdb from '@duckdb/duckdb-wasm';
import wasmUrl from '@duckdb/duckdb-wasm/dist/duckdb-eh.wasm?url';
import workerUrl from '@duckdb/duckdb-wasm/dist/duckdb-browser-eh.worker.js?url';

export function Example() {
  const [run, setRun] = useState(0);
  const [status, setStatus] = useState('Ready.');
  const [pending, setPending] = useState(false);
  const cancel = useRef<() => void>(() => {});
  useEffect(() => {
    if (!run) return;
    const db = new duckdb.AsyncDuckDB(new duckdb.VoidLogger(), new Worker(workerUrl));
    let disposed = false;
    const stop = () => { disposed = true; cancel.current = () => {}; clearTimeout(deadline); void db.terminate(); };
    const deadline = window.setTimeout(() => { stop(); setPending(false); setStatus('Deadline reached. Run again to retry.'); }, 10_000);
    cancel.current = () => { stop(); setPending(false); setStatus('Cancelled. Run again to retry.'); };
    setPending(true);
    setStatus('Querying…');
    void (async () => {
      await db.instantiate(wasmUrl);
      if (disposed) return;
      await db.open({ maximumThreads: 1 });
      if (disposed) return;
      const connection = await db.connect();
      if (disposed) return;
      await connection.query(`SET autoinstall_known_extensions=false;
        SET autoload_known_extensions=false; SET enable_external_access=false;
        SET lock_configuration=true; BEGIN TRANSACTION READ ONLY;`);
      if (disposed) return;
      const result = await connection.query(`SELECT SUM(revenue) AS revenue
        FROM (VALUES (240), (150)) AS sales(revenue)`);
      if (disposed) return;
      const revenue = String(result.getChild('revenue')!.get(0));
      await connection.query('ROLLBACK');
      if (disposed) return;
      await connection.close();
      if (disposed) return;
      setPending(false);
      setStatus(`Revenue: ${revenue}. Synthetic rows: 240 + 150.`);
      stop();
    })().catch((error: unknown) => { if (!disposed) { setPending(false); setStatus(`Query failed: ${error}`); stop(); } });
    return stop;
  }, [run]);
  return <section><button disabled={pending} onClick={() => setRun(value => value + 1)}>Run local query</button>
    <button disabled={!pending} onClick={() => cancel.current()}>Cancel query</button><p role="status">{status}</p></section>;
}
```

Before exposing editable SQL, turn off known-extension installation/loading and external access, allow only the fixed local input filenames the app actually needs, and lock configuration. Verify these database settings reject remote reads, extension loading and attempts to re-enable access; a regex filter is not a substitute. Register visitor file contents under controlled local names, never treat their filename or SQL text as a URL. Validate type/schema and import size; replace data transactionally.

Do not assume a successful native function is built into the local binary. In the pinned EH trial, `json_serialize_sql` silently loaded the JSON extension before configuration was locked. The corrected app used native tokenization/preparation and explicitly checked that JSON remained unloaded. Check extension state and initialization behavior before claiming a self-contained configuration. Read-only claims also need native database enforcement; disabled external access alone does not prohibit local writes.

Use actual SQL execution, a schema browser, useful example queries and clear loading/error/cancel states. Bound result display and query duration. Cancellation must terminate ongoing computation and permit a fresh usable database; reset the worker if graceful cancellation is unavailable. Render text values safely. Preserve DECIMAL/BigInt precision through display rather than coercing all Arrow values to Number. Close connections and terminate workers on disposal.

Retain the supplemental DuckDB notice when the distribution omits it. Apply [Campus Designer](../campus-designer/SKILL.md) to the selected table/chart interface. Verify independently calculated joins, groupings, nulls and exact-money outputs, invalid/expensive queries, cancellation/recovery, no external SQL access and production WASM/worker paths. Report first-load/bundle limits and actual browser support through [Evaluate](../evaluate-browser-app/SKILL.md).
