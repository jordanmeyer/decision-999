import './style.css';
import { names, resources, defaults, tiny, money, number, validate, allocation, rationale, parseCents } from './model.js';
import { createSolver } from './solver-client.js';

const $ = id => document.getElementById(id);
const input = (id, label, attributes) => `<label for="${id}">${label}<input id="${id}" type="number" ${attributes} required></label>`;
$('capacities').innerHTML = resources.map((n, r) => input(`capacity-${r}`, n, 'min="0" max="10000" step="1"')).join('');
$('products').innerHTML = names.map((name, i) => `<section class="product"><p class="product-number">0${i + 1} / WHOLESALE</p><h3>${name}</h3>${input(`contribution-${i}`, 'Contribution, USD/batch', `min="-500" max="500" step="0.01" aria-label="${name} contribution, USD per batch"`)}${input(`min-${i}`, 'Minimum committed batches', `min="0" max="100" step="1" aria-label="${name} minimum committed batches"`)}${input(`max-${i}`, 'Demand maximum, batches', `min="0" max="100" step="1" aria-label="${name} demand maximum, batches"`)}<p class="divider">MINUTES PER BATCH</p>${resources.map((n, r) => input(`use-${i}-${r}`, n, `min="1" max="240" step="1" aria-label="${name} ${n.toLowerCase()} minutes per batch"`)).join('')}</section>`).join('');
$('manual-inputs').innerHTML = names.map((n, i) => input(`manual-${i}`, n, 'min="0" max="100" step="1"')).join('');
let revision = 0;
let busy = false;
let solved = null;
const solver = createSolver(text => { $('status').textContent = text; });
function fill(s) {
  s.capacities.forEach((v, r) => { $(`capacity-${r}`).value = v; });
  s.products.forEach((p, i) => {
    $(`contribution-${i}`).value = (p.contribution / 100).toFixed(2);
    ['min', 'max'].forEach(k => { $(`${k}-${i}`).value = p[k]; });
    p.use.forEach((v, r) => { $(`use-${i}-${r}`).value = v; });
    $(`manual-${i}`).value = p.min;
  });
}
function read() {
  const numeric = id => $(id).value === '' ? NaN : Number($(id).value);
  return { capacities: resources.map((_, r) => numeric(`capacity-${r}`)), products: names.map((_, i) => ({ contribution: parseCents($(`contribution-${i}`).value), min: numeric(`min-${i}`), max: numeric(`max-${i}`), use: resources.map((_, r) => numeric(`use-${i}-${r}`)) })) };
}
function clearErrors() {
  $('errors').hidden = true;
  $('scenario').querySelectorAll('[aria-invalid]').forEach(el => el.removeAttribute('aria-invalid'));
}
function setBusy(value) {
  busy = value;
  $('solve').disabled = value;
  $('cancel').disabled = !value;
  $('scenario').setAttribute('aria-busy', String(value));
}
function invalidate(message = 'Assumptions changed. Solve again to see a current allocation.') {
  revision++;
  solver.cancel();
  setBusy(false);
  solved = null;
  $('evidence').hidden = true;
  $('outcome').classList.remove('problem');
  $('outcome-title').textContent = 'A new mix is waiting to be solved.';
  $('outcome-copy').textContent = 'The prior allocation has been cleared so it cannot be mistaken for a result of your edited assumptions.';
  $('status').textContent = message;
  $('copy-status').textContent = '';
  $('copy-fallback-label').hidden = true;
  $('manual-result').textContent = '';
}
function render(s, result) {
  const { integer, relaxation } = result;
  $('solver-label').textContent = integer.optimal ? 'OPTIMAL' : 'FEASIBLE · NOT PROVEN OPTIMAL';
  if (!integer.plan) {
    $('evidence').hidden = true;
    $('outcome').classList.add('problem');
    $('outcome-title').textContent = integer.status === 'Infeasible' ? 'These commitments do not fit.' : 'No production plan is being recommended.';
    if (integer.status === 'Infeasible') {
      const minimum = allocation(s, s.products.map(p => p.min));
      $('outcome-copy').textContent = `${minimum.issues.join(' ')} The minimum commitments alone require this much capacity. Review the commitments, capacity or resource assumptions and solve again. These are conflicts under the model, not a unique business cause; no requirement has been relaxed.`;
    } else $('outcome-copy').textContent = `${integer.status}. ${integer.error || 'The solver did not establish a bounded feasible allocation. Review the assumptions and retry.'}`;
    $('status').textContent = `Solve complete: ${integer.status}. No current allocation.`;
    return;
  }
  const p = integer.plan;
  solved = { scenario: structuredClone(s), result };
  $('outcome').classList.remove('problem');
  $('outcome-title').innerHTML = `<span class="amount">${money(p.objective)}</span> in modeled contribution.`;
  const total = p.quantities.reduce((a, b) => a + b, 0);
  $('outcome-copy').textContent = `${total} whole batches · ${total * 12} boxes. ${integer.optimal ? 'Proven optimal under the current assumptions.' : 'Feasible, but not proven optimal before the solver stopped.'} ${p.objective < 0 ? 'The contribution is negative: the required commitments force costly production under these assumptions.' : 'This is contribution after variable costs; fixed business costs are excluded.'}`;
  $('solution-rows').innerHTML = names.map((n, i) => `<tr><td>${n}</td><td><strong>${p.quantities[i]}</strong></td><td>${p.quantities[i] * 12}</td><td>${money(p.quantities[i] * s.products[i].contribution)}</td><td class="bound">${[p.quantities[i] === s.products[i].min ? 'At commitment' : '', p.quantities[i] === s.products[i].max ? 'At demand ceiling' : ''].filter(Boolean).join(' · ') || 'Between bounds'}</td></tr>`).join('');
  $('resource-bars').innerHTML = resources.map((n, r) => `<div><div class="resource-top"><span>${n}</span><span>${p.slack[r] === 0 ? 'Binding' : `${p.slack[r]} min open`}</span></div><div class="track ${p.slack[r] === 0 ? 'binding' : ''}"><span style="width:${s.capacities[r] ? p.used[r] / s.capacities[r] * 100 : 0}%"></span></div></div>`).join('');
  $('resource-rows').innerHTML = resources.map((n, r) => `<tr><td>${n}</td><td>${p.used[r]}</td><td>${s.capacities[r]}</td><td class="${p.slack[r] === 0 ? 'binding-label' : ''}">${p.slack[r]}${p.slack[r] === 0 ? ' · binding' : ''}</td></tr>`).join('');
  if (relaxation.optimal && relaxation.plan) {
    const lp = relaxation.plan;
    const rounded = allocation(s, lp.quantities.map(Math.round));
    $('relaxation').innerHTML = `<div class="lp-value">${money(lp.objective)}</div><p>Optimal continuous upper bound, rounded to cents. ${money(Math.max(0, lp.objective - p.objective))} above the whole-batch allocation.</p><div class="table-scroll" tabindex="0"><table><caption>Fractional LP quantities, displayed to four decimals</caption><thead><tr><th>Product</th><th>LP batches</th></tr></thead><tbody>${names.map((n, i) => `<tr><td>${n}</td><td>${number(lp.quantities[i])}</td></tr>`).join('')}</tbody></table></div><p><strong>Nearest-whole rounding check:</strong> ${rounded.feasible ? `this rounding happens to be feasible (${money(rounded.objective)}), but rounding is not a general solution method.` : `${rounded.issues.join(' ')} It is not a feasible production plan.`}</p>`;
  } else $('relaxation').textContent = `Relaxation status: ${relaxation.status}. ${relaxation.error || ''} No proven upper bound is displayed.`;
  $('evidence').hidden = false;
  $('status').textContent = `Solve complete: ${integer.status}. Results match the displayed assumptions.`;
  $('manual-result').textContent = 'Enter whole batches, then check your mix.';
}
async function run() {
  invalidate();
  clearErrors();
  const s = read();
  const errors = validate(s);
  if (errors.length) {
    $('errors').innerHTML = errors.map(e => `<p>${e.message}</p>`).join('');
    $('errors').hidden = false;
    errors.forEach(e => $(e.id).setAttribute('aria-invalid', 'true'));
    $(errors[0].id).focus();
    $('status').textContent = 'Correct the highlighted assumptions. No allocation is being recommended.';
    return;
  }
  const current = revision;
  setBusy(true);
  $('status').textContent = 'Starting the local solver…';
  $('outcome-title').textContent = 'Finding the best feasible mix…';
  $('outcome-copy').textContent = 'The calculation runs in a separate worker. You can cancel or edit the assumptions while it works.';
  try {
    const result = await solver.solve(s);
    if (current === revision) render(s, result);
  } catch (error) {
    if (current !== revision || error.name === 'AbortError') return;
    $('outcome').classList.add('problem');
    $('outcome-title').textContent = 'The solve could not finish.';
    $('outcome-copy').textContent = error.message;
    $('status').textContent = 'No allocation returned. Retry the solve or reset the bakery.';
  } finally { if (current === revision) setBusy(false); }
}
$('scenario').addEventListener('submit', event => { event.preventDefault(); run(); });
$('scenario').addEventListener('input', () => { clearErrors(); invalidate(); });
$('cancel').addEventListener('click', () => invalidate('Solve cancelled. The worker stopped; solve again when ready.'));
$('reset').addEventListener('click', () => { fill(defaults); run(); });
$('tiny').addEventListener('click', () => { fill(tiny); run(); });
$('manual').addEventListener('input', () => { $('manual-result').textContent = 'Manual quantities changed. Check this mix again.'; });
$('manual').addEventListener('submit', event => {
  event.preventDefault();
  if (!solved) return;
  const quantities = names.map((_, i) => $(`manual-${i}`).value === '' ? NaN : Number($(`manual-${i}`).value));
  const invalid = quantities.findIndex(v => !Number.isInteger(v) || v < 0 || v > 100);
  if (invalid >= 0) { $('manual-result').textContent = 'Enter whole batches from 0 to 100 for every product.'; $(`manual-${invalid}`).focus(); return; }
  const p = allocation(solved.scenario, quantities);
  const difference = solved.result.integer.plan.objective - p.objective;
  $('manual-result').innerHTML = `<p class="${p.feasible ? 'good' : 'bad'}">${p.feasible ? 'Feasible manual allocation' : 'Infeasible manual allocation'}</p><p>Arithmetic contribution: <strong>${money(p.objective)}</strong> · ${quantities.reduce((a, b) => a + b, 0) * 12} boxes.</p>${p.feasible ? `<p>${difference >= 0 ? `${money(difference)} below` : `${money(-difference)} above`} the solver allocation${solved.result.integer.optimal ? ' (proven optimal)' : ' (not proven optimal)'}. Resource slack, prep / oven / packing: ${p.slack.join(' / ')} minutes.</p>` : `<ul>${p.issues.map(issue => `<li>${issue}</li>`).join('')}</ul><p>This infeasible mix cannot be used as a contribution improvement.</p>`}`;
});
$('copy').addEventListener('click', async () => {
  if (!solved) return;
  const text = rationale(solved.scenario, solved.result);
  try { await navigator.clipboard.writeText(text); $('copy-status').textContent = 'Rationale copied with the solved assumptions.'; }
  catch { $('copy-fallback').value = text; $('copy-fallback-label').hidden = false; $('copy-fallback').focus(); $('copy-fallback').select(); $('copy-status').textContent = 'Clipboard unavailable. Select and copy the rationale below.'; }
});
window.addEventListener('pagehide', event => { if (busy) invalidate('Solve interrupted by navigation. Solve again when ready.'); else if (!event.persisted) solver.cancel(); });
fill(defaults);
run();
