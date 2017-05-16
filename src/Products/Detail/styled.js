import styled from 'styled-components';

const HeadingStyled = styled.h1`
  position: absolute;
  top: 26px;
  left: 31px;
  line-height: 1;
  font-family: AvenirNext-Bold;
  font-size: 64px;
  color: #3a3a3a;
  word-spacing: 9999999px;
  margin: 0;
`;

const SaveButton = styled.button`
  outline: none;
  position: absolute;
  top: 168px;
  left: 28px;
  width: 75px;
  height: 75px;
  background-color: #e3e3e3;
  border: none;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  cursor: pointer;
  font-family: AvenirNext-Bold;
  color: #ffffff;
`;

const Product = styled.div`
  position: relative;
`;

const Panel = styled.div`
  position: absolute;
  top: 42px;
  right: 143px;
`;


const ColorButton = styled.button`
  outline: none;
  border: none;
  width: 18px;
  height: 18px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  cursor: pointer;
  color: transparent;
  margin-right: 13px;
  padding: 0;
  background-color: ${props => (props.color)};
  
  &:last-child {
    margin-right: 0;
  }
`;

const PriceStyled = styled.h2`
  position: absolute;
  color: #e2e2e2;
  font-family: AvenirNext-Bold;
  font-size: 80px;
  top: 87px;
  right: 31px;
  text-align: right;
  margin: 0;
  font-weight: normal;
`;

const Picture = styled.div`
  padding: 51px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonWrap = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const ButtonCentered = styled.div`
  position: relative;
  max-width: 1439px;
  margin: 0 auto;
  height: 115px;
`;

const BuyButton = styled.button`
  outline: none;
  background-image: linear-gradient(to right, #4949aa, #27275d);
  background-image: -webkit-linear-gradient(left, #4949aa, #27275d);
  background-image: -webkit-gradient(linear, left top, right top, from(#4949aa), to(#27275d));
  height: 115px;
  border: none;
  cursor: pointer;
  font-family: AvenirNext-Bold;
  font-size: 32px;
  padding: 0 0 0 0;
  color: #ffffff;
  position: absolute;
  width: 71.23%;
  max-width: 1256px;
  right: 0;
  bottom: 0;
`;

const DescriptionStyled = styled.div`
  font-size: 33px;
  font-weight: 500;
  line-height: 1.52;
  text-align: left;
  color: #d8d8d8;
  padding: 0 64px 176px 34px;
  font-family: AvenirNext;
`;

export {
  SaveButton,
  Product,
  Panel,
  ColorButton,
  PriceStyled,
  Picture,
  ButtonWrap,
  ButtonCentered,
  BuyButton,
  DescriptionStyled,
  HeadingStyled,
};
