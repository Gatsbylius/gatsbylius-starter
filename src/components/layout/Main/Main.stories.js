import React from "react";
import { storiesOf } from "@storybook/react";
import Main from "./Main";

storiesOf("Layout|Main").add("Default", () => (
  <Main>
    <p>content main</p>
  </Main>
));
