import React from 'react';
import { IconWrapper, IconContainer, Icon } from './styled';
import IconImg from './images/filter.png';

export default () => (
    <IconWrapper>
      <IconContainer>
        <Icon>
          <img alt={''} src={IconImg} />
        </Icon>
      </IconContainer>
    </IconWrapper>
);

