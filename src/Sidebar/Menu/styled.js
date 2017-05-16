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

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

const ItemLink = styled.div`
`;

const NavLinkExpanded = `
  &:after {
    content: url(${ExpandedPict});
    vertical-align: 10%;
    margin-left: 5px;
  }
`;


const NavLinkStyled = styled(NavLink)`
  font-family: AvenirNext-Bold;
  color: #303030;
  text-decoration: none;
  
  ${props => props.hasSubItems && NavLinkExpanded}
`;

const SubItemsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0 0 0;
`;

const SubItemStyled = styled.div`
  font-family: AndaleMono;
  font-weight: normal;
  margin-bottom: 25px;
  
  &:last-child {
    margin-bottom: 10px;
  }
`;

const SubItemLink = styled(NavLink)`
  color: #303030;
  text-decoration: none;
`;

export {
  NavMenu,
  Item,
  ItemLink,
  SubItemStyled,
  SubItemsStyled,
  NavLinkStyled,
  SubItemLink,
};
