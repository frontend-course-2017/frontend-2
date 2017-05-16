import styled from 'styled-components';

const Navigation = styled.div`
  display: flex;
  padding-left: 34px;
`;

const Thumbnails = styled.div`
  height: 119px;
  display: flex;
  flex-basis: 70%;
`;

const Container = styled.div`
  padding-right: 5px;
  max-width: 100%;
  height: auto;
  flex-shrink: 0;
  flex-basis: 25%;
`;

const Picker = styled.button`
  outline: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
`;

const Thumbnail = styled.img`
  max-width: 100%;
  max-height: 100%;
  flex-shrink: 0;
  border: ${props => (props.active ? 'solid 5px #e8e8ea' : 'none')};
`;

const MorePhoto = styled.div`
  flex-basis: 8%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  font-size: 14px;
`;

const MorePhotoButton = styled.div`
  color: #c0c0c0;
  background-color: transparent;
  text-align: left;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: AvenirNext;
`;

const Separator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-basis: 22%;
`;

const SeparatorUnit = styled.div`
  border-top: 3px solid #e7e7e7;
  flex-basis: 3px;
  width: 159px;
  height: 3px;
  line-height: 3px;
`;

export {
  Navigation,
  Thumbnails,
  Container,
  Picker,
  Thumbnail,
  MorePhoto,
  MorePhotoButton,
  Separator,
  SeparatorUnit,
};
