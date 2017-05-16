import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ExpandedPict from './images/expanded.png';

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

const MenuNavLinkExpanded = `
  &:after {
    content: url(${ExpandedPict});
    vertical-align: 10%;
    margin-left: 5px;
  }
`;


const MenuNavLink = styled(NavLink)`
  font-family: AvenirNext-Bold;
  color: #303030;
  text-decoration: none;
  
  ${props => props.hasSubItems && MenuNavLinkExpanded}
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
  
  &:last-child {
    margin-bottom: 10px;
  }
`;

const MenuSubItemLink = styled(NavLink)`
  color: #303030;
  text-decoration: none;
`;

export {
  NavMenu,
  MenuItem,
  MenuItemLink,
  MenuSubItem,
  MenuSubItems,
  MenuNavLink,
  MenuSubItemLink,
};
