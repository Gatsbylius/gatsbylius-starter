import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import Section from "components/molecules/Section";
import RadioGroup from "components/molecules/Form/Input/RadioGroup";
import FormAction from "components/atoms/Form/FormAction";
import Button from "components/atoms/Button";
import IconButton from "components/atoms/IconButton";
import {
  useCheckoutDispatchContext,
  useCheckoutStateContext,
} from "context/CheckoutContext";
import { initShipping } from "services/checkout/initShipping";
import {
  useStoreDispatchContext,
  useStoreStateContext,
} from "context/StoreContext";
import { priceParser } from "helpers/cartHelper";
import { submitCustomerShipping } from "services/checkout/submitCustomerShipping";

const Shipping = () => {
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

  const shipmentsMethods =
    checkoutState.shippingInfos &&
    checkoutState.shippingInfos.shipments.length > 0 &&
    checkoutState.shippingInfos.shipments[0];

  return (
    <Section title="Shipping Infos">
      {shipmentsMethods && shipmentsMethods.methods ? (
        <RadioGroup
          onChange={setShipmentCode}
          options={Object.keys(shipmentsMethods.methods).map((method) => ({
            value: shipmentsMethods.methods[method].code,
            label: `${shipmentsMethods.methods[method].name}, ${priceParser(
              shipmentsMethods.methods[method].price.current,
              shipmentsMethods.methods[method].price.currency
            )}`,
          }))}
        />
      ) : (
        ""
      )}
      <FormAction>
        <IconButton
          icon={FaArrowLeft}
          onClick={() => {
            checkoutDispatch({
              type: "updateCheckoutCurrentTab",
              payload: "CustomerInfoForm",
            });
          }}
        >
          Previous step
        </IconButton>
        <Button
          onClick={() => {
            submitCustomerShipping(storeState, shipmentCode).then(() => {
              checkoutDispatch({
                type: "updateCheckoutCurrentTab",
                payload: "CustomerPayment",
              });
            });
          }}
          type="submit"
        >
          Continue to payment
        </Button>
      </FormAction>
    </Section>
  );
};

export default Shipping;
