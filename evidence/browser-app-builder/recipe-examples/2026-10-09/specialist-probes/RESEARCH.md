# Browser recipe feasibility research — 2026-10-09

This is dependency/capability research, not an app evaluation, independent review, release approval, or deployment. Work exists only in this research directory. No course plugin files changed. CONTRACT.md and existing five workflow skills, references, inventory and bundled design references read. Node v22.19.0 / npm10.9.3.

## Current findings and exact pins

| Recipe | Pin | Status |
|---|---|---|
| Geographic market analysis | leaflet 1.9.4 | Stable BSD-2-Clause package; local GeoJSON/map drawn in browser. No service required. Full product unbuilt. |
| SQL explorer | @duckdb/duckdb-wasm 1.32.0 | Newest stable x.y.z registry release. Bundles actual DuckDB v1.4.3. Production build succeeds; Node WASM aggregation/import succeeds. MVP error handling defect and combined browser stall need isolation before approval. |
| Resource allocation | highs 1.15.3 | MIT package, no runtime dependencies, Node>=18. Production worker build succeeds; Node WASM known optimum succeeds. Browser worker result not observed due combined probe stall. |
| Product video | remotion, @remotion/player, @remotion/web-renderer all 4.0.534; react/react-dom 19.3.0 | Actual official renderer available and stable since4.0.491; getBlob returns downloadable MP4/WebM according to API. Production build succeeds; Player visible. Browser export unverified because combined tab stalls. Current supported API cannot disable telemetry. User explicitly approved video-only exception per coordinator. |

`selected-package-summary.json` records chosen versions. `package-summary.json` preserves initial registry query including DuckDB's misleading latest tag1.33.1-dev57.0. `*-metadata.json` preserve direct registry version records including tarball integrity and gitHead. package-lock.json is generated; .npmrc disables scripts. Both install.log and stable-install.log report zero vulnerabilities. No audit remediation was required. Inventory tooling pins Vite8.3.4 and @vitejs/plugin-react6.1.2 work with Node22.19.0.

## Local mapping implementation

Use `import L from 'leaflet'; import 'leaflet/dist/leaflet.css'`. Use local authored GeoJSON with L.geoJSON, circleMarker, fitBounds, and an accessible parallel table. No L.tileLayer, geocoder, routing service, geolocation request, CDN or external attribution image. The probe renders an explicitly synthetic polygon near35.9,-78.9 with marker, no tile layer. Keep actual market data rights/provenance separate; label synthetic coordinates and demand values. CRS/units matter: calculate distances with a justified spherical distance method or Leaflet LatLng.distanceTo, never arithmetic on projected screen pixels. Ranking is an authored business model, not a claim that map proximity proves market potential. No worker/WASM/COI requirement. Default marker icons need local assets if used; circleMarker avoids that packaging issue. Leaflet CSS has local image references processed by Vite. Retain package LICENSE (BSD-2-Clause). No telemetry implementation found in local-only map path. Main-page observed map rendered; no final map app interaction review.

Official sources: https://leafletjs.com/download.html (stable1.9.4; alpha2 is not selected), https://leafletjs.com/reference.html, https://leafletjs.com/examples/geojson/, https://github.com/Leaflet/Leaflet/blob/v1.9.4/LICENSE .

## DuckDB configuration and concrete gaps

Official Vite local asset recipe uses imports ending `?url` for WASM and packaged worker, then `new Worker(workerUrl)`, AsyncDuckDB, instantiate. Probe selected MVP only to demonstrate no shared memory requirement. In production base /recipe-probe/, generated URLs are `assets/duckdb-browser-mvp.worker-C9hF7LGh.js` and `assets/duckdb-mvp-BP0pRkMH.wasm`. These are Vite imports so respect deployment base. WASM is39,362,654 bytes (~8.9MB gzip); worker~845KB. Avoid CDN helper getJsDelivrBundles and COI/pthread variant. GitHub Pages cannot supply arbitrary isolation headers, so single threaded non-COI configuration is needed. Set maximumThreads:1; actual browser environment observed crossOriginIsolated:false and SharedArrayBuffer undefined.

Default DuckDB extension autoload/remote access is NOT acceptable. Before accepting user SQL, configure:

    SET autoinstall_known_extensions=false;
    SET autoload_known_extensions=false;
    SET allowed_paths=['local.csv'];
    SET enable_external_access=false;
    SET lock_configuration=true;

Fixed allowed path supports visitor-selected file replacement via registerFileText/registerFileBuffer while settings are locked; verify new path import with explicit generated identifiers if product needs multiple datasets. Do not let visitor SQL unlock the database. Avoid arbitrary URL import. A SQL explorer needs joins, grouping/window queries, data dictionary, result row limits, explicit type handling, cancellation/reset worker and useful local data; simple arithmetic is not the requested product. Typed Arrow BIGINT/DECIMAL results need deliberate formatting, not blind JSON.stringify: Node aggregation produced Arrow decimal object values serialized as embedded quoted strings.

`duckdb-node-probe.cjs` uses shipped Node blocking wrapper against exact MVP WASM. It successfully imported local CSV and returned East40,West20, enginev1.4.3; fixed-path replacement after lock returned East99. Remote read and re-enable settings were rejected, but reported `_setThrew is not defined` rather than the intended errors. `INSTALL httpfs` was accepted (WASM INSTALL is a no-op, not proof an extension loaded); use LOAD and inspect requests when testing actual extension denial. Error-handling gap is real and unresolved. Next isolate EH worker/WASM build in a separate probe (supported modern exception-handling browsers) and test remote read, LOAD httpfs, lock attempts and cancellation. Do not approve current MVP configuration on this record.

Exact stable package omits standalone MIT LICENSE. `licenses/@duckdb__duckdb-wasm@1.32.0.txt` is retrieved from exact published gitHead a20b8290e79e37a7b914e62621aa412d69ba95fc LICENSE; `sources/duckdb-license-1.32.0.txt` original. Retain apache-arrow17.0.0 and locked transitives notices; package manifest only lists apache-arrow^17.0.0. Stable tree missing-notice scan found DuckDB and @remotion/licensing only.

Official sources: https://duckdb.org/docs/current/clients/wasm/instantiation (Vite section), https://duckdb.org/docs/current/clients/wasm/deploying_duckdb_wasm , https://duckdb.org/docs/current/clients/wasm/extensions , https://duckdb.org/docs/current/operations_manual/securing_duckdb/overview , https://raw.githubusercontent.com/duckdb/duckdb-wasm/a20b8290e79e37a7b914e62621aa412d69ba95fc/LICENSE . Current docs can describe newer engine; probe exact pin.

## HiGHS configuration

`probe/highs-worker.js` imports default loadHighs from 'highs' and wasmUrl from 'highs/runtime?url'; initializes `loadHighs({locateFile:()=>wasmUrl})` in a dedicated module Worker. Configure Vite `worker:{format:'es'}`. main creates `new Worker(new URL('./highs-worker.js',import.meta.url),{type:'module'})`. wasm3,531,380 bytes; outputassets/highs-B_nfHoE0.wasm and assets/highs-worker-CXniaQv6.js. Build logs note node:module externalization from a Node-only conditional in loader; browser branch must be verified. Single threaded Emscripten WASM; no pthread/COI/SharedArrayBuffer requirement. All loader runtime fetches for this setup point to local WASM; no solver service or telemetry package. Use output_flag:false, time_limit, deterministic authored LP text or persistent structured model; do not interpolate arbitrary names into LP unchecked. Synchronous solve must stay in worker; cancel by terminating/recreating worker for responsiveness. Preserve solver status: infeasible/unbounded/time-limit is not Optimal. Independent feasibility and objective recomputation should validate displayed allocations; gap and time bounds must be visible.

`probe-node.mjs` / highs-node-result.json: canonical integer workshop problem optimal chairs20 tables10 objective1100. Independent derivation: intersection x+2y=40 and2x+y=50 gives x20,y10; nonnegative corner objectives0,750,1000,1100, so1100 is LP optimum and feasible integer optimum. Browser worker result not yet observed. Package LICENSE combines 2023 highs-js and2026 HiGHS MIT notice. No extra package license required.

Official sources: https://github.com/lovasoa/highs-js/tree/v1.15.3 , https://lovasoa.github.io/highs-js/docs/ , https://lovasoa.github.io/highs-js/docs/interfaces/InitOptions.html , https://highs.dev/ . Exact upstream README saved sources/highs-readme-1.15.3.txt.

## Remotion license, telemetry and client export

All Remotion packages must share exact4.0.534. Player/remotion peers permit React>=16.8; web-renderer needs React/DOM>=18, selected inventory19.3.0 compatible and build passes. Renderer deps: remotion4.0.534, @remotion/licensing4.0.534, mediabunny1.56.1 and @mediabunny/{aac,mp3,flac}-encoder1.56.1. Mediabunny/encoders MPL-2.0; retain notices and review covered-source availability obligations if shipping/modifying their code, not just the Remotion notice. Main package API getBlob is real; renderer uses WebCodecs, not FFmpeg/server. Typical controlled composition is React div/SVG/text with useCurrentFrame; use safe local fonts/styles and a bounded clip (e.g.720p,short duration) that renderer supports. Preview with Player; canRenderMediaOnWeb before export; outputTarget:'arraybuffer' gives Blob suited to anchor download; outputWritable optional for FileSystemAccess browsers. Need confirm downloaded file duration, dimensions and actual playback, not merely blob size. Controlled templates must avoid unsupported CSS, external media/fonts and video components from wrong package; use allowHtmlInCanvas:false/default to avoid experimental feature dependence. Mutable input props snapshot at render start.

Exact installed LICENSE.md preserved sources/remotion@4.0.534.txt and sources/remotion-license-4.0.534.txt. Free eligibility includes individual, for-profit up to3employees, non-profit/not-for-profit, or noncommercial fit evaluation. This research is a noncommercial evaluation/individual pilot; do not claim every student's employer/project qualifies. License prohibits selling/renting/licensing/relicensing/sublicensing one's own derivative of Remotion. Company license otherwise required; no purchase/signup performed. This is a source record, not legal advice.

No supported no-telemetry option exists in4.0.534. Web renderer always calls usage endpoint even with licenseKey omitted or 'free-license'; latter only removes warning. Endpoint source is https://www.remotion.pro/api/track/register-usage-point (correct endpoint; earlier agent message guessed path before source inspection). Events include origin, success/failure, still/video, production/dev, null/key and idempotency id; server observes IP. No composition/content metadata transmitted by this built-in event. Official docs say failed telemetry does not fail render, retained indefinitely, customers unable to send must arrange alternative reporting. Do not patch fetch, spoof location, block telemetry and call that supported, or silently downgrade. Coordinator reported user explicitly chose 'Allow this video-only exception'. Probe uses licenseKey:'free-license',isProduction:false for noncommercial development evaluation. App must disclose the actual telemetry exception; all other apps remain local-only. @remotion/licensing is MIT per registry but tarball omits LICENSE; exact upstream supplemental remains unresolved, do not invent text.

Official sources: https://www.remotion.dev/docs/web-renderer , https://www.remotion.dev/docs/client-side-rendering , https://www.remotion.dev/docs/web-renderer/render-media-on-web , https://www.remotion.dev/docs/telemetry , https://www.remotion.dev/docs/client-side-rendering/limitations , https://github.com/remotion-dev/remotion/blob/v4.0.534/LICENSE.md , https://github.com/remotion-dev/remotion/blob/v4.0.534/packages/web-renderer/src/send-telemetry-event.ts . Sources telemetry file saved. Current docs show post-pin4.0.535 quality options; do not copy those into4.0.534.

## Reproduce / actual browser evidence and unresolved stall

    npm ci --cache /private/tmp/bab-recipe-examples-2026-10-09/research/npm-cache --ignore-scripts
    node probe-node.mjs
    node duckdb-node-probe.cjs
    ./node_modules/.bin/vite build
    ./node_modules/.bin/vite preview

Production root http://127.0.0.1:4194/recipe-probe/; build logs stable-build.log. Last server exec session51469, port4194 (stopped at handoff; check state before restart). Earlier prerelease probe server67376 was stopped. Chrome unavailable; created background IAB tab id1 via cua_repl, variableprobeTab. Initial UI visibly rendered map, Playerframe0 and controls. Click Run local probes succeeded and UI reported secure contexttrue, isolationfalse, SharedArrayBufferundefined,VideoEncoderfunction,Leaflet1.9.4fourlayers. Subsequent DOMSnapshot.captureSnapshot timed out after20sec; logs and close also timed out on Emulation.setFocusEmulationEnabled. No alternate CDP/Playwright/session bypass attempted. No completed DuckDB worker, HiGHS worker or Remotion export/browser download result observed. No browser screenshot saved because stalled. Tab closure unconfirmed. Combined probe is reproducible source but not a pass; isolate components before retry, especially MVP query errors and WebCodecs render. No further restart attempted after coordinator requested handoff.

No GitHub Pages deployment was performed. Prefix production build and nonisolated browser setup support potential compatibility, not live hosting pass. All new configurations remain candidates until isolated browser probes, notice collection and full app review pass.
