import React from 'react';
import PropTypes from 'prop-types';
import { PriceStyled } from './styled';

const Price = ({ children }) => (
  <PriceStyled>
    {children}
  </PriceStyled>
);

Price.propTypes = {
  children: PropTypes.node,
};

Price.defaultProps = {
  children: '',
};

export default Price;
