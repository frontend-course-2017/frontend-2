import React from 'react';
import PropTypes from 'prop-types';
import SaleBadge from '../../components/SaleBadge';


function Card({ item }) {
  return (
    <div className="shoes-list-shoe">
      <div className="shoe-thumbnail-wrapper">
        <div className="shoe-thumbnail-container">
          <a className="shoe-thumbnail-link" href={item.link}>
            <SaleBadge sale={item.sale} className={'shoe-thumbnail-sale-badge'} />
            <img className="shoe-thumbnail" alt={''} src={item.imgSrc} />
          </a>
        </div>
      </div>
      <div className="shoe-detail-link-wrapper">
        <div className={`shoe-detail-link-container ${item.sale ? 'shoe-detail-link-container-sale' : ''}`}>
          <a className="shoe-detail-link" href={item.link}>
            {item.price}
          </a>
        </div>
      </div>
    </div>
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
