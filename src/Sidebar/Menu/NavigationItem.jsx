import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import SubItems from './SubItems';

const NavigationItem = ({ link, text, hasSubItems }) => (
  <div className="menu-item">
    <div className="menu-item-link">
      <NavLink to={link} activeClassName={'menu-item-link_active'}>{text}</NavLink>
    </div>
    <SubItems show={hasSubItems} />
  </div>
);

NavigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  hasSubItems: PropTypes.bool.isRequired,
};

export default NavigationItem;
