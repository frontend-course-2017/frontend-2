import React from 'react';
import Icon from './Icon';
import Gender from './Gender';
import Size from './Size';

export default () => (
  <div className="filter">
    <Icon />
    <form className="filter-form" name="filter" action="" method="get">
      <Gender />
      <Size />
    </form>
  </div>
);
