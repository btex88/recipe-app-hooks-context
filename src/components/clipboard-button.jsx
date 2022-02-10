import React, { useContext } from 'react';
import _ from 'lodash';
import GlobalContext from '../context/global-context';
import shareIcon from '../images/shareIcon.svg';

export default function ClipboardButton() {
  const { setShouldDisplayClipboard } = useContext(GlobalContext);
  const path = window.location.href;

  function url() {
    if (_.includes(path, 'in-progress')) return _.trimEnd(path, '/in-progress');
    return path;
  }

  function handleClick() {
    navigator.clipboard.writeText(url());
    setShouldDisplayClipboard(true);
    const THREE = 3000;
    setTimeout(() => setShouldDisplayClipboard(false), THREE);
  }

  return (
    <button
      type="button"
      className="w-auto h-8 mx-1"
      onClick={ () => handleClick() }
    >
      <img
        className="h-8"
        data-testid="share-btn"
        src={ shareIcon }
        alt="share icon"
        style={ { filter: `invert(9%) sepia(49%) saturate(489%) hue-rotate(181deg)
        brightness(97%) contrast(100%)` } }
      />
    </button>
  );
}
