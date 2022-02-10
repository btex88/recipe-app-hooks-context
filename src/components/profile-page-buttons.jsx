import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ProfilePageButtons(props) {
  const { name } = props;
  const history = useHistory();

  function handleClick() {
    if (name === 'Done Recipes') {
      history.push('/done-recipes');
    } else if (name === 'Favorite Recipes') {
      history.push('/favorite-recipes');
    } else {
      localStorage.clear();
      history.push('/');
    }
  }

  return (
    <button
      className="bg-green-600 hover:bg-green-800 text-white font-bold w-44 h-14 rounded
      my-2 tracking-wider"
      type="button"
      onClick={ () => handleClick() }
    >
      { name }
    </button>
  );
}

ProfilePageButtons.propTypes = {
  name: PropTypes.string.isRequired,
};
