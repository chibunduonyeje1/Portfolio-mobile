const form = document.querySelector('.formsection');
const nameField = document.getElementById('fullname');
const emailField = document.getElementById('email-field');
const messageField = document.getElementById('message-field');
const submitButton = document.getElementById('submit');

const nameErrorMsg = document.getElementById('name-error');
const emailErrorMsg = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	if(emailField.value === emailField.value.toLowerCase()){
		form.submit();
		emailErrorMsg.innerHTML = '';
	}else{
		emailErrorMsg.innerHTML = 'Please input your email address in lowercase.';
		if (nameField.value.length === 0) {
    nameErrorMsg.innerHTML = 'Your Name is required';
    } else {
    nameErrorMsg.innerHTML = '';
    }

    if (emailField.value.length === 0) {
    emailErrorMsg.innerHTML = 'Your Email is required';
    }else {
    emailErrorMsg.innerHTML = '';
    }

    if (messageField.value.length === 0) {
    messageError.innerHTML = 'Your message field is empty';
    } else {
    messageError.innerHTML = '';
    }
	}
});


