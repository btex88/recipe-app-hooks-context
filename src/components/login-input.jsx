import React from 'react';
import PropTypes from 'prop-types';

export default function LoginInput(props) {
  const { type, placeholder, testId, value, handleChange } = props;
  return (
    <div className="w-full h-12 flex items-center justify-center">
      <input
        className="appearance-none bg-transparent w-72 text-gray-700 h-8 leading-tight
        focus:outline-none border-b border-yellow-600 text-center"
        type={ type }
        placeholder={ placeholder }
        data-testid={ testId }
        value={ value }
        onChange={ (e) => handleChange(e.target.value) }
      />
    </div>
  );
}

LoginInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
