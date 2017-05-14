import React from 'react';
import { NavLink } from 'react-router-dom';
import SubItems from './SubItems';
import './styles.css';

function Item({ item }) {
  return (
    <div className="menu-item">
      <div className="menu-item-link">
        <NavLink to={item.link} activeClassName={'menu-item-link_active'}>{item.text}</NavLink>
      </div>
      <SubItems items={item.subItems} />
    </div>
  );
}

Item.propTypes = {
  item: React.PropTypes.string.isRequired,
};

module.exports = Item;
