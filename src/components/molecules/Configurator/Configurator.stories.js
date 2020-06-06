import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Configurator from "./Configurator";

const variants = [
  {
    code: "code",
    price: {
      current: 1501,
      currency: "USD",
    },
    axis: ["2cm", "red"],
  },
  {
    code: "code2",
    price: {
      current: 1750,
      currency: "USD",
    },
    axis: ["3cm", "red"],
  },
];

storiesOf("Molecules|Configurator").add("Default", () => (
  <Configurator
    variants={variants}
    selectedVariant={variants[0]}
    onChange={(e) => action("onChange")(e)}
  />
));
