import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavMenu = styled.nav`
  font-size: 24px;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

const MenuItemLink = styled.div`
`;

const MenuNavLink = styled(NavLink)`
  font-family: AvenirNext-Bold;
  color: '#303030';
  text-decoration: none;
  text-decoration: none;
`;

const MenuSubItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0 0 0;
`;

const MenuSubItem = styled.div`
  font-family: AndaleMono;
  font-weight: normal;
  margin-bottom: 25px;
`;

export {
NavMenu,
MenuItem,
MenuItemLink,
MenuSubItem,
MenuSubItems,
MenuNavLink,
};
