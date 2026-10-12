# Fixed championship summary — 2026-10-10

Results score movement was caused by a 132px offset between selected and unselected panels. The lower position now applies only to forecast previews. Results summaries stay at 210px.

Source: `7a2ce700659251ccb29de398fbd191d5e1cd41e4`. Published: `5630b8e1580a24c7e232cd1037d73e32a197eda7`. Pages run `38028223617` succeeded.

The real-browser regression compares score rectangles before hover, during hover and after exit for ten played seasons. All ten hover checks failed before correction (150/160 total); after correction 160/160 passed across 2,984 labels. Saved results: `browser-results.json`. The resizing harness emits its known ResizeObserver warning; the production browser console has no errors. Build and whitespace checks pass, with the existing bundle-size warning.

Production preview and returning live browser both show Connecticut's 2023 score 76–59 at 210px before and after champion selection. Screenshot: `live-fixed-score.jpg`. Reproduce with `npm run test:browser -- --port 9741`, then open `/tests/design-review.html`. No data/model/dependency changes. Temporary servers and tabs stopped.
