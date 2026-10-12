# Fulfillment Lab novice task — no answer key

Open the reviewed Fulfillment Lab build in its default state. Allow about 10 minutes.

1. Describe the default dataset and what the first query returns. Explain why there is no chart and use the displayed guidance to load a chart-compatible query.
2. Count orders by region, then predict which region will have the most unshipped order value. Run Where is value waiting? Explain why order counts alone did not settle that question.
3. Edit the region query to retain only West, placing WHERE o.region = 'West' before GROUP BY. Predict whether West's value should change, then run it. Save your SQL. Select another starter, then recover the previous query.
4. Change a column name to nonexistent and run the query. Use the error guidance to recover. Explain whether the visible result belongs to the failed query or an earlier one.
5. Open the four-line hand-check case and inspect the raw order lines and shipment events. Predict what a direct shipment join will do to order value, then inspect the join-trap result. Explain the grain mismatch in your own words.
6. Download a result CSV and its matching note. Identify the executed SQL, dataset and units, and explain the difference between the visible page and the exported row count. State one limitation on treating unshipped value as a business recommendation.

## Facilitator record

Use an actual novice participant. Present only the tasks above and let the participant operate the app without coaching; ask them to think aloud. Do not open the supplied worked answers until the initial attempt is recorded. If help is needed, record the point and the help given, then distinguish assisted completion from independent completion. Keep notes anonymous.

Record the session date, app commit/live URL, browser and viewport; prior relevant experience; the participant's own default interpretation, prediction, observed result, recovery and limitation; confusion or wrong inferences; whether they could find each action; any assistance; and revisions prompted by the session. A completed script is preparation, not evidence of a completed session. Screen-reader verification is a separate task record.

Session: **not yet run**. Participant observations: **not yet collected**.
