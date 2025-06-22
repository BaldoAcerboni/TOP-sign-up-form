const inputs = document.querySelectorAll("input");
const submitBtn = document.querySelector(".submit-btn");
const name = document.querySelector("#name");
const surname = document.querySelector("#surname");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const pwd = document.querySelector("#pwd");
const pwdTips = document.querySelector(".pwd-tips");
const confirmPwd = document.querySelector("#pwd-confirm");
const showPwd = document.querySelector("#show-pwd");
const showPwdConfirm = document.querySelector("#show-pwd-confirm");

function checkValidity() {
  if (!name.validity) {
    if (name.value.length < 3) {
      name.setCustomValidity("Name is too short");
    } else if (name.value.length > 20) {
      name.setCustomValidity("Name is too long");
    } else if (name.valueMissing) {
      name.setCustomValidity("you need to fill this out");
    }
  }

  if (!surname.valididty) {
    if (surname.value.length < 3) {
      surname.setCustomValidity("Surname is too short");
    } else if (surname.value.length > 20) {
      surname.setCustomValidity("Surname is too long");
    } else if (surname.valueMissing) {
      surname.setCustomValidity("you need to fill this out");
    }
  }

  const emailRegEx =
    /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)*$/i;
  if (!email.validity) {
    if (email.valueMissing) {
      email.setCustomValidity("you need to fill this out");
    } else if (!emailRegEx.test(email.value)) {
      email.setCustomValidity("You need to input a valid email");
    }
  }

  const phoneRegEx = /^(\d{10})|(\d{3}[ -]\d{3}[ -]\d{4})$/;
  if (!phone.validity) {
    if (phone.valueMissing) {
      phone.setCustomValidity("you need to fill this out");
    } else if (phone.value.length < 10) {
      phone.setCustomValidity("your phone number has to few numbers");
    } else if (!phoneRegEx.test(phone.value)) {
      phone.setCustomValidity(
        "the phone number needs to be structured either: '1234567890' or '123-456-7890' or '123 456 7890'"
      );
    }
  }

  if (!pwd.validity) {
    if (pwd.valueMissing) {
      pwd.setCustomValidity("you need to fill this out");
    } else if (pwd.value.length < 8) {
      pwd.setCustomValidity("Password too short");
    } else if (pwd.value.length > 16) {
      pwd.setCustomValidity("Password too long");
    }
  } else {
    checkPwdStrenght(pwd.value);
  }

  if (confirmPwd.value !== pwd.value) {
    confirmPwd.setCustomValidity(
      "You need to match the 2 passwords, please try again."
    );
  }
}

function checkPwdStrenght(pwd) {
  let strength = 0;
  let tips = "";

  if (pwd.length > 11) {
    strength++;
  } else {
    tips += "Make the password at least 12 characters. ";
  }

  if (pwd.match(/[a-z]/) && pwd.match(/[A-Z]/)) {
    strength++;
  } else {
    tips += "Use both lowercase and uppercase characters. ";
  }

  if (pwd.match(/\d/)) {
    strength++;
  } else {
    tips += "Include at least one number. ";
  }

  if (pwd.match(/[^a-zA-Z\d]/)) {
    strength++;
  } else {
    tips += "Use at least a special character";
  }

  if (strength === 4) {
    pwdTips.textContent = "Safe password.";
  } else {
    pwdTips.textContent = tips;
  }
  pwdStrenghtIndication(strength);
  return strength;
}

function pwdStrenghtIndication(s) {
  if (s === 0) {
    pwdTips.style.color = "rgb(170, 0, 0)";
  } else if (s === 1) {
    pwdTips.style.color = "rgb(170, 88, 0)";
  } else if (s === 2) {
    pwdTips.style.color = "rgb(255, 183, 0)";
  } else if (s === 3) {
    pwdTips.style.color = "rgb(242, 255, 0)";
  } else if (s === 4) {
    pwdTips.style.color = "rgb(86, 255, 1)";
  }
}

submitBtn.addEventListener("click", checkValidity);

showPwd.addEventListener("click", (e) => {
  if (e.target.className === "invisible") {
    pwd.type = "text";
    e.target.className = "visible";
    e.target.src = "./images/visible.svg";
  } else if (e.target.className === "visible") {
    pwd.type = "password";
    e.target.className = "invisible";
    e.target.src = "./images/visibility_off.svg";
  }
});

showPwdConfirm.addEventListener("click", (e) => {
  if (e.target.className === "invisible") {
    confirmPwd.type = "text";
    e.target.className = "visible";
    e.target.src = "./images/visible.svg";
  } else if (e.target.className === "visible") {
    confirmPwd.type = "password";
    e.target.className = "invisible";
    e.target.src = "./images/visibility_off.svg";
  }
});
