import React from 'react';
import PropTypes from 'prop-types';
import HorizontalCardTopText from './horizontal-card-top-text';
import HorizontalCardImageButton from './horizontal-card-image-button';
import DoneFavoriteClipboard from './done-favorite-clipboard';
import HorizontalCardName from './horizontal-card-name';
import HorizontalCardDoneInfo from './horizontal-card-done-info';
import Loading from './loading';
import UnfavoriteButton from './unfavorite-button';

export default function HorizontalCardRecipe(props) {
  const {
    alcoholicOrNot,
    category,
    doneDate,
    id,
    image,
    name,
    tags,
    type,
    nationality } = props;
  const url = window.location.href;

  function getUrl() {
    if (url.includes('done-recipes')) {
      return url.replace('/done-recipes', `/${type}s/${id}`);
    }
    if (url.includes('favorite-recipes')) {
      return url.replace('/favorite-recipes', `/${type}s/${id}`);
    }
  }

  function renderPageElements() {
    if (url.includes('favorite-recipes')) {
      return (
        <div className="w-full h-auto flex items-center justify-evenly">
          <DoneFavoriteClipboard url={ getUrl() } />
          <UnfavoriteButton id={ id } />
        </div>
      );
    }
    if (url.includes('done-recipes')) {
      return (
        <>
          <div className="absolute top-1 right-2">
            <DoneFavoriteClipboard url={ getUrl() } />
          </div>
          <HorizontalCardDoneInfo doneDate={ doneDate } tags={ tags } />
        </>
      );
    }

    return <Loading />;
  }

  return (
    <div
      className="w-80 h-28 flex items-center justify-start text-left border my-2 rounded
      bg-gray-100 shadow-lg relative"
    >
      <HorizontalCardImageButton
        id={ id }
        name={ name }
        type={ type }
        image={ image }
      />
      <div className="w-full h-full flex flex-col items-center justify-evenly p-1">
        <HorizontalCardTopText
          nationality={ nationality }
          category={ category }
          alcoholicOrNot={ alcoholicOrNot }
          type={ type }
          id={ id }
        />
        <HorizontalCardName name={ name } />
        { renderPageElements() }
      </div>
    </div>
  );
}

HorizontalCardRecipe.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  doneDate: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  alcoholicOrNot: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
