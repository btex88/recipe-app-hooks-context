import React, { useContext } from 'react';
import GlobalContext from '../context/global-context';
import SEARCH_ICON from '../assets/img/search.png';

export default function SearchButton() {
  const { displaySearchBar,
    setDisplaySearchBar } = useContext(GlobalContext);

  function handleClick() {
    setDisplaySearchBar(!displaySearchBar);
  }

  return (
    <button
      className="h-12 w-12"
      type="button"
      onClick={ () => handleClick() }
    >
      <img
        className="object-contain"
        style={ { filter: `invert(50%) sepia(21%) saturate(470%) hue-rotate(176deg)
          brightness(50%) contrast(80%)` } }
        src={ SEARCH_ICON }
        alt="search icon"
      />
    </button>
  );
}
