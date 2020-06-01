import React from "react";
import { storiesOf } from "@storybook/react";
import Price from "./Price";

const price = {
  current: 2599,
  currency: "EUR"
};

storiesOf("atoms|Price")
  .add("Default", () => <Price price={price} />)
  .add("With hasSymbolBefore", () => (
    <Price price={{ ...price, currency: "USD" }} hasSymbolBefore />
  ))
  .add("With custom font size", () => <Price price={price} fontSize="3rem" />);
