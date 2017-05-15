import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const renderMenuItems = (items = []) => (
  items.map(item => <Item key={item.id} item={item} />)
);

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

