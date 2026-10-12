# Final-day timeline correction — 2026-10-10

The user identified clipped Final shading and a label left of Apr 3. The previous calendar ended at the final day center. The fix includes half-day endpoint gutters and shares the calendar domain between shading, date ticks and click snapping. No offset-only CSS patch, data change or hover change.

- Source checkpoint: `b2685ee89f20dba8a3214eccc06ddadf9f57ed23` in jordanmeyer/bab-example-madness.
- Published payload: `85b1b87ac2b911f8a8e0268e61fa437e065809c1` (evaluation-only follow-up).
- `node tests/run.mjs`: 80/80; `npm run build`: passed with the existing large-chunk warning.
- `tests/design-review.html`: 110/110; seven archived years have complete centered Final shading and labels. Beginning, middle and final forecast dates are selected correctly by calendar-coordinate clicks. Exact 375px layout is checked by the iframe harness.
- Production preview: desktop 1194 × 890 screenshot shows centered Apr 3/Final and full shading. The narrow override reported 341 CSS pixels (not requested 375); screenshot is retained as a bounded observation, not an exact 375px claim. Final shading remained contained. Local 127.0.0.1 had abnormal browser zoom; localhost rendered normally. The development harness emitted a ResizeObserver loop notification during repeated iframe resizing; production rendering verification is separate.
- Reproduce with Node 22.19.0, npm 10.9.3: npm ci; npm run build; npm run test:browser -- --port 9741; open /tests/design-review.html; npm run preview -- --port 9742; open /bab-example-madness/ and select 2023. Stop the two servers afterward.

Live deployment [38024791317](https://github.com/jordanmeyer/bab-example-madness/actions/runs/38024791317) completed successfully for the pushed payload. Returning browser loaded main-APeoRB9b.js. At 1194 × 890 the Final band is 36.868px wide; tick, band and label centers differ by less than 0.01px. No production console errors were observed. See live.json and live.jpg. Temporary servers and tabs were closed.
