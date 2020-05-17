import React from "react";
import { storiesOf } from "@storybook/react";
import Header from "./Header";

storiesOf("Components|Layout/Header").add("Default", () => (
  <Header
    siteTitle="Gatsbylius"
    menuLinks={[
      { node: { code: "code1", name: "menu1" } },
      { node: { code: "code2", name: "menu2" } }
    ]}
  />
));
