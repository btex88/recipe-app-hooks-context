import React, { useContext, useEffect } from 'react';
import _ from 'lodash';
import * as COMP from '../components';
import GlobalContext from '../context/global-context';
import meals from '../assets/services/meals';

export default function Foods() {
  const {
    displaySearchButton,
    setDisplaySearchButton,
    displaySearchBar,
    setDisplaySearchBar,
    setFetchedMeals,
    fetchedMeals,
    setMealsCategories,
    searchInput } = useContext(GlobalContext);

  function fetchMeals() {
    meals.name()
      .then((data) => _.has(data, 'meals') && setFetchedMeals(data.meals));
  }

  function fetchCategoryList() {
    meals.categoryList().then((data) => (
      _.has(data, 'meals') && setMealsCategories(data.meals)));
  }

  useEffect(() => {
    setDisplaySearchButton(true);
    setDisplaySearchBar(false);
    setDisplaySearchBar(displaySearchBar);
    if (!fetchedMeals && !searchInput) {
      fetchMeals();
    }
    fetchCategoryList();
    return () => {
      setDisplaySearchButton(false);
      setDisplaySearchBar(true);
      setFetchedMeals(null);
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-full h-auto flex flex-col items-center fixed top-0">
        <COMP.Header displaySearchButton={ displaySearchButton } label="Foods" />
        {displaySearchBar ? <COMP.SearchBar /> : <COMP.FilterBar /> }
        <COMP.GradientBar type="b" />
      </div>
      <div
        className="w-full h-auto flex flex-col items-center justify-center pt-44 pb-14"
      >
        { fetchedMeals ? <COMP.RecipeCards /> : <COMP.Loading /> }
      </div>
      <div className="w-full h-14 flex flex-col items-center fixed bottom-0">
        <COMP.GradientBar type="t" />
        <COMP.Footer />
      </div>
    </div>
  );
}
