import React from 'react';
import {
  BrowserRouter as Router,
  NavLink
} from 'react-router-dom';
import './styles.css';

export default () => (
  <div className="logo">
    <Router>
      <NavLink to="/">
        <img alt="Adidas" src={require('./images/logo.png')} />
      </NavLink>
    </Router>
  </div>
);
