import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from '../context/global-context';

export default function SearchBarInput(props) {
  const { type, testId } = props;
  const { searchInput, setSearchInput } = useContext(GlobalContext);
  return (
    <div className="w-auto h-auto">
      <input
        className="appearance-none bg-transparent w-56 text-gray-700 h-8 leading-tight
        focus:outline-none text-center pt-2"
        type={ type }
        data-testid={ testId }
        value={ searchInput }
        onChange={ (e) => setSearchInput(e.target.value) }
      />
    </div>
  );
}

SearchBarInput.propTypes = {
  type: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
};
