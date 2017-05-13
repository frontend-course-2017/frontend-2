import React from 'react';
import Item from './Item';
import './styles.css';

function renderMenuItems(items) {
  if (items.length > 0) {
    return items.map((item) => (
      <Item item={item} />
    ));
  }
  return [];
}

function Menu({items}) {
  const menuItems = renderMenuItems(items);
  return (
    <nav className="menu">
      {menuItems}
    </nav>
  );
}

module.exports = Menu;

