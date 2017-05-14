import React, { Component } from 'react';

import Sidebar from './Sidebar';
import ProductsList from './Products/List';
import './normalize.css';
import './fonts.css';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="content-two-column">
          <Sidebar />
          <ProductsList />
        </div>
      </div>
    );
  }
}

export default App;
