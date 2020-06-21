import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import Section from "components/molecules/Section";
import RadioGroup from "components/molecules/Form/Input/RadioGroup";
import FormAction from "components/atoms/Form/FormAction";
import Button from "components/atoms/Button";
import IconButton from "components/atoms/IconButton";
import { initPayment } from "services/checkout/initPayment";
import {
  useStoreDispatchContext,
  useStoreStateContext,
} from "context/StoreContext";
import {
  useCheckoutDispatchContext,
  useCheckoutStateContext,
} from "context/CheckoutContext";
import { submitCustomerPayment } from "services/checkout/submitCustomerPayment";
import { submitCompleteCheckout } from "services/checkout/submitCompleteCheckout";

const Payment = () => {
  const storeState = useStoreStateContext();
  const storeDispatch = useStoreDispatchContext();
  const checkoutState = useCheckoutStateContext();
  const checkoutDispatch = useCheckoutDispatchContext();
  const [paymentCode, setPaymentCode] = React.useState();

  console.log({ storeState, checkoutState });

  if (
    storeState.step !== "CustomerPayment" &&
    storeState.step === "CustomerShipping"
  ) {
    initPayment(storeState, checkoutDispatch).then(() => {
      storeDispatch({ type: "updateStep", payload: "CustomerPayment" });
    });
  }

  const paymentsMethods =
    checkoutState.paymentInfos &&
    checkoutState.paymentInfos.payments.length > 0 &&
    checkoutState.paymentInfos.payments[0];

  return (
    <Section title="Payment Method Selection">
      {paymentsMethods && paymentsMethods.methods && (
        <RadioGroup
          onChange={setPaymentCode}
          options={Object.keys(paymentsMethods.methods).map((method) => ({
            label: paymentsMethods.methods[method].name,
            value: paymentsMethods.methods[method].code,
          }))}
        />
      )}
      <FormAction>
        <IconButton
          icon={FaArrowLeft}
          onClick={() => {
            checkoutDispatch({
              type: "updateCheckoutCurrentTab",
              payload: "CustomerShipping",
            });
          }}
        >
          Previous step
        </IconButton>
        <Button
          onClick={() => {
            submitCustomerPayment(storeState, paymentCode).then(() => {
              submitCompleteCheckout(
                storeState,
                checkoutState.customerInfos
              ).then(() => {
                if (typeof window !== "undefined") {
                  window.location.replace(
                    `/order-confirmation?customerName=${checkoutState.customerInfos.firstName}`
                  );
                }
              });
            });
          }}
          type="submit"
        >
          Submit Order
        </Button>
      </FormAction>
    </Section>
  );
};

export default Payment;
