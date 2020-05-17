import React from "react";
import { storiesOf } from "@storybook/react";
import CustomerInfoForm from "./CustomerInfoForm";

storiesOf("Components|Checkout/Customer/CustomerInfoForm").add(
  "Default",
  () => <CustomerInfoForm />
);
