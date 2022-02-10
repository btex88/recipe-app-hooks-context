import React from 'react';
import PropTypes from 'prop-types';

export default function HorizontalCardName(props) {
  const { name, testId } = props;
  return (
    <div
      data-testid={ testId }
      className="text-gray-800 font-light tracking-wider w-44 h-6 truncate
    text-center"
    >
      {name}
    </div>
  );
}

HorizontalCardName.propTypes = {
  name: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
};
