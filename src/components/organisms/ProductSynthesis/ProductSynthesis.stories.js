import React from "react";
import { storiesOf } from "@storybook/react";
import ProductSynthesis from "./ProductSynthesis";

storiesOf("Organisms|ProductSynthesis").add("Default", () => (
  <ProductSynthesis
    product={{
      name: "Product name",
      shortDescription: "A short description...",
      code: "productcode",
      variants: [
        {
          price: {
            current: 1050,
            currency: "USD"
          },
          code: "variant0code"
        }
      ]
    }}
  />
));
