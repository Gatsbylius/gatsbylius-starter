import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import InputSelect from "./InputSelect";

storiesOf("Components|Input/InputSelect")
  .add("Default", () => (
    <InputSelect
      name="Name select"
      label="label select"
      onChange={e => action("OnChange")(e)}
    />
  ))
  .add("With default value", () => (
    <InputSelect
      name="Name select"
      label="label select"
      defaultValue="UK"
      onChange={e => action("OnChange")(e)}
    />
  ));
