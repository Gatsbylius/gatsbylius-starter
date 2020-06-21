import React from "react";
import PropTypes from "prop-types";
import { InputContainer, Input, Label } from "../styled";

const InputText = ({ label, name, onChange, value, type = "text" }) => {
  return (
    <InputContainer>
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} onChange={onChange} value={value} type={type} />
    </InputContainer>
  );
};

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
};

export default InputText;
