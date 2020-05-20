import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import AddToCart from "./AddToCart";
import AddToCartContainer from "./AddToCartContainer";

storiesOf("Molecules|AddToCart")
  .add("Default", () => <AddToCart onClick={action("onClick")} />)
  .add("Loading", () => <AddToCart onClick={action("onClick")} loading />)
  .add("AddToCart Container", () => (
    <AddToCartContainer
      slug="slug"
      variantsCode="code"
      qty={1}
      isSimple
      name="name"
    />
  ));
