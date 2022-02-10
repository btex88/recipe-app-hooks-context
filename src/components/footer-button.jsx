import React from 'react';
import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';

export default function FooterButton(props) {
  const { image, location, label, testId } = props;
  const history = useHistory();

  return (
    <button
      type="button"
      onClick={ () => history.push(location) }
      className="h-12 w-12 flex items-center justify-center"

    >
      <img
        data-testid={ testId }
        src={ image }
        alt={ label }
        className="object-contain"
        style={ { filter: `invert(50%) sepia(21%) saturate(470%) hue-rotate(176deg)
          brightness(50%) contrast(80%)` } }
      />
    </button>
  );
}

FooterButton.propTypes = {
  image: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
};
