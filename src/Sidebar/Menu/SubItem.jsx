import React from 'react';
import PropTypes from 'prop-types';
import { SubItemStyled, SubItemLink } from './styled';

const SubItem = ({ link, text }) => (
  <SubItemStyled>
    <SubItemLink to={link} activeStyle={{ color: '#fff' }}>{text}</SubItemLink>
  </SubItemStyled>
);

SubItem.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SubItem;

