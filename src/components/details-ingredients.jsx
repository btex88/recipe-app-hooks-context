import React from 'react';
import PropTypes from 'prop-types';
import randId from '../assets/helpers/rand-id';

export default function DetailsIngredients(props) {
  const { ingredients } = props;
  return (
    <div
      className="w-full h-auto flex flex-col items-center justify-evenly px-4 pt-2
      pb-4"
    >
      <span
        className="text-lg pb-4 w-full text-gray-800 font-medium transform -translate-x-2"
      >
        Ingredients
      </span>
      <div
        className="w-full h-auto flex flex-col items-center justify-evenly bg-gray-300
        px-4 py-2 rounded"
      >
        { Object.entries(ingredients).map((entry, index) => (
          <div
            key={ randId() }
            data-testid={ `${index}-ingredient-name-and-measure` }
            className="w-full h-auto flex items-center"
          >
            <span className="mr-2 text-sm">{`${entry[0]}:`}</span>
            <span className="font-medium">{entry[1]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

DetailsIngredients.propTypes = {
  ingredients: PropTypes.objectOf(PropTypes.string).isRequired,
};
