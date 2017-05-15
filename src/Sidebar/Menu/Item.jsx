import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import SubItems from './SubItems';

function Item({ item }) {
  return (
    <div className="menu-item">
      <div className="menu-item-link">
        <NavLink to={item.link} activeClassName={'menu-item-link_active'}>{item.text}</NavLink>
      </div>
      <SubItems items={item.subItems} />
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    subItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default Item;
