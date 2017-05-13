import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const Item = ({ item }) => (
  <div className="menu-item">
    <div className="menu-item-link">
      <NavLink to={item.link} activeClassName={'menu-item-link_active'}>{item.text}</NavLink>
    </div>
  </div>
  );


module.exports = Item;
