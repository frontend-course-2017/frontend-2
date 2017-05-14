import React from 'react';
import PropTypes from 'prop-types';

import Separator from './Separator';
import MorePhotoButton from './MorePhotoButton';

const shortid = require('shortid');

function renderItems(srcs) {
  if (srcs.length > 0) {
    return srcs.map(src => (
      <div key={shortid.generate()} className="product-thumbnail-container">
        <button className="product-thumbnail-button">
          <img alt={''} className="product-thumbnail" src={src} />
        </button>
      </div>
    ));
  }
  return [];
}

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
  srcs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Detail;
