import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';


const ShoesList = styled.div`
  
`;

const ShoesListShoe = styled.div`
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  height: 311px;
  max-width: 311px;
  margin: 0 0 24px 0;
`;

const ThumbnailWrapper = styled.div`
  padding: 9px 9px 6px 9px;
  flex-basis: 67.95%;
  text-align: center;
  display: flex;
`;

const ThumbnailContainer = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ThumbnailLink = styled.a`
  position: relative;
`;

const ThumbnailImg = styled.img`
  max-width: 100%;
  height: auto;
  flex-shrink: 0;
`;

const DetailLinkWrapper = styled.div`
  display: flex;
  padding: 0 9px 9px 9px;
  flex-basis: 32.05%;
  text-align: center;
  flex-direction: column;
  justify-content: center;
`;

const DetailLinkContainer = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  
  background-image: ${props => (props.sale ? 'linear-gradient(107deg, #0c09bf, #966dd8)' : '')};
  background-image: ${props => (props.sale ? '-webkit-linear-gradient(107deg, #0c09bf, #966dd8)' : '')};
  background-image: ${props => (props.sale ? '-moz-linear-gradient(107deg, #0c09bf, #966dd8)' : '')};
`;

DetailLinkContainer.propTypes = {
  sale: PropTypes.bool,
};

DetailLinkContainer.defaultProps = {
  sale: false,
};

const DetailLink = styled.a`
  display: flex;
  flex-basis: 100%;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 30px;
  font-family: AvenirNext-Bold;
  color: ${props => (props.sale ? '#ffffff' : '#111111')};
`;

DetailLinkContainer.propTypes = {
  sale: PropTypes.bool,
};

DetailLinkContainer.defaultProps = {
  sale: false,
};

const ShoeRow = styled(Row)`
  display: flex;
  margin: 0 !important;
`;

const ShoeCol = styled(Col)`
  padding-left: 15px !important;
  padding-right: 15px !important;
`;

export {
  ShoesList,
  ShoesListShoe,
  ThumbnailWrapper,
  ThumbnailContainer,
  ThumbnailLink,
  ThumbnailImg,
  DetailLinkWrapper,
  DetailLinkContainer,
  DetailLink,
  ShoeRow,
  ShoeCol,
};
