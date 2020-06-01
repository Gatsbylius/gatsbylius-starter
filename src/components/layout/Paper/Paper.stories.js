import React from "react";
import { storiesOf } from "@storybook/react";
import Paper from "./Paper";

storiesOf("Layout|Paper").add("Default", () => (
  <div style={{ backgroundColor: "#ddd", padding: "3rem" }}>
    <Paper>
      <p>A paper component</p>
    </Paper>
  </div>
));
