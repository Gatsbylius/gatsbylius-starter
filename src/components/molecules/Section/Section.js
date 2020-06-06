import React from "react";
import PropTypes from "prop-types";
import { StyledContainer } from "./styled";

const Section = ({ children, title, row = false, raw = false }) => {
  return (
    <StyledContainer row={row} raw={raw}>
      {title && <h2>{title}</h2>}
      {children}
    </StyledContainer>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  row: PropTypes.bool,
  raw: PropTypes.bool,
};

export default Section;
