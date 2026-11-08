# Library integration in the React/TypeScript starter

The library skills contain executable integration examples for the current strict TypeScript starter. They demonstrate a small library operation and its lifetime; they are not complete business applications or finished designs. Preserve the plan's model, input validation, accessible task flow, selected identity and [product-design guidance](product-design.md). Adapt only the selected examples, not every recipe.

## Types and source ownership

Install the selected library's `packages` and `peers` as runtime dependencies and its `devPackages` as development dependencies, using the exact inventory versions. Copy each listed `declarations` file from the plugin's `assets/types/` into the project's `app/types/`. These narrow declarations describe the APIs actually covered by the recipe. Review and extend them against the installed package before using another API; do not add a blanket `declare module`, `any`, `@ts-ignore`, or disable strict mode to bypass a mismatch.

Copy a recipe's main block to `app/recipes/<library-id>.tsx`, or `.ts` for a pure function. Extra filename-captioned blocks belong beside it. The relative theme/vendor imports are project paths, never imports from the installed plugin. Keep business calculations in ordinary typed modules which both the UI and numerical checks import. For JavaScript theme adapters, copy the bundled companion `.d.ts` files beside the selected `.js` files; leave the starter's strict compiler settings intact.

Run the packaged dependency checker, the launcher's `typecheck`, and its production `build`. Development rendering alone does not typecheck the application. A package's own declarations do not prove that a particular adapter or combination works.

## React owns each library lifetime

Create imperative charts, maps, timelines and tables inside an effect after React has attached their host element. Let the library own only that empty child container; do not let React render the same descendants. Return cleanup that removes observers/listeners, destroys the instance and terminates owned workers. Keep repeated rendering free of initialization side effects. React StrictMode deliberately runs setup, cleanup and setup again during development; the same user action must still create one working instance.

Keep the instance stable when updating data: use its public update method from a separate effect or event handler. Recreate only when the API requires it. Resize graphics when their container changes or becomes visible. Await local fonts before measuring text, but cancel deferred initialization when its effect has already cleaned up.

For asynchronous initialization, rendering and queries, an effect-local disposed flag prevents late results from updating a replacement view. It does not stop computation: also cancel the operation, close the connection, or terminate its worker. Associate overlapping requests with their inputs so a slower old response cannot replace current results. Show loading, failure and cancellation states beside the relevant action. Handle rejected promises; a failed module or worker must not leave an apparently successful empty panel.

Frappe Gantt has no destroy API in the approved version. Its recipe loads the standalone library in a same-origin iframe so the document owns the listeners. Do not initialize it in an ordinary component effect and pretend removing its SVG releases those listeners. HiGHS owns a dedicated module worker; DuckDB owns its packaged browser worker. Follow those recipes' cancellation and local-asset constraints.

## Review the integration

Exercise the actual example in development with StrictMode and in a production preview under the intended repository prefix. Mount, unmount and remount each visual recipe; also switch a kept-mounted panel between hidden and visible. Confirm one working widget, no duplicate observers/listeners or stale result writes, and clean browser logs. For asynchronous recipes unmount during initialization and retry; for worker recipes cancel an active request and run another. Check the actual local asset requests, including WASM, frames and workers.

Use the library-specific verification cases in its skill and independently derived business-model answers. Compilation and a readiness interaction cover integration boundaries, not the entire business application, accessibility or novice usability. Record exactly which checks ran in EVALUATION.md.
