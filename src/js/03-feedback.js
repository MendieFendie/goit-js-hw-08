const throttle = require('lodash.throttle');

const STORAGE_KEY = 'feedback-msg';

const FormData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', );

refs.form.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarea();

function onFormSubmit(event) {
  event.preventDefault();
  console.log('Send');

  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(event) {
  const message = event.target.value;
  localStorage.setItem(STORAGE_KEY, message);

  const FormDataStorage = {
    email: refs.form.elements.email.value,
    message: refs.form.elements.message.value,
  };
  FormDataStorage[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(FormDataStorage));
}

function populateTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedMessage) {
    refs.textarea.value = savedMessage.message;
    refs.form.elements.email.value = savedMessage.email;
  }
}
