import React, { Component } from 'react';
import logo from './logo.svg';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="content-two-column">
          <aside className="sidebar">
            <div className="logo">
              <a href="#">
                <img alt="Adidas" src="./images/logo.png"/>
              </a>
            </div>
            <div className="search-container">
              <form className="search-form" name="search" action="" method="get">
                <div className="search-submit-container">
                  <input type="submit" value="Search" className="search-submit"/>
                </div>
                <div className="search-input-container">
                  <input title="Search" type="text" className="search-input"/>
                </div>
              </form>
            </div>
            <nav className="menu">
              <div className="menu-item">
                <div className="menu-item-link menu-item-link_active">
                  <a href="#">SPORTS</a>
                </div>
                <div className="menu-sub-items">
                  <div className="menu-sub-item menu-sub-item_active">
                    <span>SHOES</span>
                  </div>
                  <div className="menu-sub-item">
                    <a href="#">CLOTHING</a>
                  </div>
                  <div className="menu-sub-item">
                    <a href="#">ACCESORIES</a>
                  </div>
                </div>
              </div>
              <div className="menu-item">
                <div className="menu-item-link">
                  <a href="#">BRANDS</a>
                </div>
              </div>
              <div className="menu-item">
                <div className="menu-item-link">
                  <a href="#">MICOACH</a>
                </div>
              </div>
            </nav>
          </aside>
          <section className="content">
            <div className="filter">
              <div className="filter-icon-wrapper">
                <div className="filter-icon-container">
                  <div className="filter-icon">
                    <img src="./images/filter.png"/>
                  </div>
                </div>
              </div>
              <form className="filter-form" name="filter" action="" method="get">
                <div className="gender-filter">
                  <button className="filter-button filter-button-pressed">
                    MAN
                  </button>
                  <button className="filter-button">
                    WOMAN
                  </button>
                </div>
                <div className="size-filter">
                  <div className="size-filter-name">SIZE</div>
                  <div className="size-filter-controls">
                    <button className="filter-button">
                      36
                    </button>
                    <button className="filter-button">
                      37
                    </button>
                    <button className="filter-button">
                      38
                    </button>
                    <button className="filter-button">
                      39
                    </button>
                    <button className="filter-button">
                      40
                    </button>
                    <button className="filter-button filter-button-pressed">
                      41
                    </button>
                    <button className="filter-button">
                      42
                    </button>
                  </div>
                </div>
              </form>
            </div>
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
          </section>
        </div>
      </div>
    );
  }
}

export default App;