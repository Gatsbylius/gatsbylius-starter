import React from "react";
import { storiesOf } from "@storybook/react";
import Loader from "./Loader";

storiesOf("atoms|Loader")
  .add("Default", () => (
    <div style={{ backgroundColor: "#ddd", padding: "3rem" }}>
      <Loader />
    </div>
  ))
  .add("Customize", () => (
    <div style={{ backgroundColor: "#ddd", padding: "3rem" }}>
      <Loader color="red" size="10rem" />
    </div>
  ));
