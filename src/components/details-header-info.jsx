import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import ClipboardButton from './clipboard-button';
import FavoriteButton from './favorite-button';
import GlobalContext from '../context/global-context';

export default function DetailsHeaderInfo(props) {
  const { label, category } = props;
  const { fetchedRecipeDetails } = useContext(GlobalContext);
  const { id } = useParams();

  return (
    <div
      className="w-full h-auto px-4 flex items-center justify-evenly py-2 transform
      -translate-x-2"
    >
      <div className="w-full h-16 flex flex-col justify-evenly">
        <span
          className="w-full h-auto text-lg text-gray-800 font-medium"
          data-testid="recipe-title"
        >
          {label}
        </span>
        <span
          className="w-full h-auto text-sm text-gray-500 ml-2"
          data-testid="recipe-category"
        >
          {category}
        </span>
      </div>
      <div className="w-28 h-auto pt-1 flex items-start justify-between">
        <ClipboardButton testId="share-btn" />
        <FavoriteButton id={ id } recipe={ fetchedRecipeDetails } testId="favorite-btn" />
      </div>
    </div>
  );
}

DetailsHeaderInfo.propTypes = {
  label: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
