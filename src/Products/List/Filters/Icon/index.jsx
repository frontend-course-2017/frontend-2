import React from 'react';
import FilterIcon from './images/filter.png';

function Icon() {
  return (
    <div className="filter-icon-wrapper">
      <div className="filter-icon-container">
        <div className="filter-icon">
          <img alt={''} src={FilterIcon} />
        </div>
      </div>
    </div>
  );
}

module.exports = Icon;
