import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from '../context/global-context';

export default function NationalityDropdownItem(props) {
  const { label } = props;
  const { setSelectedNationality } = useContext(GlobalContext);
  return (
    <button
      type="button"
      id={ label }
      className="w-full h-auto border-b border-yellow-800 p-1 tracking-wider"
      onClick={ () => setSelectedNationality(label) }
      value={ label }
    >
      { label }
    </button>
  );
}

NationalityDropdownItem.propTypes = {
  label: PropTypes.string.isRequired,
};
