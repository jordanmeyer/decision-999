# Decisions

- 2026-10-08, simulated student: one notebook product and one sales period, USD cents, whole units, all inputs nonnegative and capped at 1,000,000. Keeps comparison understandable and arithmetic bounded.
- 2026-10-08, simulated student: no break-even for nonpositive contribution and positive fixed cost; with zero fixed cost zero units already breaks even, but negative contribution loses money per sale.
- 2026-10-08, agent implementation: integer cents, decimal strings, native form and browser modules; no dependencies, storage or network. Prevents fractional-cent artifacts and unnecessary concepts.
- 2026-10-08, design: unchanged Duke navy/royal, Georgia and Arial system fonts; no marks or institutional claims. Uses bundled Campus Designer without remote assets.
- 2026-10-08, simulated student after first live deployment: add a decimal-example preset (19.90/19.80/1000/100) to explore cents-sensitive break-even. One native button reuses the existing validation/result update. The underlying model and default reset are unchanged.
- 2026-10-08, observed live defect: a returning browser kept the old entry module after HTML changed. Version the changed app.js reference with ?v=2; retain unchanged model/style URLs. This is a concrete cache correction, not a new build system or plugin modification. Verify a returning browser after corrective deployment.
