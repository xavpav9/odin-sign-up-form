const createAccountBtn = document.querySelector("button.create-account");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");

createAccountBtn.addEventListener("click", evt => {
  if (passwordInput.value !== confirmPasswordInput.value) {
    evt.preventDefault();
  };
});

[passwordInput, confirmPasswordInput].forEach(input => {
  input.addEventListener("input", evt => {
    if (passwordInput.checkValidity() && confirmPasswordInput.checkValidity() && passwordInput.value === confirmPasswordInput.value) {
      passwordInput.classList.add("same");
      confirmPasswordInput.classList.add("same");
    } else {
      passwordInput.classList.remove("same");
      confirmPasswordInput.classList.remove("same");
    }
  });
});
