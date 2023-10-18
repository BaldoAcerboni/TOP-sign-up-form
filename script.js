const pwd = document.getElementById('pwd');
const pwdConfirm = document.getElementById('pwd-confirm');
const pwdSecurity = document.getElementById('pwd-security');

pwdConfirm.addEventListener('input', () => {
  if(pwdConfirm.value !== pwd.value) {
    pwdConfirm.setCustomValidity('The passwords do not match.');
  } else {
    pwdConfirm.setCustomValidity('');
  }
})

pwd.addEventListener('input', () => {
  let securityIndex = 1;
  const lowerCase = /[a-z]/g;
  const upperCase = /[A-Z]/g;
  const number = /\d/g;

  if(pwd.value.length < 8) {
    securityIndex *= 0.6;
    checkVariety()
  } else if(pwd.value.length < 12) {
    securityIndex *= 0.8;
    checkVariety()
  } else if(pwd.value.length < 15) {
    securityIndex *= 0.9;
    checkVariety()
  } else {
    checkVariety();
  }

  function checkVariety() {
    if(lowerCase.test(pwd.value) && upperCase.test(pwd.value) && number.test(pwd.value)) {
      return
    } else if(lowerCase.test(pwd.value) && upperCase.test(pwd.value)) {
      securityIndex *= 0.9;
      return
    } else if(lowerCase.test(pwd.value) && number.test(pwd.value)) {
      securityIndex *= 0.9;
      return
    } else if(number.test(pwd.value) && upperCase.test(pwd.value)) {
      securityIndex *= 0.9;
      return
    } else {
      securityIndex *= 0.5;
      return
    }
  }
  
  if(securityIndex >= 0.8) {
    pwdSecurity.style.color = 'rgb(74, 255, 74)';
    pwdSecurity.textContent = 'Password security: OPTIMAL';
  } else if(securityIndex >= 0.5) {
    pwdSecurity.style.color = 'rgb(255, 220, 10)';
    pwdSecurity.textContent = 'Password security: GOOD';
  } else {
    pwdSecurity.style.color = 'rgb(255, 100, 100)';
    pwdSecurity.textContent = 'Password security: POOR';
  }
})