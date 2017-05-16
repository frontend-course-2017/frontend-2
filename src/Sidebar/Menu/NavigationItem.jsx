import React from 'react';
import PropTypes from 'prop-types';
import { Item, ItemLink, NavLinkStyled } from './styled';
import SubItems from './SubItems';

const NavigationItem = ({ link, text, hasSubItems }) => (
  <Item>
    <ItemLink>
      <NavLinkStyled to={link} hasSubItems={hasSubItems} activeStyle={{ color: '#fff' }}>{text}</NavLinkStyled>
    </ItemLink>
    <SubItems show={hasSubItems} />
  </Item>
);

NavigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  hasSubItems: PropTypes.bool.isRequired,
};

export default NavigationItem;
