import styled from 'styled-components';
import SearchSubmitIcon from './images/search_submit.png';

const Sidebar = styled.aside`
  min-height: 1025px;
  background-color: #0e0e0e;
  color: #ffffff;
  flex-basis: 28.77%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  height: 94px;
  margin-top: 31px;
`;

const Container = styled.div`
  width: 89.37%;
  display: flex;
  justify-content: center;
  border-bottom: 4px solid #373737;
  padding-bottom: 10px;
  padding-left: 14px;
`;

const SubmitContainer = styled.div`
  
`;

const Form = styled.form`
  flex-basis: 100%;
  display: flex;
`;

const Submit = styled.input`
  width: 28px;
  height: 30px;
  background-color: transparent;
  border: none;
  background-image: url(${SearchSubmitIcon});
  color: transparent;
  cursor: pointer;
  padding-right: 5px;
`;

const InputContainer = styled.div`
  padding-left: 15px;
  flex-basis: 100%;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  color: white;
  height: 30px;
  font-size: 24px;
  
  &:focus{
    outline: none;
  }
`;

export {
  Sidebar,
  Logo,
  Container,
  SubmitContainer,
  Form,
  Submit,
  InputContainer,
  Input,
};
