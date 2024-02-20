const form = document.querySelector('.feedback-form');

form.addEventListener('input', event => {
  const formData = {
    email: form.email.value,
    message: form.message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});
