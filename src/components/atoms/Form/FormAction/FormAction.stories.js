import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "components/atoms/Button";
import FormAction from "./FormAction";

storiesOf("Atoms|Form/FormAction")
  .add("With Two Button", () => (
    <FormAction>
      <Button onClick={() => {}} value="">
        Back
      </Button>
      <Button onClick={() => {}} value="">
        Next
      </Button>
    </FormAction>
  ))
  .add("With One Button", () => (
    <FormAction>
      <Button onClick={() => {}} value="">
        Next
      </Button>
    </FormAction>
  ));
