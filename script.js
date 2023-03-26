const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const passwordError = document.getElementById('password-error');
const submitButton = document.querySelector('.button');

function validatePasswords() {
  if (passwordInput.value.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters long.';
    passwordError.style.display = 'block';
  } else if (passwordInput.value !== confirmPasswordInput.value) {
    passwordError.textContent = 'Passwords do not match.';
    passwordError.style.display = 'block';
  } else {
    passwordError.style.display = 'none';
  }
}

submitButton.addEventListener('click', validatePasswords);


// function checkPasswords() {
//   if (password.value !== confirmPassword.value) {
//     error.style.display = "block";
//   } else {
//     error.style.display = "none";
//   }
// }
// submit.addEventListener('click', checkPasswords)
// // password.addEventListener("keyup", checkPasswords);
// confirmPassword.addEventListener("keyup", checkPasswords);