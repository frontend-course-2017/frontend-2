import React from 'react';
import PropTypes from 'prop-types';

function SaleBadge({ sale, className }) {
  if (!sale) {
    return (null);
  }

  return (
    <span className={`sale-badge ${className}`}>
      SALE
    </span>
  );
}

SaleBadge.propTypes = {
  sale: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
};

module.exports = SaleBadge;
