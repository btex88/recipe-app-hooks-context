import React, { useContext, useEffect } from 'react';
import local from '../assets/helpers/local';
import * as COMP from '../components';
import GlobalContext from '../context/global-context';

export default function FavoriteRecipes() {
  const { displaySearchButton,
    setFavoriteRecipes,
    shouldDisplayClipboard } = useContext(GlobalContext);

  useEffect(() => {
    setFavoriteRecipes(local.get('favoriteRecipes'));
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-full h-auto flex flex-col items-center fixed top-0 z-10">
        <COMP.Header
          label="Favorite Recipes"
          displaySearchButton={ displaySearchButton }
        />
        <COMP.FilterRecipesBar />
        <COMP.GradientBar type="b" />
      </div>
      <div className="w-full h-auto flex flex-col items-center justify-center pt-44">
        { shouldDisplayClipboard && <COMP.ClipboardCopyPopUp />}
        <COMP.HorizontalCardsContainer />
      </div>
    </div>
  );
}
