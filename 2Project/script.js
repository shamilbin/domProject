const form = document.getElementById("registration-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

// Email regex that covers most common email formats
//  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const isRequired = checkRequired([
    username,
    email,
    password,
    confirmPassword,
  ]);
});

function checkRequired(inputArray) {
  let isValid = true;

  inputArray.forEach((input) => {
    if (input.value.trim() === "") {
      showError(
        input,
        `${formatFeildName(input)} is 
            Required`
      );
      isValid = false;
    } else {
      showSucces(input);
    }
  });
  return isValid;
}
function formatFeildName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
function showError(input, message) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group error";
  const small = formGroup.querySelector("small");
  small.innerText = message;
}
function showSucces(input) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group succes";
}
