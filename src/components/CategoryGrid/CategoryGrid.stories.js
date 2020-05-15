import React from "react";
import { storiesOf } from "@storybook/react";
import {
  CategoryTitle,
  CategoryImageContainer,
  ChildCategoryLinks
} from "./styled";

storiesOf("CategoryGrid")
  .add("Category title", () => <CategoryTitle>Category title</CategoryTitle>)
  .add("Category Image Container", () => (
    <CategoryImageContainer>Category Image Container</CategoryImageContainer>
  ))
  .add("Child Category Links", () => (
    <ChildCategoryLinks>Child Category Links</ChildCategoryLinks>
  ));
