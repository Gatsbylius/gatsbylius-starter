import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { spacing } from "helpers/themeHelpers";

const StyledContainer = styled.div`
  padding: 0 ${spacing(["lg"])};
  max-width: 1560px;
  margin: auto;
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
