import React from 'react';
import PropTypes from 'prop-types';

export default function HorizontalCardDoneInfo(props) {
  const { doneDate, tags } = props;
  return (
    <div>
      <span className="text-gray-600 text-xs w-full text-center">
        { `Done in: ${doneDate}` }
      </span>
      <div className="w-full h-8 flex items-center justify-evenly">
        { tags.length > 0 && tags.map((tag) => (
          <div
            key={ tag }
            className="text-xs text-white px-2 rounded-full bg-yellow-900"
          >
            { tag }
          </div>)) }
      </div>
    </div>
  );
}

HorizontalCardDoneInfo.propTypes = {
  doneDate: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
