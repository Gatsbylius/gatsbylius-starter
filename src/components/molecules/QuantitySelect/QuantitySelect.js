import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { QuantitySelectContainer, SelectWrapper } from "./styled";

const QuantitySelect = ({ min = 1, max = 5, ...props }) => {
  const getOptions = () => {
    let options = [];

    for (let index = min; index <= max; index++) {
      options.push({
        value: index,
        label: index
      });
    }

    return options;
  };

  return (
    <QuantitySelectContainer>
      <label htmlFor="quantity">Quantity</label>
      <SelectWrapper>
        <Select id="quantity" options={getOptions()} {...props} />
      </SelectWrapper>
    </QuantitySelectContainer>
  );
};

QuantitySelect.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number
};

export default QuantitySelect;
