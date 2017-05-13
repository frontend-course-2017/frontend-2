import React from 'react';

function Icon() {
  return (
    <div className="filter-icon-wrapper">
      <div className="filter-icon-container">
        <div className="filter-icon">
          <img src={require('./images/filter.png')} />
        </div>
      </div>
    </div>
  );
}

module.exports = Icon;
