import React from 'react';
import PropTypes from 'prop-types';
import { HeadingStyled } from './styled';

const Heading = ({ children }) => (
  <HeadingStyled>{children}</HeadingStyled>
);


Heading.propTypes = {
  children: PropTypes.node,
};

Heading.defaultProps = {
  children: '',
};

export default Heading;

