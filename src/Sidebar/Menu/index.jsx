import React from 'react';
import { NavMenu } from './styled';
import NavigationItem from './NavigationItem';

const Menu = () => (
  <NavMenu>
    <NavigationItem link={'/'} text={'SHOES'} hasSubItems />
    <NavigationItem link={'/brands/'} text={'BRANDS'} hasSubItems={false} />
    <NavigationItem link={'/micoach/'} text={'MICOACH'} hasSubItems={false} />
  </NavMenu>
);

export default Menu;

