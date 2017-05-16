import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';
import './styles.css';

export default () => (
  <aside className="sidebar">
    <Logo />
    <Search />
    <Router>
      <Menu />
    </Router>
  </aside>
  );
