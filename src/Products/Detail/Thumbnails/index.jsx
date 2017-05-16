import React from 'react';
import PropTypes from 'prop-types';

import Separator from './Separator';
import MorePhotoButton from './MorePhotoButton';

const renderItems = (srcs = []) => (
  srcs.map(src => (
    <div key={src.id} className="product-thumbnail-container">
      <button className="product-thumbnail-button">
        <img alt={''} className="product-thumbnail" src={src.src} />
      </button>
    </div>
  ))
);

const Detail = ({ srcs }) => (
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


Detail.propTypes = {
  srcs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Detail;
