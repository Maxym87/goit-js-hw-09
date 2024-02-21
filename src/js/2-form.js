const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', event => {
  const formData = {
    email: form.email.value,
    message: form.message.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

const rawData = localStorage.getItem(STORAGE_KEY);

if (rawData) {
  const data = JSON.parse(rawData);
  form.email.value = data.email;
  form.message.value = data.message;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  
  localStorage.removeItem(STORAGE_KEY);

  form.email.value = '';
  form.message.value = '';

  const formData = {
    email: form.email.value,
    message: form.message.value,
  };
  console.log(formData);
});
