export async function checkInventoryUI() {
  const frame = document.createElement('iframe');
  frame.style.cssText = 'width:320px;height:900px;border:0';
  frame.src = '../app/';
  document.body.append(frame);
  const wait = async predicate => { for (let i = 0; i < 100; i++) { if (predicate()) return; await new Promise(resolve => setTimeout(resolve, 50)); } throw Error('UI condition timed out'); };
  try {
    await wait(() => frame.contentDocument?.querySelector('#status')?.textContent.includes('Comparison updated'));
    const doc = frame.contentDocument, form = doc.querySelector('form');
    form.elements.seed.value = 'a'.repeat(80); form.elements.days.value = '1'; form.requestSubmit();
    await wait(() => doc.querySelector('#run-label').textContent.includes('1 days'));
    if (doc.documentElement.scrollWidth > doc.documentElement.clientWidth) throw Error('Long seed overflows narrow viewport');
    // Single-day series need actual visible SVG marks, not a move-only line path.
    const marks = [...doc.querySelectorAll('#chart svg path')].filter(path => ['#012169', '#c84e00'].includes(path.getAttribute('fill')?.toLowerCase()) && path.getBoundingClientRect().width > 0 && path.getBoundingClientRect().top < doc.querySelector('#chart').getBoundingClientRect().bottom - 60);
    if (marks.length < 2) throw Error('Single-day series lack visible markers');
    form.elements.lead.value = '0'; form.requestSubmit();
    const field = form.elements.lead;
    if (doc.activeElement !== field || field.getAttribute('aria-invalid') !== 'true' || field.getAttribute('aria-describedby') !== 'error' || !doc.querySelector('#error').textContent.startsWith('Lead time (days):')) throw Error('Error is not labeled, associated and focused');
    field.value = '2'; form.requestSubmit();
    if (field.hasAttribute('aria-invalid') || field.hasAttribute('aria-describedby') || doc.querySelector('#error').textContent) throw Error('Corrected input retains error state');
  } finally { frame.remove(); }
}
