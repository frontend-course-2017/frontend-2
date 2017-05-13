import React from 'react';
// import './styles.css';

export default () => (
  <div className="shoes-list">
    <div className="shoes-list-row">
      <div className="row">
        <div className="col-4">
          <div className="shoes-list-shoe">
            <div className="shoe-thumbnail-wrapper">
              <div className="shoe-thumbnail-container">
                <a className="shoe-thumbnail-link" href="#">
                        <span className="sale-badge shoe-thumbnail-sale-badge">
                            SALE
                        </span>
                  <img className="shoe-thumbnail" src="./images/big_shoe.jpg"/>
                </a>
              </div>
            </div>
            <div className="shoe-detail-link-wrapper">
              <div className="shoe-detail-link-container shoe-detail-link-container-sale">
                <a className="shoe-detail-link" href="#">
                  $170
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="shoes-list-shoe">
            <div className="shoe-thumbnail-wrapper">
              <div className="shoe-thumbnail-container">
                <a href="#">
                  <img className="shoe-thumbnail" src="./images/shoe_2.jpg"/>
                </a>
              </div>
            </div>
            <div className="shoe-detail-link-wrapper">
              <div className="shoe-detail-link-container">
                <a className="shoe-detail-link" href="#">
                  $240.99
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="shoes-list-shoe">
            <div className="shoe-thumbnail-wrapper">
              <div className="shoe-thumbnail-container">
                <a href="#">
                  <img className="shoe-thumbnail" src="./images/shoe_3.jpg"/>
                </a>
              </div>
            </div>
            <div className="shoe-detail-link-wrapper">
              <div className="shoe-detail-link-container">
                <a className="shoe-detail-link" href="#">
                  $1024
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="shoes-list-row">
      <div className="row">
        <div className="col-4">
          <div className="shoes-list-shoe">
            <div className="shoe-thumbnail-wrapper">
              <div className="shoe-thumbnail-container">
                <a href="#">
                  <img className="shoe-thumbnail" src="./images/big_shoe.jpg"/>
                </a>
              </div>
            </div>
            <div className="shoe-detail-link-wrapper">
              <div className="shoe-detail-link-container">
                <a className="shoe-detail-link" href="#">
                  $170
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="shoes-list-shoe">
            <div className="shoe-thumbnail-wrapper">
              <div className="shoe-thumbnail-container">
                <a className="shoe-thumbnail-link" href="#">
                        <span className="sale-badge shoe-thumbnail-sale-badge">
                            SALE
                        </span>
                  <img className="shoe-thumbnail" src="./images/shoe_2.jpg"/>
                </a>
              </div>
            </div>
            <div className="shoe-detail-link-wrapper">
              <div className="shoe-detail-link-container shoe-detail-link-container-sale">
                <a className="shoe-detail-link" href="#">
                  $240.99
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="shoes-list-shoe">
            <div className="shoe-thumbnail-wrapper">
              <div className="shoe-thumbnail-container">
                <a href="#">
                  <img className="shoe-thumbnail" src="./images/shoe_3.jpg"/>
                </a>
              </div>
            </div>
            <div className="shoe-detail-link-wrapper">
              <div className="shoe-detail-link-container">
                <a className="shoe-detail-link" href="#">
                  $1024
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
