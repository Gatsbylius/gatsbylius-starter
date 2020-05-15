import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "./Button/styled";
import AddToCartButton from "./AddToCartButton";

storiesOf("Button")
  .add("Styled Button", () => <Button>Hello Button</Button>)
  .add("Add to cart Button", () => (
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
