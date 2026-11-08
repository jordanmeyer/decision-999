---
name: leaflet-browser-app
description: Build geographic market comparisons with local GeoJSON, interactive Leaflet maps and linked rankings. Use for geographic analysis without remote map tiles or geocoding.
---

# Geographic analysis with Leaflet

Read [selection](../../references/library-selection.md), [workflow](../../references/workflow.md) and the `leaflet` configuration in [inventory](../../references/libraries.json). Use its exact packages only when approved. Establish the geographic question, measurement units, attribution, scoring assumptions and accessible comparison in the agreed plan; use [managed setup](../../references/managed-build.md).

For weighted market screens, read [market ranking and sensitivity](../../references/decision-models.md#market-ranking-and-sensitivity). Explain changes through metric contributions and provide the agreed sensitivity view; the map is only one presentation of the model.

Use a real Leaflet map with locally bundled GeoJSON or licensed local geographic assets. A useful map needs geographic context and a legend, not merely disconnected dots. Explain synthetic attributes separately from actual geographic boundaries. Remote tiles, geocoding, routing services and visitor location requests are outside this configuration. Use circle markers or locally bundled icons; no default CDN icon paths.


Read [React and TypeScript integration](../../references/react-libraries.md). Copy this standalone example into `app/recipes/leaflet.tsx`. Install the inventory’s development type packages and copy any listed declarations before typechecking.

```tsx
import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export function Example() {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = host.current!;
    const map = L.map(element, { scrollWheelZoom: false });
    const navy = getComputedStyle(element).getPropertyValue('--duke-navy-blue').trim();
    const region = L.polygon([[35.7, -79.2], [35.9, -79.2], [35.9, -78.9], [35.7, -78.9]],
      { color: navy, fillColor: navy, fillOpacity: 1 }).addTo(map);
    const label = document.createElement('span');
    label.textContent = 'Synthetic region: score 72';
    region.bindPopup(label);
    map.fitBounds(region.getBounds());
    const observer = new ResizeObserver(() => map.invalidateSize());
    observer.observe(element);
    return () => { observer.disconnect(); map.remove(); };
  }, []);
  return <section><div ref={host} style={{ height: 280 }} aria-label="Synthetic region map" />
    <p>Fictional boundary and score for integration checking only: 72 points.</p></section>;
}
```

Follow [shared identity selection](../../references/workflow.md#shared-design) for colors and locally bundled typography. Use non-color cues for selected/shortlisted markets and a linked keyboard-accessible table or select. For Duke-blue fills, keep them opaque and choose another published color when needed. Preserve Leaflet structural CSS and attribution controls. Resize after a hidden panel becomes visible; remove map/listeners when the containing view is destroyed.

Verify geographic coordinate order (GeoJSON longitude, latitude), independent scoring/ranking examples, ties and zero-weight behavior. Exercise map/table selection, zoom, keyboard alternative, narrow layout and hidden-to-visible resize. Inspect local asset paths and requests under the actual Pages prefix. Record observed behavior through [Evaluate](../evaluate-browser-app/SKILL.md); a map is not a forecast or a validated site-selection model.
