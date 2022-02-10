import React, { useEffect, useContext } from 'react';
import { Menu } from '@headlessui/react';
import Loading from './loading';
import meals from '../assets/services/meals';
import GlobalContext from '../context/global-context';
import randId from '../assets/helpers/rand-id';
import NationalityDropdownItem from './nationality-dropdown-item';

export default function NationalitiesDropdown() {
  const { nationalityList, setNationalityList } = useContext(GlobalContext);

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
      <div className="w-full h-auto flex flex-col items-center justify-center">
        <Menu.Button
          className="bg-green-500 hover:bg-green-700 text-white w-44 h-14 rounded
          my-2 tracking-wider text-xl"
        >
          <span className="font-semibold tracking-wider text-white">
            Nationalities
          </span>
        </Menu.Button>
        <Menu.Items
          className="w-44 max-h-96 bg-yellow-50 border rounded overflow-auto"
        >
          {nationalityList.map((value) => (
            <NationalityDropdownItem key={ randId() } label={ value.strArea } />
          ))}
        </Menu.Items>
      </div>
    </Menu>
  ) : <Loading />;
}
