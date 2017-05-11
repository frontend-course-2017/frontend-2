import React from 'react';
import Logo from './Logo';
import Search from './Search';
import './styles.css';

export default () => (
  <aside className="sidebar">
    <Logo />
    <Search />
    <nav className="menu">
      <div className="menu-item">
        <div className="menu-item-link menu-item-link_active">
          <a href="#">SPORTS</a>
        </div>
        <div className="menu-sub-items">
          <div className="menu-sub-item menu-sub-item_active">
            <span>SHOES</span>
          </div>
          <div className="menu-sub-item">
            <a href="#">CLOTHING</a>
          </div>
          <div className="menu-sub-item">
            <a href="#">ACCESORIES</a>
          </div>
        </div>
      </div>
      <div className="menu-item">
        <div className="menu-item-link">
          <a href="#">BRANDS</a>
        </div>
      </div>
      <div className="menu-item">
        <div className="menu-item-link">
          <a href="#">MICOACH</a>
        </div>
      </div>
    </nav>
  </aside>
  );
