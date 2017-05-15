import React from 'react';
import PropTypes from 'prop-types';

const SaleBadge = ({ sale, className }) => (
  sale &&
  <span className={`sale-badge ${className}`}>
    SALE
  </span>
);

SaleBadge.propTypes = {
  sale: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
};

export default SaleBadge;
