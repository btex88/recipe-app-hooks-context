import React, { useContext } from 'react';
import _ from 'lodash';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import cocktails from '../assets/services/cocktails';
import meals from '../assets/services/meals';
import GlobalContext from '../context/global-context';

export default function IngredientCard(props) {
  const { type, index, name } = props;
  const { setSearchInput,
    setDisplaySearchBar,
    setFetchedDrinks,
    setFetchedMeals,
  } = useContext(GlobalContext);
  const history = useHistory();

  function getImgSrc() {
    if (type === 'foods') {
      return `https://www.themealdb.com/images/ingredients/${name}-Small.png`;
    }
    if (type === 'drinks') {
      return `https://www.thecocktaildb.com/images/ingredients/${name}-Small.png`;
    }
  }

  function handleLocation() {
    if (type === 'foods') {
      return { data: meals, type: 'meals', func: setFetchedMeals };
    }
    if (type === 'drinks') {
      return { data: cocktails, type: 'drinks', func: setFetchedDrinks };
    }
  }

  function handleResponse(obj, dataResponse) {
    if (_.has(dataResponse, obj.type) && dataResponse[obj.type]) {
      return obj.func(dataResponse[obj.type]);
    }
    return global.alert('Sorry, we haven\'t found any recipes for these filters.');
  }

  function handleIngredientSearch(obj) {
    return obj.data.ingredient(name)
      .then((data) => handleResponse(obj, data));
  }

  const handleClick = () => {
    setSearchInput(name);
    handleIngredientSearch(handleLocation());
    setDisplaySearchBar(true);
    history.push(`/${type}`);
  };

  return (
    <button
      type="button"
      index={ index }
      onClick={ () => handleClick() }
      className="w-36 h-40 border flex flex-col items-center justify-evenly rounded
      bg-gray-100 shadow-lg my-2"
    >
      <img src={ getImgSrc() } alt={ name } />
      <span className="w-32 h-auto truncate text-sm">
        {name}
      </span>
    </button>
  );
}

IngredientCard.propTypes = {
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
