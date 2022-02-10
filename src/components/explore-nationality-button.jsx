import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../context/global-context';
import meals from '../assets/services/meals';

export default function ExploreNationalityButton() {
  const { selectedNationality, setFetchedMeals } = useContext(GlobalContext);
  const history = useHistory();

  function handleClick() {
    meals.byArea(selectedNationality === 'All' ? '' : selectedNationality)
      .then((data) => {
        setFetchedMeals(data.meals);
        history.push('/foods');
      });
  }

  return (
    <button
      type="button"
      className="bg-green-600 hover:bg-green-800 text-white py-2 px-4 rounded
        tracking-wider text-xl"
      onClick={ () => handleClick() }
    >
      Explore
    </button>
  );
}
