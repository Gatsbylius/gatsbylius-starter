import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";

import { color } from "../../helpers/themeHelpers";
import { Label } from "./styled";

const customStyles = {
  control: provided => ({
    ...provided,
    border: `solid 1px ${color("greyMiddle1")}`,
    borderRadius: "4px",
    padding: ".6rem",
    width: "100%",
    transition: "all 200ms ease-in-out",
  }),
};

const InputSelect = ({ label, name, defaultValue, onChange }) => {
  const countryOption = [
    { value: "FR", label: "France" },
    { value: "UK", label: "Angleterre" },
    { value: "ES", label: "Espagne" },
  ];
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Select
        name={name}
        defaultValue={countryOption.filter(item => item.value === defaultValue)}
        onChange={onChange}
        styles={customStyles}
        options={countryOption}
      />
    </div>
  );
};

InputSelect.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default InputSelect;
