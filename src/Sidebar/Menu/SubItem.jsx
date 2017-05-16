import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const SubItem = ({ link, text }) => (
  <div className="menu-sub-item">
    <NavLink to={link} activeClassName={'menu-sub-item_active'}>{text}</NavLink>
  </div>
);

SubItem.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SubItem;

