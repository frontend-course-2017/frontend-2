import React from 'react';

function Item({ item }) {
  return (
    <button name={item.name} className={`filter-button ${item.active ? 'filter-button-pressed' : ''}`}>
      {item.text}
    </button>
  );
}

module.exports = Item;
