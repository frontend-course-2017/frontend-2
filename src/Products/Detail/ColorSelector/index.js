import React from 'react';

function renderItems(colors) {
  if (colors.length > 0) {
    return colors.map((color, index) => (
      <button className={`color-selector-button ${color.className}`}>
        {color.name}
      </button>
    ));
  }
  return [];
}

export default ({colors}) => (
  <div className="color-selector-panel">
    <form name="color-selector-form" method="get" action="">
      { renderItems(colors)}
    </form>
  </div>
);
