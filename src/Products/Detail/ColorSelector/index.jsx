import React from 'react';
import PropTypes from 'prop-types';

const renderItems = (colors = []) => (
  colors.map(color => (
    <button key={color.id} className={`color-selector-button ${color.className}`}>
      {color.name}
    </button>
  ))
);

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
