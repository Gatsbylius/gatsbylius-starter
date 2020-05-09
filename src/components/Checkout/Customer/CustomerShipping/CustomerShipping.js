import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import styled from "styled-components";
import {
  ButtonsContainer,
  Title,
  ValidButton,
  RadioText,
  BackButton
} from "../styled";
import {
  useCheckoutDispatchContext,
  useCheckoutStateContext
} from "context/CheckoutContext";
import { initShipping } from "services/checkout/initShipping";
import {
  useStoreDispatchContext,
  useStoreStateContext
} from "context/StoreContext";
import { priceParser } from "helpers/cartHelper";
import { RadioGroup, ReversedRadioButton } from "react-radio-buttons";
import { submitCustomerShipping } from "services/checkout/submitCustomerShipping";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const CustomerShipping = () => {
  const storeState = useStoreStateContext();
  const storeDispatch = useStoreDispatchContext();
  const checkoutState = useCheckoutStateContext();
  const checkoutDispatch = useCheckoutDispatchContext();
  const [shipmentCode, setShipmentCode] = React.useState();

  if (
    storeState.step !== "CustomerShipping" &&
    (storeState.step === "CustomerInfoForm" ||
      storeState.step === "CustomerPayment")
  ) {
    initShipping(storeState, checkoutDispatch).then(() => {
      storeDispatch({ type: "updateStep", payload: "CustomerShipping" });
    });
  }

  const handleChange = e => {
    setShipmentCode(e);
  };

  const shipmentsMethods =
    checkoutState.shippingInfos &&
    checkoutState.shippingInfos.shipments.length > 0 &&
    checkoutState.shippingInfos.shipments[0];

  return (
    <Container>
      <div>
        <Title>Shipping Infos</Title>
        {shipmentsMethods && shipmentsMethods.methods ? (
          <RadioGroup onChange={handleChange}>
            {shipmentsMethods.methods
              ? Object.keys(shipmentsMethods.methods).map(method => {
                  return (
                    <ReversedRadioButton
                      value={shipmentsMethods.methods[method].code}
                      key={shipmentsMethods.methods[method].code}
                      iconSize={20}
                    >
                      <RadioText>
                        {shipmentsMethods.methods[method].name},{" "}
                        {priceParser(
                          shipmentsMethods.methods[method].price.current,
                          shipmentsMethods.methods[method].price.currency
                        )}
                      </RadioText>
                    </ReversedRadioButton>
                  );
                })
              : ""}
          </RadioGroup>
        ) : (
          ""
        )}
      </div>
      <ButtonsContainer>
        <BackButton
          onClick={() => {
            checkoutDispatch({
              type: "updateCheckoutCurrentTab",
              payload: "CustomerInfoForm"
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
            submitCustomerShipping(storeState, shipmentCode).then(() => {
              checkoutDispatch({
                type: "updateCheckoutCurrentTab",
                payload: "CustomerPayment"
              });
            });
          }}
          type="submit"
        >
          Continue to payment
        </ValidButton>
      </ButtonsContainer>
    </Container>
  );
};

export default CustomerShipping;
