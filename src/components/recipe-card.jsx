import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

export default function RecipeCard(props) {
  const { label, thumbnail, id } = props;
  const history = useHistory();
  const path = history.location.pathname;
  return (
    <button
      type="button"
      className="w-36 h-44 flex flex-col items-center justify-around border rounded my-2
      shadow-md bg-gray-100"
      onClick={ () => history.push(`${path}/${id}`) }
    >
      <img
        className="h-32 rounded object-contain mt-2"
        src={ thumbnail }
        alt={ label }
      />
      <div className="w-full h-12 flex items-center justify-center">
        <span
          className="w-32 truncate text-gray-700 font-medium tracking-wider text-sm
          text-center"
        >
          { label }
        </span>
      </div>
    </button>
  );
}

RecipeCard.propTypes = {
  label: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
