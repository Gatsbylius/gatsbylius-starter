import React from "react";
import PropTypes from "prop-types";
import { OptionList, OptionItem, OptionLeft, OptionRadio } from "./styled";
import { priceParser } from "helpers/cartHelper";

const Configurator = ({ variants, selectedVariant, onChange }) => {
  if (variants.length === 1) {
    return null;
  }

  return (
    <OptionList>
      {variants.map(variant => (
        <OptionItem
          key={variant.code}
          selected={selectedVariant.code === variant.code}
          onClick={() => onChange(variant)}
        >
          {variant.axis.join(" | ")}
          <OptionLeft>
            {priceParser(variant.price.current, variant.price.currency)}
            <OptionRadio
              id={variant.code}
              type="radio"
              value={variant.code}
              onChange={() => onChange(variant)}
              checked={selectedVariant.code === variant.code}
            />
          </OptionLeft>
        </OptionItem>
      ))}
    </OptionList>
  );
};

Configurator.propTypes = {
  variants: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      price: PropTypes.shape({
        current: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
  selectedVariant: PropTypes.shape({
    code: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Configurator;
