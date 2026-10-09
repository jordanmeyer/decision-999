# Replenish · Market screen

A synthetic classroom market-entry screen for a fictional refill-supply service. Explore12states, change four priorities and two eligibility ceilings, inspect component contributions, compare up to three pinned markets and copy the rationale. The automatic ranking is separate from the manual comparison. It does not estimate actual market attractiveness.

Default result: Georgia67.50, Tennessee67.00, NorthCarolina61.75;9markets qualify. Louisiana growth is intentionally missing. NorthCarolina's independent hand-check is24+18.75+10+9=61.75. Delivery$12/order and setup$250,000 are editable gates, separate from fixed scoring anchors. More details and independent expectations are in PLAN.md.

Use Node22.19.0/npm10.9.3. `npm ci --cache /private/tmp/bab-npm-cache-markets`, `npm run build`, then `npm run preview -- --port 9726`. Open `/bab-example-markets/`. `npm run test:browser -- --port 9725` exposes `/tests/` with actual model/geometry checks. No runtime server or external service is required. Browser state is not saved. Source data refresh is an explicit optional Python-standard-library script and does not run in CI.

Leaflet1.9.4 is substantive: local GeoJSON polygons, contextual neighbors, ranked labels, style changes, selection, zoom and resizing. It is approved in the current plugin inventory. No unrelated framework/library. Vendor notice is linked in the app. All geographic provenance is recorded in app/public/DATA-PROVENANCE.txt; synthetic commercial values live separately in app/model.js. There is no real student/customer interview: PLANNING-CONVERSATION.md records an actual simulated exchange.

Prepared source: https://github.com/jordanmeyer/bab-example-markets. Prepared live URL: https://jordanmeyer.github.io/bab-example-markets/. Coordinator owns publication; see DEPLOYMENT.md for verified status. Commits use authorized public attribution Jordan Meyer <jordanmeyer@protonmail.com>.


## Revised teaching example

[How this was built](BUILD-STORY.md) links the opening brief, simulated planning, current plan and actual evidence. Live edits now explain rank moves against the starting screen and show one-weight sensitivity. Local licensed EB Garamond/Open Sans fonts, ordered map bands, default comparison pins and supporting disclosures make the example easier to read. Revised local test/production ports are9725/9726; production base remains `/bab-example-markets/`. Model/geometry suite now contains25 meaningful checks.
