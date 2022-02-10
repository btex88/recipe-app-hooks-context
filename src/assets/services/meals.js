/*
a === area
i === ingredient
n === name
f === first letter
*/

const meals = {
  url: {
    categoryList: () => 'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
    ingredient: (i = '') => `https://www.themealdb.com/api/json/v1/1/filter.php?i=${i}`,
    name: (n = '') => `https://www.themealdb.com/api/json/v1/1/search.php?s=${n}`,
    firstLetter: (f) => `https://www.themealdb.com/api/json/v1/1/search.php?f=${f}`,
    areas: () => 'https://www.themealdb.com/api/json/v1/1/list.php?a=list',
    byArea: (a) => `https://www.themealdb.com/api/json/v1/1/filter.php?a=${a}`,
    byCategory: (c) => `https://www.themealdb.com/api/json/v1/1/filter.php?c=${c}`,
    details: (id) => `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    random: () => 'https://www.themealdb.com/api/json/v1/1/random.php',
    ingredientList: () => 'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
  },

  ingredient: (i) => fetch(meals.url.ingredient(i))
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err),

  ingredientList: () => fetch(meals.url.ingredientList())
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err),

  ingredientImage: (i) => fetch(meals.url.ingredientImage(i))
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err),

  name: (n) => fetch(meals.url.name(n))
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err),

  firstLetter: (f) => fetch(meals.url.firstLetter(f))
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err),

  areas: () => fetch(meals.url.areas())
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err),

  categoryList: () => fetch(meals.url.categoryList())
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err),

  byArea: (a) => fetch(meals.url.byArea(a))
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err),

  byCategory: (c) => fetch(meals.url.byCategory(c))
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err),

  details: (id) => fetch(meals.url.details(id))
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err),

  random: () => fetch(meals.url.random())
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err),

};

export default meals;
