# Evaluation — Fulfillment Lab

Current status: developer implementation and actual **36/36 browser integration checks passed**. Independent review is in progress in reviewer-owned REVIEW.md. The coordinator subsequently reported the real deadline and download checks passing; its detailed witness is recorded separately. Do not interpret earlier failed approaches as current success.

## Preserved failed approaches

1. File-backed READ_ONLY setup was attempted in the actual EH browser engine. Opening a missing file in AUTO/READ_ONLY failed; READ_WRITE creation/checkpoint also failed in this setup. It was abandoned. `tests/history/readonly-file-attempt.js.txt` preserves the original probe.
2. Native JSON serialization appeared to parse SELECT/CTE queries and preserve exact literals. It only worked before locking extension access. Integrated setup then failed **0/1**: JSON functions were unavailable after autoload was disabled. An explicit built-in check also failed **0/1**. The observed metadata changed from JSON installed=false/loaded=false to installed=false/loaded=true when the early parser was prepared. Official [DuckDB-Wasm extension documentation](https://www.duckdb.org/docs/current/clients/wasm/extensions) explains that WASM extensions load from the repository at runtime. This establishes the autoload mistake; the exact remote request URL was not captured and is not invented here. The non-executing original probe is retained under `tests/history/json-parser-probe.js.txt`. No application PASS was issued for this approach.
3. One download event wait stalled until the coordinator interrupted the turn. No result file was found from that attempt. This was not counted as successful export evidence. After interruption the developer CUA inventory had no browsers; remaining browser observations were delegated to the coordinator's independent active tab.

## Current engine evidence

The current engine removes the JSON extension completely. Actual integration run first passed 31/31, then passed **36/36** after adding wrapper escapes, UTF-8/trailing comments, preserved orders and explicit JSON loaded=false. Tests import the actual engine, raw data generator and authored queries. They execute the bundled EH worker; no mocked SQL engine or expected-result substitution is used.

Observed cases include tiny counts 3 orders/2 products/4 lines/4 events; 21 ordered and 11 shipped units; gross55,000/shipped27,500/outstanding27,500 cents; West17,500/East10,000 outstanding; Notebook17,500/Lamp10,000; mistaken75,000 versus corrected55,000; O3 no-shipment preservation; A's two events aggregated to five units. Native prepare rejects writes, EXPLAIN, multiple statements and wrapper escapes including `SELECT 1) AS escaped; COMMIT; DELETE FROM orders; --`. Orders remain intact afterward.

Independent raw READ ONLY transaction rejects DELETE even without the editor wrapper. Raw extension loading and configuration re-enabling fail; remote CSV and nested mutation attempts fail. Quoted semicolons and trailing comments, including café/emoji UTF-8 offsets, work. JSON loaded=false after successful queries. Exact values9007199254740993 and12345678901234567890.12 survive worker→Arrow→display strings; negative−0.01 and zero0.00 scale correctly. NULL, empty results, literal HTML text and500-row cap are distinct. A syntax error followed by SELECT42 recovers. Cancelling an actual trillion-pair trigonometric aggregation stops the worker; a fresh large database then answers correctly.

Large SQL agrees with independent integer row arithmetic. The reviewer separately recomputed the raw data with Python and obtained 2,400 orders,12 products,7,200 lines,9,900 events;158,399 ordered/106,704 shipped units;611,718,275 gross/409,332,550 shipped/202,385,725 outstanding cents. The production coordinator observed matching regional totals.

## Production UI observations

Developer production observations at `/bab-example-sql/`: default West17,500/East10,000 cents, $750/$550 comparison, exact BIGINT/22-digit DECIMAL table, literal `<b>safe</b>`,−0.01 and result/editor attribution. Normal console had no warnings/errors. Source/notices links use the intended repository/base.

The coordinator independently exercised actual keyboard execution, exact large numbers, expensive-query Cancel→Reset→SELECT42, large regional totals and history navigation before interaction. Nondefault large/products/custom SQL returned consistently to tiny/regions/default SQL with West17,500/East10,000 and one canvas. Persisted bfcache was not proven. Narrow320 frame measured319px content width without page overflow; the result table had238px local viewport/290px scroll width. Actual native keyboard submission rendered a long-category query and large cents values, and keyboard horizontal scrolling moved51.5px. Its screenshot shows truncated chart labels with complete table alternatives, USD chart units and visible focus. These are coordinator observations, not developer screenshots. Campaign records are `sql/UI-WITNESS.md`, `root-narrow-hero.png` and `root-narrow-results.png` in the course evidence directory.

## Build and observation limits

Clean npm ci completed with zero audit findings at this time. Production build passed with32 package notices and a disclosed bundle-size warning. The canonical dependency checker rejected the still-candidate DuckDB package as expected under the coordinator's trial authorization; promotion is a separate coordinator gate.

Production pageAssets inventory listed only local app JS/CSS/EH worker and favicon. It does not expose worker-internal WASM requests and is not a complete network trace. Local asset imports/build output, blocked external attempts and JSON loaded=false jointly support the local-only configuration. Browser coverage is this host's in-app Chromium surface, not a cross-browser compatibility claim. Fixed-width frames exercise actual production CSS but do not emulate every mobile input/device characteristic.

## Final coordinator follow-up

After recovering from another browser download-event hang, the coordinator reported actual deadline and download PASS. This closes the two previously pending observations; the earlier stalled event wait remains a tool failure and is not counted as a successful export. No source or PLAN changed. Detailed coordinator observations and the independent reviewer verdict remain authoritative; this report does not independently claim a new browser run. Future checks use the actual download button followed by inspection of the known synthetic file, never another waitForEvent download call.

Coordinator promotion gate: reviewed source7a957523d776471eec7283311a562a9793d7f729 received independent APPLICATION PASS. The exact EH local-worker configuration is now approved and the normal canonical dependency checker passed. Relevant source, PLAN, tests, dependencies, configuration and workflow remain identical to the checkpoint. Actual CSV parsing independently confirmed the exact values and escaped formula text; raw CSV precision does not promise a spreadsheet's automatic import behavior.
