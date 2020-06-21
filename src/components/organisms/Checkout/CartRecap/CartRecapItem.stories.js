import React from "react";
import { storiesOf } from "@storybook/react";
import CartRecapItem from "./CartRecapItem";

const item = {
  id: 0,
  total: 1800,
  quantity: 3,
  product: {
    name: "Product name",
    images: [
      {
        cachedPath: "https://i.picsum.photos/id/769/200/300.jpg",
      },
    ],
  },
};

storiesOf("Organisms|Checkout/CartRecap/CartRecapItem")
  .add("Default", () => <CartRecapItem item={item} />)
  .add("Is cart page", () => <CartRecapItem item={item} isCartPage />);
