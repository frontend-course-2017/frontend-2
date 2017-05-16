import React from 'react';
import PropTypes from 'prop-types';

import SubItem from './SubItem';

const SubItems = ({ show }) => (
  show &&
  <div className="menu-sub-items">
    <SubItem text={'SHOES'} link={'/'} />
    <SubItem text={'CLOTHING'} link={'/sports/clothing/'} />
    <SubItem text={'ACCESSORIES'} link={'/sports/accessories/'} />
  </div>
);

SubItems.propTypes = {
  show: PropTypes.string.isRequired,
};

export default SubItems;
