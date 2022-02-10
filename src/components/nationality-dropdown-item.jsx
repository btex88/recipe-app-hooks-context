import React from 'react';
import PropTypes from 'prop-types';

export default function NationalityDropdownItem(props) {
  const { label } = props;
  return (
    <button
      type="button"
      id={ label }
      className="w-full h-auto border-b border-yellow-800 p-1 tracking-wider"
      // onClick={ () => handleClick() }
      value={ label }
    >
      { label }
    </button>
  );
}

NationalityDropdownItem.propTypes = {
  label: PropTypes.string.isRequired,
};
