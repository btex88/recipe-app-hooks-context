import React from 'react';
import PropTypes from 'prop-types';

export default function RecommendedRecipeCard(props) {
  const { index, thumbnail, label } = props;
  return (
    <div className="flex flex-col flex-nowrap justify-around items-center w-40 h-54">
      <img
        data-testid={ `${index}-card-img` }
        src={ thumbnail }
        alt={ label }
      />
      <span
        className="text-sm"
        data-testid={ `${index}-recomendation-title` }
      >
        {label}
      </span>
    </div>
  );
}

RecommendedRecipeCard.propTypes = {
  index: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
