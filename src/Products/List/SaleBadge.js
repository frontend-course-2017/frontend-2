import React from 'react';

function SaleBadge({ sale }) {
  if (!sale) {
    return (null);
  }

  return (
    <span className="sale-badge shoe-thumbnail-sale-badge">
      SALE
    </span>
  );
}

module.exports = SaleBadge;
