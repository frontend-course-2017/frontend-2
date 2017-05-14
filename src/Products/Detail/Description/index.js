import React from 'react';

export default ({ text }) => (
  <div className="product-description">
    <p dangerouslySetInnerHTML={{__html: text}}>
    </p>
  </div>
);
