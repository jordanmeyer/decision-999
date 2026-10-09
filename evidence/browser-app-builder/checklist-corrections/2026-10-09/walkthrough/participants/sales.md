# Sales — participant task

[Open the app](https://jordanmeyer.github.io/bab-trial-sales-2026-10-08/). Reload or reset it before starting.

Allow 12 minutes. Start from the default app supplied by the facilitator. Use only its synthetic data and a local text or CSV editor. Think aloud; this reviews the app, not you. State predictions before changes or worked answers. Stop at the time limit and describe any unfinished steps.

1. Explain the default revenue, product cost and contribution. Identify the product–region group with the largest revenue and decide whether it also contributes the most. Name one limit on interpreting contribution as business profit.
2. Download the synthetic template yourself. Save a copy as `sales-novice-valid.csv`. Add this one data row, preserving the six headers and all existing rows:

   ```csv
   2026-10-05,North,Pen,2,10.00,6.00
   ```

   Predict how the all-row totals and row count will change. Import your file and explain the result. Record the active filename and count.
3. Save another copy as `sales-novice-invalid.csv`. Change only the added row's date to `2026-02-30` and import it. Explain the error and identify the dataset still in use. Correct that date to `2026-10-05`, save as `sales-novice-corrected.csv` and import again. Explain how you know the correction succeeded.
4. Apply a region or product filter. Set From to October 3, 2026 and Through to October 1, 2026. Explain the result and then reset the varied sample. Check the active dataset, filters and errors after reset.
5. Explain one finding you trust, one inference the data cannot support, and how you would preserve the source and filter context outside this tab.
