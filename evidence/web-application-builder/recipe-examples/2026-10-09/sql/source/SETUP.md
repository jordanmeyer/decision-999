# Setup record

Node 22.19.0 and npm 10.9.3 were already available. Dependencies are exact pins: Vite 8.3.4, ECharts 6.1.0 and @duckdb/duckdb-wasm 1.32.0. `.npmrc` disables lifecycle scripts and saves exact versions. Installation and clean `npm ci --ignore-scripts --cache /private/tmp/bab-npm-cache` completed; npm reported 49 audited packages and zero vulnerabilities at this run. This is not a permanent security guarantee.

The coordinator explicitly authorized DuckDB's candidate EH single-thread configuration for this maintainer trial. The canonical checker currently rejects `@duckdb/duckdb-wasm@1.32.0` as unapproved; this expected result is retained, not bypassed. Promotion/publication belongs to the coordinator after independent review.

`npm run build` completes and generates notices for 32 installed packages, including the supplemental DuckDB license. Vite reports a bundle-size warning: app JavaScript about 1.329 MB (422 KB gzip), local worker 773 KB, EH WASM 34.24 MB (7.78 MB gzip). Do not present gzip estimates as guaranteed transfer sizes: hosting determines compression. Vite's test server also reports upstream worker source-map paths outside the installed package. Production console observations found no warnings/errors for normal runs.

Developer servers retained for independent review:

- Test server port 9513, session 43969: `npm run test:browser -- --port 9513`.
- Production port 9514, session 29103: `npm run preview -- --port 9514`.

Test URL: `http://127.0.0.1:9513/tests/`. Production URL: `http://127.0.0.1:9514/bab-example-sql/`. Fixed-width production frames are at `/tests/layout.html?width=320`, `390` or `1440` on the test server. Browser testing uses CUA only, with no shared viewport changes.
