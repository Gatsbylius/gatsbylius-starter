import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { IoIosMenu } from "react-icons/io";
import IconButton from "./IconButton";

storiesOf("Atoms|IconButton").add("Default", () => (
  <IconButton onClick={action("onClick")} icon={IoIosMenu}>
    Icon button
  </IconButton>
));
