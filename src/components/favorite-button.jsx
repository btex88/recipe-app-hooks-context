import React, { /* useContext, */ useContext, useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { useHistory } from 'react-router-dom';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import local from '../assets/helpers/local';
import GlobalContext from '../context/global-context';

export default function FavoriteButton(props) {
  const { id, recipe, testId } = props;
  const { pathname } = useHistory().location;
  const favoriteRecipes = local.get('favoriteRecipes');
  const [isFav, setIsFav] = useState(false);
  const { shouldReload, setShouldReload, setFavoriteRecipes } = useContext(GlobalContext);

  function checkFavoriteStatus() {
    if (favoriteRecipes) return favoriteRecipes.some((fav) => fav.id === id);
    return false;
  }

  function handleFood() {
    const { strArea, strCategory, strMeal, strMealThumb } = recipe;
    const newRecipe = {
      id,
      type: 'food',
      nationality: strArea,
      category: strCategory,
      alcoholicOrNot: '',
      name: strMeal,
      image: strMealThumb,
    };

    if (favoriteRecipes) {
      return local.set('favoriteRecipes', [...favoriteRecipes, newRecipe]);
    }
    return local.set('favoriteRecipes', [newRecipe]);
  }

  function handleDrink() {
    const { strCategory, strDrink, strDrinkThumb, strAlcoholic } = recipe;
    const newRecipe = {
      id,
      type: 'drink',
      nationality: '',
      category: strCategory,
      alcoholicOrNot: strAlcoholic,
      name: strDrink,
      image: strDrinkThumb,
    };

    if (favoriteRecipes) {
      return local.set('favoriteRecipes', [...favoriteRecipes, newRecipe]);
    }
    return local.set('favoriteRecipes', [newRecipe]);
  }

  function handleRecipe() {
    if (_.includes(pathname, 'drinks')) handleDrink();
    if (_.includes(pathname, 'foods')) handleFood();
  }

  function handleClick() {
    setIsFav(!isFav);
    if (checkFavoriteStatus()) {
      const filteredRecipes = favoriteRecipes.filter((fav) => fav.id !== id);
      local.set('favoriteRecipes', filteredRecipes);
      setShouldReload(shouldReload);
      setFavoriteRecipes(local.get('favoriteRecipes'));
      return null;
    }
    handleRecipe();
    setShouldReload(shouldReload);
    setFavoriteRecipes(local.get('favoriteRecipes'));
    return null;
  }

  return (
    <div>
      <button
        className="w-auto h-8 mx-1"
        type="button"
        onClick={ () => handleClick() }
      >
        <img
          className="h-8"
          data-testid={ testId }
          src={ checkFavoriteStatus() ? blackHeartIcon : whiteHeartIcon }
          alt="share icon"
          style={ { filter: `invert(9%) sepia(49%) saturate(489%) hue-rotate(181deg)
          brightness(97%) contrast(100%)` } }
        />
      </button>
    </div>
  );
}

FavoriteButton.propTypes = {
  id: PropTypes.string.isRequired,
  recipe: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  testId: PropTypes.string.isRequired,
};
