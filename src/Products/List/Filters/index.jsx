import React from 'react';
import { Filter, Form } from './styled';
import Icon from './Icon';
import Gender from './Gender';
import Size from './Size';

export default () => (
  <Filter>
    <Icon />
    <Form name="filter" action="" method="get">
      <Gender />
      <Size />
    </Form>
  </Filter>
);
