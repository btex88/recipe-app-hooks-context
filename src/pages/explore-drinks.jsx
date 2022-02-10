import React, { useContext } from 'react';
import GlobalContext from '../context/global-context';
import * as COMP from '../components';

export default function ExploreDrinks() {
  const { displaySearchButton } = useContext(GlobalContext);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <COMP.Header
        label="Explore Drinks"
        displaySearchButton={ displaySearchButton }
      />
      <COMP.GradientBar type="b" />
      <div
        className="w-full h-full flex flex-col items-center justify-evenly pb-16"
      >

        <COMP.ExploreFoodsDrinksButtons name="Ingredient" page="drinks" />
        <COMP.ExploreFoodsDrinksButtons name="Surprise" page="drinks" />
      </div>
      <div className="w-full h-14 flex flex-col items-center fixed bottom-0">
        <COMP.GradientBar type="t" />
        <COMP.Footer />
      </div>
    </div>
  );
}
