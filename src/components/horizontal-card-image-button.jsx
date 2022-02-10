import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

export default function HorizontalCardImageButton(props) {
  const { name, image, testId, id, type } = props;
  const history = useHistory();

  return (
    <button
      type="button"
      onClick={ () => history.push(`/${type}s/${id}`) }
    >
      <img
        data-testid={ testId }
        src={ image }
        alt={ name }
        className="rounded h-auto w-40"
      />
    </button>
  );
}

HorizontalCardImageButton.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
};
