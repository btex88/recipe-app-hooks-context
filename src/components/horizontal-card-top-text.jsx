import React from 'react';
import PropTypes from 'prop-types';

export default function HorizontalCardTopText(props) {
  const { nationality, category, alcoholicOrNot, type } = props;
  return (
    <div className="w-full h-8 flex flex-row items-center">
      <span className="text-gray-400 font-medium text-sm truncate ml-2">
        {type === 'food' ? `${nationality} - ${category}` : alcoholicOrNot}
      </span>
    </div>
  );
}

HorizontalCardTopText.propTypes = {
  nationality: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  alcoholicOrNot: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
