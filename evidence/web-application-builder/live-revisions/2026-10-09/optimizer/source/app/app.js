import './theme/duke-fonts.css';
import './style.css';
import { names, resources, defaults, tiny, money, number, validate, allocation, rationale, parseCents, feasibleRegion } from './model.js';
import { createSolver } from './solver-client.js';

const $ = id => document.getElementById(id);
const input = (id, label, attributes) => `<label for="${id}">${label}<input id="${id}" type="number" ${attributes} required></label>`;
$('capacities').innerHTML = resources.map((n, r) => input(`capacity-${r}`, n, 'min="0" max="10000" step="1"')).join('');
$('products').innerHTML = names.map((name, i) => `<section class="product"><p class="product-number">0${i + 1} / WHOLESALE</p><h3>${name}</h3>${input(`contribution-${i}`, 'Contribution, USD/batch', `min="-500" max="500" step="0.01" aria-label="${name} contribution, USD per batch"`)}${input(`min-${i}`, 'Minimum committed batches', `min="0" max="100" step="1" aria-label="${name} minimum committed batches"`)}${input(`max-${i}`, 'Demand maximum, batches', `min="0" max="100" step="1" aria-label="${name} demand maximum, batches"`)}<p class="divider">MINUTES PER BATCH</p>${resources.map((n, r) => input(`use-${i}-${r}`, n, `min="1" max="240" step="1" aria-label="${name} ${n.toLowerCase()} minutes per batch"`)).join('')}</section>`).join('');
$('manual-inputs').innerHTML = names.map((n, i) => input(`manual-${i}`, n, 'min="0" max="100" step="1"')).join('');
let revision = 0;
let busy = false;
let solved = null;
let prior = null;
const solver = createSolver(text => { $('status').textContent = text; });
function fill(s) {
  s.capacities.forEach((v, r) => { $(`capacity-${r}`).value = v; });
  s.products.forEach((p, i) => {
    document.querySelectorAll('.product')[i].hidden = p.max === 0;
    $(`manual-${i}`).closest('label').hidden = p.max === 0;
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
  $('capacity-change').textContent = '';
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
  if(relaxation.optimal&&relaxation.plan&&relaxation.plan.objective-p.objective>0.01)$('outcome-copy').textContent+=` Allowing partial batches raises the bound to ${money(relaxation.plan.objective)}; whole batches give up ${money(relaxation.plan.objective-p.objective)}.`;
  $('solution-rows').innerHTML = names.flatMap((n, i) => s.products[i].max===0?[]:[`<tr><td>${n}</td><td><strong>${p.quantities[i]}</strong></td><td>${p.quantities[i] * 12}</td><td>${money(p.quantities[i] * s.products[i].contribution)}</td><td class="bound">${[p.quantities[i] === s.products[i].min ? 'Minimum commitment met' : '', p.quantities[i] === s.products[i].max ? 'Limited by expected sales' : ''].filter(Boolean).join(' · ') || 'Within production limits'}</td></tr>`]).join('');
  $('resource-bars').innerHTML = resources.map((n, r) => `<div><div class="resource-top"><span>${n}</span><span>${p.slack[r] === 0 ? 'Binding' : `${p.slack[r]} min open`}</span></div><div class="track ${p.slack[r] === 0 ? 'binding' : ''}"><span style="width:${s.capacities[r] ? p.used[r] / s.capacities[r] * 100 : 0}%"></span></div></div>`).join('');
  $('resource-rows').innerHTML = resources.map((n, r) => `<tr><td>${n}</td><td>${p.used[r]}</td><td>${s.capacities[r]}</td><td class="${p.slack[r] === 0 ? 'binding-label' : ''}">${p.slack[r]}${p.slack[r] === 0 ? ' · binding' : ''}</td></tr>`).join('');
  if (relaxation.optimal && relaxation.plan && relaxation.plan.objective-p.objective>0.01) {
    const lp = relaxation.plan;
    const rounded = allocation(s, lp.quantities.map(Math.round));
    $('relaxation').innerHTML = `<div class="lp-value">${money(lp.objective)}</div><p>Optimal fractional upper bound. ${money(Math.max(0, lp.objective - p.objective))} above the whole-batch allocation.</p><div class="table-scroll" tabindex="0"><table><caption>Fractional LP quantities, displayed to four decimals</caption><thead><tr><th>Product</th><th>LP batches</th></tr></thead><tbody>${names.flatMap((n, i) => s.products[i].max===0?[]:[`<tr><td>${n}</td><td>${number(lp.quantities[i])}</td></tr>`]).join('')}</tbody></table></div><p><strong>Nearest-whole rounding check:</strong> ${rounded.feasible ? `this rounding happens to be feasible (${money(rounded.objective)}), but rounding is not a general solution method.` : `${rounded.issues.join(' ')} It is not a feasible production plan.`}</p>`;
  } else if (relaxation.optimal && relaxation.plan) $('relaxation').textContent='Whole batches attain the fractional bound in this case. Use the two-product lesson to see why rounding can fail.';
  else $('relaxation').textContent = `Relaxation status: ${relaxation.status}. ${relaxation.error || ''} No proven upper bound is displayed.`;
  $('evidence').hidden = false;
  $('capacity-results').innerHTML=resources.map((name,r)=>{
    const expansion=result.expansions[r];
    if(!expansion)return `<article><h3>${name}</h3><p>Adding 60 minutes exceeds the supported 10,000-minute input limit.</p></article>`;
    const next=expansion.plan;
    return `<article><h3>${name}: +60 minutes</h3><p><strong>${next?money(next.objective-p.objective):'No feasible comparison'}</strong> ${integer.optimal&&expansion.optimal?'extra contribution':'provisional change'}</p><p>${next?`Mix: ${next.quantities.filter((_,i)=>s.products[i].max>0).join(' / ')} batches. Binding: ${resources.filter((_,r)=>next.slack[r]===0).join(', ')||'none'}.`:`Status: ${expansion.status}. ${expansion.error||''}`}</p><button type="button" data-capacity="${r}" class="secondary">Add 60 ${name.toLowerCase()} minutes</button></article>`;
  }).join('');
  $('capacity-results').querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>{const next=structuredClone(s);next.capacities[Number(button.dataset.capacity)]+=60;const baseline=solved;fill(next);run(baseline);}));
  if(prior)$('capacity-change').textContent=`Capacity change versus the previous solved case: ${money(p.objective-prior.result.integer.plan.objective)} contribution change; mix ${prior.result.integer.plan.quantities.join(' / ')} → ${p.quantities.join(' / ')}. ${integer.optimal&&prior.result.integer.optimal?'Both solves are optimal.':'Comparison is provisional because optimality was not proved.'}`;
  renderRegion(s,result);
  $('status').textContent = `Solve complete: ${integer.status}. Results match the displayed assumptions.`;
  $('manual-result').textContent = 'Enter whole batches, then check your mix.';
}
async function run(baseline=null) {
  prior=baseline;
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
$('scenario').addEventListener('input', () => { clearErrors(); prior=null; invalidate(); });
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
window.addEventListener('pageshow',()=>requestAnimationFrame(()=>{if(solved)fill(solved.scenario);}));
window.addEventListener('pagehide', event => { if (busy) invalidate('Solve interrupted by navigation. Solve again when ready.'); else if (!event.persisted) solver.cancel(); });
fill(defaults);
run();

function renderRegion(s,result){
 const vertices=feasibleRegion(s);$('two-product').hidden=!vertices;
 if(!vertices)return;
 const p=result.integer.plan,lp=result.relaxation.plan,max=Math.max(5,...vertices.flat())+1;
 const x=v=>50+v/max*450,y=v=>320-v/max*270;
 const points=[];for(let a=0;a<=Math.min(20,max);a++)for(let b=0;b<=Math.min(20,max);b++)if(allocation(s,[a,b,0]).feasible)points.push([a,b]);
 const objective=lp&&s.products[0].contribution>0&&s.products[1].contribution>0?`<line x1="${x(0)}" y1="${y(lp.objective/s.products[1].contribution)}" x2="${x(lp.objective/s.products[0].contribution)}" y2="${y(0)}" stroke="#C84E00" stroke-width="2" stroke-dasharray="7 5"/>`:"";
 const svg=`<svg viewBox="0 0 550 370" role="img" aria-label="Two-product feasible region. Shaded area meets every constraint; circles show feasible whole batches, the large circle is the integer optimum and the diamond is the fractional bound."><path d="M50 35V320H525" fill="none" stroke="#666"/><polygon points="${vertices.map(v=>`${x(v[0])},${y(v[1])}`).join(' ')}" fill="#E2E6ED" stroke="#012169" stroke-width="2"/>${points.map(v=>`<circle cx="${x(v[0])}" cy="${y(v[1])}" r="3" fill="#00539B"/>`).join('')}${Array.from({length:7},(_,i)=>Math.ceil(max/6)*i).filter(v=>v<=max).map(v=>`<text x="${x(v)}" y="342" text-anchor="middle">${v}</text><text x="35" y="${y(v)+4}" text-anchor="end">${v}</text>`).join('')}${objective}<circle cx="${x(p.quantities[0])}" cy="${y(p.quantities[1])}" r="7" fill="#1D6363"/>${lp?`<path d="M${x(lp.quantities[0])} ${y(lp.quantities[1])-8}l8 8 -8 8 -8 -8Z" fill="#C84E00"/>`:''}<text x="50" y="18">Tea batches (y)</text><text x="500" y="365" text-anchor="end">Breakfast batches (x)</text></svg>`;
 $('region').innerHTML=svg;
 $('region-copy').textContent=`Constraints: ${resources.map((n,r)=>`${s.products[0].use[r]}x + ${s.products[1].use[r]}y ≤ ${s.capacities[r]} (${n})`).join('; ')}. Bounds: x ${s.products[0].min}–${s.products[0].max}, y ${s.products[1].min}–${s.products[1].max}. Objective ${money(s.products[0].contribution)}x + ${money(s.products[1].contribution)}y increases toward the upper right when both coefficients are positive. Green circle: whole-batch optimum (${p.quantities.slice(0,2).join(', ')}). Dashed copper line: equal contribution at the fractional bound. Copper diamond: fractional optimum (${lp?lp.quantities.slice(0,2).map(number).join(', '):'unavailable'}). No third product is in this model. Integer dots are drawn through 20 batches per axis.`;
}
