import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';
import { Sidebar } from './styled';

export default () => (
  <Sidebar>
    <Logo />
    <Search />
    <Router>
      <Menu />
    </Router>
  </Sidebar>
  );
