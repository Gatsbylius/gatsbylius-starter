import React from "react";
import { navigate } from "gatsby";
import { FaArrowLeft } from "react-icons/fa";
import { toast } from "react-toastify";
import { toastConfig } from "helpers/themeHelpers";
import Section from "components/molecules/Section";
import InputText from "components/atoms/Form/Input/InputText";
import InputSelect from "components/atoms/Form/Input/InputSelect";
import FormGroup from "components/atoms/Form/FormGroup";
import FormAction from "components/atoms/Form/FormAction";
import Button from "components/atoms/Button";
import IconButton from "components/atoms/IconButton";
import {
  useCheckoutDispatchContext,
  useCheckoutStateContext,
} from "context/CheckoutContext";
import { submitCustomerInfo } from "services/checkout/submitCustomerInfo";
import {
  useStoreDispatchContext,
  useStoreStateContext,
} from "context/StoreContext";
import { initCheckout } from "services/checkout/initCheckout";

let errorIsDisplay = false;

const CustomerInfoForm = () => {
  const storeState = useStoreStateContext();
  const storeDispatch = useStoreDispatchContext();
  const checkoutState = useCheckoutStateContext();
  const checkoutDispatch = useCheckoutDispatchContext();
  const [formValues, setFormValues] = React.useState(
    checkoutState.customerInfos
  );

  // @TODO : find a way to be react-hooks/exhaustive-deps compliant
  React.useEffect(() => {
    initCheckout(storeState, checkoutDispatch)
      .then(() => {
        storeDispatch({ type: "updateStep", payload: "CustomerInfoForm" });
      })
      .catch(() => {
        storeDispatch({ type: "clearCart" });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!storeState.cartKey) {
    if (!errorIsDisplay) {
      toast.error(
        "An error occured, you will be redirect to cart page.",
        toastConfig
      );
    }
    errorIsDisplay = true;
    setTimeout(() => {
      navigate("/cart");
    }, 1500);
    return null;
  }

  if (!storeState.step) {
    return "loading...";
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <Section title="Customer Information">
      <FormGroup>
        <InputText
          label="first name"
          name="firstName"
          onChange={handleChange}
          value={formValues.firstName}
        />
        <InputText
          label="last name"
          name="lastName"
          onChange={handleChange}
          value={formValues.lastName}
        />
      </FormGroup>
      <FormGroup>
        <InputText
          label="address"
          name="address"
          onChange={handleChange}
          value={formValues.address}
        />
      </FormGroup>
      <FormGroup>
        <InputSelect
          label="country"
          name="country"
          onChange={handleChange}
          defaultValue={formValues.country}
        />
        <InputText
          label="city"
          name="city"
          onChange={handleChange}
          value={formValues.city}
        />
      </FormGroup>
      <FormGroup>
        <InputText
          label="postal code"
          name="postalCode"
          onChange={handleChange}
          value={formValues.postalCode}
        />
        <InputText
          label="phone"
          name="phone"
          onChange={handleChange}
          value={formValues.phone}
        />
      </FormGroup>
      <FormAction>
        <IconButton onClick={() => navigate("/")} icon={FaArrowLeft}>
          Return to Shop
        </IconButton>
        <Button
          disabled={!storeState.step}
          type="submit"
          onClick={() => {
            checkoutDispatch({
              type: "updateCustomerInfos",
              payload: formValues,
            });
            submitCustomerInfo(storeState, formValues).then(() => {
              checkoutDispatch({
                type: "updateCheckoutCurrentTab",
                payload: "CustomerShipping",
              });
            });
          }}
        >
          Continue to shipping
        </Button>
      </FormAction>
    </Section>
  );
};

export default CustomerInfoForm;
