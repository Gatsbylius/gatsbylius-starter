import React from "react";
import { storiesOf } from "@storybook/react";
import { FaUser } from "react-icons/fa";
import IconButton from "./IconButton";

storiesOf("Shared|IconButton").add("Default", () => (
  <IconButton icon={FaUser} />
));
