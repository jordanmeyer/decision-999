# How Desk / Day was built

The original simulated student brief was: “I need to present a product-launch recommendation to the board. I want a polished slide story with a few local assumptions I can change during discussion, charts that update correctly, and an appendix explaining the model. Live means interactive in the room, not fetching new external data.”

The actual [simulated planning conversation](PLANNING-CONVERSATION.md) narrowed the initial example to a small pop-up. That record is retained. The user's later live-app revision restored the board-level stakes, multiple charts and model appendix; it did not fabricate another student approval. [The current plan](PLAN.md) and [decisions](DECISIONS.md) explain the revised scope.

Browser App Builder's managed-build, analytical-presentation and decision-model workflows shaped the implementation: exact cents, explicit assumptions, local calculations, browser-visible tests and a source checkpoint before evaluation. Reveal.js owns the seven-slide story. Three native SVG charts show economics, downside alternatives and demand sensitivity. Licensed local EB Garamond and Open Sans follow Campus Designer typography and published colors, without marks or affiliation claims.

The default synthetic board case recommends a$1.896m staged pilot. Its$264,000 base result and−$81,600 stress result clear the explicit policy; the full launch's−$672,000 stress does not. Lower demand defers the commitment; stronger demand can permit the full launch. Valid inputs update all slides, and invalid fields visibly preserve the last valid result. The appendix distinguishes funding from profit, discloses scaling policy and omitted cash-flow/tax/inventory effects, and avoids demand or probability claims.

[Model tests](tests/model.test.js) check independent known answers, policy boundaries, cent precision and numeric edges. [Evaluation](EVALUATION.md) preserves observed browser/production results and failed rounds. [Deployment](DEPLOYMENT.md) distinguishes reviewed source from live publication. Every figure is synthetic; this is an independent classroom example.
