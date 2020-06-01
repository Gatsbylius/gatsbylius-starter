import React from "react";
import { storiesOf } from "@storybook/react";
import CategoryLink from "./CategoryLink";

storiesOf("Atoms|CategoryLink")
  .add("Default", () => (
    <CategoryLink to="category/category1">Category name</CategoryLink>
  ))
  .add("Selected", () => (
    <CategoryLink to="category/category1" selected>
      Category name
    </CategoryLink>
  ));
