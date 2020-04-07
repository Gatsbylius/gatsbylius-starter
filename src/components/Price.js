import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { priceParser } from "../helpers/cartHelper";

const StyledPrice = styled.strong`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.6rem")};
`;

const Price = ({ price, hasSymbolBefore, fontSize }) => (
  <div>
    <StyledPrice fontSize={fontSize}>
      {priceParser(price.current, price.currency, hasSymbolBefore)}
    </StyledPrice>
  </div>
);

Price.propTypes = {
  price: PropTypes.shape({
    current: PropTypes.number.isRequired,
    currency: PropTypes.oneOf(["USD", "EUR"]),
  }),
  hasSymbolBefore: PropTypes.bool,
  fontSize: PropTypes.string,
};

export default Price;
