import React from "react";
import { storiesOf } from "@storybook/react";
import SidebarItem from "./SidebarItem";

const item = {
  id: 0,
  total: 1800,
  quantity: 3,
  product: {
    name: "Product name",
    images: [
      {
        cachedPath: "https://i.picsum.photos/id/769/200/300.jpg"
      }
    ]
  }
};

storiesOf("Organisms|Checkout/Sidebar/SidebarItem")
  .add("Default", () => <SidebarItem item={item} />)
  .add("Is cart page", () => <SidebarItem item={item} isCartPage />);
