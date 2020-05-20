import React from "react";
import { storiesOf } from "@storybook/react";
import RadioGroup from "./RadioGroup";

storiesOf("Atoms|Form/Input/RadioGroup").add("Default", () => (
  <RadioGroup
    options={[
      {
        label: "Option 1",
        value: "val1"
      },
      {
        label: "Option 2",
        value: "val2"
      }
    ]}
  />
));
