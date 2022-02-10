import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import cocktails from '../assets/services/cocktails';
import meals from '../assets/services/meals';
import IngredientCard from './ingredient-card';
import Loading from './loading';
import GlobalContext from '../context/global-context';
import randId from '../assets/helpers/rand-id';

export default function IngredientsList(props) {
  const { type } = props;
  const { ingredientList, setIngredientList } = useContext(GlobalContext);

  useEffect(() => {
    function fetchIngredients() {
      if (type === 'foods') {
        meals.ingredientList().then((data) => setIngredientList(data.meals));
      }
      if (type === 'drinks') {
        cocktails.ingredientList().then((data) => {
          const arr = (
            data.drinks.map((value) => ({ strIngredient: value.strIngredient1 })));
          setIngredientList(arr);
        });
      }
    }
    fetchIngredients();

    return () => setIngredientList(null);
  }, []);

  return (
    <div
      className="w-full h-full flex flex-row flex-wrap items-center justify-evenly"
    >
      { ingredientList
        ? ingredientList.map((value) => (
          <IngredientCard key={ randId() } type={ type } name={ value.strIngredient } />
        ))
        : <Loading /> }
    </div>
  );
}

IngredientsList.propTypes = {
  type: PropTypes.string.isRequired,
};
