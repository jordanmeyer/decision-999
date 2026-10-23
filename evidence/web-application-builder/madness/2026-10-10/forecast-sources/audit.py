"""Audit recovered publisher tables without changing the application.

Run: python3 evidence/web-application-builder/madness/2026-10-10/forecast-sources/audit.py
Inputs are factual table extracts in raw/. Values remain percentages or publisher
bounds; no missing probability is estimated. Output is inventory.json.
"""
import csv
import hashlib
import json
import re
from pathlib import Path

ROOT = Path(__file__).parent
RAW = ROOT / 'raw'
STAGES = ['R64', 'R32', 'S16', 'E8', 'F4', 'F2', 'Champion']
records = []


def record(path, source, rows, stages, date=None, notes=(), full=True):
    assert rows and len({r['name'] for r in rows}) == len(rows), path
    totals = [0.0] * len(stages)
    bounds = 0
    for row in rows:
        values = row['values']
        assert len(values) == len(stages), (path, row)
        previous = 100.0
        for i, value in enumerate(values):
            text = str(value).replace('%', '')
            bounded = text.startswith('<')
            bounds += bounded
            number = 100.0 if text == '✓' else float(text.lstrip('<'))
            assert 0 <= number <= previous + 1e-9, (path, row)
            previous = number
            totals[i] += number
    expected = [6400, 3200, 1600, 800, 400, 200, 100][-len(stages):]
    # Published rounding can accumulate by up to 0.05 percentage points per row.
    # A '<x' contributes x as an upper bound here, not an invented point estimate.
    if full:
        assert all(abs(a-b) <= len(rows)*0.05 + 0.01 for a,b in zip(totals,expected)), (path, totals)
    result = {
        'file': str(path.relative_to(ROOT)), 'sha256': hashlib.sha256(path.read_bytes()).hexdigest(),
        'provider': source['provider'], 'competition': source.get('competition', 'mens'),
        'year': source['year'], 'url': source.get('url'), 'date': date,
        'teamCount': len(rows), 'stages': stages, 'completeCoverage': full,
        'notes': list(notes), 'boundedCellCount': bounds,
        'stagePercentSumsOrUpperBounds': [round(x, 6) for x in totals], 'rows': rows,
    }
    records.append(result)


for path in sorted(RAW.glob('kenpom-mens-*.json')):
    source = json.loads(path.read_text())
    if 'table' not in source:
        continue
    late = 'sweet16' in path.name
    count = 4 if late else 6
    rows = {}
    for line in source['table'].splitlines():
        match = re.match(r'\s*(\d+)(MW|[NEWS])\s+(.+?)\s+((?:<?[\d.]+\s*)+)$', line)
        if not match:
            continue
        seed, region, name, values = match.groups()
        row = {'name': name, 'seed': int(seed), 'region': region, 'values': values.split()[:count]}
        assert name not in rows or row == rows[name], (path, name)
        rows[name] = row
    assert len(rows) == (16 if late else 68), path
    published = source['published']
    record(path, source, list(rows.values()), STAGES[-count:], published.get('date', published.get('datetime')),
           ['First Four probabilities not published.' if not late else 'Only the sixteen surviving teams and four remaining stages are published.',
            'Keep less-than bounds and decimal precision; numeric rounded zero is not evidence of elimination.'])

path = RAW / 'kenpom-mens-2026.csv'
with path.open() as handle:
    raw = list(csv.DictReader(handle))
columns = ['Rd2', 'Swt16', 'Elite8', 'Final4', 'Final', 'Champ']
assert len(raw) == 68
assert [sum(int(r[c]) for r in raw) for c in columns] == [32000000,16000000,8000000,4000000,2000000,1000000]
source = json.loads((RAW / 'kenpom-mens-2026.json').read_text())
record(path, source, [{'name': r['Team'], 'seed': int(r['seed']), 'region':r['Region'],
                      'values': [format(int(r[c])/10000, '.4f') for c in columns]} for r in raw],
       STAGES[1:], '2026-03-16', ['Counts from one million simulations; First Four omitted. Corrected CSV commit 21354254edf58fa247f036a20d9e03a5409142e0.'])

for path in sorted(RAW.glob('torvik-*.json')):
    source = json.loads(path.read_text())
    rows = [{'name':r[2], 'seed':r[0], 'region':r[1], 'values':r[4:]} for r in source['rows'][1:]]
    assert len(rows) == 68 and source['selected'][2] == 'Pre-Tourney Odds', path
    notes = ['Publisher option: Pre-Tourney Odds. No exact historical timestamp is supplied.',
             'One-decimal estimates; preserve the distinction between a checkmark and a rounded 100.']
    if source['year'] == 2024 and source['competition'] == 'mens':
        notes.append('Already resolves Wagner–Howard in the First Four; not a pristine Selection Sunday snapshot.')
    record(path, source, rows, STAGES, notes=notes)

source = json.loads((RAW / 'silver-womens-2024-images.json').read_text())
rows = []
for path in sorted(RAW.glob('silver-womens-2024-*.json')):
    part = json.loads(path.read_text())
    for r in part.get('rows', []):
        rows.append({'name':r[0], 'region':part['region'], 'values':[format(v,'.1f') for v in r[1:]]})
assert len(rows) == 68
record(RAW/'silver-womens-2024-images.json', source, rows, STAGES, source['published']['datetime'],
       ['Transcribed from four publicly visible regional images; screenshots retained for checking.',
        'One-decimal rounded probabilities, including zero and 100; paid precision spreadsheets not accessed.'])

path = RAW/'numberfire-mens-2025.json'
source = json.loads(path.read_text())
record(path, source, [{'name':r[0], 'values':r[1:]} for r in source['rows'][1:]], STAGES[1:],
       source['published'][0]['date'], ['Brandon Gdula simulations using numberFire ratings; 68 teams, no First Four column.'])

path = RAW/'neil-mens-2025.csv'
with path.open(encoding='utf-8-sig') as handle:
    raw = list(csv.reader(handle))
assert raw[1][0] == 'Team' and len(raw) == 70
source = json.loads((RAW/'neil-mens-2025.json').read_text())
record(path, source, [{'name':r[0], 'seed':r[2], 'region':r[1], 'values':r[4:]} for r in raw[2:]], STAGES,
       '2025-04-06 05:41:55', ['Publisher timezone unspecified. Championship-eve snapshot; prior rounds are completed results, not opening forecasts.',
                             'CSV exposes two decimal places; the download is retained at its published precision.'])

for path in sorted(RAW.glob('espn-mens-*.json')):
    source = json.loads(path.read_text())
    if 'tables' not in source or not source.get('teamIds'):
        continue
    tables = source['tables']
    if len(tables) == 1:
        rows = [{'id':tid, 'name':r[1], 'seed':r[2], 'region':r[3], 'values':r[4:]} for tid,r in zip(source['teamIds'],tables[0][1:])]
    else:
        rows = [{'id':tid, 'name':name[0], 'seed':r[0], 'region':r[1], 'values':r[2:][::-1]} for tid,name,r in zip(source['teamIds'],tables[0][1:],tables[1][1:])]
    assert len(rows) == len(source['teamIds'])
    notes = ['Original publisher update time is separate from archive capture time.',
             'Six stages; First Four omitted. Rounded zero and 100 require result-aware interpretation.']
    if not source['completeField']:
        notes.append('Incomplete field: '+', '.join(t['name'] for t in source['missingTournamentTeams']))
    if source.get('extraTeamIds'):
        notes.append('Table includes non-field or historical ID aliases; see raw record.')
    record(path, source, rows, STAGES[1:], source.get('publishedDate'), notes, source['completeField'])
    records[-1]['capture'] = source['capture']
    records[-1]['probabilitiesFingerprint'] = hashlib.sha256(json.dumps(sorted((r['id'],r['values']) for r in rows)).encode()).hexdigest()

(ROOT/'inventory.json').write_text(json.dumps(records, indent=2)+'\n')
summary = {}
for r in records:
    key = f"{r['provider']} / {r['competition']} / {r['year']}"
    group = summary.setdefault(key, {'records':0,'complete':0,'teams':[]})
    group['records'] += 1
    group['complete'] += r['completeCoverage']
    group['teams'] = sorted(set(group['teams']+[r['teamCount']]))
print(json.dumps(summary, indent=2))
print(f'Validated {len(records)} recovered tables. No application files changed.')
