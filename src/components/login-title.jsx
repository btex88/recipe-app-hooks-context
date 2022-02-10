import React from 'react';
import IMAGE_LOGO from '../assets/img/recipe.png';

export default function LoginTitle() {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-evenly">
      <span
        className="h-24 w-full text-center text-5xl text-gray-600 font-light
        flex items-center justify-evenly"
      >
        Recipes App
      </span>
      <img className="object-contain h-56 my-6" src={ IMAGE_LOGO } alt="recipe logo" />
    </div>
  );
}
