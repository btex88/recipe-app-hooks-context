import React, { useContext, useEffect } from 'react';
import * as COMP from '../components';
import GlobalContext from '../context/global-context';

export default function FoodsByNationalities() {
  const { displaySearchButton,
    setDisplaySearchButton,
    setSelectedNationality } = useContext(GlobalContext);

  useEffect(() => {
    setDisplaySearchButton(true);
    setSelectedNationality('All');
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-full h-auto flex flex-col items-center fixed top-0">
        <COMP.Header
          label="Explore Nationalities"
          displaySearchButton={ displaySearchButton }
        />
        <COMP.GradientBar type="b" />
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center py-20">
        <COMP.NationalitiesDropdown />
      </div>
      <div className="w-full h-14 flex flex-col items-center fixed bottom-0">
        <COMP.GradientBar type="t" />
        <COMP.Footer />
      </div>
    </div>
  );
}
