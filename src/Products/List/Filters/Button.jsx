import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styled';

function Button({ name, active, children, isGenderFilter }) {
  return (
    <StyledButton name={name} genderFilter={isGenderFilter} active={active}>
      {children}
    </StyledButton>
  );
}


Button.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  isGenderFilter: PropTypes.bool,
  children: PropTypes.node,
};

Button.defaultProps = {
  isGenderFilter: false,
  children: '',
};

export default Button;
