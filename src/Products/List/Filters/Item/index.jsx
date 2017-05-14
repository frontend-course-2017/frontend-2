import React from 'react';
import PropTypes from 'prop-types';

function Item({ item }) {
  return (
    <button name={item.name} className={`filter-button ${item.active ? 'filter-button-pressed' : ''}`}>
      {item.text}
    </button>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Item;
