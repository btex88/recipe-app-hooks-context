import React, { useContext, useEffect } from 'react';
import _ from 'lodash';
import { useHistory } from 'react-router-dom';
import meals from '../assets/services/meals';
import cocktails from '../assets/services/cocktails';
import GlobalContext from '../context/global-context';

export default function SearchBarButton() {
  const {
    searchInput,
    searchRadioChecked,
    setFetchedMeals,
    setFetchedDrinks,
    fetchedDrinks,
    fetchedMeals } = useContext(GlobalContext);
  const path = useHistory().location.pathname;
  const history = useHistory();

  useEffect(() => {
    if (_.includes(path, 'drinks') && fetchedDrinks && fetchedDrinks.length === 1) {
      history.push(`${path}/${fetchedDrinks[0].idDrink}`);
    }
    if (_.includes(path, 'foods') && fetchedMeals && fetchedMeals.length === 1) {
      history.push(`${path}/${fetchedMeals[0].idMeal}`);
    }
  });

  function handleLocation() {
    if (_.includes(path, 'foods')) {
      return { data: meals, type: 'meals', func: setFetchedMeals };
    }
    if (_.includes(path, 'drinks')) {
      return { data: cocktails, type: 'drinks', func: setFetchedDrinks };
    }
  }

  function handleResponse(obj, dataResponse) {
    if (_.has(dataResponse, obj.type) && dataResponse[obj.type]) {
      return obj.func(dataResponse[obj.type]);
    }
    return global.alert('Sorry, we haven\'t found any recipes for these filters.');
  }

  function handleFirstLetterSearch(obj) {
    if (searchInput.length === 1) {
      return obj.data.firstLetter(searchInput)
        .then((data) => _.has(data, obj.type) && obj.func(data[obj.type]));
    }
    return global.alert('Your search must have only 1 (one) character');
  }

  function handleIngredientSearch(obj) {
    return obj.data.ingredient(searchInput)
      .then((data) => handleResponse(obj, data));
  }

  function handleNameSearch(obj) {
    return obj.data.name(searchInput)
      .then((data) => handleResponse(obj, data));
  }

  function handleClick() {
    if (searchRadioChecked === 'firstLetter') {
      return handleFirstLetterSearch(handleLocation());
    }
    if (searchRadioChecked === 'ingredient') {
      return handleIngredientSearch(handleLocation());
    }
    if (searchRadioChecked === 'name') {
      return handleNameSearch(handleLocation());
    }
  }

  return (
    <div className="w-auto h-auto">
      <button
        data-testid="exec-search-btn"
        className="bg-yellow-500 hover:bg-yellow-700 text-gray-700 font-semibold text-sm
        w-16 h-8 hover:text-white rounded"
        type="button"
        onClick={ () => handleClick() }
      >
        Search
      </button>
    </div>
  );
}
