import React from "react";
import { storiesOf } from "@storybook/react";
import ProductLayout from "./ProductLayout";

storiesOf("Layout|ProductLayout").add("Default", () => (
  <div style={{ backgroundColor: "#fcf9f4", height: "100vh", width: "100vw" }}>
    <ProductLayout
      product={{
        name: "Product",
        taxons: {
          main: "Category",
        },
      }}
    >
      <p>Product content</p>
    </ProductLayout>
  </div>
));
