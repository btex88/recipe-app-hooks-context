import React from 'react';
import PropTypes from 'prop-types';

export default function HeaderTitle(props) {
  const { label } = props;
  return (
    <span className=" w-1/2 text-3xl tracking-wider text-center">{ label }</span>
  );
}

HeaderTitle.propTypes = {
  label: PropTypes.string.isRequired,
};
