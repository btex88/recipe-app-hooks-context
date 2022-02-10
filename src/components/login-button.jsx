import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import GlobalContext from '../context/global-context';

export default function LoginButton(props) {
  const history = useHistory();
  const { label, testId, handleClick } = props;
  const { loginButtonStatus } = useContext(GlobalContext);
  return (
    <div>
      <button
        type="button"
        data-testid={ testId }
        disabled={ loginButtonStatus }
        onClick={ () => {
          handleClick();
          history.push('/foods');
        } }
        className={ loginButtonStatus
          ? `w-24 h-10 bg-yellow-400 text-gray-700 font-medium rounded tracking-widest
        opacity-50 cursor-not-allowed`
          : `w-24 h-10 bg-yellow-400 hover:bg-yellow-600 text-gray-700 font-medium
          rounded tracking-widest hover:text-white` }
      >
        {label}
      </button>
    </div>
  );
}

LoginButton.propTypes = {
  label: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
