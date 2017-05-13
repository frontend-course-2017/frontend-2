import React from 'react';
import Item from '../Item';

function renderGenderItems(items) {
  if (items.length > 0) {
    return items.map((item, index) => (
      <Item key={index} item={item} />
    ));
  }
  return [];
}

function Gender({ items }) {
  const filterItems = renderGenderItems(items);
  return (
    <div className="gender-filter">
      {filterItems}
    </div>
  );
}

module.exports = Gender;

