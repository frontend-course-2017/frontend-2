import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';

function renderGenderItems(items) {
  if (items.length > 0) {
    return items.map(item => (
      <Item key={item.name} item={item} />
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

Gender.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

module.exports = Gender;

