const form = document.querySelector("#contact-form");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const messageError = document.querySelector("#message-error");

const successMessage = document.querySelector("#form-success");

function showError(input, errorElement, message) {
  input.setAttribute("aria-invalid", "true");
  errorElement.textContent = message;
}

function clearError(input, errorElement) {
  input.setAttribute("aria-invalid", "false");
  errorElement.textContent = "";
}

function validateName() {
  const name = nameInput.value.trim();

  if (name === "") {
    showError(nameInput, nameError, "Vul je naam in.");

    return false;
  }

  clearError(nameInput, nameError);

  return true;
}

function validateEmail() {
  const email = emailInput.value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    showError(emailInput, emailError, "Vul je e-mailadres in.");

    return false;
  }

  if (!emailPattern.test(email)) {
    showError(emailInput, emailError, "Vul een geldig e-mailadres in.");

    return false;
  }

  clearError(emailInput, emailError);

  return true;
}

function validateMessage() {
  const message = messageInput.value.trim();

  if (message.length < 10) {
    showError(
      messageInput,
      messageError,
      "Je bericht moet minimaal 10 tekens bevatten.",
    );

    return false;
  }

  clearError(messageInput, messageError);

  return true;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  successMessage.textContent = "";

  const nameValid = validateName();
  const emailValid = validateEmail();
  const messageValid = validateMessage();

  if (nameValid && emailValid && messageValid) {
    successMessage.textContent =
      "Bedankt! Je bericht is succesvol gevalideerd.";

    form.reset();

    nameInput.setAttribute("aria-invalid", "false");
    emailInput.setAttribute("aria-invalid", "false");
    messageInput.setAttribute("aria-invalid", "false");
  }
});
