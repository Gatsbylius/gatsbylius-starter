import styled from "styled-components";
import { Link } from "gatsby";
import { media } from "styled-bootstrap-grid";
import { fontFamily, color, spacing } from "../../../helpers/themeHelpers";

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${spacing(["lg"])};
  padding: ${spacing(["none", "xs"])};
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.boxShadows.light};
  z-index: 20;
`;

export const MenuButtonWrapper = styled.div`
  display: flex;
  flex-basis: 33%;
  z-index: 30;
`;

export const UserAccountButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const Logo = styled(Link)`
  flex-basis: 33%;
  font-size: 1rem;
  color: ${color("primary")};
  ${fontFamily("titleFont")}
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  ${media.md`
    flex-basis: 50%;
    font-size: 1.3rem;
    text-align: left;
  `}
`;

export const Nav = styled.nav`
  flex-basis: 33%;
  ${media.md`
    flex-basis: 50%;
  `}
`;

export const NavList = styled.ul`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
`;

export const NavItem = styled.li`
  margin-right: ${spacing(["xs"])};
  text-transform: uppercase;
  &:last-child {
    margin-right: 0;
  }
`;

export const NavLink = styled(Link)`
  color: rgb(36, 36, 40);
  transition: color 0.3s;
  &:hover,
  &.active {
    color: ${color("primary")};
  }
`;

export const NavListTouch = styled.ul`
  ${NavList}
  flex-direction: column;
`;

export const NavItemTouch = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-size: 1.4rem;
  text-transform: uppercase;
  transition: background-color 0.3s;
  &:hover,
  &.active {
    background-color: ${color("greyLight1")};
  }
`;

export const NavLinkTouch = styled(Link)`
  padding: 1.2rem;
  color: rgb(36, 36, 40);
  transition: color 0.3s;
  &:hover,
  &.active {
    color: ${color("primary")};
  }
`;
