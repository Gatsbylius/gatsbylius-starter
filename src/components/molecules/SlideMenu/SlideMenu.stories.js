import React from "react";
import { storiesOf } from "@storybook/react";
import NavList from "components/molecules/NavList";
import NavItem from "components/atoms/NavItem";
import SlideMenu from "./SlideMenu";

storiesOf("Molecules|SlideMenu").add("With Nav List", () => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <SlideMenu isOpen={isOpen} toggleIsOpen={() => setIsOpen(!isOpen)}>
      <NavList>
        <NavItem>Home</NavItem>
        <NavItem>Category 1</NavItem>
        <NavItem>Category 2</NavItem>
        <NavItem>Contact</NavItem>
      </NavList>
    </SlideMenu>
  );
});
