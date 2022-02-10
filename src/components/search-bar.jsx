import React, { useCallback, useContext } from 'react';
import GlobalContext from '../context/global-context';
import SearchBarButton from './search-bar-button';
import SearchBarInput from './search-bar-input';
import SearchBarRadio from './search-bar-radio';

export default function SearchBar() {
  const { setSearchRadioChecked } = useContext((GlobalContext));

  const handleInputRadio = useCallback((e) => {
    const { id } = e.target;
    if (id === 'ingredient') setSearchRadioChecked('ingredient');
    if (id === 'name') setSearchRadioChecked('name');
    if (id === 'firstLetter') setSearchRadioChecked('firstLetter');
  }, []);

  return (
    <div
      className="w-full h-24 flex flex-col items-center justify-evenly bg-yellow-200"
    >
      <div
        className="w-auto h-12 flex items-center justify-evenly border-b
        border-yellow-700 pb-2"
      >
        <SearchBarInput type="text" testId="search-input" />
        <SearchBarButton />
      </div>
      <div
        className="w-full h-12 flex items-center justify-evenly"
      >
        <SearchBarRadio
          label="Ingredient"
          testId="ingredient-search-radio"
          id="ingredient"
          handleInputRadio={ handleInputRadio }
        />
        <SearchBarRadio
          label="Name"
          testId="name-search-radio"
          id="name"
          handleInputRadio={ handleInputRadio }
        />
        <SearchBarRadio
          label="First letter"
          testId="first-letter-search-radio"
          id="firstLetter"
          handleInputRadio={ handleInputRadio }
        />
      </div>
    </div>
  );
}
