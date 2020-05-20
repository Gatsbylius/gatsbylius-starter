import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import QuantitySelect from "./QuantitySelect";

storiesOf("Components|QuantitySelect")
  .add("Default", () => (
    <QuantitySelect onChange={e => action("onChange")(e)} />
  ))
  .add("With min", () => (
    <QuantitySelect min={3} onChange={e => action("onChange")(e)} />
  ))
  .add("With max", () => (
    <QuantitySelect max={3} onChange={e => action("onChange")(e)} />
  ))
  .add("With min & max", () => (
    <QuantitySelect min={3} max={10} onChange={e => action("onChange")(e)} />
  ));
