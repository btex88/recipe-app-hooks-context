import React from 'react';
import PropTypes from 'prop-types';

export default function DetailsImage(props) {
  const { thumbnail, label } = props;
  return (
    <div className="w-full h-auto flex items-center justify-center">
      <img
        src={ thumbnail }
        alt={ label }
        data-testid="recipe-photo"
        className="object-contain w-full h-auto"
      />
    </div>
  );
}

DetailsImage.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
