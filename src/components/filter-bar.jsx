import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import _ from 'lodash';
import GlobalContext from '../context/global-context';
import FilterBarInput from './filter-bar-input';
import randId from '../assets/helpers/rand-id';

export default function FilterBar() {
  const { mealsCategories, drinksCategories } = useContext(GlobalContext);
  const path = useHistory().location.pathname;
  const MAX_INDEX = 5;

  function categoryValue() {
    if (mealsCategories && _.includes(path, 'foods')) return mealsCategories;
    if (drinksCategories && _.includes(path, 'drinks')) return drinksCategories;
    return [];
  }

  return (
    <div
      className="w-full h-24 flex flex-row flex-wrap items-center justify-evenly
      bg-yellow-200"
    >
      <FilterBarInput id="All" />
      { categoryValue().map((cat, index) => (index < MAX_INDEX ? (
        <FilterBarInput key={ randId() } id={ cat.strCategory } />
      ) : null)) }
    </div>
  );
}
