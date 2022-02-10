import React from 'react';
import { useHistory } from 'react-router-dom';
import NOT_FOUND from '../assets/img/not-found.jpg';
import ARROW from '../assets/img/arrow-right.png';

export default function NotFound() {
  const history = useHistory();
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-white">
      <button
        type="button"
        onClick={ () => history.push('/') }
        className="w-auto h-auto"
      >
        <img
          src={ ARROW }
          alt="return"
          className="h-10 object-contain absolute top-8 left-8"
          style={ { transform: 'rotate(180deg)' } }
        />
      </button>
      <img
        src={ NOT_FOUND }
        alt="not found"
        className="h-96 object-contain"
      />
    </div>
  );
}
