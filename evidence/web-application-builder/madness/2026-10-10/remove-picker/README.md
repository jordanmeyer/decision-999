# Remove the picker and center commentary — 2026-10-10

Removed the two sentences under Leading title chances and the Find a team selector at the user's request. Deleted the selector's event handler, options, state synchronization and desktop/mobile CSS. Empty center notes no longer occupy space; selected-team and result information remain available.

Source checkpoint: c583bf8. Deployment payload: 3b751b0. Existing browser tests now use actual team-name and First Four buttons. Route checks: 25/25. Design checks: 110/110, covering 2,984 labels, direct selection, keyboard navigation, table interaction and 375px overflow. Production build passes with the existing bundle-size warning. Desktop production preview confirms no selector and no introductory center note; ranked leaders remain Houston 22%, Alabama 16%, Texas 8%, Purdue 5%, Kansas 5%.

Reproduce in the app repository using `npm run test:browser -- --port 9741` and opening `/tests/route-rendering.html` and `/tests/design-review.html`. Run `npm run build` and `npm run preview -- --port 9742` for production preview at `http://localhost:9742/bab-example-madness/`. Configured Mac, Node 22.19.0, in-app browser. No data, calculation or dependency changes.

[Pages run 38026611452](https://github.com/jordanmeyer/bab-example-madness/actions/runs/38026611452) succeeded for the recorded payload. The returning live browser loaded main-Ct-LYA-6.js and confirmed the selector is absent, center note empty, and ranked leaders unchanged; no live console errors observed. Screenshot: live.jpg. The local test server logged one ResizeObserver undelivered-notifications warning during the resizing harness; all 110 assertions completed and live production showed no such warning.
