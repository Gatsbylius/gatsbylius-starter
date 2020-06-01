import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import InputText from "./InputText";

storiesOf("Atoms|Form/Input/InputText").add("Default", () => (
  <InputText label="label" name="name" onChange={action("onChnage")} />
));
