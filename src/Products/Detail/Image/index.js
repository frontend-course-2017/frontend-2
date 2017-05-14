import React from 'react';

export default ({src}) => (
  <div className="product-image">
    <img src={require(src)} />
  </div>
);
