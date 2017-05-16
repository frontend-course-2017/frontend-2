import React from 'react';
import PropTypes from 'prop-types';
import { Picture } from './styled';

const Image = ({ src }) => (
  <Picture>
    <img alt={''} src={src} />
  </Picture>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Image;
