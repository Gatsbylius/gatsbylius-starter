import React from "react";
import { storiesOf } from "@storybook/react";
import AddToCartButton from "./AddToCartButton";

storiesOf("Components|Button").add("Add to cart Button", () => (
  <AddToCartButton
    slug="slug"
    variantsCode="variantcode"
    qty={1}
    isSimple={true}
    name="name"
  >
    Hello Button
  </AddToCartButton>
));
