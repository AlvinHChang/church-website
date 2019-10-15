/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { text, onClick } = props;

  // If we have items, render them

  return (
    <button onClick={onClick} type="button">
      {text}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};

export default Button;
