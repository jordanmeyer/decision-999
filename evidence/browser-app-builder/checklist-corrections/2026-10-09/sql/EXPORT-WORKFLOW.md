# SQL export and recovery harness — actual browser PASS

Tests-only checkpoint: `5e815286c49b0ed7f75b68401de391fd5b7a802b`. The only new file is `tests/export-workflow.html`; application source, model, engine and PLAN remain unchanged from `5c1caf4a6e3ac9251fa97012c2ab8a58fb673b7a`.

Open the [production harness](http://127.0.0.1:9716/bab-example-sql/export-workflow.html) and activate **Run five workflow checks**. The [test-server version](http://127.0.0.1:9715/tests/export-workflow.html) instead embeds the development app. The production copy lives only in ignored `dist/` and is cleared by a normal production build. Capture the visible status and report, including any failed or unfinished case. JavaScript syntax and diff checks passed before checkpoint; the subsequent actual browser results are recorded below.

The harness uses the real DOM event handlers, selected dataset and bundled database worker. It intercepts only the generated Blob URL/anchor download handoff, preserving the actual Blob contents for inspection. It does not replace the engine, query results, app state, clock or errors. This is an authored browser check, not a native download dialog, actual keyboard task, novice or screen-reader session.

The five cases check:

1. Tiny raw lines A/B/C/D produce the independently specified four-row CSV with units 10/5/4/2 and prices 2000/3000/2500/5000 cents. After an unexecuted editor change, both generated files must retain the completed SQL, tiny identity, source counts, units and uncapped count.
2. A 501-row generated sequence retains/export rows 0–499 while showing 50 table rows. `gross_cents = sequence × 101`; the last exported value is 50,399 cents. The note must identify the 500-row cap and match the executed query, despite another editor edit.
3. An unknown column preserves the failed draft and prior result provenance, supplies schema guidance, then recovers to a real count of four tiny lines.
4. Malformed SQL preserves its draft and prior result, supplies syntax guidance, then recovers to the specified `recovered / 42` row.
5. A genuinely heavy worker query is cancelled after approximately 250 ms, before the eight-second budget. The UI must identify cancellation, stopped worker and reset action; Reset must preserve the editor, and a fresh worker must execute a valid query. A query that settles before cancellation is not counted as a cancellation pass.

The separate **Run optional real 8-second timeout** button does not shorten the application's timeout. It reports a pass only if the UI actually reports that timeout and then recovers through Reset. Otherwise timeout stays open. Preserve the reported elapsed time and environment; this is not a performance benchmark.

The visible report includes CSV first/last lines, record counts, full result-note text, current/previous SQL, error text and recovery snapshots. The previous bounded report remains as history; the actual follow-up below adds generated-export and error-recovery evidence. A successful Blob capture still does not establish native save-dialog behavior.

Independent source review: `/root/live_revision_models` read the whole harness and its app/engine/presentation callers and found no actionable race or false-pass defect at `5e815286c49b0ed7f75b68401de391fd5b7a802b`. The failed-query retention checks compare the first two visible rows, visible row count and executed SQL; they do not claim exhaustive equality of every visible table cell. CSV checks compare every exported row. That source review preceded actual browser execution; the follow-up below supersedes the pending state.


## Actual follow-up

Root ran the production harness through CUA: 5/5 primary cases plus the optional actual timeout passed at test checkpoint `5e815286c49b0ed7f75b68401de391fd5b7a802b`, with app source unchanged from `5c1caf4a6e3ac9251fa97012c2ab8a58fb673b7a`. See [browser-export-recovery.json](browser-export-recovery.json). Cancel was activated at 253.3 ms; the unaccelerated timeout arrived after 8002.4 ms. Both reset/recovery paths returned 42. Native saving, keyboard operation and human learning are not inferred from this authored workflow.
