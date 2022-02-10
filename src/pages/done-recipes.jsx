import React, { useContext, useEffect } from 'react';
import local from '../assets/helpers/local';
import * as COMP from '../components';
import GlobalContext from '../context/global-context';

export default function DoneRecipes() {
  const { displaySearchButton,
    setDoneRecipes,
    shouldDisplayClipboard } = useContext(GlobalContext);

  useEffect(() => {
    setDoneRecipes(local.get('doneRecipes'));
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-full h-auto flex flex-col items-center fixed top-0 z-10">
        <COMP.Header displaySearchButton={ displaySearchButton } label="Done Recipes" />
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
