const button = document.querySelector('#submit-button');
// Can also do: document.getElementById("submit-button");

button.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default form behaviour on submit.

  const email = document.querySelector('#email-field').value;
  alert(email);

  const input = document.querySelector('input');
  if (RegExp('^.+@.+..+$').test(email)) {
    input.style.background = 'green';
  } else {
    input.style.background = 'red';
  }
});
