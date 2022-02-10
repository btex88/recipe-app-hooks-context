import React from 'react';
import PropTypes from 'prop-types';

export default function GradientBar(props) {
  const { type } = props;
  return (
    <div className={ `w-full h-2 bg-gradient-to-${type} from-yellow-200 to-white` } />
  );
}

GradientBar.propTypes = {
  type: PropTypes.string.isRequired,
};
