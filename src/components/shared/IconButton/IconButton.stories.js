import React from "react";
import { storiesOf } from "@storybook/react";
import { FaUser } from "react-icons/fa";
import IconButton from "./IconButton";

storiesOf("Components|Shared/IconButton").add("Default", () => (
  <IconButton icon={FaUser} />
));
