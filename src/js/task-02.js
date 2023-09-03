const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const fragment = document.createDocumentFragment();

ingredients.forEach((ingredientText) => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredientText;
  listItem.classList.add('item');
  fragment.appendChild(listItem);
});

ingredientsList.appendChild(fragment);