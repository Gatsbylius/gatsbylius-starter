import React from "react";
import { storiesOf } from "@storybook/react";
import Breadcrumb from "./Breadcrumb";

storiesOf("Organisms|Breadcrumb").add("Default", () => (
  <Breadcrumb
    breadcrumb={[
      { title: "Home", to: "/" },
      { title: "Category", to: "/category" },
      { title: "Product" }
    ]}
  ></Breadcrumb>
));
