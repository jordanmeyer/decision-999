const button = document.querySelector('#copy-command');
const status = document.querySelector('#copy-status');
button.hidden = false;
button.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(document.querySelector('#install-command').textContent);
    status.textContent = 'Copied. Run the command in your terminal, then follow the installation instructions.';
    button.textContent = 'Copy again';
  } catch {
    status.textContent = 'Copy was unavailable. Select the command above and copy it manually.';
  }
});
