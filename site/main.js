const status = document.querySelector('#copy-status');
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
