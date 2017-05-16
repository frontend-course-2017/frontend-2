import React from 'react';
import PropTypes from 'prop-types';
import { DescriptionStyled } from './styled';

const Description = ({ children }) => (
  <DescriptionStyled>
    <p>
      { children }
    </p>
  </DescriptionStyled>
);

Description.propTypes = {
  children: PropTypes.node,
};

Description.defaultProps = {
  children: '',
};

export default Description;

