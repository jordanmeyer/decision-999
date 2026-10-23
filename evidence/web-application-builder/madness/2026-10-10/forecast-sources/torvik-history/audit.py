"""Check saved Torvik archive tables without fetching or modifying the app."""
import json
from pathlib import Path

paths = sorted(Path(__file__).parent.glob('torvik-*-archive-*.json'))
for path in paths:
    source = json.loads(path.read_text())
    rows = [row for row in source['tables'][0][1:] if len(row) in (9, 10, 11)]
    assert len(rows) == 68 and len({r[-9] for r in rows}) == 68, path
    totals = [0.0] * 7
    for row in rows:
        previous = 100.0
        for i, cell in enumerate(row[-7:]):
            value = 100.0 if cell == '✓' else float(cell)
            assert 0 <= value <= previous, (path, row)
            totals[i] += value
            previous = value
    assert all(abs(a-b) <= 3.41 for a, b in zip(totals, [6400, 3200, 1600, 800, 400, 200, 100])), (path, totals)
    print(path.name, 'PASS')
print(f'{len(paths)} complete seven-stage tables checked; no application files changed.')
