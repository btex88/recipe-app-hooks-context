import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './global-context';

export default function GlobalProvider({ children }) {
  const [displaySearchBar, setDisplaySearchBar] = useState(false);
  const [displaySearchButton, setDisplaySearchButton] = useState(false);
  const [drinksCategories, setDrinksCategories] = useState(null);
  const [fetchedDrinks, setFetchedDrinks] = useState(null);
  const [fetchedMeals, setFetchedMeals] = useState(null);
  const [filteredDrinks, setFilteredDrinks] = useState(null);
  const [filteredMeals, setFilteredMeals] = useState(null);
  const [loginButtonStatus, setLoginButtonStatus] = useState(true);
  const [mealsCategories, setMealsCategories] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [searchRadioChecked, setSearchRadioChecked] = useState('ingredient');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [fetchedRecipeDetails, setFetchedRecipeDetails] = useState(null);
  const [shouldDisplayClipboard, setShouldDisplayClipboard] = useState(false);
  const [doneRecipes, setDoneRecipes] = useState(null);
  const [favoriteRecipes, setFavoriteRecipes] = useState(null);
  const [shouldReload, setShouldReload] = useState(false);
  const [ingredientList, setIngredientList] = useState(null);
  const [nationalityList, setNationalityList] = useState(null);
  const [selectedNationality, setSelectedNationality] = useState('All');

  const value = {
    displaySearchBar,
    displaySearchButton,
    drinksCategories,
    fetchedDrinks,
    fetchedMeals,
    filteredDrinks,
    filteredMeals,
    loginButtonStatus,
    mealsCategories,
    searchInput,
    searchRadioChecked,
    selectedFilter,
    setDisplaySearchBar,
    setDisplaySearchButton,
    setDrinksCategories,
    setFetchedDrinks,
    setFetchedMeals,
    setFilteredDrinks,
    setFilteredMeals,
    setLoginButtonStatus,
    setMealsCategories,
    setSearchInput,
    setSearchRadioChecked,
    setSelectedFilter,
    fetchedRecipeDetails,
    setFetchedRecipeDetails,
    shouldDisplayClipboard,
    setShouldDisplayClipboard,
    doneRecipes,
    setDoneRecipes,
    favoriteRecipes,
    setFavoriteRecipes,
    shouldReload,
    setShouldReload,
    ingredientList,
    setIngredientList,
    nationalityList,
    setNationalityList,
    selectedNationality,
    setSelectedNationality,
  };
  return (
    <GlobalContext.Provider value={ value }>{children}</GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
