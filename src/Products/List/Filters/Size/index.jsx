import React from 'react';
import PropTypes from 'prop-types';

import Item from '../Item';

const renderSizeItems = (items = []) => (
   items.map(item => <Item key={item.name} item={item} />)
);

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

Size.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Size;
