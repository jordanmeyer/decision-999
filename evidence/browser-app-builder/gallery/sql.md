# Fulfillment Lab: how this was built

Where is unshipped order value? Query related local tables and learn why joining at the wrong grain can double-count value.

This is an instructor-run example with a simulated planning conversation and synthetic business data, not a student outcome. The preview is an unchanged copy of the October 9, 2026 live capture. The completed campaign used Browser App Builder 0.2.2; these records predate the later core checklist corrections.

- [Original campaign brief](../recipe-examples/2026-10-09/BRIEFS.md#sql-data-explorer)
- [Subsequent simulated planning conversation](https://github.com/jordanmeyer/decision-999/tree/main/evidence/browser-app-builder/recipe-examples/2026-10-09/sql/source/PLANNING-CONVERSATION.md)
- [Agreed plan, model and scope](https://github.com/jordanmeyer/decision-999/tree/main/evidence/browser-app-builder/recipe-examples/2026-10-09/sql/source/PLAN.md)
- [Setup → Plan → Build → Evaluate → Deploy: project records and source](https://github.com/jordanmeyer/decision-999/tree/main/evidence/browser-app-builder/recipe-examples/2026-10-09/sql/source)
- [Evaluation cases and observed results](https://github.com/jordanmeyer/decision-999/tree/main/evidence/browser-app-builder/recipe-examples/2026-10-09/sql/source/EVALUATION.md)
- [Independent review and revisions](https://github.com/jordanmeyer/decision-999/tree/main/evidence/browser-app-builder/recipe-examples/2026-10-09/sql/source/REVIEW.md)
- [Live application](https://jordanmeyer.github.io/bab-example-sql/)

Selected recipe libraries: DuckDB-Wasm · ECharts. Campus Designer supplied the shared visual direction. The source records explain the exact tested configuration and limitations. Compare the original brief with the subsequent conversation and agreed scope; the checklist found that some requested capabilities were narrowed during those exchanges. A historical review pass does not certify the model or every feature of a library. The subsequent [core checklist response](../reviews/2026-10-09-core-checklist/README.md) strengthens instructions for future builds; it does not update this deployed example.
