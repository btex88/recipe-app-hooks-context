import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from '../context/global-context';

export default function SearchBarRadio(props) {
  const { label, id, testId, handleInputRadio } = props;
  const { searchRadioChecked } = useContext(GlobalContext);
  return (
    <label htmlFor={ id } className="inline-flex items-center mt-4">
      <input
        data-testid={ testId }
        id={ id }
        type="radio"
        checked={ id === searchRadioChecked }
        onChange={ (event) => handleInputRadio(event) }
      />
      <div className="ml-1 text-gray-700 mr-1">{label}</div>
    </label>
  );
}

SearchBarRadio.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  handleInputRadio: PropTypes.func.isRequired,
};
