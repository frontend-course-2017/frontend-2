import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

export default () => (
  <nav className="menu">
    <div className="menu-item">
      <div className="menu-item-link">
        <NavLink to="/sports/" activeClassName={'menu-item-link_active'}>SPORTS</NavLink>
      </div>
      <div className="menu-sub-items">
        <div className="menu-sub-item ">
          <NavLink to="/sports/shoes/" activeClassName={'menu-sub-item_active'}>SHOES</NavLink>
        </div>
        <div className="menu-sub-item">
          <NavLink to="/sports/clothing/" activeClassName={'menu-sub-item_active'}>CLOTHING</NavLink>
        </div>
        <div className="menu-sub-item">
          <NavLink to="/sports/accessories/" activeClassName={'menu-sub-item_active'}>ACCESORIES</NavLink>
        </div>
      </div>
    </div>
    <div className="menu-item">
      <div className="menu-item-link">
        <NavLink to="/brands/" activeClassName={'menu-item-link_active'}>BRANDS</NavLink>
      </div>
    </div>
    <div className="menu-item">
      <div className="menu-item-link">
        <NavLink to="/micoach/" activeClassName={'menu-item-link_active'}>MICOACH</NavLink>
      </div>
    </div>
  </nav>
);

