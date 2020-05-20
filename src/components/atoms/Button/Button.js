import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./styled";

const Button = ({ children, onClick, type }) => {
  return (
    <StyledButton onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string
};

export default Button;
