# What fits

A project runs entirely in the visitor's browser, on data that is bundled with it, invented, public, or in a file the visitor chooses. Calculators, simulations, dashboards, data explorers and planners fit well.

Reshape what does not fit:

- Logins or accounts: one person's view, saved in their browser.
- Data shared between users: a file each user downloads and loads.
- Live feeds: a dated snapshot bundled with the app.
- AI while the app runs: rules or a model the student can explain.
- Sending email or taking payments: a summary the user copies or prints.

For charts use `echarts`; for spreadsheet import use `papaparse`, with the sheet saved as CSV. Add any other library with `course add <project> <library>`.

## Example projects

These show the scale and the kind of value; students may build anything that fits.

- A clinic manager's shift planner that shows coverage gaps before the rota is posted.
- A pricing what-if for a small brand: price, volume and margin side by side.
- A reorder simulator that shows a store buyer when stock runs out under different demand.
- A vendor scorecard a procurement analyst fills from a CSV export.
- A capacity forecast that tells an operations lead which week needs overtime.
- Poor example: "an AI career coach". It needs AI while it runs, and no answer can be checked by hand.
- Poor example: "a dashboard of company KPIs". It names no user and no decision, and its data cannot be shared.
