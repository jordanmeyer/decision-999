# Setup

New separate root `/private/tmp/bab-recipe-examples-2026-10-09/markets`. Managed starter and canonical designer/theme assets copied from installed Browser App Builder; no previous recipe implementation copied. Existing Node22.19.0/npm10.9.3 reused from `/Users/jordan/.nvm/versions/node/v22.19.0/bin`. Exact Leaflet1.9.4 installed from npm registry, no transitive runtime dependencies; Vite8.3.4 remains dev-only. .npmrc disables install lifecycle scripts. Initial install audit: zero vulnerabilities. Public attribution authorized for eventual Git commits: Jordan Meyer <jordanmeyer@protonmail.com>.

Commands in this root: `npm ci --cache /private/tmp/bab-npm-cache-markets`, `npm run build`, `npm run test:browser -- --port 9511`, `npm run preview -- --port 9512`. Tests session87460 at http://127.0.0.1:9511/tests/; production session86883 at http://127.0.0.1:9512/bab-example-markets/. Reuse sessions while independent review proceeds. Rebuild production after source edits and reload.

Leaflet is still candidate in the installed inventory. The maintainer explicitly authorized this isolated example and accepted the expected approved-only dependency-check rejection until application review can promote support. Exact package/lock registry/notice checks still apply; no checker bypass or altered plugin file is used. Official source geometry was downloaded once by `python3 scripts/fetch-boundaries.py`; it is never fetched by build or browser. Source refresh is explicit and requires renewed geography checks.

Dedicated cua_repl IAB tab4. Local1440px/320px production frames avoid global viewport modifications. Browser model suite initially passed17/17; production loaded actual polygons and default GA/TN/NC scores. Source/PLAN freeze and independent review remain pending.
