---
name: leaflet-browser-app
description: Build geographic market comparisons with local GeoJSON, interactive Leaflet maps and linked rankings. Use for geographic analysis without remote map tiles or geocoding.
---

# Geographic analysis with Leaflet

Read [selection](../../references/library-selection.md), [workflow](../../references/workflow.md) and the `leaflet` configuration in [inventory](../../references/libraries.json). Use its exact packages only when approved. Establish the geographic question, measurement units, attribution, scoring assumptions and accessible comparison in the agreed plan; use [managed setup](../../references/managed-build.md).

Use a real Leaflet map with locally bundled GeoJSON or licensed local geographic assets. A useful map needs geographic context and a legend, not merely disconnected dots. Explain synthetic attributes separately from actual geographic boundaries. Remote tiles, geocoding, routing services and visitor location requests are outside this configuration. Use circle markers or locally bundled icons; no default CDN icon paths.

```js
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
const map = L.map('map', { scrollWheelZoom: false }).setView([35.8, -79], 7);
const layer = L.geoJSON(localMarkets, { style: feature => marketStyle(feature) }).addTo(map);
map.fitBounds(layer.getBounds());
// Imported names are text, not popup HTML.
const label = document.createElement('span');
label.textContent = market.name;
marker.bindPopup(label);
```

Derive solid colors and system typography from [Campus Designer](../campus-designer/SKILL.md). Use non-color cues for selected/shortlisted markets and a linked keyboard-accessible table or select. If blue is used for fill, keep it opaque; choose another published color rather than fading Duke blue. Preserve Leaflet structural CSS and attribution controls. Resize after a hidden panel becomes visible; remove map/listeners when the containing view is destroyed.

Verify geographic coordinate order (GeoJSON longitude, latitude), independent scoring/ranking examples, ties and zero-weight behavior. Exercise map/table selection, zoom, keyboard alternative, narrow layout and hidden-to-visible resize. Inspect local asset paths and requests under the actual Pages prefix. Record observed behavior through [Evaluate](../evaluate-browser-app/SKILL.md); a map is not a forecast or a validated site-selection model.
