import React from "react";
import styled from "styled-components";
import { Tabs, TabPanel } from "react-web-tabs";
import {
  useCheckoutDispatchContext,
  useCheckoutStateContext,
} from "context/CheckoutContext";

import Paper from "components/layout/Paper";
import Layout from "components/layout";
import CustomerInfoForm from "components/organisms/Checkout/CustomerInfoForm";
import CustomerShipping from "components/organisms/Checkout/Shipping";
import CustomerPayment from "components/organisms/Checkout/Payment";
import CartRecap from "components/organisms/Checkout/CartRecap";
import { TabCustom, TabListWrapper } from "components/organisms/Checkout/Tab";
import { mediaQuery } from "helpers/themeHelpers";

const CheckoutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const CheckoutStep = styled.section`
  width: 100%;
  @media (min-width: ${mediaQuery("lg")}) {
    width: 60%;
  }
`;

const CheckoutRecap = styled.section`
  width: 100%;

  @media (min-width: ${mediaQuery("lg")}) {
    width: 40%;
  }
`;

const Checkout = () => {
  const checkoutState = useCheckoutStateContext();
  const checkoutDispatch = useCheckoutDispatchContext();
  const isActiveTab = (tabFor) => checkoutState.currentTab === tabFor;

  return (
    <Layout>
      <Paper fluid>
        <CheckoutContainer>
          <CheckoutStep>
            <Tabs
              defaultTab={checkoutState.currentTab}
              onChange={(tabId) =>
                checkoutDispatch({
                  type: "updateCheckoutCurrentTab",
                  payload: tabId,
                })
              }
            >
              <TabListWrapper>
                <TabCustom
                  tabFor="CustomerInfoForm"
                  className={isActiveTab("CustomerInfoForm") ? "active" : ""}
                >
                  01 Customer Information
                </TabCustom>
                <TabCustom
                  tabFor="CustomerShipping"
                  className={isActiveTab("CustomerShipping") ? "active" : ""}
                >
                  02 Shipping Info
                </TabCustom>
                <TabCustom
                  tabFor="CustomerPayment"
                  className={isActiveTab("CustomerPayment") ? "active" : ""}
                >
                  03 Payment Selection
                </TabCustom>
              </TabListWrapper>
              <TabPanel
                tabId="CustomerInfoForm"
                render={() =>
                  isActiveTab("CustomerInfoForm") ? <CustomerInfoForm /> : null
                }
              />
              <TabPanel
                tabId="CustomerShipping"
                render={() =>
                  isActiveTab("CustomerShipping") ? <CustomerShipping /> : null
                }
              />
              <TabPanel
                tabId="CustomerPayment"
                render={() =>
                  isActiveTab("CustomerPayment") ? <CustomerPayment /> : null
                }
              />
            </Tabs>
          </CheckoutStep>
          <CheckoutRecap>
            <CartRecap />
          </CheckoutRecap>
        </CheckoutContainer>
      </Paper>
    </Layout>
  );
};

export default Checkout;
