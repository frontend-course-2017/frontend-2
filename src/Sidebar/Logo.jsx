import React from 'react';
import {
  BrowserRouter as Router,
  NavLink,
} from 'react-router-dom';
import { Logo } from './styled';
import LogoImg from './images/logo.png';
import './styles.css';

export default () => (
  <Logo>
    <Router>
      <NavLink to="/">
        <img alt="Adidas" src={LogoImg} />
      </NavLink>
    </Router>
  </Logo>
);
