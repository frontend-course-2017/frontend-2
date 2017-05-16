import React from 'react';
import PropTypes from 'prop-types';

function Button({ name, active, text }) {
  return (
    <button name={name} className={`filter-button ${active ? 'filter-button-pressed' : ''}`}>
      {text}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
