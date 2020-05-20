import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import InputText from "./InputText";

storiesOf("Components|Input/InputText")
  .add("Default", () => (
    <InputText
      name="Name text"
      label="label text"
      onChange={e => action("OnChange")(e)}
    />
  ))
  .add("With value", () => (
    <InputText
      name="Name text"
      label="label text"
      onChange={e => action("OnChange")(e)}
      value="default value"
    />
  ));
