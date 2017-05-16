import styled from 'styled-components';

const Filter = styled.div`
  display: flex;
  height: 77px;
  border-bottom: 3px solid #e7e7e7;
  align-items: center;
  font-family: AvenirNext-Bold;
  font-size: 24px;
  color: #4d42f8;
  font-weight: bold;
`;

const IconWrapper = styled.div`
  padding-left: 24px;
`;

const IconContainer = styled.div`
  height: 55px;
  width: 55px;
  background-color: #ebebeb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`

`;

const Gender = styled.div`
  padding-left: 30px;
`;

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-family: AvenirNext-Bold;
  font-size: 24px;
  padding: 0 0 0 0;
  margin-right: 6px;
  color: ${props => props.active ? '#4d42f8' : '#d6d6d6'};
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  
  padding-right: ${props => props.genderFilter ? '10px' : ''};
`;

const Size = styled.div`
  padding-left: 50px;
  display: flex;
`;

const SizeLabel = styled.div`
  padding-right: 18px;
`;

const Sizes = styled.div`
  
`;

const Form = styled.div`
  display: flex;
`;

export {
  Filter,
  IconContainer,
  IconWrapper,
  Icon,
  Gender,
  StyledButton,
  Size,
  SizeLabel,
  Sizes,
};
