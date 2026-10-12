# Continuous route animation — 2026-10-10

User observation: downstream intersections began growing before the drawing front reached them. The former schedule started stage 2 at 45ms even though stage 1 continued to 150ms.

App source checkpoint: `752012758e93c3fcf4b3606f67ddca0e0e23e21f`. Publication payload: `41b8b2e7324769bbbdc1b06d7e4d833b79dd5622`.

The app now measures the final SVG paths, including the text extension, and assigns successive intervals proportional to their lengths within 900ms. All entering animations share a start time. Corner radii follow adjacent strokes and remain hidden until arrival. Late forecasts begin immediately at the first uncertain round.

Before the fix, new checks caught Kansas and Fairleigh Dickinson stage 2 drawing at 50ms while stage 1 was 66.7% undrawn, and a late forecast waiting for already-completed rounds. The initial Alabama test reused an already-settled selection; that test flaw was corrected by clearing before replaying every sampled route.

After the fix, `tests/route-rendering.html` reports 25/25 checks. See route-checks.txt. It runs the actual app in an iframe, freezing actual Web Animations at 25ms intervals on left, right and First Four paths. Existing checks cover corner rasterization, name attachment, retirement, rapid changes and clearing. `node tests/run.mjs`: 80/80. `npm run build` succeeds with the existing bundle-size warning. No model, data, dependency or CSS changes.

Reproduce with Node 22.19.0/npm 10.9.3 in the app repository: `npm run test:browser -- --port 9741`, then open `http://localhost:9741/tests/route-rendering.html`. Production: `npm run build`, `npm run preview -- --port 9742`, then `http://localhost:9742/bab-example-madness/`. Select teams on both sides and a late forecast. This run used the configured Mac and Codex in-app browser; it does not extend platform or assistive-technology claims.

Production-preview observation immediately after Alabama selection: stage 1 dash offset 0.75689 with positive width; stages 2–6 offset 1 and width 0. No observed console errors.

Live verification: GitHub Actions [38025957543](https://github.com/jordanmeyer/bab-example-madness/actions/runs/38025957543) completed successfully for payload `41b8b2e`. Reloading the existing live browser loaded `main-BaF5mvuU.js`. Immediately after selection, Alabama stage 1 had dash offset 0.78564 and width 3.30003px; stages 2–6 remained at offset 1 and width 0. Once settled, all six offsets were 0 with their probability widths, and Alabama retained its known 16% title forecast. No console errors observed. `live-drawing.jpg` captures the early drawing front; `live-settled.jpg` shows the completed route. Screenshots are snapshots, while the temporal assertions are recorded in route-checks.txt.
