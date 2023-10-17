const pwd = document.getElementById('pwd');
const pwdConfirm = document.getElementById('pwd-confirm');

pwdConfirm.addEventListener('input', () => {
  if(pwdConfirm.value !== pwd.value) {
    pwdConfirm.setCustomValidity('The passwords do not match.');
  } else {
    pwdConfirm.setCustomValidity('');
  }
})