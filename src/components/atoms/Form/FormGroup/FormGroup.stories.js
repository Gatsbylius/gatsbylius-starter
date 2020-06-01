import React from "react";
import { storiesOf } from "@storybook/react";
import InputText from "components/atoms/Form/Input/InputText";
import FormGroup from "./FormGroup";

storiesOf("Atoms|Form/FormGroup")
  .add("With Two Input", () => (
    <FormGroup>
      <InputText label="phone" name="phone" onChange={() => {}} value="" />
      <InputText label="email" name="email" onChange={() => {}} value="" />
    </FormGroup>
  ))
  .add("With One Input", () => (
    <FormGroup>
      <InputText label="phone" name="phone" onChange={() => {}} value="" />
    </FormGroup>
  ))
  .add("With Three Input", () => (
    <FormGroup>
      <InputText label="phone" name="phone" onChange={() => {}} value="" t />
      <InputText label="email" name="email" onChange={() => {}} value="" />
      <InputText label="text" name="text" onChange={() => {}} value="" />
    </FormGroup>
  ));
