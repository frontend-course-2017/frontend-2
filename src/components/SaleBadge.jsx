import React from 'react';
import PropTypes from 'prop-types';
import SaleLabel from './styled';

const SaleBadge = ({ sale, isInList }) => (
  sale &&
  <SaleLabel isInList={isInList}>
    SALE
  </SaleLabel>
);

SaleBadge.propTypes = {
  sale: PropTypes.bool.isRequired,
  isInList: PropTypes.bool,
};

SaleLabel.defaultProps = {
  isInList: false,
};

export default SaleBadge;
