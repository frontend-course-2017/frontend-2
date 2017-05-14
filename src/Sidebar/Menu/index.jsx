import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './styles.css';

function renderMenuItems(items) {
  if (items.length > 0) {
    return items.map(item => (
      <Item key={item.id} item={item} />
    ));
  }
  return [];
}

function Menu({ items }) {
  const menuItems = renderMenuItems(items);
  return (
    <nav className="menu">
      {menuItems}
    </nav>
  );
}

Menu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Menu;

