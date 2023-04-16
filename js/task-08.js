/* eslint-disable consistent-return */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
const form = document.querySelector('.login-form');
form.addEventListener('submit', manualSubmit);
function manualSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === '' || password.value === '') {
    return alert('All fields should be completed');
  }
  const userData = { email: email.value, Password: password.value };
  console.log(userData);
  event.currentTarget.reset();
}
