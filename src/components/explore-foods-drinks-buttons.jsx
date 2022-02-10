import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import cocktails from '../assets/services/cocktails';
import meals from '../assets/services/meals';

export default function ExploreFoodsDrinksButtons(props) {
  const { name, page } = props;
  const history = useHistory();
  const lowerName = name.toLowerCase();
  const testId = name === 'Surprise' ? `explore-${lowerName}` : `explore-by-${lowerName}`;
  const BtnText = name === 'Surprise' ? 'Surprise me!' : `By ${name}`;

  async function surprise() {
    const response = (
      page === 'foods'
        ? await meals.random()
        : await cocktails.random());

    const id = (
      page === 'foods'
        ? response.meals[0].idMeal
        : response.drinks[0].idDrink);

    return history.push(`/${page}/${id}`);
  }

  function handleClick() {
    if (name === 'Ingredient') {
      history.push(`/explore/${page}/ingredients`);
    } else if (name === 'Nationality') {
      history.push('/explore/foods/nationalities');
    } else {
      surprise();
    }
  }

  return (
    <button
      className="bg-green-500 hover:bg-green-700 text-white font-bold w-44 h-14 rounded
      my-2 tracking-wider"
      data-testid={ testId }
      type="button"
      onClick={ () => handleClick() }
    >
      { BtnText }
    </button>
  );
}

ExploreFoodsDrinksButtons.propTypes = {
  name: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};
