import React from 'react';
import PropTypes from 'prop-types';

import SubItem from './SubItem';
import { SubItemsStyled } from './styled';

const SubItems = ({ show }) => (
  show &&
  <SubItemsStyled >
    <SubItem text={'SHOES'} link={'/'} />
    <SubItem text={'CLOTHING'} link={'/sports/clothing/'} />
    <SubItem text={'ACCESSORIES'} link={'/sports/accessories/'} />
  </SubItemsStyled>
);

SubItems.propTypes = {
  show: PropTypes.string.isRequired,
};

export default SubItems;
