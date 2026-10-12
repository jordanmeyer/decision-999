# Desk / Day — analytical presentation

A synthetic board-level product-launch recommendation. Seven Reveal.js slides compare a full launch, a staged pilot and deferral. Valid assumptions update all three charts and the recommendation immediately. The appendix, speaker notes and copied record explain the arithmetic, illustrative policy and exclusions.

[How this was built](BUILD-STORY.md) links the original brief and actual simulated planning conversation. [PLAN.md](PLAN.md) owns the revised model; [EVALUATION.md](EVALUATION.md) retains failed and successful checks. No institutional affiliation or endorsement is claimed.

## Run locally

Use the pinned Node/npm versions. Run `npm ci`, `npm test`, and `npm run build`. `npm run dev` serves the app; `npm run test:browser` exposes `/tests/`. `npm run preview` serves the built `/bab-example-presentation/` prefix. QA frame files under tests are local diagnostics and are not shipped by the deployment build.

## Model

The default full launch earns$480,000 on40,000 kits, but its60%-volume stress loses$672,000. The staged pilot earns$264,000, loses$81,600 under stress, and needs$1.896m of base funding. An explicit$200,000 stress-loss limit and positive base-result gate select the pilot. Demand20,000 defers;60,000 permits the full launch. This is illustrative policy, not market evidence or a guaranteed outcome. Funding and operating profit are distinct; see the appendix for timing and made-to-order assumptions.

## Dependencies and publication

Existing exact Reveal.js6.0.2 and Vite8.3.4; local OFL EB Garamond/Open Sans fonts. Build includes package/font notices. Only ordinary main commits deploy via the existing Pages workflow after independent review. See [DEPLOYMENT.md](DEPLOYMENT.md) for live evidence.
