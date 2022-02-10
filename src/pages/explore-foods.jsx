import React, { useContext } from 'react';
import GlobalContext from '../context/global-context';
import * as COMP from '../components';

export default function ExploreFoods() {
  const { displaySearchButton } = useContext(GlobalContext);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-full h-auto flex flex-col items-center fixed top-0">
        <COMP.Header
          label="Explore Foods"
          displaySearchButton={ displaySearchButton }
        />
        <COMP.GradientBar type="b" />
      </div>
      <div className="w-full h-full flex flex-col items-center justify-evenly py-16">
        <COMP.ExploreFoodsDrinksButtons name="Ingredient" page="foods" />
        <COMP.ExploreFoodsDrinksButtons name="Nationality" page="foods" />
        <COMP.ExploreFoodsDrinksButtons name="Surprise" page="foods" />
      </div>
      <div className="w-full h-14 flex flex-col items-center fixed bottom-0">
        <COMP.GradientBar type="t" />
        <COMP.Footer />
      </div>
    </div>
  );
}
