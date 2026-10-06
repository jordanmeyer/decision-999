const form = document.querySelector('#registration-form');
const confirmation = document.querySelector('#confirmation');

form.addEventListener('submit', event => {
  event.preventDefault();
  document.querySelector('#selection').textContent = `Selected sample format: ${new FormData(form).get('attendance')}.`;
  form.hidden = true;
  confirmation.hidden = false;
  document.querySelector('#confirmation-title').focus();
});

document.querySelector('#try-again').addEventListener('click', () => {
  confirmation.hidden = true;
  form.hidden = false;
  form.querySelector('input:checked').focus();
});
