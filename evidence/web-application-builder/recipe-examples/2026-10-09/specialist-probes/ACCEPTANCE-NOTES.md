# Upcoming SQL and optimizer reviews

Independent reviewer preparation,2026-10-09. These notes interpret the campaign's [opening briefs](../BRIEFS.md) and [isolated probes](ISOLATED-RESULTS.md). They are proposed acceptance oracles, not an agreed application plan, completed app evidence or additional product features. Actual simulated planning must settle the domain choices first.

## SQL explorer

Planning should establish table grains/keys, order-status and refund semantics, money types, dataset size, permitted query mutations, result limits and the recovery contract. Local file upload is not required by the opening brief; do not add it just to satisfy a review fixture. A useful app needs several related tables, substantive authored questions, editable real SQL and a schema explanation. Its result chart should describe compatible query results honestly; arbitrary result sets still need a usable table/error state.

A tiny independent join oracle can supplement the substantial synthetic dataset. Customers1/3 are East,2 West,4 has null region and no orders. Orders101/103 belong to1,102 to2,104 to3;101–103 completed,104 cancelled. Line items:101 has2×10.10 and1×5.05;102 has3×10.10;103 has1×0.10;104 has10×10.10. Refunds:101 has1.01 and2.02;102 has0.30. Interpret these amounts as exact decimals.

Expected completed-order totals are gross55.65, refunds3.33, net52.32. East is25.35/3.03/22.32; West30.30/0.30/30.00. Order101 is25.25/3.03/22.22. Joining its two items directly to its two refunds creates four rows and incorrectly doubles each aggregate; the correct query must respect each table's grain. This tests a consequential join failure rather than a precomputed display. Adapt status/refund policy to the eventual agreed plan, then freeze the expected result before execution. Separately exercise left-join preservation of customer4 and null grouping, empty results and deterministic ordering.

Precision probes should include `9007199254740993::BIGINT` and `90071992547409.93::DECIMAL(18,2)` through actual worker→Arrow→UI rendering. Both must remain exact. Smaller decimal sums alone would miss a blanket Number conversion. Test nulls and literal HTML-looking cell values safely. Do not claim exact exported values unless export is an agreed feature and its actual file is read.

The verified EH configuration must load local worker/WASM assets at the production prefix. Before editable SQL, register controlled local input names, disable extension installation/autoload and external access, set only required allowed paths, then lock configuration. Independently rerun remote-read, LOAD/INSTALL and configuration-unlock attempts; each must fail, followed by a successful local query. A SQL regex is not this boundary. The earlier MVP `_setThrew` failure is not a supported fallback.

Use an actually expensive bounded query to exercise visible running/cancel states and a subsequent known query. Bound display separately from computation; truncating rows after a huge query finishes is not a timeout. A user cancellation or deadline must stop the work and restore a usable worker/database with the agreed dataset. Record which path was exercised; a mocked delayed result or cancelled request that still computes is insufficient. Avoid destructive memory-exhaustion probes. Editing a query must not relabel old rows as its new result.

## Workshop optimizer

Planning should settle whole-unit integrality, contribution units, resource coefficients, product demand caps, any minimum commitments and tolerance/status wording. An infeasible scenario requires a real contradictory commitment; with only nonnegative variables and upper bounds, the zero mix is always feasible. Do not silently introduce minimums or change requirements to manufacture a result.

An independently enumerated small oracle uses stool/bench/cabinet quantities, contribution11/19/31, machine use2/3/5, labor1/3/4 and material2/4/6. Upper product bounds are6/4/3; capacities18/18/24. Exhaustive standard-library enumeration of all140 bounded integer mixes finds64 feasible and one optimum: **(0,1,3), contribution112**, use18/15/22, slack0/3/2. Raising only machine capacity to19 gives unique(0,3,2),119; to20 gives(1,1,3),123. Raising labor to22 alone leaves112. These distinguish resource causality from arbitrary chart motion.

This fixture also detects lost integrality. Its continuous relaxation reaches113.2 at(0,4,1.2). A hand bound proves optimality: objective =6.2×machine +0.4×benches −1.4×stools ≤6.2×18 +0.4×4 =113.2, and that fractional mix satisfies all constraints. The existing separate chairs/tables probe has optimal20/10,1100 by its resource-line intersection; it alone would not detect an integer/continuous mix-up.

If minimum commitments are adopted, benches≥4 and cabinets≥2 make this small oracle infeasible because they require at least22 machine units against18. Enumeration finds no feasible mix. A negative/invalid input is a validation case, not evidence of solver infeasibility. Finite demand caps make unboundedness unreachable in this product scope; no artificial user-facing unbounded mode is required.

Read solver status, then independently recompute the objective, resource use, bounds and integrality from its returned decisions. Check accepted tolerances explicitly. An incumbent under a time limit may be feasible without proven optimality; no-incumbent timeout must not display zeros as a solution. Do not fabricate a timeout by replacing a successful result. If a reproducible full solve cannot hit that state in the bounded app, state the observation limit and retain adapter-level checks separately.

Cancellation must actually terminate/recreate the module worker and allow a new known solve. The UI should stay responsive and reject stale result messages after edits/reset. Verify ES worker output and local WASM paths, normal cancellation/retry, invalid inputs, infeasibility, binding/slack displays, keyboard controls and readable small layouts. No shadow prices or sensitivity intervals are required for the integer model. These are evidence gates for the planned workshop, not an invitation to add a generic modeling language.
