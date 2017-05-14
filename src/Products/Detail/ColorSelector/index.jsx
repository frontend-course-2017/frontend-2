import React from 'react';
import PropTypes from 'prop-types';

const shortid = require('shortid');

function renderItems(colors) {
  if (colors.length > 0) {
    return colors.map(color => (
      <button key={shortid.generate()} className={`color-selector-button ${color.className}`}>
        {color.name}
      </button>
    ));
  }
  return [];
}

const ColorSelector = ({ colors }) => (
  <div className="color-selector-panel">
    <form name="color-selector-form" method="get" action="">
      { renderItems(colors)}
    </form>
  </div>
);

ColorSelector.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ColorSelector;
