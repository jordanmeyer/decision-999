---
name: highs-browser-app
description: Build browser resource-allocation optimizers with HiGHS in a worker, explicit linear or integer constraints, feasibility checks and interpretable results.
---

# Resource allocation with HiGHS

Read [selection](../../references/library-selection.md), [workflow](../../references/workflow.md) and `highs` in [inventory](../../references/libraries.json). Use only its approved exact configuration and [managed setup](../../references/managed-build.md). Agree on decision variables, units, objective, constraint directions, integrality, bounds and what the model omits before writing the solver input.

For allocation teaching apps, read [capacity value and integrality](../../references/decision-models.md#resource-allocation-and-capacity-value). Capacity experiments and a meaningful whole-unit lesson require model comparisons, not simply displaying solver output.

Run HiGHS in a dedicated module worker so solving cannot freeze the interface. Bundle its WASM locally. Add `worker: { format: 'es' }` to the returned Vite configuration; this loader needs ES module worker output, including its split chunks. Create it with `new Worker(new URL('./solver-worker.js', import.meta.url), { type: 'module' })`. Generate solver variable names from controlled IDs, not imported labels; keep business labels separately.

```js
// Inside the app's module worker.
import loadHighs from 'highs';
import wasmUrl from 'highs/runtime?url';
const highs = await loadHighs({ locateFile: () => wasmUrl });
const result = highs.solve(authoredModel, { output_flag: false, time_limit: 5, mip_rel_gap: 0 });
```

Validate inputs before solving. Display solver status explicitly: optimal, feasible/time-limited, infeasible, unbounded or error. Never call a feasible incumbent optimal. Independently recompute resource use, objective and integrality from returned decisions using documented tolerances. Do not show stale solutions as results for edited assumptions. Cancellation terminates/replaces the worker; its next request must work.

Provide an editable constraint table or equivalent labeled controls, solution table, resource slack/binding display and a chart only when useful. Explain that an optimal model answer depends on assumed coefficients and constraints; do not invent shadow prices for an integer program. Apply [Campus Designer](../campus-designer/SKILL.md).

Verify a small independently enumerated integer problem and a hand-derived continuous case, invalid inputs, infeasible/unbounded status where supported, binding constraints, capacity changes and cancel/recovery. Exercise actual worker/WASM files at the Pages prefix and retain notices. Record results and limitations through [Evaluate](../evaluate-browser-app/SKILL.md).
