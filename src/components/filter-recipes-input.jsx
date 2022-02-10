import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from '../context/global-context';
import local from '../assets/helpers/local';

export default function FilterRecipesInput(props) {
  const { id, testId } = props;
  const { selectedFilter,
    setDoneRecipes,
    setSelectedFilter, setFavoriteRecipes } = useContext(GlobalContext);

  function getLocal(key) {
    return local.get(key);
  }

  function handleChange() {
    setSelectedFilter(id);
    if (id === 'All') {
      setDoneRecipes(getLocal('doneRecipes'));
      setFavoriteRecipes(getLocal('favoriteRecipes'));
    } else {
      const filteredRecipesDone = getLocal('doneRecipes') && getLocal('doneRecipes')
        .filter((recipe) => recipe.type === id.toLowerCase());
      setDoneRecipes(filteredRecipesDone);
      const filteredRecipesFavorite = getLocal('favoriteRecipes')
      && getLocal('favoriteRecipes')
        .filter((recipe) => recipe.type === id.toLowerCase());
      setFavoriteRecipes(filteredRecipesFavorite);
    }
  }

  function displayLabel() {
    if (id === 'Food') return 'Food';
    if (id === 'Drink') return 'Drinks';
    return 'All';
  }

  return (
    <div className=" flex flex-col items-center justify-evenly w-24 h-full">
      <div
        className={ `focus:ring-transparent w-16 h-8 rounded-full cursor-pointer relative
        ${id === selectedFilter ? 'bg-yellow-900 text-md' : 'bg-gray-500'}` }
      >
        <input
          type="checkbox"
          data-testid={ testId }
          id={ id }
          checked={ id === selectedFilter }
          onChange={ () => handleChange() }
          className={ `w-8 h-8 bg-yellow-600 rounded-full appearance-none absolute top-0
          transform transition-all
          ${id === selectedFilter ? 'translate-x-full' : 'translate-x-0'}` }
        />
      </div>
      <span
        className="w-24 truncate text-center font-medium text-lg text-gray-800"
      >
        {displayLabel()}
      </span>
    </div>
  );
}

FilterRecipesInput.propTypes = {
  id: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
};
