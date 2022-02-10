import React from 'react';
import PropTypes from 'prop-types';
// import randId from '../assets/helpers/rand-id';

export default function InProgressIngredients(props) {
  const { ingredientList, handleChange } = props;
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
        className="w-full h-auto flex flex-col items-center justify-evenly bg-gray-200
        px-4 py-3 rounded"
      >
        { ingredientList.map(({ ingredient, quantity, isChecked }, index) => (
          <label
            key={ index }
            data-testid={ `${index}-ingredient-step` }
            htmlFor={ index }
            className="w-full h-8 border flex flex-row flex-nowrap justify-start
              items-center"
          >
            <input
              type="checkbox"
              className="w-5 h-5 mr-2"
              style={ { textDecoration: 'none solid rgb(0, 0, 0)' } }
              checked={ isChecked }
              onChange={ () => handleChange(ingredient) }
            />
            <span
              style={ isChecked ? { textDecoration: 'line-through black' } : { } }
              className="text-sm w-full h-auto"
            >
              {`${ingredient} - ${quantity}`}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

InProgressIngredients.propTypes = {
  ingredientList: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func.isRequired,
};
