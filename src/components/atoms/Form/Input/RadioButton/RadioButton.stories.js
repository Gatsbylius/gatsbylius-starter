import React from "react";
import { storiesOf } from "@storybook/react";
import RadioButton from "./RadioButton";

storiesOf("Atoms|Form/Input/RadioButton")
  .add("Default", () => <RadioButton>A choice</RadioButton>)
  .add("Checked", () => <RadioButton checked>A choice</RadioButton>);
