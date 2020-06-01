import React from "react";
import { storiesOf } from "@storybook/react";
import NavList from "./NavList";
import NavItem from "components/atoms/NavItem";

storiesOf("molecules|NavList").add("With NavItem", () => (
  <NavList>
    <NavItem>Home</NavItem>
    <NavItem>Category 1</NavItem>
    <NavItem>Category 2</NavItem>
    <NavItem>Contact</NavItem>
  </NavList>
));
