import React from "react";
import PropTypes from "prop-types";
import { StyledPrice } from "./styled";
import { priceParser } from "helpers/cartHelper";

const Price = ({ price, hasSymbolBefore, fontSize }) => (
  <StyledPrice fontSize={fontSize}>
    {priceParser(price.current, price.currency, hasSymbolBefore)}
  </StyledPrice>
);

Price.propTypes = {
  price: PropTypes.shape({
    current: PropTypes.number.isRequired,
    currency: PropTypes.oneOf(["USD", "EUR"]).isRequired
  }),
  hasSymbolBefore: PropTypes.bool,
  fontSize: PropTypes.string
};

export default Price;
