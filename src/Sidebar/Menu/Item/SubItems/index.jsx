import React from 'react';
import PropTypes from 'prop-types';

import SubItem from './SubItem';
import './styles.css';

function renderSubMenuItems(items) {
  if (items.length > 0) {
    return items.map(item => (
      <SubItem key={item.id} item={item} />
    ));
  }
  return [];
}

function SubItems({ items }) {
  const menuSubItems = renderSubMenuItems(items);
  return (
    <div className="menu-sub-items">
      {menuSubItems}
    </div>
  );
}


SubItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

module.exports = SubItems;
