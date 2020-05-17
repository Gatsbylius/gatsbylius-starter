import React from "react";
import { storiesOf } from "@storybook/react";
import Sidebar from "./Sidebar";

storiesOf("Components|Checkout/Sidebar")
  .add("Default", () => <Sidebar />)
  .add("Is cart page", () => <Sidebar isCartPage />);
