import React, { useContext, useEffect } from 'react';
import _ from 'lodash';
import { useParams, useHistory } from 'react-router-dom';
import meals from '../assets/services/meals';
import GlobalContext from '../context/global-context';
import DetailsImage from './details-image';
import DetailsHeaderInfo from './details-header-info';
import createIngredientList from '../assets/helpers/create-ingredient-list';
import DetailsIngredients from './details-ingredients';
import DetailsInstructions from './details-instructions';
import DetailsVideo from './details-video';

export default function RecipeDetails() {
  const { id } = useParams();
  const path = useHistory().location.pathname;
  const { fetchedRecipeDetails, setFetchedRecipeDetails } = useContext(GlobalContext);

  useEffect(() => { // componentDidMount
    function handleRecipeDetails() {
      meals.details(id).then((data) => {
        setFetchedRecipeDetails({
          ...data.meals[0],
          ingredients: createIngredientList(data.meals[0]),
        });
      });
    }
    handleRecipeDetails();
  }, []);

  if (fetchedRecipeDetails && _.includes(path, 'foods')) {
    const {
      strMealThumb,
      strMeal,
      strCategory,
      ingredients,
      strInstructions,
      strYoutube } = fetchedRecipeDetails;
    return (
      <div className="w-full h-full flex flex-col items-center">
        <DetailsImage thumbnail={ strMealThumb } label={ strMeal } />
        <DetailsHeaderInfo label={ strMeal } category={ strCategory } />
        <DetailsIngredients ingredients={ ingredients } />
        <DetailsInstructions instructions={ strInstructions } />
        <DetailsVideo title={ strMeal } url={ strYoutube } />
      </div>
    );
  }
  return null;
}
