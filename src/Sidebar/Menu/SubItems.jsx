import React from 'react';
import PropTypes from 'prop-types';

import SubItem from './SubItem';
import { MenuSubItems } from './styled';

const SubItems = ({ show }) => (
  show &&
  <MenuSubItems>
    <SubItem text={'SHOES'} link={'/'} />
    <SubItem text={'CLOTHING'} link={'/sports/clothing/'} />
    <SubItem text={'ACCESSORIES'} link={'/sports/accessories/'} />
  </MenuSubItems>
);

SubItems.propTypes = {
  show: PropTypes.string.isRequired,
};

export default SubItems;
