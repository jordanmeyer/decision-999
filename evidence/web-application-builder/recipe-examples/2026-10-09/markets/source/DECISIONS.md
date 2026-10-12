# Decisions

- Choose Leaflet1.9.4 under explicit maintainer candidate authorization. A real polygon map, labels, zoom and linked selection are central; no tile provider or geolocation dependency is needed. Native controls and tables serve twelve markets without another library.
- Score with fixed, capped classroom anchors and normalized user weights. Do not normalize against the current dataset or filtered subset; otherwise identical raw inputs could get a different score merely because a row is hidden.
- Apply cost/setup gates to ranking, preserve exact equality and cent precision, and show excluded component scores only as illustrative evidence. Missing growth means no total score, even with zero growth weight. All-zero weights means no ranking.
- Preserve manual pins separately from automatic top3. Tightened gates flag excluded pins. Copy uses applied state rather than unsubmitted edits. Reset clears pins and restores the footprint/settings.
- Use public Census2024 generalized geographic geometry, strip unrelated attributes and bundle the result locally. All commercial fields are synthetic. No live data, remote fonts, external runtime services, demographic targeting or claims of institutional endorsement.
- Retain the map/observer across persisted pagehide; dispose only on actual destruction. Hidden-to-visible map control explicitly invalidates size and refits. Native select/table remain the complete analysis alternative.
