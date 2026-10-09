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


## Live revision exploratory build failure — 2026-10-09

The first revision build failed because a broad edit placed an await inside the nonasync join-lesson click handler. No tested checkpoint or deployment used that source. Restored the handler's existing reset call; font loading is confined to module startup. This failed build is retained and requires a fresh successful build and browser checks.


## Live revision exploratory browser round — source 8a790a9

Actual browser suite passed 41/41. Large first load showed 2,400 orders / 7,200 lines / 9,900 events and 12 alphabetized products. Tiny join lesson rendered $750 versus $550. All three local fonts loaded; 1440 and 320 frames showed no page overflow, initial external resources or undersized targets. Narrow page height was still 3,587 px and the editor appeared too far down after the optional hand-check and schema. Compacted these secondary references into disclosures; affected layout/keyboard checks require a fresh source checkpoint. This exploratory result does not claim final layout approval.


The introductory result exposed implausible historical cyclic categories such as Book stand / Lighting. Replaced descriptive categories with an explicit plausible catalog while retaining all product IDs, prices and fulfillment data. The next checkpoint reruns the real-engine suite; all earlier monetary expectations remain unchanged. During actual Back/cancel checks the browser captured one unscoped MutationObserver.observe error without an app URL/stack. The app resumed with consistent large/default controls and results; cancellation/reset then SELECT 42 succeeded. The diagnostic is retained and a clean-load log comparison will follow.


At b331239 the final 320 px region chart was readable, but inherited 145 px table column minima pushed even the two-column dollar result offscreen inside the local scroll region. Reduced the minimum to 110 px and allowed numeric headings to wrap while preserving unbroken numeric values. Wider queries and very large values still scroll locally. This is an affected-layout correction; model tests at b331239 remain 41/41 and the engine is unchanged.

## Authorized live revision — final developer round, 2026-10-09

Final source checkpoint 7e2cfd8c7588520a13568c04ed76d16ba7bf695a includes PLAN, app, tests, config/tooling and licenses. Clean npm ci completed with zero audit vulnerabilities; current dependency checker approves the unchanged DuckDB-Wasm 1.32.0 / ECharts 6.1.0 recipe. Production build retains 34 font/package notice sections. The unchanged engine is a substantial payload: 34.24 MB Wasm (7.78 MB gzip), 772.75 kB worker and a 1,331.62 kB main JS bundle (423.07 kB gzip); the Vite chunk advisory is disclosed. Everything loads from the repository prefix and same origin.

Actual real-engine browser suite at b331239286fcda977b23bf5029b42ff9da65fc0e passed 41/41, zero failures. The final checkpoint changes only CSS and this report; engine, model, tests and PLAN match that passing round. Added checks cover three introductory queries, exact huge/sign/zero monetary values, and unknown-alias/noninteger nonconversion; the original 36 parser, read-only, external-access, precision, cap, cancellation and arithmetic checks remain intact. No trivial UI-mirroring tests were added.

The production default uses 2,400 orders / 7,200 lines / 9,900 shipment events. Its short first SELECT yields 12 alphabetized product rows, Book stand / Organization first and Task timer / Accessories last. Explicit catalog labels correct the earlier implausible cyclic categories without altering IDs or any amounts. The aggregation starter rendered 600 orders each for Central, East, South and West. Independent Python enumeration before the browser specified the filtered starter's first row as L1010 / 40 / 2650 cents; the actual-engine test confirmed it.

Keyboard Enter activated the tiny join lesson: $750 mistaken gross versus $550 correct. The region query displayed West $175 and East $100, with an explicit outstanding (USD) table heading and matching USD chart/caption. Numeric cells align right. Storage types are behind a disclosure. Known integer fields preserve exact dollars without Number conversion: a custom query displayed $9,007,199,254,740,993.01, unknown invented_cents stayed raw 17500, and negative one-cent shipped value displayed -$0.01. CSV code still serializes original raw values and names; this revision did not alter the already verified export path or claim a new downloaded-file witness.

Actual editor/schema checks: opening products and activating Insert product from products with Enter at the cursor produced SELECT "product" FROM products;, returned focus to the editor, selected Custom query and showed the older-result warning. Ctrl/Command+Enter ran successfully and produced Notebook/Lamp. Selecting the entire editor and clicking Insert products replaced precisely that selection with "products" and restored focus. A syntax/missing-table query preserved its text and prior huge-money result with a clear failure message. A genuinely expensive query was cancelled by the UI; the worker stopped, Reset rebuilt it and SELECT 42 returned 42.

After selecting the tiny case and editing SQL, navigating to the local review page and Back restored large dataset, first starter SQL, 12 matching rows and consistent counts before interaction. One unscoped MutationObserver.observe error appeared during that navigation sequence without a URL/stack; it is retained as an unattributed diagnostic. A new production tab loaded the final logic and the error/warning query returned []. This observation does not claim exhaustive browser/network certification.

Final same-origin production frames measured client/scroll widths 1439/1439, 389/389 and 319/319. All three local font faces loaded, no initial external-resource entries appeared, and no observed controls were below 24 px. Final page heights and exact metric output are preserved in the course evidence. The 320 px region chart is readable; its two-column table measures 238/238 client/scroll width, with both $175/$100 visible and an explicitly wrapping USD header. Wider SQL results still scroll locally. Desktop, first-load narrow and narrow chart/table screenshots were visually inspected. The shared browser's screenshot clip coordinates scale unusually, so captures were adjusted using the documented screenshot API; frames are measured CSS layouts, not device emulation or a full screen-reader audit.

A separate simplification pass kept one canonical currency policy shared by table/chart, retained the native editor/engine and exact CSV path, used controlled names for schema insertion, and let query text determine starter/provenance state instead of maintaining a second state copy. No framework, dependency upgrade, persistence or runtime service was introduced. Source/PLAN freshness comparison against 7e2cfd8 is clean before this report; subsequent edits are reports/ExecPlan only. Independent review and live deployment remain distinct steps.

Independent coordinator PASS received for final source 7e2cfd8. Reviewer confirmed 41/41 tests, actual default/aggregate/tiny answers, narrow fonts/resources/targets/layout and keyboard USD table fit, and reviewed the whole engine boundary plus changed source. Full attributed verdict is in REVIEW.md. Source/PLAN comparison remains clean; publication is authorized, with live verification pending.
