import { defaults, tiny, validate, parseCents, allocation, interpret, rationale, feasibleRegion } from '../app/model.js';
import { createSolver } from '../app/solver-client.js';
const clone = x => structuredClone(x);
const assert = (value, message = 'Assertion failed') => { if (!value) throw Error(message); };
const near = (a, b, tolerance = 1e-6) => assert(Math.abs(a - b) <= tolerance, `${a} != ${b}`);
const equal = (a, b) => assert(JSON.stringify(a) === JSON.stringify(b), `${JSON.stringify(a)} != ${JSON.stringify(b)}`);
const tests = [];
const test = (name, run) => tests.push({ name, run });
const solve = s => createSolver().solve(s);
let defaultResult, tinyResult;
const workshop = { capacities: [18, 18, 24], products: [
  { contribution: 1100, min: 0, max: 6, use: [2, 1, 2] },
  { contribution: 1900, min: 0, max: 4, use: [3, 3, 4] },
  { contribution: 3100, min: 0, max: 3, use: [5, 4, 6] },
] };
test('Exact cents:10.10→1010;−0.01→−1; half-cent, blank and exponent rejected', () => {
  equal(parseCents('10.10'), 1010); equal(parseCents('-0.01'), -1); equal(parseCents('.5'), 50);
  assert(Number.isNaN(parseCents('1.005'))); assert(Number.isNaN(parseCents(''))); assert(Number.isNaN(parseCents('1e2')));
});
test('Validation: positive use, whole bounded quantities/capacities, finite money and min≤max', () => {
  equal(validate(defaults), []);
  for (const edit of [s=>s.capacities[0]=NaN,s=>s.capacities[0]=-1,s=>s.capacities[0]=10001,s=>s.products[0].use[0]=0,s=>s.products[0].use[0]=1.5,s=>s.products[0].max=101,s=>s.products[0].contribution=Infinity,s=>s.products[0].min=30]) { const s=clone(defaults); edit(s); assert(validate(s).length > 0); }
});
test('Independent manual accounting:4/3/2 uses118/158/92 and contributes$246', () => {
  const p=allocation(defaults,[4,3,2]);equal(p.used,[118,158,92]);equal(p.objective,24600);equal(p.slack,[362,432,268]);assert(p.feasible);
});
test('Manual allocation distinguishes fractional, commitment, demand and resource violations', () => {
  assert(!allocation(defaults,[4.5,3,2]).feasible);assert(!allocation(defaults,[0,0,0]).feasible);assert(!allocation(defaults,[25,3,2]).feasible);assert(!allocation(defaults,[24,30,18]).feasible);
});
test('Actual worker: default unique5/8/16,$941,use460/586/360,slack20/4/0', async () => {
  defaultResult=await solve(defaults);const p=defaultResult.integer.plan;equal(defaultResult.integer.status,'Optimal');equal(p.quantities,[5,8,16]);equal(p.objective,94100);equal(p.used,[460,586,360]);equal(p.slack,[20,4,0]);
});
test('Actual relaxation matches independent exact LP certificate946', () => {assert(defaultResult.relaxation.optimal);near(defaultResult.relaxation.plan.objective,94600);});
test('Actual worker: tiny integer3/2/0,$23 versus LP8/3,8/3,0,$24', async () => {
  tinyResult=await solve(tiny);equal(tinyResult.integer.plan.quantities,[3,2,0]);equal(tinyResult.integer.plan.objective,2300);near(tinyResult.relaxation.plan.quantities[0],8/3);near(tinyResult.relaxation.plan.quantities[1],8/3);near(tinyResult.relaxation.plan.objective,2400);
});
test('Rounding tinyLP3/3 is infeasible: prep9>8 andoven9>8', () => {const p=allocation(tiny,tinyResult.relaxation.plan.quantities.map(Math.round));equal(p.used,[9,9,6]);equal(p.issues.length,2);assert(!p.feasible);});
test('Actual worker: independent 140-mix workshop integer0/1/3,$112 versus LP$113.20', async () => {
  const r=await solve(workshop);equal(r.integer.plan.quantities,[0,1,3]);equal(r.integer.plan.objective,11200);equal(r.integer.plan.used,[18,15,22]);near(r.relaxation.plan.objective,11320);equal(r.relaxation.plan.quantities.map(v=>Math.round(v*10)/10),[0,4,1.2]);
});
test('Actual worker: machine19 changes optimum0/3/2,$119;20→1/1/3,$123', async () => {
  const s=clone(workshop);s.capacities[0]=19;let r=await solve(s);equal(r.integer.plan.quantities,[0,3,2]);equal(r.integer.plan.objective,11900);s.capacities[0]=20;r=await solve(s);equal(r.integer.plan.quantities,[1,1,3]);equal(r.integer.plan.objective,12300);
});
test('Actual worker: nonbinding labor18→22 alone leaves workshop$112', async () => {const s=clone(workshop);s.capacities[1]=22;equal((await solve(s)).integer.plan.objective,11200);});
test('Actual worker: oven157 against minimum158 proves infeasible, no zero plan', async () => {const s=clone(defaults);s.capacities[1]=157;const r=await solve(s);equal(r.integer.status,'Infeasible');equal(r.integer.plan,null);equal(allocation(s,[4,3,2]).slack[1],-1);});
test('Actual worker: all negative contributions choose commitments4/3/2,−$246', async () => {const s=clone(defaults);s.products.forEach(p=>p.contribution*=-1);const r=await solve(s);equal(r.integer.plan.quantities,[4,3,2]);equal(r.integer.plan.objective,-24600);});
test('Actual worker: zero capacity/commitments yields feasible zero plan', async () => {const s=clone(defaults);s.capacities=[0,0,0];s.products.forEach(p=>p.min=0);const r=await solve(s);equal(r.integer.plan.quantities,[0,0,0]);equal(r.integer.plan.objective,0);equal(r.integer.plan.slack,[0,0,0]);});
test('Actual worker: cent-level objective remains exact at commitment-only allocation', async () => {const s=clone(defaults);s.products.forEach((p,i)=>{p.max=p.min;p.contribution=[1010,505,1][i];});const r=await solve(s);equal(r.integer.plan.objective,5557);});
test('Adapter: absent limited incumbent is not an invented zero allocation', () => {const r=interpret(defaults,{Status:'Time limit reached',Columns:{},ObjectiveValue:0});equal(r.plan,null);assert(r.error.includes('No feasible'));});
test('Adapter: checked limited incumbent is feasible without proven optimality', () => {const r=interpret(defaults,{Status:'Time limit reached',Columns:{x0:{Primal:4},x1:{Primal:3},x2:{Primal:2}},ObjectiveValue:24600});assert(r.plan.feasible);assert(!r.optimal);});
test('Adapter rejects fractional, constraint-violating and mismatched objective solutions', () => {
  const raw={Status:'Optimal',Columns:{x0:{Primal:4},x1:{Primal:3},x2:{Primal:2}},ObjectiveValue:24600};
  let bad=clone(raw);bad.Columns.x0.Primal=4.5;equal(interpret(defaults,bad).plan,null);bad=clone(raw);bad.ObjectiveValue=24601;equal(interpret(defaults,bad).plan,null);bad=clone(raw);bad.Columns.x2.Primal=30;equal(interpret(defaults,bad).plan,null);
});
test('Actual raw worker fixture: unbounded status is distinct from feasible/optimal', async () => {
  const worker=new Worker(new URL('./status-worker.js',import.meta.url),{type:'module'});
  const result=await new Promise((resolve,reject)=>{worker.onmessage=e=>resolve(e.data);worker.onerror=reject;worker.postMessage('Maximize\n value: x0\nSubject To\n row: x0 >= 0\nBounds\n x0 >= 0\nEnd');});worker.terminate();equal(result.Status,'Unbounded');equal(interpret(defaults,result).plan,null);
});
test('Real worker receives request, cancellation terminates it, then known solve recovers', async () => {
  let shouldCancel=true;let phases=0;const client=createSolver(()=>{phases++;if(shouldCancel)client.cancel();});
  let cancelled=false;try{await client.solve(defaults);}catch(e){cancelled=e.name==='AbortError';}assert(cancelled);assert(phases>0);shouldCancel=false;equal((await client.solve(tiny)).integer.plan.objective,2300);
});
test('New request supersedes old worker; stale promise aborts and tiny result remains', async () => {
  const client=createSolver();const old=client.solve(defaults).then(()=>false,e=>e.name==='AbortError');const fresh=client.solve(tiny);assert(await old);equal((await fresh).integer.plan.objective,2300);
});
test('Copied rationale includes exact solved coefficients, boxes, slack and model limits', () => {
  const text=rationale(defaults,defaultResult);for(const word of ['$941','Breakfast boxes 5 (60 boxes)','Packing: 360 / 360','slack 20','12/18/8','minimum commitments','synthetic','not revenue'])assert(text.includes(word),word);
});
test('Actual 60-minute capacity experiments match independent enumeration: gains0/46/62 dollars',()=>{equal(defaultResult.expansions.map(r=>r.plan.objective),[94100,98700,100300]);equal(defaultResult.expansions.map(r=>r.plan.quantities),[[5,8,16],[15,6,12],[5,29,6]]);assert(defaultResult.expansions.every(r=>r.optimal));});
test('Tiny feasible polygon has only (0,0),(4,0),(8/3,8/3),(0,4); every vertex meets inequalities',()=>{const vertices=feasibleRegion(tiny);equal(vertices.length,4);for(const expected of [[0,0],[4,0],[8/3,8/3],[0,4]])assert(vertices.some(v=>Math.hypot(v[0]-expected[0],v[1]-expected[1])<1e-7));assert(vertices.every(v=>allocation(tiny,[...v,0],false).feasible));equal(feasibleRegion(defaults),null);});
test('Original bakery is retained as a zero-gap alternate at600 oven minutes',async()=>{const s=clone(defaults);s.capacities[1]=600;const r=await solve(s);equal(r.integer.plan.objective,95500);near(r.relaxation.plan.objective,95500);});
let passed=0;
for(const t of tests){const li=document.createElement('li');try{await t.run();passed++;li.className='pass';li.textContent=`PASS — ${t.name}`;}catch(error){li.className='fail';li.textContent=`FAIL — ${t.name}: ${error.message}`;}document.getElementById('results').append(li);document.getElementById('status').textContent=`${passed}/${tests.length} passed; ${document.querySelectorAll('.fail').length} failed. ${document.querySelectorAll('li').length<tests.length?'Still running…':'Complete.'}`;}
