const form = document.querySelector('.formsection');
const emailField = document.getElementById('email-field');
const emailErrorMsg = document.getElementById('email-error');

form.addEventListener('submit', (event) => {
  if (emailField.value !== emailField.value.toLowerCase()) {
    event.preventDefault();
    emailErrorMsg.innerHTML = 'Please input your email address in lowercase.';
  } else {
    emailErrorMsg.innerHTML = '';
  }
});
