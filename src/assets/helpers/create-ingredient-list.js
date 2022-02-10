export default function createIngredientList(recipe) {
  const ingredientsArr = Object.keys(recipe).reduce((acc, curr) => {
    if (curr.includes('strIngredient') && recipe[curr]) {
      acc.push(recipe[curr]);
    }
    return acc;
  }, []);
  const measureArr = Object.keys(recipe).reduce((acc, curr) => {
    if (curr.includes('strMeasure') && recipe[curr]) {
      acc.push(recipe[curr]);
    }
    return acc;
  }, []);
  return measureArr.reduce((acc, curr, index) => {
    if (curr && ingredientsArr[index]) acc[ingredientsArr[index]] = curr;
    return acc;
  }, {});
}
