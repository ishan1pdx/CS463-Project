const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "Please fill out every field.";
    formMessage.style.color = "#b91c1c";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = "#b91c1c";
    return;
  }

  formMessage.textContent = "Thank you. Your message has been checked successfully.";
  formMessage.style.color = "#047857";

  contactForm.reset();
});

const accordionButtons = document.querySelectorAll(".accordion-button");

accordionButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const content = button.nextElementSibling;
    content.classList.toggle("open");
  });
});