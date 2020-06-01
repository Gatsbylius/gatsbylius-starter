import React from "react";
import PropTypes from "prop-types";
import { StyledLink } from "./styled";

const Item = ({ children }) => (
  <span itemProp="item">
    <span itemProp="name">{children}</span>
  </span>
);

const BreadcrumbItem = ({ children, to }) => {
  return (
    <div
      itemProp="itemListElement"
      itemScope
      itemType="http://schema.org/ListItem"
    >
      {to ? (
        <StyledLink to={to}>
          <Item>{children}</Item>
        </StyledLink>
      ) : (
        <Item>{children}</Item>
      )}
    </div>
  );
};

BreadcrumbItem.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string
};

export default BreadcrumbItem;
