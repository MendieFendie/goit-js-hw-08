const throttle = require("lodash.throttle");

const form = document.querySelector(".feedback-form");

const meilInput = document.querySelector("input");

const textInput = document.querySelector("textarea");

meilInput.addEventListener("input", throttle(onMeil, 500));

textInput.addEventListener("input", throttle(onTextArea, 500));

form.addEventListener("submit", submitEvent);

savedEmail();
savedTextArea();

function onMeil(event) {
  const value = event.target.value;
  localStorage.setItem("mail", value);
}

function onTextArea(event) {
  const value = event.target.value;
  localStorage.setItem("text", value);
}

function savedEmail() {
  const savedEmail = localStorage.getItem("mail");

  meilInput.value = savedEmail;
}

function savedTextArea() {
  const savedText = localStorage.getItem("text");

  textInput.value = savedText;
}

function submitEvent(event) {
  event.preventDefault();
  console.log("Mail:", meilInput.value);
  console.log("Text:", textInput.value);
  event.currentTarget.reset();
  localStorage.removeItem("mail");
  localStorage.removeItem("text");
}
