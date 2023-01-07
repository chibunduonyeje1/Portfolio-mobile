const form = document.querySelector('.formsection');
const emailField = document.getElementById('email-field');
const nameField = document.getElementById('fullname');
const submitButton = document.getElementById('submit');
const messageField = document.getElementById('message-field');

const emailErrorMsg = document.getElementById('email-error');
const nameErrorMsg = document.getElementById('name-error');
const messageErrorMsg = document.getElementById('message-error');

form.addEventListener('submit', (event) => {
  if (emailField.value !== emailField.value.toLowerCase()) {
    event.preventDefault();
    emailErrorMsg.innerHTML = 'Please input your email address in lowercase.';
  } else {
    emailErrorMsg.innerHTML = '';
  }
});

submitButton.addEventListener('click', () => {
  if (emailField.value.length === 0) {
    emailErrorMsg.innerHTML = 'Your email is Required';
  } else {
    emailErrorMsg.innerHTML = '';
  }

  if (nameField.value.length === 0) {
    nameErrorMsg.innerHTML = 'Your name is Required';
  } else {
    nameErrorMsg.innerHTML = '';
  }

  if (messageField.value.length === 0) {
    messageErrorMsg.innerHTML = 'Your message field cannot be empty';
  } else {
    messageErrorMsg.innerHTML = '';
  }
});

// Data Storage to localStorage
const storeUserData = () => {
  const data = {
    userName: nameField.value,
    userEmail: emailField.value,
    userMsg: messageField.value,
  };
  localStorage.setItem('user', JSON.stringify(data));
};

nameField.addEventListener('keyup', storeUserData);
emailField.addEventListener('keyup', storeUserData);
messageField.addEventListener('keyup', storeUserData);


