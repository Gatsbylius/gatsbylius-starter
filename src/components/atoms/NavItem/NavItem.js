import React from "react";
import PropTypes from "prop-types";
import { StyledNavItem, StyledNavLink } from "./styled";

const NavItem = ({ children, to }) => {
  return (
    <StyledNavItem>
      <StyledNavLink to={to}>{children}</StyledNavLink>
    </StyledNavItem>
  );
};

NavItem.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired
};

export default NavItem;
