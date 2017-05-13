import React from 'react';
import { NavLink } from 'react-router-dom';

function SubItem({item}) {
  return (
    <div className="menu-sub-item">
      <NavLink to={item.link} activeClassName={'menu-sub-item_active'}>{item.text}</NavLink>
    </div>
  );
}

module.exports = SubItem;

