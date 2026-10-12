const summary = document.querySelector('#summary');
try {
  const { cases } = await import('./cases.js');
  let passed = 0;
  for (const [name, check] of cases) {
    const row = document.createElement('li');
    try {
      if (!check()) throw new Error('Expected result did not match');
      passed += 1;
      row.textContent = `PASS: ${name}`;
    } catch (error) {
      row.textContent = `FAIL: ${name}: ${error.message}`;
    }
    document.querySelector('#results').append(row);
  }
  summary.textContent = `${passed}/${cases.length} passed; ${cases.length - passed} failed.`;
} catch (error) {
  summary.textContent = `ERROR: tests did not complete: ${error.message}`;
}
