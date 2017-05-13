import React from 'react';
import SubItem from './SubItem';
import './styles.css';

function renderSubMenuItems(items) {
  if (items.length > 0) {
    return items.map((item, index) => (
      <SubItem key={index} item={item} />
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

module.exports = SubItems;
