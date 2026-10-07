const filters = document.querySelectorAll('.filters button');
const projects = document.querySelectorAll('.project');
const count = document.querySelector('#project-count');

filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(filter => filter.setAttribute('aria-pressed', filter === button));
  projects.forEach(project => {
    project.hidden = button.dataset.theme !== 'all' && project.dataset.theme !== button.dataset.theme;
  });
  const visible = [...projects].filter(project => !project.hidden).length;
  count.textContent = button.dataset.theme === 'all'
    ? `Showing all ${visible} proposals`
    : `Showing ${visible} ${visible === 1 ? 'proposal' : 'proposals'} for ${button.textContent.trim()}`;
}));
