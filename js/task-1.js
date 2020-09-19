const quantityOfCategories = function () {
  //   const listEl = document.querySelector('#categories');

  //   const itemsEl = listEl.querySelectorAll('li.item');
  //   const itemsEl = listEl.children;
  // console.log(`У списку ${itemsEl.length} категорії.`);

  console.log(
    `У списку ${
      document.querySelector('#categories').children.length
    } категорії.`,
  );
};

quantityOfCategories();

const informationOfCategory = function () {
  const categoriesItemsEl = document
    .querySelector('#categories')
    .querySelectorAll('li.item');

  categoriesItemsEl.forEach(categoryItemEl => {
    const nameOfCategory = categoryItemEl.querySelector('h2').textContent;
    const quantityOfElementsInCategory = categoryItemEl.querySelector('ul')
      .children.length;
    console.log(`Категорія: ${nameOfCategory}`);
    console.log(`Кількість елементів: ${quantityOfElementsInCategory}`);
  });
};

informationOfCategory();
