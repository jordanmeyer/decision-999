# Smaller probability labels — 2026-10-10

User requested `<0.1%` and `<0.01%` when positive probabilities fall below those percentages. Two conditions in the shared formatter implement this consistently in bracket labels, title probability, tables and team details. Existing exact-value tooltips, calculations, zero/certainty semantics and sorting remain unchanged. Source-rounded zero values retain the prior explanation; no extra precision is inferred from them.

Source checkpoint: `3125553c9b7cd2635959791b5c3d004bd01014ec`. Published payload: `34416fae8f16e90282cd79d8cbbc00121bee260d`.

`node tests/run.mjs`: 81/81, including strict boundaries at 0.01%, 0.1% and 1%, tiny positive values, zero and certainty. Production build passes with the existing bundle-size warning. In the production browser preview, 2023 Howard displays `<0.01%` in the center and later route stages; North Carolina State displays `<0.1%` in the title-chance table column. The six-character center label initially exceeded the 144px panel; longer labels now use 2.7rem, with client and scroll widths both 144px. At an actual 375px browser viewport, body width stays 375px, Howard's detail reads `<0.01%`, and the table renders both new thresholds (65 matching cells). No new dependency or data change.

Reproduce with Node 22.19.0: `node tests/run.mjs`, `npm run build`, `npm run preview -- --port 9742`; open `http://localhost:9742/bab-example-madness/`, choose 2023 and Howard, then inspect bracket, table and team details. Repeat with North Carolina State. Configured Mac/in-app-browser evidence only.

Live deployment [38026330229](https://github.com/jordanmeyer/bab-example-madness/actions/runs/38026330229) succeeded for the exact payload above. The returning browser loaded `main-UAOApCUs.js`, displayed Howard's `<0.01%` title chance and route labels, and recorded no console errors. Screenshot: live.jpg.
