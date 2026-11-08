---
name: highs-browser-app
description: Build browser resource-allocation optimizers with HiGHS in a worker, explicit linear or integer constraints, feasibility checks and interpretable results.
---

# Resource allocation with HiGHS

Read [selection](../../references/library-selection.md), [workflow](../../references/workflow.md) and `highs` in [inventory](../../references/libraries.json). Use only its approved exact configuration and [managed setup](../../references/managed-build.md). Agree on decision variables, units, objective, constraint directions, integrality, bounds and what the model omits before writing the solver input.

For allocation teaching apps, read [capacity value and integrality](../../references/decision-models.md#resource-allocation-and-capacity-value). Capacity experiments and a meaningful whole-unit lesson require model comparisons, not simply displaying solver output.

Run HiGHS in a dedicated module worker so solving cannot freeze the interface. Bundle its WASM locally. Add `worker: { format: 'es' }` to the returned Vite configuration; this loader needs ES module worker output, including its split chunks. Create it with the static `new URL` expression shown below so Vite builds a separate local worker. Generate solver variable names from controlled IDs, not imported labels; keep business labels separately.

Read [React and TypeScript integration](../../references/react-libraries.md). Copy the first block to `app/recipes/highs.tsx` and its worker beside it. The two-variable integer example has an independently enumerable optimum: capacity 5 gives x = 4, y = 1 and profit 14.

```tsx
import { useEffect, useRef, useState } from 'react';
import type { Reply } from './solver-worker';

export function Example() {
  const [run, setRun] = useState(0);
  const [status, setStatus] = useState('Ready.');
  const [pending, setPending] = useState(false);
  const cancel = useRef<() => void>(() => {});
  useEffect(() => {
    if (!run) return;
    const worker = new Worker(new URL('./solver-worker.ts', import.meta.url), { type: 'module' });
    let disposed = false;
    const stop = () => { disposed = true; cancel.current = () => {}; clearTimeout(deadline); worker.terminate(); };
    const deadline = window.setTimeout(() => { stop(); setPending(false); setStatus('Deadline reached. Run again to retry.'); }, 10_000);
    cancel.current = () => { stop(); setPending(false); setStatus('Cancelled. Run again to retry.'); };
    setPending(true);
    setStatus('Solving…');
    worker.onmessage = (event: MessageEvent<Reply>) => {
      if (disposed) return;
      const reply = event.data;
      setPending(false);
      setStatus(reply.kind === 'solution'
        ? `Optimal profit: ${reply.profit}; x: ${reply.x}; y: ${reply.y}.`
        : reply.message);
      stop();
    };
    worker.onerror = event => { if (!disposed) { setPending(false); setStatus(`Solver failed: ${event.message}`); stop(); } };
    worker.postMessage({ capacity: 5 });
    return stop;
  }, [run]);
  return <section><button disabled={pending} onClick={() => setRun(value => value + 1)}>Solve allocation</button>
    <button disabled={!pending} onClick={() => cancel.current()}>Cancel solve</button><p role="status">{status}</p></section>;
}
```

`solver-worker.ts`

```ts
import loadHighs from 'highs';
import wasmUrl from 'highs/runtime?url';

export type Reply = { kind: 'solution'; profit: number; x: number; y: number }
  | { kind: 'failure'; message: string };
self.onmessage = async (event: MessageEvent<{ capacity: number }>) => {
  try {
    const { capacity } = event.data;
    if (!Number.isInteger(capacity) || capacity < 0 || capacity > 8)
      throw Error('Capacity must be an integer from 0 to 8.');
    const highs = await loadHighs({ locateFile: () => wasmUrl });
    const result = highs.solve(`Maximize
 objective: 3 x + 2 y
Subject To
 capacity: x + y <= ${capacity}
Bounds
 0 <= x <= 4
 0 <= y <= 4
Generals
 x y
End`, { output_flag: false, time_limit: 5, mip_rel_gap: 0 });
    if (result.Status !== 'Optimal') throw Error(`Solver status: ${result.Status}`);
    const x = result.Columns.x, y = result.Columns.y;
    if (!('Primal' in x) || !('Primal' in y)) throw Error('Solver did not return decisions.');
    const profit = 3 * x.Primal + 2 * y.Primal;
    if (Math.abs(profit - result.ObjectiveValue) > 1e-7 || x.Primal + y.Primal > capacity + 1e-7 ||
        [x.Primal, y.Primal].some(value => value < -1e-7 || value > 4 + 1e-7 || Math.abs(value - Math.round(value)) > 1e-7))
      throw Error('Returned decisions failed independent feasibility checks.');
    self.postMessage({ kind: 'solution', profit, x: x.Primal, y: y.Primal } satisfies Reply);
  } catch (error) {
    self.postMessage({ kind: 'failure', message: String(error) } satisfies Reply);
  }
};
```

Validate inputs before solving. Display solver status explicitly: optimal, feasible/time-limited, infeasible, unbounded or error. Never call a feasible incumbent optimal. Independently recompute resource use, objective and integrality from returned decisions using documented tolerances. Do not show stale solutions as results for edited assumptions. Cancellation terminates/replaces the worker; its next request must work.

Provide an editable constraint table or equivalent labeled controls, solution table, resource slack/binding display and a chart only when useful. Explain that an optimal model answer depends on assumed coefficients and constraints; do not invent shadow prices for an integer program. Apply [Campus Designer](../campus-designer/SKILL.md).

Verify a small independently enumerated integer problem and a hand-derived continuous case, invalid inputs, infeasible/unbounded status where supported, binding constraints, capacity changes and cancel/recovery. Exercise actual worker/WASM files at the Pages prefix and retain notices. Record results and limitations through [Evaluate](../evaluate-browser-app/SKILL.md).
