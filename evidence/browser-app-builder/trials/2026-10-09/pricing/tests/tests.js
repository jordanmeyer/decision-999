const summary = document.querySelector('#summary');
try {
  const { calculate, dollars, parseMoney, parseQuantity } = await import('../app/model.js');
  let passed = 0;
  let failed = 0;
  function test(name, check) {
    const li = document.createElement('li');
    try { check(); li.textContent = `PASS — ${name}`; li.className = 'pass'; passed++; }
    catch (error) { li.textContent = `FAIL — ${name}: ${error.message}`; li.className = 'fail'; failed++; }
    document.querySelector('#cases').append(li);
  }
  function equal(actual, expected) { if (actual !== expected) throw new Error(`expected ${expected}, observed ${actual}`); }
  function reject(fn, value) { let rejected = false; try { fn(value); } catch { rejected = true; } if (!rejected) throw new Error(`accepted ${JSON.stringify(value)}`); }
  const run = (price, cost, fixed, quantity) => calculate({ price: parseMoney(price), cost: parseMoney(cost), fixed: parseMoney(fixed), quantity: parseQuantity(quantity) });
  test('19.95−7.40=12.55; ×80−1000=$4; break-even80', () => { const r = run('19.95','7.40','1000','80'); equal(r.margin,1255n); equal(r.revenue,159600n); equal(r.variable,59200n); equal(r.profit,400n); equal(r.breakEven,80n); });
  test('79 units earn991.45 contribution; loss8.55', () => equal(run('19.95','7.40','1000','79').profit,-855n));
  test('Exact dime margin: .30−.20;1000 units cover100', () => { const r = run('.30','.20','100','1000'); equal(r.profit,0n); equal(r.breakEven,1000n); });
  test('Decimal boundary:999 units leave ten cents uncovered', () => equal(run('.30','.20','100','999').profit,-10n));
  test('Whole-unit ceiling:9/4 requires3 units', () => { equal(run('10','6','9','3').breakEven,3n); equal(run('10','6','9','2').profit,-100n); equal(run('10','6','9','3').profit,300n); });
  test('Exact division:8/4 requires2 units', () => equal(run('10','6','8','2').breakEven,2n));
  test('Zero margin with positive fixed costs is impossible', () => { const r=run('1','1','5','1000000'); equal(r.breakEven,null); equal(r.profit,-500n); });
  test('Negative margin with positive fixed costs is impossible', () => { const r=run('1','2','5','10'); equal(r.breakEven,null); equal(r.profit,-1500n); });
  test('No fixed costs, negative margin:0 breaks even;1 loses1', () => { equal(run('1','2','0','0').breakEven,0n); equal(run('1','2','0','0').profit,0n); equal(run('1','2','0','1').profit,-100n); });
  test('No fixed costs, zero margin:every quantity earns0', () => { equal(run('1','1','0','42').breakEven,0n); equal(run('1','1','0','42').profit,0n); });
  test('No fixed costs, positive margin:0 breaks even', () => equal(run('2','1','0','1').breakEven,0n));
  test('All zero values:zero profit and zero break-even', () => { const r=run('0','0','0','0'); equal(r.profit,0n); equal(r.breakEven,0n); });
  test('Quantity0 leaves fixed costs as a loss', () => equal(run('20','10','27.19','0').profit,-2719n));
  test('Input maximums yield exact999999000000 dollars profit', () => equal(run('1000000','0','1000000','1000000').profit,99999900000000n));
  test('One-cent contribution needs100million units for1million fixed', () => equal(run('.01','0','1000000','0').breakEven,100000000n));
  test('Whitespace, leading zero and one decimal parse exactly', () => { equal(parseMoney(' 0003.4 '),340n); equal(parseQuantity(' 0008 '),8n); });
  test('Currency refuses silent rounding of fractional cents', () => { for(const s of ['.001','1.005','1000000.001']) reject(parseMoney,s); });
  test('Currency rejects missing, malformed, negative, comma, exponent', () => { for(const s of ['', ' ', '.', '1.', '-1', '+1','NaN','Infinity','1e2','1,000','$10','1 0']) reject(parseMoney,s); });
  test('Currency enforces cap', () => reject(parseMoney,'1000000.01'));
  test('Quantity rejects fractions, negatives, exponents and empty', () => { for(const s of ['','1.0','1.5','-1','+1','1e3','1,000']) reject(parseQuantity,s); });
  test('Quantity enforces cap', () => reject(parseQuantity,'1000001'));
  test('Currency formatting retains signs, grouping and cents', () => { equal(dollars(-855n),'−$8.55'); equal(dollars(0n),'$0.00'); equal(dollars(99999900000000n),'$999,999,000,000.00'); });
  test('Adding one unit changes profit by exactly the contribution', () => { const a=run('8.73','3.24','120.50','29'); const b=run('8.73','3.24','120.50','30'); equal(b.profit-a.profit,549n); });
  test('Adding one dollar of fixed cost subtracts exactly one dollar', () => equal(run('8.73','3.24','121.50','29').profit-run('8.73','3.24','120.50','29').profit,-100n));
  test('Independent cent-by-cent enumeration confirms ceiling boundaries', () => { for(let margin=1n;margin<=17n;margin++) for(let fixed=0n;fixed<=31n;fixed++) { let expected=0n; while(margin*expected<fixed) expected++; equal(calculate({price:margin,cost:0n,fixed,quantity:0n}).breakEven,expected); } });
  summary.textContent = `${passed} passed; ${failed} failed. ${failed ? 'Evaluation failed.' : 'All model checks passed.'}`;
  summary.className = failed ? 'fail' : 'pass';
} catch (error) {
  summary.textContent = `Test module failed: ${error.message}`;
  summary.className = 'fail';
}
