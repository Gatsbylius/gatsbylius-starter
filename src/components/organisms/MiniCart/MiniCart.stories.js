import React from "react";
import { storiesOf } from "@storybook/react";
import MiniCart from "./MiniCart";

storiesOf("Organisms|MiniCart").add("Default", () => {
  return <MiniCart open />;
});
