const input = document.querySelector('#validation-input');

input.addEventListener('focus', onInputFocus);

input.addEventListener('blur', onInputBlur);

function onInputFocus(event) {
  this.classList.remove('valid');
  this.classList.remove('invalid');
}

function onInputBlur(event) {
  if (
    event.currentTarget.value.length > 0 &&
    event.currentTarget.value.length <= this.dataset.length
  ) {
    this.classList.add('valid');
  } else if (event.currentTarget.value.length > this.dataset.length) {
    this.classList.add('invalid');
  }
}
