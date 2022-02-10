import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import GlobalContext from '../context/global-context';
import local from '../assets/helpers/local';

export default function UnfavoriteButton(props) {
  const { testId, id } = props;
  const { setFavoriteRecipes, setSelectedFilter } = useContext(GlobalContext);

  function favoriteRecipes() {
    return local.get('favoriteRecipes');
  }

  function handleClick() {
    const newLocal = favoriteRecipes().filter((value) => value.id !== id);
    local.set('favoriteRecipes', newLocal);
    setFavoriteRecipes(newLocal);
    setSelectedFilter('All');
  }

  return (
    <div>
      <button
        className="w-auto h-8"
        type="button"
        onClick={ () => handleClick() }
      >
        <img
          className="h-8"
          data-testid={ testId }
          src={ blackHeartIcon }
          alt="share icon"
          style={ { filter: `invert(9%) sepia(49%) saturate(489%) hue-rotate(181deg)
          brightness(97%) contrast(100%)` } }
        />
      </button>
    </div>
  );
}

UnfavoriteButton.propTypes = {
  id: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
};
