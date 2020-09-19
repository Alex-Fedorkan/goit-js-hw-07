const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const addItems = function (itemsArray) {
  const itemsEl = itemsArray.map(item => {
    const itemEl = document.createElement('li');
    itemEl.textContent = item;
    return itemEl;
  });
  const listEl = document.querySelector('#ingredients');

  listEl.append(...itemsEl);
};

addItems(ingredients);
