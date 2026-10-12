# Restore the board-level analytical presentation

Living ExecPlan under ~/.codex/PLANS.md.

## Purpose / Big Picture

Present a conditional launch decision the board can challenge in the room. Compare full launch, staged pilot and defer; expose economics, downside and model boundaries. Default recommendation is a$1.896m pilot, not a small pop-up.

## Progress

- [x] 2026-10-09: Read shared/current guidance, original brief and actual app; preserve public history.
- [x] 2026-10-09: Implement board model, seven-slide story, three charts, appendix, live controls and presenter mode.
- [x] Final model/browser/production evaluation complete at e51279243aa003d06db0aa80fc4f718a4f92758d.
- [x] Independent root review PASS; publication authorized.
- [x] Root live verification passed at d3860ec855de9bd498ba1b13ffaae1f2084f9701 / Actions37966707459.

## Surprises & Discoveries

An initial test caught preset names overriding alternative names in object spreads (43/44 passed). Put alternative names after the input spread; retain this failed round in EVALUATION.

## Decision Log

2026-10-09: Use made-to-order sales, disclosed cash assumptions and a fixed$200,000 stress-loss gate. Pilot sales30% and fixed25% are explicit assumptions. Choose full launch if both alternatives pass, pilot if only it passes, or defer. Cheap valid edits update immediately. Reuse Reveal and local SVG rather than add dependencies.

## Outcomes & Retrospective

Implementation and developer evidence complete; independent root PASS. Root live verification passed.

## Context and Orientation

app/model.js owns cents, policy, options, sensitivity and record. app/app.js owns one valid state, Reveal lifecycle, native inputs and three SVGs. app/index.html holds seven sections; app/style.css and theme files own layout/fonts. tests/model.test.js runs in Node and tests/index.html. Fixed-width QA frames remain developer tools and are not deployed.

## Plan of Work

Finish independent boundary tests and story/provenance, checkpoint relevant source, install locked dependencies and run canonical checker/build. Open test9705/tests and production9706/bab-example-presentation. Verify default/lower/stronger, live and invalid edits, all charts/slides/appendix, copy, keyboard, presenter mode, Back state, font and responsive metrics. Preserve each failed round. Report source hash and independent reviewer results before push.

## Concrete Steps

npm ci --cache /private/tmp/bab-npm-cache; npm test; canonical check-dependencies.mjs; npm run build. Serve npm run test:browser -- --port 9705 and npm run preview -- --port 9706. Copy tests/desktop.html,narrow.html,narrow390.html to dist only for local prefixed QA after build. Use actual CUA tabs and authored frames, never resize shared viewport.

## Validation and Acceptance

PLAN contains independently derived values. Default full480k/−672k andpilot264k/−81.6k; funding6.72m/1.896m; threshold33334. Lower20k defers;60k full1.92m/192k passes. Exact−200k stress passes, next-cent loss fails; zero base profit fails. All supported math stays safe. Inspect320/390/1440 actual sizes and every visible chart, live errors and navigation. No unchanged-source repeated tests after complete acceptance.

## Idempotence and Recovery

No stored data or external writes. Valid restore/presets and reload recover. Fullscreen can exit. Ordinary commits, no public rewrite; only authorized push after independent PASS.

## Artifacts and Notes

EVALUATION preserves previous rounds and new evidence with source freshness. Course evidence stays only in the assigned presentation revision folder. Root owns final live review.

## Interfaces and Dependencies

Inputs are cents price/cost/fixed plus integer quantity. alternatives returns base/stress/funding/eligibility; recommendation returns selected option or null. Existing Reveal6.0.2/Vite8.3.4; local OFL fonts only.
