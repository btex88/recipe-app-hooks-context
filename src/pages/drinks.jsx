import React, { useContext, useEffect } from 'react';
import _ from 'lodash';
import * as COMP from '../components';
import GlobalContext from '../context/global-context';
import cocktails from '../assets/services/cocktails';

export default function Drinks() {
  const {
    displaySearchButton,
    setDisplaySearchButton,
    displaySearchBar,
    setDisplaySearchBar,
    setFetchedDrinks,
    fetchedDrinks,
    setDrinksCategories,
    searchInput } = useContext(GlobalContext);

  function fetchDrinks() {
    cocktails.name()
      .then((data) => _.has(data, 'drinks') && setFetchedDrinks(data.drinks));
  }

  function fetchCategoryList() {
    cocktails.categoryList().then((data) => (
      _.has(data, 'drinks') && setDrinksCategories(data.drinks)));
  }

  useEffect(() => {
    setDisplaySearchButton(true);
    setDisplaySearchBar(false);
    if (!fetchedDrinks && !searchInput) {
      fetchDrinks();
    }
    fetchCategoryList();
    return () => {
      setDisplaySearchButton(false);
      setDisplaySearchBar(false);
      setFetchedDrinks(null);
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-full h-auto flex flex-col items-center fixed top-0">
        <COMP.Header displaySearchButton={ displaySearchButton } label="Drinks" />
        {displaySearchBar ? <COMP.SearchBar /> : <COMP.FilterBar /> }
        <COMP.GradientBar type="b" />
      </div>
      <div
        className="w-full h-auto flex flex-col items-center justify-center pt-44 pb-14"
      >
        { fetchedDrinks ? <COMP.RecipeCards /> : <COMP.Loading /> }
      </div>
      <div className="w-full h-14 flex flex-col items-center fixed bottom-0">
        <COMP.GradientBar type="t" />
        <COMP.Footer />
      </div>
    </div>
  );
}
