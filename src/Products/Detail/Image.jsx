import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src }) => (
  <div className="product-image">
    <img alt={''} src={src} />
  </div>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Image;
