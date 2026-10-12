export const names = ['Breakfast boxes', 'Tea boxes', 'Celebration boxes'];
export const resources = ['Prep labor', 'Oven', 'Packing'];
export const defaults = { capacities: [480, 600, 360], products: [
  { contribution: 2500, min: 4, max: 24, use: [12, 18, 8] },
  { contribution: 2200, min: 3, max: 30, use: [10, 12, 10] },
  { contribution: 4000, min: 2, max: 18, use: [20, 25, 15] },
] };
export const tiny = { capacities: [8, 8, 6], products: [
  { contribution: 500, min: 0, max: 8, use: [2, 1, 1] },
  { contribution: 400, min: 0, max: 8, use: [1, 2, 1] },
  { contribution: 0, min: 0, max: 0, use: [1, 1, 1] },
] };
export const money = cents => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cents / 100);
export const number = value => new Intl.NumberFormat('en-US', { maximumFractionDigits: 4 }).format(value);
const tolerance = 1e-6;

export function validate(s) {
  const errors = [];
  const check = (v, min, max, id, label) => {
    if (!Number.isInteger(v) || v < min || v > max) errors.push({ id, message: `${label}: enter a whole number from ${min} to ${max}.` });
  };
  s.capacities.forEach((v, r) => check(v, 0, 10000, `capacity-${r}`, `${resources[r]} capacity`));
  s.products.forEach((p, i) => {
    if (!Number.isInteger(p.contribution) || Math.abs(p.contribution) > 50000) errors.push({ id: `contribution-${i}`, message: `${names[i]} contribution: enter −$500 to $500, with at most two decimal places.` });
    check(p.min, 0, 100, `min-${i}`, `${names[i]} commitment`);
    check(p.max, 0, 100, `max-${i}`, `${names[i]} demand maximum`);
    if (p.min > p.max) errors.push({ id: `min-${i}`, message: `${names[i]} commitment exceeds its demand maximum.` });
    p.use.forEach((v, r) => check(v, 1, 240, `use-${i}-${r}`, `${names[i]} ${resources[r].toLowerCase()} minutes`));
  });
  return errors;
}

export function modelText(s, integer = true) {
  const expression = values => values.map((v, i) => `${v < 0 ? '-' : '+'} ${Math.abs(v)} x${i}`).join(' ');
  return `Maximize\n contribution: ${expression(s.products.map(p => p.contribution))}\nSubject To\n${s.capacities.map((c, r) => ` resource${r}: ${expression(s.products.map(p => p.use[r]))} <= ${c}`).join('\n')}\nBounds\n${s.products.map((p, i) => ` ${p.min} <= x${i} <= ${p.max}`).join('\n')}\n${integer ? 'Generals\n x0 x1 x2\n' : ''}End`;
}

export function allocation(s, quantities, integer = true) {
  const issues = [];
  quantities.forEach((q, i) => {
    const p = s.products[i];
    if (!Number.isFinite(q)) issues.push(`${names[i]} has no valid quantity.`);
    else {
      if (integer && Math.abs(q - Math.round(q)) > tolerance) issues.push(`${names[i]} must use whole batches.`);
      if (q < p.min - tolerance) issues.push(`${names[i]} is below its ${p.min}-batch commitment.`);
      if (q > p.max + tolerance) issues.push(`${names[i]} exceeds its ${p.max}-batch demand maximum.`);
    }
  });
  const used = s.capacities.map((_, r) => s.products.reduce((sum, p, i) => sum + p.use[r] * quantities[i], 0));
  const slack = used.map((v, r) => s.capacities[r] - v);
  slack.forEach((v, r) => { if (v < -tolerance) issues.push(`${resources[r]} needs ${number(-v)} more min (${number(used[r])} used / ${number(s.capacities[r])} available).`); });
  return { quantities, used, slack, issues, feasible: issues.length === 0, objective: s.products.reduce((sum, p, i) => sum + p.contribution * quantities[i], 0) };
}

export function interpret(s, result, integer = true) {
  const status = result.Status;
  if (['Infeasible', 'Unbounded', 'Primal infeasible or unbounded'].includes(status)) return { status, plan: null };
  const limited = ['Time limit reached', 'Iteration limit reached', 'Bound on objective reached', 'Target for objective reached'].includes(status);
  if (status !== 'Optimal' && !limited) return { status, plan: null, error: 'The solver did not establish a usable solution.' };
  const raw = s.products.map((_, i) => result.Columns?.[`x${i}`]?.Primal);
  if (raw.some(v => !Number.isFinite(v))) return { status, plan: null, error: limited ? 'No feasible allocation was returned before the solver stopped.' : 'The solver returned no complete allocation.' };
  const check = allocation(s, raw, integer);
  const objectiveMatches = Number.isFinite(result.ObjectiveValue) && Math.abs(check.objective - result.ObjectiveValue) <= 1e-3;
  if (!check.feasible || !objectiveMatches) return { status, plan: null, error: 'The returned allocation failed an independent feasibility or accounting check.' };
  const plan = integer ? allocation(s, raw.map(Math.round)) : check;
  if (!plan.feasible) return { status, plan: null, error: 'The whole-batch allocation failed its exact resource check.' };
  return { status, plan, optimal: status === 'Optimal' };
}

export function rationale(s, result) {
  const p = result.integer.plan;
  return [
    'Batch & Balance — fictional bakery / synthetic classroom assumptions.',
    `Status: ${result.integer.status}${result.integer.optimal ? ' — proven optimal under this model.' : ' — feasible allocation, optimality not established.'}`,
    `Recommended whole batches: ${names.map((n, i) => `${n} ${p.quantities[i]} (${p.quantities[i] * 12} boxes)`).join('; ')}.`,
    `Contribution after variable costs: ${money(p.objective)}. This is not revenue or total business profit.`,
    ...resources.map((n, r) => `${n}: ${p.used[r]} / ${s.capacities[r]} minutes used; slack ${p.slack[r]} minutes.`),
    ...names.map((n, i) => { const x = s.products[i]; return `${n}: ${money(x.contribution)}/batch; commitment ${x.min}, demand maximum ${x.max}; prep/oven/packing ${x.use.join('/')} minutes/batch.`; }),
    result.relaxation.optimal && result.relaxation.plan ? `Continuous LP upper bound: ${money(result.relaxation.plan.objective)} (rounded to cents); fractional quantities are not a production recommendation.` : `Continuous relaxation status: ${result.relaxation.status}; no proven LP upper bound shown.`,
    '12 boxes per batch. Linear resource use and contribution, whole nonnegative batches, fixed demand ceilings and explicit minimum commitments. Ties may return any optimal mix; no hidden customer priority. No sequencing, spoilage, overtime tiers or uncertainty. Binding capacity does not prove a valuable expansion. Validate the assumptions before a real decision.',
  ].join('\n');
}

export function parseCents(value) {
  if (!/^-?(?:\d+\.?\d{0,2}|\.\d{1,2})$/.test(value)) return NaN;
  return Math.round(Number(value) * 100);
}
