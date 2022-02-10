import React from 'react';
import PropTypes from 'prop-types';
import SearchButton from './search-button';
import ProfileButton from './profile-button';
import HeaderTitle from './header-title';

export default function Header(props) {
  const { label, displaySearchButton } = props;

  return (
    <div className="w-full h-16 flex items-center justify-between bg-yellow-200 px-4">
      <ProfileButton />
      <HeaderTitle label={ label } />
      { displaySearchButton && <SearchButton /> }
    </div>
  );
}

Header.propTypes = {
  label: PropTypes.string.isRequired,
  displaySearchButton: PropTypes.bool.isRequired,
};
