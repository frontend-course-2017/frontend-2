import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styled';

function Button({ name, active, text, genderFilter }) {
  return (
    <StyledButton name={name} genderFilter={genderFilter} active={active}>
      {text}
    </StyledButton>
  );
}


Button.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  genderFilter: PropTypes.bool,
};

Button.defaultProps = {
  genderFilter: false,
};

export default Button;
