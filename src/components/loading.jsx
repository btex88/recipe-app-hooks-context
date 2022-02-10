import React from 'react';
import LOADING from '../assets/img/loading.png';
import STYLES from '../assets/styles/loading.module.css';

export default function Loading() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center font-light">
      <span
        className={ STYLES.label }
      >
        Loading...
      </span>
      <img
        src={ LOADING }
        alt="loading"
        className={ STYLES.spinner }
      />
    </div>
  );
}
