const status = document.querySelector('#copy-status');
const directory = document.querySelector('[data-directory]');
if (directory) {
  const search = directory.querySelector('input'), chips = [...directory.querySelectorAll('.chips button')];
  const cards = [...directory.querySelectorAll('.card')], count = directory.querySelector('.result-count');
  let category = '';
  const update = () => {
    const terms = search.value.toLowerCase().split(/\s+/).filter(Boolean);
    let shown = 0;
    for (const card of cards) {
      card.hidden = !((!category || card.dataset.category === category) && terms.every(term => card.dataset.search.includes(term)));
      shown += !card.hidden;
    }
    count.textContent = `${shown} plugin${shown === 1 ? '' : 's'}`;
    directory.querySelector('.empty').hidden = shown > 0;
    directory.querySelector('[data-more]').hidden = Boolean(category || terms.length);
    // Keep the search and category in the address, so Back, reload and shared links show the same results.
    const url = new URL(location.href);
    for (const [key, value] of [['q', search.value.trim()], ['category', category]]) {
      if (value) url.searchParams.set(key, value); else url.searchParams.delete(key);
    }
    history.replaceState(null, '', url);
  };
  const choose = value => {
    category = value;
    for (const chip of chips) chip.setAttribute('aria-pressed', chip.dataset.category === value);
    update();
  };
  for (const chip of chips) chip.addEventListener('click', () => choose(chip.dataset.category));
  search.addEventListener('input', update);
  directory.querySelector('[data-clear]').addEventListener('click', () => { search.value = ''; choose(''); search.focus(); });
  addEventListener('keydown', event => {
    if (event.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) { event.preventDefault(); search.focus(); }
  });
  directory.querySelector('.directory-search').hidden = false;
  directory.querySelector('.chips').hidden = false;
  const params = new URLSearchParams(location.search), saved = params.get('category') || '';
  search.value = params.get('q') || '';
  choose(chips.some(chip => chip.dataset.category === saved) ? saved : '');
}
for (const button of document.querySelectorAll('[data-copy]')) {
  button.hidden = false;
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(button.closest('.command').querySelector('pre').textContent);
      button.textContent = 'Copied';
      status.textContent = 'Copied to the clipboard.';
    } catch {
      button.textContent = 'Copy failed';
      status.textContent = 'Copying is unavailable here. Select the text and copy it manually.';
    }
    setTimeout(() => { button.textContent = 'Copy'; }, 2500);
  });
}
