import React from "react";
import { storiesOf } from "@storybook/react";
import { category } from "components/molecules/CardItem/CardItem.stories";
import NotFound from "./NotFound";

storiesOf("Organisms|NotFound").add("Default", () => (
  <NotFound categories={[category, category]} />
));
