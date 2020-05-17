import React from "react";
import { storiesOf } from "@storybook/react";
import SlideMenu from "./SlideMenu";

storiesOf("Components|SlideMenu").add("Is open", () => (
  <SlideMenu isOpen={true} toggleIsOpen={() => {}}>
    <ul>
      <li>
        <a href="#">Link 1</a>
      </li>
      <li>
        <a href="#">Link 2</a>
      </li>
    </ul>
  </SlideMenu>
));
