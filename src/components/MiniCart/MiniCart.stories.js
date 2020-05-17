import React from "react";
import { storiesOf } from "@storybook/react";
import MiniCart from "./MiniCart";

storiesOf("Components|MiniCart/MiniCart").add("Default", () => {
  return <MiniCart open />;
});
