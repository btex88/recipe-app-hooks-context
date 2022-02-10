import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

export default function ExploreButtons(props) {
  const { name } = props;
  const history = useHistory();

  function handleClick() {
    const path = `/explore/${name.toLowerCase()}`;
    history.push(path);
  }

  return (
    <button
      className="bg-green-600 hover:bg-green-800 text-white font-bold w-44 h-14 rounded
      my-2 tracking-wider"
      data-testid={ `explore-${name.toLowerCase()}` }
      type="button"
      onClick={ () => handleClick() }
    >
      { `Explore ${name}`}
    </button>);
}

ExploreButtons.propTypes = {
  name: PropTypes.string.isRequired,
};
