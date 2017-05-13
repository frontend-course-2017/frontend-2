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
    id: 1,
    subItems: [
      {
        text: 'SHOES',
        link: '/sports/shoes/',
        id: 2,
      },
      {
        text: 'CLOTHING',
        link: '/sports/clothing/',
        id: 3,
      },
      {
        text: 'ACCESSORIES',
        link: '/sports/accessories/',
        id: 4,
      },
    ],
  },
  {
    text: 'BRANDS',
    link: '/brands/',
    subItems: [],
    id: 5,
  },
  {
    text: 'MICOACH',
    link: '/micoach/',
    subItems: [],
    id: 6,
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
