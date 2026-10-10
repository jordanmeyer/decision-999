# Champion alignment and header — 2026-10-10

Removed the dashboard's Data & methods link and centered the champion label within its existing slot, directly over the title stem. Published commit: `61baac810f997f06e30a6fba4edbddc700d8a1dc`; Pages run `38028487529` succeeded.

Build and whitespace checks pass (existing bundle-size warning). Production preview measures label center at x=502, matching the stem. At 375px the body remains 375px wide. Keyboard champion selection works. Returning live browser confirms the removed header link and centered name (x=501.989 with browser pixel rounding), without console errors. Screenshots: `live-header.jpg`, `live-champion.jpg`. Temporary preview stopped and tab closed. No data, calculations, dependencies or hover behavior changed.
