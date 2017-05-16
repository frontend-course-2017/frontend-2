import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { MenuSubItem } from './styled';

const SubItem = ({ link, text }) => (
  <MenuSubItem>
    <NavLink to={link} activeClassName={'menu-sub-item_active'}>{text}</NavLink>
  </MenuSubItem>
);

SubItem.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SubItem;

