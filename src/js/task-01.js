// const categoryList = document.querySelector('#categories');
// const categoryItems = categoryList.querySelectorAll('li.item');
// const numberOfCategories = categoryItems.length;
// console.log(`Number of categories: ${numberOfCategories}`);

//======================================================================================

// const numberOfCategories = document
//     .querySelector('#categories')
//     .querySelectorAll('li.item')
//     .length;
// console.log(`Number of categories: ${numberOfCategories}`);

//======================================================================================

// console.log(`Number of categories: ${document
//     .querySelector('#categories')
//     .querySelectorAll('li.item')
//     .length}`);

//======================================================================================

// console.log(`Number of categories: ${document.querySelector('#categories').querySelectorAll('li.item').length}`);

// const categoryList = document.querySelector('#categories');
// const categoryItem = categoryList.querySelectorAll('.item');
// const totalCat = categoryItem.length;
// console.log(`Number of cat: ${totalCat}`);

//     categoryItem.forEach(category => {
//         const catName = category.querySelector('h2').textContent;
//         const catEl = category.querySelectorAll('li').length;
//         console.log(`Category: ${catName}`)
//         console.log(`Elements: ${catEl}`)
//     })

const categoryList = document.querySelector('#categories');
const categoryItems = categoryList.querySelectorAll('.item');
const numberOfCategories = categoryItems.length;
console.log(`%cNumber of categories: ${numberOfCategories}`, 'color: #ff0000; font-weight:800; font-size: 20px');

categoryItems.forEach((categoryItem) => {
    const categoryTitle = categoryItem.querySelector('h2').textContent;
    const categoryElements = categoryItem.querySelectorAll('li');
    const numberOfElements = categoryElements.length;
    
    console.log("=============================")
    console.log(`%cCategory: ${categoryTitle}`, 'color: #007bff; font-size: 17px; font-weight: bold');
    console.log(`%cElements: ${numberOfElements}`, 'color: #28a745; font-size: 14px');
})








