import React from 'react';
import PropTypes from 'prop-types';

export default function DetailsInstructions(props) {
  const { instructions } = props;
  return (
    <div
      className="w-full h-auto flex flex-col items-center justify-evenly pt-2 pb-4 px-4"
    >
      <span
        className="text-lg pb-4 w-full text-gray-800 font-medium transform -translate-x-2"
      >
        Instructions
      </span>
      <span
        data-testid="instructions"
        className="w-full h-auto px-4 break-words text-justify tracking-wider"
      >
        { instructions }
      </span>
    </div>
  );
}

DetailsInstructions.propTypes = {
  instructions: PropTypes.string.isRequired,
};
