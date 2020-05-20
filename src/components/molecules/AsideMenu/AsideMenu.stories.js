import React from "react";
import { storiesOf } from "@storybook/react";
import CategoryLink from "components/atoms/CategoryLink";
import AsideMenu from "./AsideMenu";

storiesOf("Molecules|AsideMenu")
  .add("Default", () => <AsideMenu title="title">Aside menu</AsideMenu>)
  .add("With CategoryLink", () => (
    <AsideMenu title="title">
      <CategoryLink>Link 1</CategoryLink>
      <CategoryLink>Link 4</CategoryLink>
      <CategoryLink>Link 3</CategoryLink>
    </AsideMenu>
  ));
