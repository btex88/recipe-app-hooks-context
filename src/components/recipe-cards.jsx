import React, { useContext } from 'react';
import _ from 'lodash';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../context/global-context';
import RecipeCard from './recipe-card';

export default function RecipeCards() {
  const { fetchedMeals, fetchedDrinks } = useContext(GlobalContext);
  const path = useHistory().location.pathname;

  function verifyPath() {
    if (_.includes(path, 'foods')) {
      return (
        <div className="w-full h-full flex flex-wrap items-center justify-evenly">
          {fetchedMeals.map((meal, index) => (
            <RecipeCard
              key={ meal.idMeal }
              id={ meal.idMeal }
              label={ meal.strMeal }
              thumbnail={ meal.strMealThumb }
              index={ index }
            />
          ))}
        </div>
      );
    }

    if (_.includes(path, 'drinks')) {
      return (
        <div className="w-full h-full flex flex-wrap items-center justify-evenly">
          {fetchedDrinks.map((drink, index) => (
            <RecipeCard
              key={ drink.idDrink }
              id={ drink.idDrink }
              label={ drink.strDrink }
              thumbnail={ drink.strDrinkThumb }
              index={ index }
            />
          ))}
        </div>
      );
    }
  }

  return verifyPath();
}
