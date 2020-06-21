import React from "react";
import { storiesOf } from "@storybook/react";
import CartRecap from "./CartRecap";

storiesOf("Organisms|Checkout/CartRecap")
  .add("Default", () => <CartRecap />)
  .add("Is cart page", () => <CartRecap isCartPage />);
