export async function run(cases) {
  let passed=0;
  for (const [name, check] of cases) {
    const item=document.createElement('li');
    try { await check(); passed++; item.textContent=`PASS: ${name}`; }
    catch(error) { item.textContent=`FAIL: ${name}: ${error.message}`; }
    document.querySelector('#results').append(item);
  }
  document.querySelector('#summary').textContent=`${passed}/${cases.length} passed`;
}
export function equal(actual, expected) { if(JSON.stringify(actual)!==JSON.stringify(expected)) throw Error(`Expected ${JSON.stringify(expected)}, received ${JSON.stringify(actual)}`); }
export function near(actual, expected, tolerance=1e-12) { if(!Number.isFinite(actual)||Math.abs(actual-expected)>tolerance) throw Error(`Expected ${expected}, received ${actual}`); }
export function rejects(fn) { try {fn();} catch {return;} throw Error('Expected rejection'); }
