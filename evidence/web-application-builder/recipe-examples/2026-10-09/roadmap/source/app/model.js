const MS = 86400000;
export const iso = value => new Date(value * MS).toISOString().slice(0, 10);
export function day(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return NaN;
  const n = Date.parse(value + 'T00:00:00Z') / MS;
  return Number.isFinite(n) && iso(n) === value ? n : NaN;
}
const keys = (value, expected) => value && !Array.isArray(value) && typeof value === 'object' && Object.keys(value).sort().join() === expected.split(',').sort().join();
const label = value => typeof value === 'string' && value.trim().length > 0 && value.length <= 80 && !/[\u0000-\u001f\u007f]/.test(value);
const date = value => Number.isFinite(day(value)) && value >= '2020-01-01' && value <= '2035-12-31';
export function validate(plan) {
  const errors = [];
  if (!keys(plan, 'version,name,start,promise,tasks') || plan.version !== 1) return ['Expected a version 1 plan with name, start, promise and tasks.'];
  if (!label(plan.name)) errors.push('Plan name must contain 1–80 characters.');
  if (!date(plan.start) || !date(plan.promise)) errors.push('Project start and promise must be real dates from 2020 through 2035.');
  if (!Array.isArray(plan.tasks) || !plan.tasks.length || plan.tasks.length > 30) return [...errors, 'Use 1–30 tasks.'];
  if (plan.tasks.some(t => !keys(t, 'id,name,duration,release,dependencies'))) return [...errors, 'Each task needs exactly id, name, duration, release and dependencies.'];
  const ids = new Set();
  for (const t of plan.tasks) {
    if (typeof t.id !== 'string' || !/^[a-zA-Z][a-zA-Z0-9_-]{0,39}$/.test(t.id) || ids.has(t.id)) errors.push('Task IDs must be unique, start with a letter and use at most 40 letters, digits, underscores or hyphens.');
    ids.add(t.id);
    if (!label(t.name)) errors.push(`${t.id}: name must contain 1–80 characters.`);
    if (!Number.isInteger(t.duration) || t.duration < 1 || t.duration > 365) errors.push(`${t.id}: duration must be a whole number from 1 to 365 days.`);
    if (t.release !== null && !date(t.release)) errors.push(`${t.id}: earliest permitted start must be null or a real date from 2020 through 2035.`);
    if (!Array.isArray(t.dependencies) || t.dependencies.some(d => typeof d !== 'string') || new Set(t.dependencies).size !== t.dependencies.length) errors.push(`${t.id}: dependencies must be a list of unique task IDs.`);
  }
  if (errors.length) return errors;
  for (const t of plan.tasks) for (const dep of t.dependencies) {
    if (!ids.has(dep)) errors.push(`${t.id}: dependency ${dep} does not exist.`);
    if (dep === t.id) errors.push(`${t.id}: a task cannot depend on itself.`);
  }
  if (!errors.length && ordered(plan.tasks).length !== plan.tasks.length) errors.push('Dependencies contain a cycle. Remove a dependency to restore a possible order.');
  return errors;
}
function ordered(tasks) {
  const done = new Set(), result = [];
  while (result.length < tasks.length) {
    const next = tasks.find(t => !done.has(t.id) && t.dependencies.every(d => done.has(d)));
    if (!next) break;
    done.add(next.id); result.push(next);
  }
  return result;
}
export function schedule(plan) {
  const errors = validate(plan);
  if (errors.length) return { valid: false, errors };
  const tasks = ordered(plan.tasks), dates = new Map();
  for (const t of tasks) {
    const start = Math.max(day(plan.start), t.release ? day(t.release) : -Infinity, ...t.dependencies.map(id => dates.get(id).end));
    dates.set(t.id, { ...t, start, end: start + t.duration });
  }
  const finish = Math.max(...[...dates.values()].map(t => t.end));
  if (finish - day(plan.start) > 730 || finish > day('2036-12-31')) return { valid: false, errors: ['The schedule must finish within 730 calendar days of project start and by the end of 2036.'] };
  for (const t of tasks.toReversed()) {
    const successors = tasks.filter(s => s.dependencies.includes(t.id));
    const latestEnd = successors.length ? Math.min(...successors.map(s => dates.get(s.id).latestStart)) : finish;
    const row = dates.get(t.id);
    row.latestStart = latestEnd - t.duration;
    row.float = row.latestStart - row.start;
  }
  return { valid: true, errors: [], rows: plan.tasks.map(t => dates.get(t.id)), finish, span: finish - day(plan.start), buffer: day(plan.promise) - finish };
}
export function parsePlan(text) {
  if (new TextEncoder().encode(text).length > 131072) throw Error('Use a JSON file no larger than 128 KiB.');
  let plan;
  try { plan = JSON.parse(text); } catch { throw Error('This file is not valid JSON.'); }
  const result = schedule(plan);
  if (!result.valid) throw Error(result.errors.join(' '));
  return plan;
}
export function samplePlan(preset = '') {
  return { version: 1, name: preset === 'packaging' ? 'Packaging takes five extra days' : preset === 'safety' ? 'Safety takes three extra days' : 'Refillable desk cleaner launch', start: '2026-11-02', promise: '2026-12-01', tasks: [
    {id:'validation',name:'Product validation',duration:5,release:null,dependencies:[]},
    {id:'packaging',name:'Packaging design',duration:preset === 'packaging' ? 13 : 8,release:null,dependencies:['validation']},
    {id:'supplier',name:'Supplier readiness',duration:10,release:null,dependencies:['validation']},
    {id:'pilot',name:'Pilot batch',duration:4,release:null,dependencies:['packaging','supplier']},
    {id:'safety',name:'Safety testing',duration:preset === 'safety' ? 10 : 7,release:null,dependencies:['pilot']},
    {id:'sales',name:'Sales materials',duration:6,release:null,dependencies:['packaging']},
    {id:'launch',name:'Launch preparation',duration:1,release:null,dependencies:['safety','sales']}
  ]};
}
// Frappe treats a date-only end as inclusive. Give it the last occupied day.
// Only safe authored ordinal labels reach its HTML-capable name property.
export const chartTasks = rows => rows.map((t, i) => ({id:`task${i + 1}`,name:`${String(i + 1).padStart(2,'0')} · ${t.duration}d`,start:iso(t.start),end:iso(t.end - 1),progress:0,dependencies:t.dependencies.map(id => `task${rows.findIndex(row => row.id === id) + 1}`),custom_class:t.float === 0 ? 'critical' : 'flexible'}));
