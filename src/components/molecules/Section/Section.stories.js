import React from "react";
import { storiesOf } from "@storybook/react";
import Section from "./Section";

storiesOf("Molecules|Section").add("Default", () => (
  <Section title="OUR LATEST PRODUCTS">
    <div style={{ backgroundColor: "#ddd", padding: "3rem" }}> here</div>
  </Section>
));
