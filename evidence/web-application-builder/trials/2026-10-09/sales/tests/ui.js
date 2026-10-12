export async function checkSalesUI() {
  const frame = document.createElement('iframe');
  frame.style.cssText = 'width:1280px;height:900px;border:0'; frame.src = '../app/'; document.body.append(frame);
  const wait = async predicate => { for (let i = 0; i < 100; i++) { if (predicate()) return; await new Promise(resolve => setTimeout(resolve, 50)); } throw Error('UI condition timed out'); };
  try {
    await wait(() => frame.contentDocument?.querySelectorAll('.tabulator-row').length === 3);
    const doc = frame.contentDocument, change = element => element.dispatchEvent(new frame.contentWindow.Event('change', { bubbles: true }));
    const ids = () => [...doc.querySelectorAll('.tabulator-row .tabulator-cell[tabulator-field="id"]')].map(cell => cell.textContent).join(',');
    doc.querySelector('.tabulator-col[tabulator-field="quantity"] .tabulator-col-content').click();
    await wait(() => ids() === '3,2,1');
    if (doc.querySelector('#sort').value !== 'quantity:asc') throw Error('Header sorting is not reflected in menu');
    doc.querySelector('#region').value = 'North'; change(doc.querySelector('#region'));
    await wait(() => ids() === '3,1');
    const sort = doc.querySelector('#sort'); sort.value = 'quantity:desc'; change(sort);
    await wait(() => ids() === '1,3');
    const header = 'region,product,quantity,unit_price,unit_cost\n';
    const transfer = new frame.contentWindow.DataTransfer();
    transfer.items.add(new frame.contentWindow.File([header + 'N,P,1000000,1000000,0\n'.repeat(80) + 'N,P,1,0.01,0'], 'large-exact.csv', { type: 'text/csv' }));
    const input = doc.querySelector('#file'); input.files = transfer.files; change(input);
    await wait(() => doc.querySelector('#status').textContent.includes('Imported 81'));
    if (doc.querySelector('#revenue').textContent !== '$80,000,000,000,000.01' || doc.querySelector('#profit').textContent !== '$80,000,000,000,000.01') throw Error('Cards lost exact cents');
    if (![...doc.querySelectorAll('#chart svg text')].some(text => text.textContent === '$80,000,000,000,000.01')) throw Error('Chart labels lost exact cents');
  } finally { frame.remove(); }
}
