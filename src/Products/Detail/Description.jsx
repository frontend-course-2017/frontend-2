import React from 'react';
import { Description } from './styled';

export default (props) => (
  <Description>
    <p>
      {props.children}
    </p>
  </Description>
);

