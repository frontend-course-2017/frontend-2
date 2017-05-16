import React from 'react';
import NavigationItem from './NavigationItem';

const Menu = () => (
  <nav className="menu">
    <NavigationItem link={'/'} text={'SHOES'} hasSubItems />
    <NavigationItem link={'/brands/'} text={'BRANDS'} hasSubItems={false} />
    <NavigationItem link={'/micoach/'} text={'MICOACH'} hasSubItems={false} />
  </nav>
);

export default Menu;

