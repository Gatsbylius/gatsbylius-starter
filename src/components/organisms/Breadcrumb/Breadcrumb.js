import React from "react";
import PropTypes from "prop-types";
import BreadcrumbItem from "./BreadcrumbItem";
import { StyledBreadcrumbList } from "./styled";

const Breadcrumb = ({ breadcrumb }) => {
  return (
    <StyledBreadcrumbList itemScope itemType="http://schema.org/BreadcrumbList">
      {breadcrumb.map((item, i) => (
        <React.Fragment key={i}>
          <BreadcrumbItem to={item.to}>{item.title}</BreadcrumbItem>
          <span>{i < breadcrumb.length - 1 && " / "}</span>
        </React.Fragment>
      ))}
    </StyledBreadcrumbList>
  );
};

Breadcrumb.propTypes = {
  breadcrumb: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      to: PropTypes.string
    }).isRequired
  ).isRequired
};

export default Breadcrumb;
