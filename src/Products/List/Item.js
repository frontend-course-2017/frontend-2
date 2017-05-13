import React from 'react';
import SaleBadge from './SaleBadge.js';

function Item({ item }) {
  return (
    <div className="shoes-list-shoe">
      <div className="shoe-thumbnail-wrapper">
        <div className="shoe-thumbnail-container">
          <a className="shoe-thumbnail-link" href={item.link}>
            <SaleBadge sale={item.sale} />
            <img className="shoe-thumbnail" src={require(item.imgSrc)} />
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

module.exports = Item;
