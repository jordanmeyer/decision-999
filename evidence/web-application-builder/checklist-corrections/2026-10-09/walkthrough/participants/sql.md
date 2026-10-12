# Fulfillment Lab — participant task

[Open the app](https://jordanmeyer.github.io/bab-example-sql/). Reload or reset it before starting.

Allow 12 minutes. Start from the default app supplied by the facilitator. Think aloud; this reviews the app, not you. State predictions before query changes or worked answers. You may use the app's schema, examples and guidance. Stop at the time limit and describe unfinished steps.

1. Describe the default dataset and first query. Explain why there is no chart, then use the guidance to load a query that can be charted.
2. Count orders by region. Predict which region has the most unshipped order value, then run “Where is value waiting?” Explain whether order counts settled that question.
3. In “Where is value waiting?”, retain only West by placing `WHERE o.region = 'West'` immediately before the final `GROUP BY o.region`, after the join to orders. Leave the earlier shipment aggregation unchanged. Predict whether West's value changes, then run. Save your SQL, select another starter and recover the previous query.
4. Change a column name to `nonexistent` and run. Use the error guidance to recover. Explain which executed query any visible result belongs to.
5. Open the four-line hand-check case. Inspect its order lines and shipment events. Predict the effect of directly joining those events to order lines, then inspect the join-trap result and explain it.
6. Download a result CSV and its matching note. Identify the executed SQL, dataset and units; explain visible versus exported rows. State one limit on treating unshipped value as a business recommendation.
