import React from "react";
import Paper from "components/layout/Paper";
import Layout from "components/layout";
import {
  ConfirmationTitle,
  ConfirmationText,
} from "components/layout/OrderConfirmation/styled";
import { resetState } from "context/helper";

const OrderConfirmation = () => {
  let firstName = "";
  if (typeof window !== "undefined") {
    resetState();
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    firstName = urlParams.get("customerName");
  }
  return (
    <Layout>
      <Paper fluid>
        <ConfirmationTitle>
          {firstName}, Thanks for your order !
        </ConfirmationTitle>
        <ConfirmationText>
          You will receive an email with all the informations regarding your
          order, its tracking number as soon as your articles will be ready to
          be shipped (usually within 24h)
        </ConfirmationText>
        <ConfirmationText>
          You can check your order status at anytime at #######.
        </ConfirmationText>
      </Paper>
    </Layout>
  );
};

export default OrderConfirmation;
