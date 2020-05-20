import React from "react";
import { storiesOf } from "@storybook/react";
import BreadcrumbItem from "./BreadcrumbItem";

storiesOf("Organisms|Breadcrumb/BreadcrumbItem")
  .add("Default", () => <BreadcrumbItem to="/">Home</BreadcrumbItem>)
  .add("Without link", () => <BreadcrumbItem>Product name</BreadcrumbItem>);
