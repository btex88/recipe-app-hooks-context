import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../context/global-context';
import meals from '../assets/services/meals';
import cocktails from '../assets/services/cocktails';

export default function FilterBarInput(props) {
  const { id } = props;
  const {
    selectedFilter,
    setSelectedFilter,
    setFetchedMeals,
    setFetchedDrinks,
    mealsCategories,
    drinksCategories,
  } = useContext(GlobalContext);
  const path = useHistory().location.pathname;

  function handleMeals(arg) {
    if (arg === 'All') {
      setFetchedMeals(null);
      return meals.name().then((data) => (setFetchedMeals(data.meals)));
    }
    setFetchedMeals(null);
    return meals.byCategory(id).then((data) => setFetchedMeals(data.meals));
  }

  function handleDrinks(arg) {
    if (arg === 'All') {
      setFetchedDrinks(null);
      return cocktails.name().then((data) => setFetchedDrinks(data.drinks));
    }
    setFetchedDrinks(null);
    return cocktails.byCategory(id).then((data) => setFetchedDrinks(data.drinks));
  }

  function handleLocation(arg) {
    if (_.includes(path, 'foods')) return mealsCategories && handleMeals(arg);
    if (_.includes(path, 'drinks')) return drinksCategories && handleDrinks(arg);
  }

  function handleChange() {
    if (id === selectedFilter) {
      setSelectedFilter('All');
      handleLocation('All');
    } else {
      setSelectedFilter(id);
      handleLocation(id);
    }
  }

  return (
    <div
      className=" flex flex-col items-center justify-evenly w-24 h-12"
    >
      <div
        className={ `focus:ring-transparent w-10 h-5 rounded-full cursor-pointer relative
        ${id === selectedFilter ? 'bg-yellow-900 text-md' : 'bg-gray-500'}` }
      >
        <input
          type="checkbox"
          data-testid={ `${id}-category-filter` }
          id={ id }
          checked={ id === selectedFilter }
          onChange={ () => handleChange() }
          className={ `w-5 h-5 bg-yellow-600 rounded-full appearance-none absolute top-0
          transform transition-all
          ${id === selectedFilter ? 'translate-x-full' : 'translate-x-0'}` }
        />
      </div>
      <span
        className="w-24 truncate text-center font-medium text-sm text-gray-800"
      >
        {id}
      </span>
    </div>
  );
}

FilterBarInput.propTypes = {
  id: PropTypes.string.isRequired,
};
