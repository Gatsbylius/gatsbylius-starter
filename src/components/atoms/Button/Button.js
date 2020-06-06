import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./styled";

const Button = ({ children, onClick, type, name = null }) => {
  return (
    <StyledButton onClick={onClick} type={type} aria-label={name}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  name: PropTypes.string,
};

export default Button;
