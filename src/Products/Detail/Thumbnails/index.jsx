import React from 'react';
import PropTypes from 'prop-types';

import Separator from './Separator';
import MorePhotoButton from './MorePhotoButton';
import {
  Navigation,
  Thumbnails,
  Picker,
  Container,
  Thumbnail,
} from './styled';

const renderItems = (srcs = []) => (
  srcs.map(src => (
    <Container key={src.id}>
      <Picker>
        <Thumbnail alt={''} active={src.active} src={src.src} />
      </Picker>
    </Container>
  ))
);

const Detail = ({ srcs }) => (
  <form name="product-thumbnails-navigation-form" method="get" action="#">
    <Navigation>
      <Thumbnails>
        {renderItems(srcs)}
      </Thumbnails>
      <Separator />
      <MorePhotoButton />
    </Navigation>
  </form>
);


Detail.propTypes = {
  srcs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Detail;
