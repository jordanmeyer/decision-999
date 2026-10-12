# Filled round slots replace horizontal lines — 2026-10-10

User requested removal of lines behind names when later rounds fill in. Resolved regional and finalist slots now omit the horizontal backbone segment across the entire slot, retaining vertical connectors. Full original geometry remains available for uncertain highlighted paths, including their extension from the latest resolved team name.

Source checkpoint: e1522b6. Deployment payload: 3284b6a. Production preview of March 17, 2023 matches the requested snapshot: Alabama, Maryland, Kansas and other resolved Round-of-32 names have no horizontal line behind or beside them within their slot.

Browser design checks: 140/140, including 30 added checks against actual path geometry beneath filled slots across every played season's initial/final forecasts and Results; 2,984 rendered labels. Existing route checks: 25/25, including late-round attachment, corner geometry, continuous growth and interrupted selection. Production build passes with its existing bundle-size warning. No source data, model, dependency or typography changes.

Reproduce with Node 22.19.0 in the app repository: `npm run test:browser -- --port 9741`; open `/tests/design-review.html` and `/tests/route-rendering.html` at localhost:9741. Production preview: `npm run build`, `npm run preview -- --port 9742`, open `http://localhost:9742/bab-example-madness/`, select 2023, focus the timeline and press Home then ArrowRight four times for March 17. Check filled names on both sides, then advance to later rounds and Results. Configured Mac/in-app-browser evidence only.

[Pages run 38026927860](https://github.com/jordanmeyer/bab-example-madness/actions/runs/38026927860) succeeded for the recorded payload. The returning browser loaded main-iRoqZYMy.js. At March 17, 2023, 64 backbone child paths belong to filled slots and none retains a horizontal segment; the visible names are unobstructed. Screenshot: live.jpg. No live console errors observed. As in the preceding run, the local resizing harness logged one ResizeObserver undelivered-notifications warning while all assertions completed.
