import React from "react";
import { storiesOf } from "@storybook/react";
import ProductBreadcrumb from "./ProductBreadcrumb";

storiesOf("Components|ProductBreadcrumb").add("Default", () => (
  <ProductBreadcrumb
    product={{
      name: "Product name",
      taxons: {
        main: "taxonmain"
      }
    }}
  />
));
