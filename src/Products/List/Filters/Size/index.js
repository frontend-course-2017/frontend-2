import React from 'react';
import Item from '../Item';

function renderSizeItems(items) {
  if (items.length > 0) {
    return items.map((item, index) => (
      <Item key={index} item={item} />
    ));
  }
  return [];
}

function Size({ items }) {
  const filterItems = renderSizeItems(items);
  return (
    <div className="size-filter">
      <div className="size-filter-name">SIZE</div>
      <div className="size-filter-controls">
        {filterItems}
      </div>
    </div>
  );
}

module.exports = Size;
