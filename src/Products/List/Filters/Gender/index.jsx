import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';

const renderGenderItems = items => (
  items.map(item => <Item key={item.name} item={item} />)
);

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

export default Gender;

