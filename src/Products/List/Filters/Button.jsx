import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styled';

function Button({ name, active, text, isGenderFilter }) {
  return (
    <StyledButton name={name} genderFilter={isGenderFilter} active={active}>
      {text}
    </StyledButton>
  );
}


Button.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  isGenderFilter: PropTypes.bool,
};

Button.defaultProps = {
  isGenderFilter: false,
};

export default Button;
