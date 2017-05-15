import React from 'react';
import PropTypes from 'prop-types';

const Price = ({ value }) => (
  <h2 className="product-price">
    {value}
  </h2>
);

Price.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Price;
