import React from "react";
import PropTypes from "prop-types";
import { StyledFormAction } from "./styled";

const FormAction = ({ children }) => {
  return <StyledFormAction>{children}</StyledFormAction>;
};

FormAction.propTypes = {
  children: PropTypes.node.isRequired
};

export default FormAction;
