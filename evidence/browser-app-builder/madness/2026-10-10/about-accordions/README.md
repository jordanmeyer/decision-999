# Evidence accordions — 2026-10-10

Request: collapse Reading the evidence into an accordion, remove its heading, make all three sections full width, and remove the dashboard footer.

Source checkpoint: `da966192d8b50d860efa33fc6da5936d48cd424b`.
Published commit: `13cb74c65c60d6e000134a9100f6f004416759a4`.
[Successful Pages run](https://github.com/jordanmeyer/bab-example-madness/actions/runs/38027772424).

Production preview checks on this configured Mac: all three native details sections start collapsed and span 1004px desktop / 355px at a 375px viewport. Enter opens and Space closes each section. Dynamic 2023 coverage, source downloads and build-story link remain available. Phone body width is 375px; no page overflow. Build and whitespace checks pass, with the existing bundle-size warning. No calculation, bracket or dependency changes.

Returning live browser loaded `main-a4Zjbbto.js`, confirmed all three full-width collapsed sections, absent heading/footer and no console errors. Screenshot: `live-accordions.jpg`. Credits remain in the evidence and sources sections. The separate build-story page is unchanged. Temporary server/tab stopped; viewport override reset.

Reproduce at https://jordanmeyer.github.io/bab-example-madness/: select Data & methods, open each section with Enter and close with Space, then inspect at 375px. This is browser interaction evidence, not a screen-reader or novice-user test.
