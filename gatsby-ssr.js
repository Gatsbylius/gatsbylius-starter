import React from "react";
import { StoreProvider } from "context/StoreContext";
import { CheckoutProvider } from "context/CheckoutContext";

export const wrapRootElement = ({ element }) => (
  <StoreProvider>
    <CheckoutProvider>{element}</CheckoutProvider>
  </StoreProvider>
);
