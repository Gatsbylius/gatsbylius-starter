import React from "react";
import PropTypes from "prop-types";
import { StyledCategoryLinks } from "./styled";

const CategoryLink = ({ children, to, selected = false }) => {
  return (
    <StyledCategoryLinks to={to} selected={selected}>
      {children}
    </StyledCategoryLinks>
  );
};

CategoryLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  selected: PropTypes.bool,
};

export default CategoryLink;
