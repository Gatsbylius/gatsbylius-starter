import React from "react";
import PropTypes from "prop-types";
import { StoreProvider } from "./src/context/StoreContext";
import { CheckoutProvider } from "./src/context/CheckoutContext";

export const wrapRootElement = ({ element }) => (
  <StoreProvider>
    <CheckoutProvider>{element}</CheckoutProvider>
  </StoreProvider>
);

wrapRootElement.propTypes = {
  element: PropTypes.node,
};

// ES6 way
export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    require(`intersection-observer`);
    console.log(`# IntersectionObserver is polyfilled!`);
  }
};
