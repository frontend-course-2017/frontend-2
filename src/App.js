import React, { Component } from 'react';
import './styles.css';
import Sidebar from './Sidebar';
import ProductsList from './Products/List';


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
