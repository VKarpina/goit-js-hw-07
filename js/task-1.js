const ulCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${ulCategories.length}`);
ulCategories.forEach(element => {
  const firstEl = element.firstElementChild;
  console.log(`Category: ${firstEl.textContent}`);
  const lastEl = element.lastElementChild;
  console.log(`Elements: ${lastEl.children.length}`);
});
