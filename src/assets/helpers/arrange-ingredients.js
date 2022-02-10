export default function arrangeIngredients(ingredientsList) {
  return Object.entries(ingredientsList).reduce((acc, curr) => {
    acc.push({
      ingredient: curr[0],
      quantity: curr[1],
      isChecked: false,
    });
    return acc;
  }, []);
}
