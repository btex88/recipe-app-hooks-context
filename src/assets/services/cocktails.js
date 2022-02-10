/*
i === ingredient
n === name
f === first letter
*/

const cocktails = {
  url: {
    categoryList: () => 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
    ingredient: (i) => `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${i}`,
    name: (n = '') => `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${n}`,
    firstLetter: (f) => `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${f}`,
    byCategory: (c) => `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${c}`,
    details: (id) => `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
    random: () => 'https://www.thecocktaildb.com/api/json/v1/1/random.php',
    ingredientList: () => 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list',
    ingredientImage: (i) => `https://www.thecocktaildb.com/images/ingredients/${i}.png`,

  },

  ingredient: (i) => fetch(cocktails.url.ingredient(i))
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err),

  name: (n) => fetch(cocktails.url.name(n))
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err),

  firstLetter: (f) => fetch(cocktails.url.firstLetter(f))
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err),

  categoryList: () => fetch(cocktails.url.categoryList())
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err),

  byCategory: (c) => fetch(cocktails.url.byCategory(c))
    .then((res) => res.json())
    .then((data) => data).catch((err) => err),

  details: (id) => fetch(cocktails.url.details(id))
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err),

  random: () => fetch(cocktails.url.random())
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err),

  ingredientList: () => fetch(cocktails.url.ingredientList())
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err),

  ingredientImage: (i) => fetch(cocktails.url.ingredientImage(i))
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err),

};

export default cocktails;
