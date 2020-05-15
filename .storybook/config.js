import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ThemeProvider } from "styled-components";
import { StoreProvider } from "context/StoreContext";
import { CheckoutProvider } from "context/CheckoutContext";
import theme from "config/style/theme";

const withProvider = story => (
  <StoreProvider>
    <CheckoutProvider>
      {" "}
      <ThemeProvider theme={theme}>{story()}</ThemeProvider>
    </CheckoutProvider>
  </StoreProvider>
);

addDecorator(withProvider);
configure(require.context("../src", true, /\.stories\.js$/), module);

global.___loader = {
  enqueue: () => {},
  hovering: () => {}
};
global.__PATH_PREFIX__ = "";

window.___navigate = pathname => {
  action("NavigateTo:")(pathname);
};
