import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';


const renderRowItems = (items = []) => (
   items.map(item => (
     <div className="col-4">
       <Item key={item.id} item={item} />
     </div>
   ))
);

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

function renderItems(items = []) {
  let rowItems;
  const chunkSize = 3;
  const rows = [];
  for (let i = 0; i < items.length; i += chunkSize) {
    rowItems = items.slice(i, i + chunkSize);
    rows.push(renderRow(rowItems));
  }
  return rows;
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
