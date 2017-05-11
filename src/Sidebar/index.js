import React from 'react';
import './styles.css';

export default () => (
  <aside className="sidebar">
    <div className="logo">
      <a href="#">
        <img alt="Adidas" src={require('./logo.png')} />
      </a>
    </div>
    <div className="search-container">
      <form className="search-form" name="search" action="" method="get">
        <div className="search-submit-container">
          <input type="submit" value="Search" className="search-submit" />
        </div>
        <div className="search-input-container">
          <input title="Search" type="text" className="search-input" />
        </div>
      </form>
    </div>
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
