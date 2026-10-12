# Batch & Balance

An original browser worksheet for a fictional bakery planning tomorrow's wholesale batches. Set contribution, committed/demand bounds and three resource constraints; solve a whole-batch mix, inspect exact slack, check a manual plan and copy the rationale. A two-product lesson shows why rounding a fractional LP can fail.

All business values are synthetic classroom assumptions. Each batch contains12boxes. Contribution means sales less variable costs, not revenue or total business profit. No institutional affiliation or endorsement.

## Run

Use Node22.19.0/npm10.9.3. Run `npm ci --ignore-scripts`, `npm run build`, then `npm run preview -- --port 9516`. Open `http://127.0.0.1:9516/bab-example-optimizer/`. `npm run test:browser -- --port 9515` serves the real browser worker suite at `/tests/`. `python3 scripts/oracles.py` reproduces independent enumerated references. See [SETUP.md](SETUP.md).

Default optimum:5breakfast/5tea/18celebration batches,$955contribution; prep470/480,oven600/600,packing360/360minutes. Tiny preset:3/2/0batches,$23; LP8/3each,$24; nearest rounding violates capacity.

## Contents

`app/model.js` owns units, validation, generated linear model, independent verification and copied evidence. `app/solver-worker.js` runs HiGHS; `app/solver-client.js` owns cancellation and the response deadline. `app/app.js` connects native controls and outputs. `tests/` imports the actual modules and workers; `scripts/oracles.py` uses independent Python enumeration. [PLAN.md](PLAN.md) records the accepted scope; [PLANNING-CONVERSATION.md](PLANNING-CONVERSATION.md) preserves actual simulated questions/replies.

RuntimeHiGHS1.15.3 and local WASM; buildVite8.3.4. No runtime service, font, tile, telemetry, upload or storage. Dependencies are pinned and third-party notices are published. The exact bounded HiGHS worker configuration passed independent review and the canonical approved-dependency check. Approval does not establish general solver or browser compatibility.

Source destination: `https://github.com/jordanmeyer/bab-example-optimizer`. Publication is coordinator-owned after independent PASS; see [DEPLOYMENT.md](DEPLOYMENT.md). Public commit attribution is Jordan Meyer <jordanmeyer@protonmail.com>, explicitly authorized for this campaign. Evaluation and limitations are in [EVALUATION.md](EVALUATION.md); independent findings belong to [REVIEW.md](REVIEW.md).

## Revision

[How this was built](BUILD-STORY.md). Default oven590 exposes a real integrality gap; three independent extra-hour solves show capacity value and one-click changes. The two-product lesson includes its feasible polygon. Fonts are bundled EB Garamond/Open Sans under OFL. Preview9704; tests9703.
