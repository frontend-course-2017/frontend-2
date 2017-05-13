import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';
import './styles.css';

const menuItems = [
  {
    text: 'SPORTS',
    link: '/sports/',
    subItems: [
      {
        text: 'SHOES',
        link: '/sports/shoes/',
      },
      {
        text: 'CLOTHING',
        link: '/sports/clothing/',
      },
      {
        text: 'ACCESSORIES',
        link: '/sports/accessories/',
      },
    ],
  },
  {
    text: 'BRANDS',
    link: '/brands/',
    subItems: [],
  },
  {
    text: 'MICOACH',
    link: '/micoach/',
    subItems: [],
  },
];

export default () => (
  <aside className="sidebar">
    <Logo />
    <Search />
    <Router>
      <Menu items={menuItems} />
    </Router>
  </aside>
  );
