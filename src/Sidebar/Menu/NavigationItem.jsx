import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem, MenuItemLink, MenuNavLink } from './styled';
import SubItems from './SubItems';

const NavigationItem = ({ link, text, hasSubItems }) => (
  <MenuItem>
    <MenuItemLink>
      <MenuNavLink to={link} hasSubItems={hasSubItems} activeStyle={{ color: '#fff' }}>{text}</MenuNavLink>
    </MenuItemLink>
    <SubItems show={hasSubItems} />
  </MenuItem>
);

NavigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  hasSubItems: PropTypes.bool.isRequired,
};

export default NavigationItem;
