import React, { useContext } from 'react';
import * as COMP from '../components';
import GlobalContext from '../context/global-context';

export default function Profile() {
  const { displaySearchButton } = useContext(GlobalContext);
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-full h-auto flex flex-col items-center fixed top-0">
        <COMP.Header label="Profile" displaySearchButton={ displaySearchButton } />
        <COMP.GradientBar type="b" />
      </div>
      <div className="w-full h-full flex flex-col items-center justify-evenly py-16">
        <COMP.ProfileEmail />
        <COMP.ProfilePageButtons name="Done Recipes" />
        <COMP.ProfilePageButtons name="Favorite Recipes" />
        <COMP.ProfilePageButtons name="Logout" />
      </div>
      <div className="w-full h-14 flex flex-col items-center fixed bottom-0">
        <COMP.GradientBar type="t" />
        <COMP.Footer />
      </div>
    </div>
  );
}
