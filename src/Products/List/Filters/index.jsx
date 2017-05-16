import React from 'react';
import { Filter, Form } from './styled';
import Icon from './Icon';
import Gender from './Gender';
import Size from './Size';

export default () => (
  <Filter>
    <Icon />
    <form className="filter-form" name="filter" action="" method="get">
      <Gender />
      <Size />
    </form>
  </Filter>
);
