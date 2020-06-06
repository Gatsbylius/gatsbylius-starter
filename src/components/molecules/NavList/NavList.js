import React from "react";
import PropTypes from "prop-types";
import { StyledNavList } from "./styled";

const NavList = ({ children }) => {
  return <StyledNavList>{children}</StyledNavList>;
};

NavList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavList;
