import React from 'react';
import DRINKS_ICON from '../assets/img/cocktail.png';
import EXPLORE_ICON from '../assets/img/gps.png';
import FOODS_ICON from '../assets/img/cutlery.png';
import FooterButton from './footer-button';

export default function Footer() {
  return (
    <div
      className="w-full h-12 flex items-center justify-around bg-yellow-200"
    >
      <FooterButton
        label="drink icon"
        location="/drinks"
        image={ DRINKS_ICON }
        testId="drinks-bottom-btn"
      />
      <FooterButton
        label="explore icon"
        location="/explore"
        image={ EXPLORE_ICON }
        testId="explore-bottom-btn"
      />
      <FooterButton
        testId="food-bottom-btn"
        label="meal icon"
        location="/foods"
        image={ FOODS_ICON }
      />
    </div>
  );
}
