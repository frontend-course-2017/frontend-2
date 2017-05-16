import React from 'react';
import PropTypes from 'prop-types';
import { MenuSubItem, MenuSubItemLink } from './styled';

const SubItem = ({ link, text }) => (
  <MenuSubItem>
    <MenuSubItemLink to={link} activeStyle={{ color: '#fff' }}>{text}</MenuSubItemLink>
  </MenuSubItem>
);

SubItem.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SubItem;

