import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import _ from 'lodash';
import meals from '../assets/services/meals';
import createIngredientList from '../assets/helpers/create-ingredient-list';
import GlobalContext from '../context/global-context';
import * as COMP from '../components';
import cocktails from '../assets/services/cocktails';
import local from '../assets/helpers/local';

export default function FoodsDetails() {
  const { id } = useParams();
  const {
    fetchedRecipeDetails,
    setFetchedRecipeDetails,
    setFetchedDrinks,
    fetchedDrinks,
    shouldDisplayClipboard,
  } = useContext(GlobalContext);

  useEffect(() => { // componentDidMount
    function handleRecipeDetails() {
      meals.details(id).then((data) => {
        setFetchedRecipeDetails({
          ...data.meals[0],
          ingredients: createIngredientList(data.meals[0]),
        });
      });
    }
    function fetchRecommendedDrinks() {
      cocktails.name()
        .then((data) => _.has(data, 'drinks') && setFetchedDrinks(data.drinks));
    }
    handleRecipeDetails();
    fetchRecommendedDrinks();

    return () => setFetchedRecipeDetails(null);
  }, []);

  function isDone() {
    const doneRecipes = local.get('doneRecipes');
    if (doneRecipes) return doneRecipes.some((recipe) => recipe.id === id);
    return false;
  }

  function isInProgress() {
    const inProgressRecipes = local.get('inProgressRecipes');
    if (inProgressRecipes && _.has(inProgressRecipes, 'meals')) {
      return Object.keys(inProgressRecipes.meals).includes(id);
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
      strMealThumb,
      strMeal,
      strCategory,
      ingredients,
      strInstructions,
      strYoutube } = fetchedRecipeDetails;
    return (
      <div className="w-full h-full flex flex-col items-center relative">
        { shouldDisplayClipboard && <COMP.ClipboardCopyPopUp />}
        <div className="w-full h-auto flex flex-col items-center pb-20">
          <COMP.DetailsImage thumbnail={ strMealThumb } label={ strMeal } />
          <COMP.DetailsHeaderInfo label={ strMeal } category={ strCategory } />
          <COMP.DetailsIngredients ingredients={ ingredients } />
          <COMP.DetailsInstructions instructions={ strInstructions } />
          <COMP.DetailsVideo title={ strMeal } url={ strYoutube } />
          {fetchedDrinks && (
            <COMP.RecommendedRecipes type="drinks" data={ fetchedDrinks } />)}
        </div>
        { handleStartButton() }
      </div>
    );
  }
  return <COMP.Loading />;
}
