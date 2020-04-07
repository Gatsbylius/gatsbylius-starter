import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Container, Col } from "styled-bootstrap-grid";
import {
  BackButton,
  ButtonsContainer,
  InputsRow,
  RadioText,
  Title,
  ValidButton,
} from "../styled";
import { initPayment } from "../../../../services/checkout/initPayment";
import {
  useStoreDispatchContext,
  useStoreStateContext,
} from "../../../../context/StoreContext";
import {
  useCheckoutDispatchContext,
  useCheckoutStateContext,
} from "../../../../context/CheckoutContext";
import { RadioGroup, ReversedRadioButton } from "react-radio-buttons";
import { submitCustomerPayment } from "../../../../services/checkout/submitCustomerPayment";
import { submitCompleteCheckout } from "../../../../services/checkout/submitCompleteCheckout";

const CustomerPayment = () => {
  const storeState = useStoreStateContext();
  const storeDispatch = useStoreDispatchContext();
  const checkoutState = useCheckoutStateContext();
  const checkoutDispatch = useCheckoutDispatchContext();
  const [paymentCode, setPaymentCode] = React.useState();

  if (
    storeState.step !== "CustomerPayment" &&
    storeState.step === "CustomerShipping"
  ) {
    initPayment(storeState, checkoutDispatch).then(() => {
      storeDispatch({ type: "updateStep", payload: "CustomerPayment" });
    });
  }

  const handleChange = e => {
    setPaymentCode(e);
  };

  const paymentsMethods =
    checkoutState.paymentInfos &&
    checkoutState.paymentInfos.payments.length > 0 &&
    checkoutState.paymentInfos.payments[0];

  return (
    <Container>
      <InputsRow>
        <Col>
          <Title>Payment Method Selection</Title>
          {paymentsMethods && paymentsMethods.methods ? (
            <RadioGroup onChange={handleChange}>
              {paymentsMethods.methods
                ? Object.keys(paymentsMethods.methods).map(method => {
                    return (
                      <ReversedRadioButton
                        value={paymentsMethods.methods[method].code}
                        key={paymentsMethods.methods[method].code}
                        iconSize={20}
                      >
                        <RadioText>
                          {paymentsMethods.methods[method].name}
                        </RadioText>
                      </ReversedRadioButton>
                    );
                  })
                : ""}
            </RadioGroup>
          ) : (
            ""
          )}
          <ButtonsContainer>
            <BackButton
              onClick={() => {
                checkoutDispatch({
                  type: "updateCheckoutCurrentTab",
                  payload: "CustomerShipping",
                });
              }}
            >
              <span>
                <FaArrowLeft />
              </span>
              Previous step
            </BackButton>
            <ValidButton
              onClick={() => {
                submitCustomerPayment(storeState, paymentCode).then(() => {
                  submitCompleteCheckout(storeState).then(() => {
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
            </ValidButton>
          </ButtonsContainer>
        </Col>
      </InputsRow>
    </Container>
  );
};

export default CustomerPayment;
