const decrementBtn = document.querySelector('[data-action="decrement"]');

const incrementBtn = document.querySelector('[data-action="increment"]');

const spanEl = document.querySelector('#value');

let counterValue = Number(spanEl.textContent);

const increment = () => {
  counterValue += 1;
  return (spanEl.textContent = counterValue);
};

const decrement = () => {
  counterValue -= 1;
  return (spanEl.textContent = counterValue);
};

decrementBtn.addEventListener('click', decrement);

incrementBtn.addEventListener('click', increment);
