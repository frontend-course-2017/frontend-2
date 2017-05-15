import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ text }) => (
  <div className="product-description">
    <p>
      {text}
    </p>
  </div>
);

Description.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Description;
