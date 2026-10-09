# Foldline Studio

An original classroom product-video studio for a fictional flat-pack desk tray. Edit a bounded creative brief, preview exact scene boundaries, and render a real silent H.264 MP4 in the browser.

Two authored templates—product story and benefit cards—support landscape 960×540 or portrait 540×960, 12 or 18 seconds at a nominal 30 frames/second, and navy/ivory treatments. Every clip says “Product concept”; benefits are proposed features, not tested outcomes. Preview starts paused. A plain-text transcript accompanies the visual preview.

## Run

Use Node 22.19.0 and npm 10.9.3. Run `npm ci`, then `npm run dev`. Build with `npm run build`; inspect the production base `/bab-example-video/` through `npm run preview`. Browser model/layout tests: `npm run test:browser -- --port 9521`, then open `http://127.0.0.1:9521/tests/`.

## Export and privacy

The actual browser must support H.264 WebCodecs encoding. The app checks the chosen dimensions, displays progress, allows cancellation/retry, and produces a playable file plus a native download link. Editing cancels an active snapshot and clears old output. Edits and output stay in memory and reset on reload.

Rendering sends Remotion the disclosed render event: IP address, origin, render type and status. Video content is not transmitted. This specific video-only telemetry exception was approved by the user. There are no remote images, fonts, uploads, audio tracks or accounts.

The actual operator declared an individual, noncommercial teaching-prototype license basis. That does not establish another operator's eligibility. See `app/public/THIRD-PARTY-NOTICES.txt` for exact notices, the narrowed silent-codec configuration, and the unmodified Mediabunny MPL source offering. `DECISIONS.md` explains the configuration and provenance limits.

## Evidence

`PLAN.md` records the agreed scope. `PLANNING-CONVERSATION.md` contains the actual simulated student exchange, not claims about real students. `EVALUATION.md` preserves failed checks and actual downloaded media, source, layout and lifecycle verification. The independent reviewer owns `REVIEW.md`. `DEPLOYMENT.md` records publication status; coordinator publication follows independent PASS and candidate approval.

Source destination: https://github.com/jordanmeyer/bab-example-video. Public Git attribution, authorized by the user: Jordan Meyer <jordanmeyer@protonmail.com>. No institutional affiliation or endorsement.
