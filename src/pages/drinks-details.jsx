import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import _ from 'lodash';
import meals from '../assets/services/meals';
import createIngredientList from '../assets/helpers/create-ingredient-list';
import GlobalContext from '../context/global-context';
import * as COMP from '../components';
import cocktails from '../assets/services/cocktails';
import local from '../assets/helpers/local';

export default function DrinksDetails() {
  const { id } = useParams();
  const {
    fetchedRecipeDetails,
    setFetchedRecipeDetails,
    setFetchedMeals,
    fetchedMeals,
    shouldDisplayClipboard,
  } = useContext(GlobalContext);

  useEffect(() => { // componentDidMount
    function handleRecipeDetails() {
      cocktails.details(id).then((data) => {
        setFetchedRecipeDetails({
          ...data.drinks[0],
          ingredients: createIngredientList(data.drinks[0]),
        });
      });
    }
    function fetchRecommendedMeals() {
      meals.name()
        .then((data) => _.has(data, 'meals') && setFetchedMeals(data.meals));
    }
    handleRecipeDetails();
    fetchRecommendedMeals();

    return () => setFetchedRecipeDetails(null);
  }, []);

  function isDone() {
    const doneRecipes = local.get('doneRecipes');
    if (doneRecipes) return doneRecipes.some((recipe) => recipe.id === id);
    return false;
  }

  function isInProgress() {
    const inProgressRecipes = local.get('inProgressRecipes');
    if (inProgressRecipes && _.has(inProgressRecipes, 'drinks')) {
      return Object.keys(inProgressRecipes.drinks).includes(id);
    }
  }

  function handleStartButton() {
    if (!isDone()) {
      if (isInProgress()) {
        return <COMP.StartRecipeButton label="Continue Recipe" />;
      }
      return <COMP.StartRecipeButton label="Start Recipe" />;
    }
    return null;
  }
  if (fetchedRecipeDetails && Object.keys(fetchedRecipeDetails).length > 0) {
    const {
      strDrinkThumb,
      strDrink,
      strAlcoholic,
      ingredients,
      strInstructions } = fetchedRecipeDetails;
    return (
      <div className="w-full h-full flex flex-col items-center relative">
        { shouldDisplayClipboard && <COMP.ClipboardCopyPopUp />}
        <div className="w-full h-auto flex flex-col items-center pb-20">
          <COMP.DetailsImage thumbnail={ strDrinkThumb } label={ strDrink } />
          <COMP.DetailsHeaderInfo label={ strDrink } category={ strAlcoholic } />
          <COMP.DetailsIngredients ingredients={ ingredients } />
          <COMP.DetailsInstructions instructions={ strInstructions } />
          {fetchedMeals && (
            <COMP.RecommendedRecipes type="foods" data={ fetchedMeals } />)}
        </div>
        { handleStartButton() }
      </div>
    );
  }
  return <COMP.Loading />;
}
