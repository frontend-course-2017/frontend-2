import React from 'react';
import PropTypes from 'prop-types';
import SaleBadge from '../../components/SaleBadge';
import {
  ShoesListShoe,
  ThumbnailWrapper,
  ThumbnailContainer,
  ThumbnailLink,
  ThumbnailImg,
  DetailLinkWrapper,
  DetailLinkContainer,
  DetailLink,

} from './styled';


function Card({ item }) {
  return (
    <ShoesListShoe>
      <ThumbnailWrapper>
        <ThumbnailContainer>
          <ThumbnailLink href={item.link}>
            <SaleBadge sale={item.sale} isInList />
            <ThumbnailImg alt={''} src={item.imgSrc} />
          </ThumbnailLink>
        </ThumbnailContainer>
      </ThumbnailWrapper>
      <DetailLinkWrapper>
        <DetailLinkContainer sale={item.sale}>
          <DetailLink href={item.link} sale={item.sale}>
            {item.price}
          </DetailLink>
        </DetailLinkContainer>
      </DetailLinkWrapper>
    </ShoesListShoe>
  );
}


Card.propTypes = {
  item: PropTypes.shape({
    price: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    sale: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
