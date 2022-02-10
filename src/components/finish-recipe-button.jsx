import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import local from '../assets/helpers/local';

export default function FinishRecipeButton(props) {
  const {
    isDone,
    id,
    type,
    nationality,
    category,
    name,
    image,
    doneDate,
    tags,
    alcoholicOrNot } = props;
  const history = useHistory();

  function newLocal() {
    const recipe = {
      id,
      type,
      alcoholicOrNot,
      nationality,
      category,
      name,
      image,
      doneDate,
      tags,
    };
    if (local.get('doneRecipes')) {
      if (local.get('doneRecipes').some((value) => value.id === id)) {
        return local.get('doneRecipes');
      }
      return [
        ...local.get('doneRecipes'),
        recipe,
      ];
    }
    return [recipe];
  }

  function handleClick() {
    local.set('doneRecipes', newLocal());
    history.push('/done-recipes');
  }

  return (
    <div
      className="w-full h-20 flex items-center justify-center fixed bottom-0 px-4 py-3
      bg-white"
    >
      <button
        data-testid="finish-recipe-btn"
        type="button"
        disabled={ !isDone }
        onClick={ () => handleClick() }
        className={ isDone
          ? `w-full h-full bg-green-300 hover:bg-green-700 text-gray-700 font-semibold
          rounded tracking-wider hover:text-white`
          : `w-full h-full bg-green-300 text-gray-700 font-semibold rounded tracking-wider
          opacity-50 cursor-not-allowed` }
      >
        Finish Recipe
      </button>
    </div>
  );
}

FinishRecipeButton.propTypes = {
  isDone: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  alcoholicOrNot: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  doneDate: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
