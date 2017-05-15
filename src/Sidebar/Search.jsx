import React from 'react';
import './styles.css';

export default () => (
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
);
