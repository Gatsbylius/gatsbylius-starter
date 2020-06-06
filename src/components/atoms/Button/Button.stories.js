import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "./Button";

storiesOf("Atoms|Button").add("Default", () => (
  <Button onClick={(e) => action("onClick")(e)}>Button</Button>
));
