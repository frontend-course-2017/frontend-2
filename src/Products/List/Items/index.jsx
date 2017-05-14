import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';


function renderRowItems(items) {
  if (items.length > 0) {
    return items.map(item => (
      <div className="col-4">
        <Item key={item.id} item={item} />
      </div>
    ));
  }
  return [];
}

function renderRow(items) {
  const rowItems = renderRowItems(items);
  return (
    <div className="shoes-list-row">
      <div className="row">
        {rowItems}
      </div>
    </div>
  );
}

function renderItems(items) {
  if (items.length > 0) {
    let rowItems;
    const chunkSize = 3;
    const rows = [];
    for (let i = 0; i < items.length; i += chunkSize) {
      rowItems = items.slice(i, i + chunkSize);
      rows.push(renderRow(rowItems));
    }
    return rows;
  }
  return [];
}

function Items({ items }) {
  const products = renderItems(items);
  return (
    <div className="shoes-list">
      {products}
    </div>
  );
}


Items.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Items;
