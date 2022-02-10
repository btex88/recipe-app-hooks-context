import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Loading from './loading';
import GlobalContext from '../context/global-context';
import HorizontalCardRecipe from './horizontal-card-recipe';

export default function HorizontalCardsContainer() {
  const { doneRecipes, favoriteRecipes } = useContext(GlobalContext);
  const { pathname } = useHistory().location;
  const isPageDoneRecipes = pathname.includes('done-recipes');
  const isPageFavoriteRecipes = pathname.includes('favorite-recipes');

  function renderCardRecipe(recipe, index) {
    return (
      <HorizontalCardRecipe
        key={ `${recipe.id}-${index}` }
        alcoholicOrNot={ recipe.alcoholicOrNot }
        category={ recipe.category }
        doneDate={ recipe.doneDate }
        id={ recipe.id }
        image={ recipe.image }
        name={ recipe.name }
        tags={ recipe.tags }
        type={ recipe.type }
        nationality={ recipe.nationality }
      />
    );
  }

  if (doneRecipes && isPageDoneRecipes) {
    return (
      <div
        className="w-full h-full flex flex-col items-center justify-evenly pb-4
        overflow-y-auto"
      >
        { doneRecipes.map((recipe, index) => renderCardRecipe(recipe, index))}
      </div>
    );
  }

  if (favoriteRecipes && isPageFavoriteRecipes) {
    return (
      <div
        className="w-full h-full flex flex-col items-center justify-evenly pb-4
        overflow-y-auto"
      >
        { favoriteRecipes.map((recipe, index) => renderCardRecipe(recipe, index))}
      </div>
    );
  }

  return (
    <div className="w-full h-fit flex flex-col items-center justify-center ">
      <Loading />
    </div>
  );
}
