import React, { useEffect, useContext } from 'react';
import { Menu } from '@headlessui/react';
import Loading from './loading';
import meals from '../assets/services/meals';
import GlobalContext from '../context/global-context';
import randId from '../assets/helpers/rand-id';
import NationalityDropdownItem from './nationality-dropdown-item';
import ExploreNationalityButton from './explore-nationality-button';
import NationalitiesTitle from './nationalities-title';

export default function NationalitiesDropdown() {
  const { nationalityList,
    setNationalityList,
    selectedNationality } = useContext(GlobalContext);

  useEffect(() => {
    function getNationalityList() {
      meals.areas().then((data) => {
        setNationalityList([{ strArea: 'All' }, ...data.meals]);
      });
    }
    getNationalityList();
  }, []);

  return nationalityList ? (
    <Menu>
      <div className="w-full h-full flex flex-col items-center justify-around">
        <NationalitiesTitle />
        <div className="w-full h-auto flex flex-col items-center justify-center">
          <Menu.Button
            className="bg-yellow-700 hover:bg-yellow-900 text-white w-44 h-14 rounded
          tracking-wider text-xl"
          >
            <span className="font-semibold tracking-wider text-white">
              { selectedNationality }
            </span>
          </Menu.Button>
          <Menu.Items
            className="w-44 max-h-72 bg-gray-100 border rounded overflow-auto"
          >
            {nationalityList.map((value) => (
              <NationalityDropdownItem key={ randId() } label={ value.strArea } />
            ))}
          </Menu.Items>
        </div>
        <ExploreNationalityButton />
      </div>
    </Menu>
  ) : <Loading />;
}
