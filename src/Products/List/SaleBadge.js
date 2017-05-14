import React from 'react';

function SaleBadge({ sale, additionalClass }) {
  if (!sale) {
    return (null);
  }

  return (
    <span className={`sale-badge ${additionalClass}`}>
      SALE
    </span>
  );
}

module.exports = SaleBadge;
