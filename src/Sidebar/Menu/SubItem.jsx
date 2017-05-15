import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function SubItem({ item }) {
  return (
    <div className="menu-sub-item">
      <NavLink to={item.link} activeClassName={'menu-sub-item_active'}>{item.text}</NavLink>
    </div>
  );
}

SubItem.propTypes = {
  item: PropTypes.shape({
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default SubItem;

