import React, { useContext, useEffect } from 'react';
import GlobalContext from '../context/global-context';
import FilterRecipesInput from './filter-recipes-input';

export default function FilterRecipesBar() {
  const { setSelectedFilter } = useContext(GlobalContext);

  useEffect(() => {
    setSelectedFilter('All');
  }, []);

  return (
    <div
      className="w-full h-24 flex flex-row flex-wrap items-center justify-evenly
      bg-yellow-200"
    >
      <FilterRecipesInput id="All" testId="filter-by-all-btn" />
      <FilterRecipesInput id="Food" testId="filter-by-food-btn" />
      <FilterRecipesInput id="Drink" testId="filter-by-drink-btn" />
    </div>
  );
}
