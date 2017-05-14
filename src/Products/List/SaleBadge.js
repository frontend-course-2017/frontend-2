import React from 'react';

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

module.exports = SaleBadge;
