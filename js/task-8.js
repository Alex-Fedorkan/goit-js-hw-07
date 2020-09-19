const input = document.querySelector('#controls > input');

const renderBtn = document.querySelector('[data-action="render"]');

const destroyBtn = document.querySelector('[data-action="destroy"]');

const boxEl = document.querySelector('#boxes');

renderBtn.addEventListener('click', onRenderBtn);

destroyBtn.addEventListener('click', onDestroyBtn);

function createBoxes(amount) {
  const arrayOfBoxes = [];
  let size = 30;

  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement('div');

    box.style.backgroundColor = `rgb(${Math.floor(
      Math.random() * 256,
    )},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;

    arrayOfBoxes.push(box);

    size += 10;
  }

  boxEl.append(...arrayOfBoxes);
}

function onRenderBtn() {
  const quantityOfBoxes = Number(input.value);
  createBoxes(quantityOfBoxes);
}

function onDestroyBtn() {
  boxEl.innerHTML = '';
}
