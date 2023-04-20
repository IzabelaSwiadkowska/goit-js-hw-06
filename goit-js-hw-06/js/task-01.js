/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
function countCategories() {
  const listItems = document.querySelectorAll('.item');
  const numCategories = listItems.length;
  console.log(`Number of categories: ${numCategories}`);
  listItems.forEach((item) => {
    const header = item.querySelector('h2').textContent;
    const li = item.querySelectorAll('li').length;
    console.log(`Category: ${header}`);
    console.log(`Elements:${li}`);
  });
}
countCategories('listItems');
