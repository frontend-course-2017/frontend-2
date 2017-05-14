import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Sidebar from './Sidebar';
import ProductsList from './Products/List';
import ProductDetail from './Products/Detail';
import './fonts.css';
import './styles.css';

require('normalize-css');

const App = () => (
  <Router>
    <div className="wrapper">
      <div className="content-two-column">
        <Sidebar />

        <Route exact path="/" component={ProductsList} />
        <Route exact path="/sports/" component={ProductsList} />
        <Route exact path="/sports/shoes/" component={ProductsList} />
        <Route exact path="/sports/shoes/shoe-1/" component={ProductDetail} />
      </div>
    </div>
  </Router>
);

export default App;
