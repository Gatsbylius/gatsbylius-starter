import React from "react";
import PropTypes from "prop-types";
import RadioButton from "components/atoms/Form/Input/RadioButton";
import { StyledRadioGroup } from "./styled";

const RadioGroup = ({ options, onChange = () => {}, defaultValue = null }) => {
  const [value, setValue] = React.useState(defaultValue);
  const handleOnChange = (value) => {
    setValue(value);
    onChange(value);
  };

  return (
    <StyledRadioGroup>
      {options.map((option) => (
        <RadioButton
          key={option.value}
          name={option.value}
          checked={option.value === value}
          onChange={() => handleOnChange(option.value)}
        >
          {option.label}
        </RadioButton>
      ))}
    </StyledRadioGroup>
  );
};

RadioGroup.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
};

export default RadioGroup;
