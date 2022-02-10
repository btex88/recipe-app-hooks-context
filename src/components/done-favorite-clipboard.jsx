import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from '../context/global-context';
import shareIcon from '../images/shareIcon.svg';

export default function DoneFavoriteClipboard(props) {
  const { testId, url } = props;
  const { setShouldDisplayClipboard } = useContext(GlobalContext);

  function handleClick() {
    navigator.clipboard.writeText(url);
    setShouldDisplayClipboard(true);
    const TWO = 2000;
    setTimeout(() => setShouldDisplayClipboard(false), TWO);
  }

  return (
    <button
      type="button"
      className="w-auto h-8 mx-1"
      onClick={ () => handleClick() }
    >
      <img
        className="h-8"
        data-testid={ testId }
        src={ shareIcon }
        alt="share icon"
        style={ { filter: `invert(9%) sepia(49%) saturate(489%) hue-rotate(181deg)
        brightness(97%) contrast(100%)` } }
      />
    </button>
  );
}

DoneFavoriteClipboard.propTypes = {
  testId: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
