import React from 'react';

import Separator from './Separator';
import MorePhotoButton from './MorePhotoButton';

function renderItems(srcs) {
  if (srcs.length > 0) {
    return srcs.map((src, index) => (
      <div key={index} className="product-thumbnail-container">
        <button className="product-thumbnail-button">
          <img className="product-thumbnail" src={require(src)} />
        </button>
      </div>
    ));
  }
  return [];
}

export default ({ srcs }) => (
  <form name="product-thumbnails-navigation-form" method="get" action="#">
    <div className="product-thumbnails-navigation">
      <div className="product-thumbnails">
        {renderItems(srcs)}
      </div>
      <Separator />
      <MorePhotoButton />
    </div>
  </form>
);
