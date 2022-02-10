import React from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../assets/img/user.png';

export default function ProfileButton() {
  const history = useHistory();
  return (
    <button
      className="h-12 w-12"
      type="button"
      onClick={ () => history.push('/profile') }
    >
      <img
        className="object-contain"
        style={ { filter: `invert(50%) sepia(21%) saturate(470%) hue-rotate(176deg)
          brightness(50%) contrast(80%)` } }
        src={ profileIcon }
        alt="profile icon"
      />
    </button>
  );
}
