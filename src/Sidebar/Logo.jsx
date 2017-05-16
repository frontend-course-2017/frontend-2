import React from 'react';
import {
  BrowserRouter as Router,
  NavLink,
} from 'react-router-dom';
import LogoImg from './images/logo.png';
import './styles.css';

export default () => (
  <div className="logo">
    <Router>
      <NavLink to="/">
        <img alt="Adidas" src={LogoImg} />
      </NavLink>
    </Router>
  </div>
);
