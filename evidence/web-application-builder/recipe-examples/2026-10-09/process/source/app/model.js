const numeric = (value, min, max) => typeof value === 'number' && Number.isFinite(value) && value >= min && value <= max;
const idValid = id => typeof id === 'string' && /^[A-Za-z][A-Za-z0-9_-]{0,39}$/.test(id);
const labelValid = label => typeof label === 'string' && label.trim().length > 0 && label.length <= 80 && !/[\x00-\x1f]/.test(label);
const keysAre = (value, keys) => value && typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length === keys.length && keys.every(key => Object.hasOwn(value, key));

export function validate(process) {
  const errors = [];
  if (!keysAre(process, ['version', 'name', 'arrivals', 'teams', 'nodes', 'edges']) || process.version !== 1 || !labelValid(process.name) || !numeric(process.arrivals, 0, 10000)) return ['Use version 1, a name of 1–80 characters, and arrivals from 0 to 10,000 requests/day.'];
  if (!Array.isArray(process.teams) || !process.teams.length || process.teams.length > 8 || !Array.isArray(process.nodes) || process.nodes.length < 2 || process.nodes.length > 30 || !Array.isArray(process.edges) || process.edges.length > 60) return ['Use 1–8 teams, 2–30 steps and at most 60 routes.'];
  const teams = new Set();
  for (const team of process.teams) {
    if (!keysAre(team, ['id', 'name', 'capacity'])) { errors.push('Each team must have exactly id, name and capacity.'); continue; }
    if (!idValid(team.id) || !labelValid(team.name) || !numeric(team.capacity, 1, 100000) || teams.has(team.id)) errors.push('Teams need unique IDs, names of 1–80 characters and capacity from 1 to 100,000 productive minutes/day.');
    teams.add(team.id);
  }
  const ids = new Set();
  for (const node of process.nodes) {
    if (!keysAre(node, ['id', 'label', 'type', 'team', 'touch', 'wait', 'position'])) { errors.push('Each step must have exactly id, label, type, team, touch, wait and position.'); continue; }
    if (!idValid(node.id) || ids.has(node.id) || !labelValid(node.label) || !['start', 'review', 'end'].includes(node.type) || !keysAre(node.position, ['x', 'y']) || !numeric(node.position.x, -5000, 5000) || !numeric(node.position.y, -5000, 5000)) errors.push('Steps need unique IDs, readable labels, valid start/review/end types and finite positions within ±5,000.');
    if (!numeric(node.touch, 0, 4800) || !numeric(node.wait, 0, 43200)) errors.push(`${node.label || 'Step'}: touch must be 0–4,800 minutes; entered wait must be 0–43,200 minutes.`);
    if (node.type === 'review' && !teams.has(node.team)) errors.push(`${node.label}: choose an existing team.`);
    if (node.type !== 'review' && (node.team !== null || node.touch !== 0 || node.wait !== 0)) errors.push(`${node.label}: start/end steps cannot carry work or waiting time.`);
    ids.add(node.id);
  }
  if (errors.length) return [...new Set(errors)];
  const starts = process.nodes.filter(n => n.type === 'start'), ends = process.nodes.filter(n => n.type === 'end');
  if (starts.length !== 1 || ends.length !== 1) errors.push('Keep exactly one start and one completion step.');
  const edgeIds = new Set(), pairs = new Set();
  for (const edge of process.edges) {
    if (!keysAre(edge, ['id', 'source', 'target', 'share'])) { errors.push('Each route must have exactly id, source, target and share.'); continue; }
    if (!idValid(edge.id) || edgeIds.has(edge.id) || !ids.has(edge.source) || !ids.has(edge.target) || edge.source === edge.target || !numeric(edge.share, 0, 100) || pairs.has(`${edge.source}|${edge.target}`)) errors.push('Routes need unique IDs/pairs, two different existing steps and a share from 0% to 100%.');
    edgeIds.add(edge.id); pairs.add(`${edge.source}|${edge.target}`);
  }
  if (errors.length) return [...new Set(errors)];
  const outgoing = new Map(process.nodes.map(n => [n.id, process.edges.filter(e => e.source === n.id)]));
  const incoming = new Map(process.nodes.map(n => [n.id, process.edges.filter(e => e.target === n.id)]));
  for (const node of process.nodes) {
    const routes = outgoing.get(node.id), total = routes.reduce((sum, e) => sum + e.share, 0);
    if (node.type === 'end' && routes.length) errors.push(`${node.label}: completion must have no outgoing routes.`);
    if (node.type === 'start' && incoming.get(node.id).length) errors.push(`${node.label}: start must have no incoming routes.`);
    if (node.type !== 'end' && Math.abs(total - 100) > 1e-8) errors.push(`${node.label}: outgoing shares total ${Number(total.toFixed(8))}%; they must total 100%.`);
  }
  const degrees = new Map(process.nodes.map(n => [n.id, incoming.get(n.id).length]));
  const queue = process.nodes.filter(n => degrees.get(n.id) === 0).map(n => n.id), order = [];
  while (queue.length) {
    const id = queue.shift(); order.push(id);
    for (const edge of outgoing.get(id)) { degrees.set(edge.target, degrees.get(edge.target) - 1); if (!degrees.get(edge.target)) queue.push(edge.target); }
  }
  if (order.length !== process.nodes.length) errors.push('A loop is present. This model requires one-way routes with no rework cycles.');
  function reachable(start, direction) {
    const seen = new Set([start]), pending = [start];
    while (pending.length) for (const edge of (direction === 'forward' ? outgoing : incoming).get(pending.shift())) { const next = direction === 'forward' ? edge.target : edge.source; if (!seen.has(next)) { seen.add(next); pending.push(next); } }
    return seen;
  }
  const fromStart = reachable(starts[0].id, 'forward'), toEnd = reachable(ends[0].id, 'backward');
  for (const node of process.nodes) if (!fromStart.has(node.id) || !toEnd.has(node.id)) errors.push(`${node.label}: connect this step on a route from start to completion.`);
  return errors;
}
export function analyze(process) {
  const errors = validate(process);
  if (errors.length) return { valid: false, errors };
  const outgoing = new Map(process.nodes.map(n => [n.id, process.edges.filter(e => e.source === n.id)]));
  const degrees = new Map(process.nodes.map(n => [n.id, process.edges.filter(e => e.target === n.id).length]));
  const start = process.nodes.find(n => n.type === 'start');
  const visits = Object.fromEntries(process.nodes.map(n => [n.id, 0])); visits[start.id] = 1;
  const queue = [start.id];
  while (queue.length) {
    const id = queue.shift();
    for (const edge of outgoing.get(id)) {
      visits[edge.target] += visits[id] * edge.share / 100;
      degrees.set(edge.target, degrees.get(edge.target) - 1);
      if (!degrees.get(edge.target)) queue.push(edge.target);
    }
  }
  let touch = 0, wait = 0;
  const teams = process.teams.map(team => {
    const work = process.nodes.filter(n => n.type === 'review' && n.team === team.id).reduce((sum, node) => sum + visits[node.id] * node.touch, 0) * process.arrivals;
    return { ...team, work, load: work / team.capacity, excess: Math.max(0, work - team.capacity) };
  });
  const rows = process.nodes.map(node => {
    touch += visits[node.id] * node.touch; wait += visits[node.id] * node.wait;
    return { ...node, visits: visits[node.id], requests: visits[node.id] * process.arrivals, expectedTouch: visits[node.id] * node.touch, expectedWait: visits[node.id] * node.wait };
  });
  return { valid: true, errors: [], touch, wait, elapsed: touch + wait, teams, rows };
}
export function parseProcess(text) {
  if (new TextEncoder().encode(text).length > 262144) throw Error('JSON limit is 256 KiB.');
  let process;
  try { process = JSON.parse(text); } catch { throw Error('This is not valid JSON. Download the sample to see the version 1 format.'); }
  const errors = validate(process);
  if (errors.length) throw Error(errors.join(' '));
  return process;
}
export function sampleProcess(simplified = false) {
  return { version: 1, name: simplified ? 'Risk-tiered routing · 90/10' : 'Original policy · 70/30', arrivals: 40,
    teams: [{ id: 'manager', name: 'Managers', capacity: 360 }, { id: 'procurement', name: 'Procurement', capacity: 420 }, { id: 'finance', name: 'Finance', capacity: 420 }],
    nodes: [
      { id: 'start', label: 'Purchase request', type: 'start', team: null, touch: 0, wait: 0, position: { x: 0, y: 175 } },
      { id: 'manager', label: 'Manager approval', type: 'review', team: 'manager', touch: 8, wait: 120, position: { x: 235, y: 175 } },
      { id: 'procurement', label: 'Procurement review', type: 'review', team: 'procurement', touch: 25, wait: 480, position: { x: 490, y: 0 } },
      { id: 'finance', label: 'Finance approval', type: 'review', team: 'finance', touch: 12, wait: 180, position: { x: 750, y: 175 } },
      { id: 'end', label: 'Approved', type: 'end', team: null, touch: 0, wait: 0, position: { x: 990, y: 175 } },
    ],
    edges: [
      { id: 'request-manager', source: 'start', target: 'manager', share: 100 },
      { id: 'manager-procurement', source: 'manager', target: 'procurement', share: simplified ? 10 : 30 },
      { id: 'manager-finance', source: 'manager', target: 'finance', share: simplified ? 90 : 70 },
      { id: 'procurement-finance', source: 'procurement', target: 'finance', share: 100 },
      { id: 'finance-end', source: 'finance', target: 'end', share: 100 },
    ] };
}
