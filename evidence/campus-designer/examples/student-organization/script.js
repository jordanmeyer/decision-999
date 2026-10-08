const events = [...document.querySelectorAll('.event')];

document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(filter => filter.setAttribute('aria-pressed', String(filter === button)));
    events.forEach(event => event.hidden = button.dataset.filter !== 'all' && event.dataset.type !== button.dataset.filter);
    document.querySelector('#filter-status').textContent = `Showing ${events.filter(event => !event.hidden).length} sample events.`;
  });
});

document.querySelectorAll('.save').forEach(button => {
  button.addEventListener('click', () => {
    const saved = button.getAttribute('aria-pressed') !== 'true';
    button.setAttribute('aria-pressed', String(saved));
    button.querySelector('span').textContent = saved ? '✓' : '+';
    const title = button.closest('.event').querySelector('h3').textContent;
    document.querySelector('#save-status').textContent = `${saved ? 'Saved' : 'Removed'}: ${title}. Demo only; this does not reserve a place.`;
  });
});

const suggestions = {
  build: ['Try a prototype lab.', 'Start with “Prototype an AI assistant worth using.” Bring a product problem you’re curious about; no code is needed for this sample workshop.', '#events', 'Explore the sample calendar'],
  decide: ['Start with a case circle.', 'The sample conversation “When should a product say ‘I don’t know’?” is a place to explore uncertainty and user trust with peers.', '#events', 'Explore the sample calendar'],
  connect: ['Make space for a peer session.', 'In this fictional club, an open peer session would help you find a learning partner or practice a product conversation.', '#activities', 'Explore the activities']
};

document.querySelector('#interest-form').addEventListener('submit', event => {
  event.preventDefault();
  const [title, copy, target, label] = suggestions[document.querySelector('[name=interest]:checked').value];
  const result = document.querySelector('#next-step');
  result.innerHTML = `<strong>${title}</strong><p>${copy}</p><a href="${target}">${label}</a><p class="small">Demo complete. No membership has been created.</p>`;
  result.hidden = false;
});
