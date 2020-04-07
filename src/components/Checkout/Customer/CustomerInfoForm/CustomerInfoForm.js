import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Container, Row, Col } from "styled-bootstrap-grid";
import InputText from "../../../Input/InputText";
import InputSelect from "../../../Input/InputSelect";
import {
  Title,
  InputsRow,
  ValidButton,
  BackButton,
  ButtonsContainer,
} from "../styled";
import {
  useCheckoutDispatchContext,
  useCheckoutStateContext,
} from "../../../../context/CheckoutContext";
import { submitCustomerInfo } from "../../../../services/checkout/submitCustomerInfo";
import {
  useStoreDispatchContext,
  useStoreStateContext,
} from "../../../../context/StoreContext";
import { initCheckout } from "../../../../services/checkout/initCheckout";

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
      <Row>
        <Col>
          <Title>Customer Information</Title>
        </Col>
      </Row>
      <InputsRow>
        <Col sm="6">
          <InputText
            label="first name"
            name="firstName"
            onChange={handleChange}
            value={formValues.firstName}
          />
        </Col>
        <Col sm="6">
          <InputText
            label="last name"
            name="lastName"
            onChange={handleChange}
            value={formValues.lastName}
          />
        </Col>
      </InputsRow>
      <InputsRow>
        <Col>
          <InputText
            label="address"
            name="address"
            onChange={handleChange}
            value={formValues.address}
          />
        </Col>
      </InputsRow>
      <InputsRow>
        <Col sm="6">
          <InputSelect
            label="country"
            name="country"
            onChange={handleSelectChange}
            defaultValue={formValues.country}
          />
        </Col>
        <Col sm="6">
          <InputText
            label="city"
            name="city"
            onChange={handleChange}
            value={formValues.city}
          />
        </Col>
      </InputsRow>
      <InputsRow>
        <Col sm="6">
          <InputText
            label="postal code"
            name="postalCode"
            onChange={handleChange}
            value={formValues.postalCode}
          />
        </Col>
        <Col sm="6">
          <InputText
            label="phone"
            name="phone"
            onChange={handleChange}
            value={formValues.phone}
          />
        </Col>
      </InputsRow>
      <InputsRow>
        <Col>
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
            </ValidButton>
          </ButtonsContainer>
        </Col>
      </InputsRow>
    </Container>
  );
};

export default CustomerInfoForm;
