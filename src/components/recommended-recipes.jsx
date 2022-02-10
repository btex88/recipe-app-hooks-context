import React from 'react';
import PropTypes from 'prop-types';
import RecommendedRecipeCard from './recommended-recipe-card';
import randId from '../assets/helpers/rand-id';

export default function RecommendedRecipes(props) {
  const { type, data } = props;
  const SIX = 6;
  if (type === 'drinks') {
    return (
      <div
        className="h-54 pt-4 w-screen flex flex-row flex-nowrap overflow-x-scroll
          items-center"
      >
        { data.map((value, index) => (index < SIX ? (
          <div
            className={ `h-54 w-40 mx-2 ${index > 1 && 'invisible'}` }
            key={ value.idDrink }
            data-testid={ `${index}-recomendation-card` }
          >
            <RecommendedRecipeCard
              thumbnail={ value.strDrinkThumb }
              label={ value.strDrink }
              index={ index }
            />
          </div>
        ) : null
        )) }
      </div>
    );
  }
  if (type === 'foods') {
    return (
      <div
        className="h-54 pt-4 w-full flex flex-row flex-nowrap overflow-x-scroll
          items-center"
      >
        { data.map((value, index) => (index < SIX ? (
          <div
            className={ `h-54 w-40 mx-2 ${index > 1 && 'invisible'}` }
            key={ value.idMeal }
            data-testid={ `${index}-recomendation-card` }
          >
            <RecommendedRecipeCard
              key={ randId() }
              thumbnail={ value.strMealThumb }
              label={ value.strMeal }
              index={ index }
            />
          </div>
        ) : null
        )) }
      </div>
    );
  }
}

RecommendedRecipes.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.string.isRequired,
};
