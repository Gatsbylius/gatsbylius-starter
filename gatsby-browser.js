import React from "react";
import PropTypes from "prop-types";
import { StoreProvider } from "context/StoreContext";
import { CheckoutProvider } from "context/CheckoutContext";

export const wrapRootElement = ({ element }) => (
  <StoreProvider>
    <CheckoutProvider>{element}</CheckoutProvider>
  </StoreProvider>
);

wrapRootElement.propTypes = {
  element: PropTypes.node
};
