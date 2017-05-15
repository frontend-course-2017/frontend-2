import React from 'react';
import PropTypes from 'prop-types';

import SubItem from './SubItem';

const renderSubMenuItems = (items = []) => (
  items.map(item => <SubItem key={item.id} item={item} />)
);

function SubItems({ items }) {
  const menuSubItems = renderSubMenuItems(items);
  return (
    <div className="menu-sub-items">
      {menuSubItems}
    </div>
  );
}


SubItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SubItems;
