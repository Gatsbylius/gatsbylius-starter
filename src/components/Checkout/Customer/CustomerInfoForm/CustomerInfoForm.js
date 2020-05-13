import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import styled from "styled-components";
import InputText from "components/Input/InputText";
import InputSelect from "components/Input/InputSelect";
import {
  Title,
  InputsRow,
  ValidButton,
  BackButton,
  ButtonsContainer
} from "../styled";
import {
  useCheckoutDispatchContext,
  useCheckoutStateContext
} from "context/CheckoutContext";
import { submitCustomerInfo } from "services/checkout/submitCustomerInfo";
import {
  useStoreDispatchContext,
  useStoreStateContext
} from "context/StoreContext";
import { initCheckout } from "services/checkout/initCheckout";

const FormGroup = styled.div`
  width: 50%;
  padding: 0 1rem;
`;

const Container = styled.section`
  padding: 1rem;
`;

const CustomerInfoForm = () => {
  const storeState = useStoreStateContext();
  const storeDispatch = useStoreDispatchContext();
  const checkoutState = useCheckoutStateContext();
  const checkoutDispatch = useCheckoutDispatchContext();
  const [formValues, setFormValues] = React.useState(
    checkoutState.customerInfos
  );

  if (storeState.step !== "CustomerInfoForm") {
    initCheckout(storeState, checkoutDispatch).then(() => {
      storeDispatch({ type: "updateStep", payload: "CustomerInfoForm" });
    });
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSelectChange = e => {
    setFormValues({ ...formValues, country: e.value });
  };

  return (
    <Container>
      <Title>Customer Information</Title>
      <InputsRow>
        <FormGroup>
          <InputText
            label="first name"
            name="firstName"
            onChange={handleChange}
            value={formValues.firstName}
          />
        </FormGroup>
        <FormGroup>
          <InputText
            label="last name"
            name="lastName"
            onChange={handleChange}
            value={formValues.lastName}
          />
        </FormGroup>
      </InputsRow>
      <InputsRow>
        <FormGroup>
          <InputText
            label="address"
            name="address"
            onChange={handleChange}
            value={formValues.address}
          />
        </FormGroup>
      </InputsRow>
      <InputsRow>
        <FormGroup>
          <InputSelect
            label="country"
            name="country"
            onChange={handleSelectChange}
            defaultValue={formValues.country}
          />
        </FormGroup>
        <FormGroup>
          <InputText
            label="city"
            name="city"
            onChange={handleChange}
            value={formValues.city}
          />
        </FormGroup>
      </InputsRow>
      <InputsRow>
        <FormGroup>
          <InputText
            label="postal code"
            name="postalCode"
            onChange={handleChange}
            value={formValues.postalCode}
          />
        </FormGroup>
        <FormGroup>
          <InputText
            label="phone"
            name="phone"
            onChange={handleChange}
            value={formValues.phone}
          />
        </FormGroup>
      </InputsRow>
      <InputsRow>
        <ButtonsContainer>
          <BackButton>
            <span>
              <FaArrowLeft />
            </span>
            Return to Shop
          </BackButton>
          <ValidButton
            type="submit"
            onClick={() => {
              checkoutDispatch({
                type: "updateCustomerInfos",
                payload: formValues
              });
              submitCustomerInfo(storeState, formValues).then(() => {
                checkoutDispatch({
                  type: "updateCheckoutCurrentTab",
                  payload: "CustomerShipping"
                });
              });
            }}
          >
            Continue to shipping
          </ValidButton>
        </ButtonsContainer>
      </InputsRow>
    </Container>
  );
};

export default CustomerInfoForm;
