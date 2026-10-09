"""One-time, explicit source refresh; never called by build or the browser."""
import json
import urllib.parse
import urllib.request
from pathlib import Path

STATES = 'AL AR FL GA KY LA MS NC SC TN VA WV MO IL IN OH PA MD DC DE OK TX'.split()
SOURCE = 'https://tigerweb.geo.census.gov/arcgis/rest/services/Generalized_ACS2024/State_County/MapServer/9/query'
query = urllib.parse.urlencode({
    'where': 'STUSAB IN (' + ','.join("'" + s + "'" for s in STATES) + ')',
    'outFields': 'STUSAB,NAME,INTPTLAT,INTPTLON',
    'outSR': '4326', 'returnGeometry': 'true', 'f': 'geojson',
})
with urllib.request.urlopen(SOURCE + '?' + query) as response:
    data = json.load(response)
assert data['type'] == 'FeatureCollection' and len(data['features']) == len(STATES)

def rounded(value):
    return [rounded(item) for item in value] if isinstance(value, list) else round(value, 5)

for feature in data['features']:
    feature.pop('id', None)
    props = feature['properties']
    feature['properties'] = {'id': props['STUSAB'], 'name': props['NAME'],
        'label': [float(props['INTPTLAT']), float(props['INTPTLON'])]}
    feature['geometry']['coordinates'] = rounded(feature['geometry']['coordinates'])
data['features'].sort(key=lambda feature: feature['properties']['id'])
destination = Path(__file__).resolve().parents[1] / 'app/data/states.json'
destination.parent.mkdir(parents=True, exist_ok=True)
destination.write_text(json.dumps(data, separators=(',', ':')) + '\n')
print(f'{len(data["features"])} official state geometries saved to {destination}')
print(SOURCE + '?' + query)
