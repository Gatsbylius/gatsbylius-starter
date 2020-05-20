import React from "react";
import { storiesOf } from "@storybook/react";
import Layout from "./Layout";

storiesOf("Layout|Layout").add("Default", () => (
  <Layout>
    <p>content</p>
  </Layout>
));
