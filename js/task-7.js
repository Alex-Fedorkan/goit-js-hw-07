const input = document.querySelector('#font-size-control');

const span = document.querySelector('#text');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
  span.style.fontSize = `${Number(event.currentTarget.value)}em`;
}
