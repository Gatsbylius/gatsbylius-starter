import React from "react";
import PropTypes from "prop-types";
import { StyledLabel, StyledInput, StyledIcon } from "./styled";

const RadioButton = ({ children, name, onChange, checked = false }) => {
  return (
    <StyledLabel>
      <StyledInput
        type="radio"
        onChange={onChange}
        checked={checked}
        name={name}
      />
      <StyledIcon />
      {children}
    </StyledLabel>
  );
};

RadioButton.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
};

export default RadioButton;
