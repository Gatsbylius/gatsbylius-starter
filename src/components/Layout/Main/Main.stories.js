import React from "react";
import { storiesOf } from "@storybook/react";
import Main from "./Main";

storiesOf("Components|Layout/Main").add("Default", () => (
  <Main>
    <p>content main</p>
  </Main>
));
