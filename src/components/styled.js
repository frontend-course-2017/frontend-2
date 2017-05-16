import styled from 'styled-components';
import PropTypes from 'prop-types';

const SaleLabel = styled.span`
  position: absolute;
  text-transform: uppercase;
  background-color: #ff5c5c;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #ffffff;
  width: 76px;
  height: 32px;
  font-size: 14px;
  top: ${props => (props.isInList ? '8px' : '35px')};
  right: ${props => (props.isInList ? '8px' : '31px')};
  font-family: AvenirNext;
`;

SaleLabel.propTypes = {
  isInList: PropTypes.bool,
};

SaleLabel.defaultProps = {
  isInList: false,
};

export default SaleLabel;
