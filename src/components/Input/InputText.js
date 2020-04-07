import React from "react";
import PropTypes from "prop-types";
import { Input, Label } from "./styled";

const InputText = ({ label, name, onChange, value }) => {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} onChange={onChange} value={value} type="text" />
    </div>
  );
};

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default InputText;
