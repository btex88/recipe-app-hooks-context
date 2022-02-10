import React, { useContext } from 'react';
import GlobalContext from '../context/global-context';
import * as COMP from '../components';

export default function DrinksByIngredients() {
  const { displaySearchButton } = useContext(GlobalContext);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-full h-auto flex flex-col items-center fixed top-0">
        <COMP.Header
          label="Explore Ingredients"
          displaySearchButton={ displaySearchButton }
        />
        <COMP.GradientBar type="b" />
      </div>
      <div
        className="w-full h-auto flex flex-col items-center justify-center pt-20 pb-16"
      >
        <COMP.IngredientsList type="drinks" />
      </div>
      <div className="w-full h-14 flex flex-col items-center fixed bottom-0">
        <COMP.GradientBar type="t" />
        <COMP.Footer />
      </div>
    </div>
  );
}
