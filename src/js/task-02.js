const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ingList = document.querySelector('#ingredients');
// const fragment = document.createDocumentFragment()

// ingredients.forEach(ingredient => {
//   const liItem = document.createElement('li');
//   liItem.textContent = ingredient;
//   liItem.classList.add('item');
//   fragment.appendChild(liItem);
// })

// ingList.appendChild(fragment);

const ingredientsList = document.querySelector('#ingredients');

const fragment = document.createDocumentFragment();

ingredients.forEach((ingredientText) => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredientText;
  listItem.classList.add('item');
  fragment.appendChild(listItem);
});

ingredientsList.appendChild(fragment);

