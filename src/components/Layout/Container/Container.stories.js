import React from "react";
import { storiesOf } from "@storybook/react";
import Container from "./Container";

storiesOf("Components|Layout/Container").add("Default", () => (
  <Container>
    <p>container content</p>
  </Container>
));
