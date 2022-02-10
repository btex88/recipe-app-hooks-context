import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

export default function StartRecipeButton(props) {
  const { label } = props;
  const history = useHistory();
  const { pathname } = history.location;

  return (
    <div
      className="w-full h-20 flex items-center justify-center fixed bottom-0 px-4 py-3
      bg-white"
      data-testid="start-recipe-btn"
    >
      <button
        type="button"
        className="w-full h-full bg-green-300 hover:bg-green-700 text-gray-700
        font-semibold rounded tracking-wider hover:text-white"
        onClick={ () => history.push(`${pathname}/in-progress`) }
      >
        { label }
      </button>
    </div>
  );
}

StartRecipeButton.propTypes = {
  label: PropTypes.string.isRequired,
};
