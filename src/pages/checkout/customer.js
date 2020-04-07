import React from "react";
import { Row, Col } from "styled-bootstrap-grid";
import { Tabs, TabPanel } from "react-web-tabs";

import {
  useCheckoutDispatchContext,
  useCheckoutStateContext,
} from "context/CheckoutContext";

import Paper from "components/Paper";
import Layout from "components/Layout";
import CustomerInfoForm from "components/Checkout/Customer/CustomerInfoForm";
import CustomerShipping from "components/Checkout/Customer/CustomerShipping";
import CustomerPayment from "components/Checkout/Customer/CustomerPayment";
import Sidebar from "components/Checkout/Sidebar";
import { TabCustom, TabListWrapper } from "components/Checkout/Customer/Tab";

const Customer = () => {
  const checkoutState = useCheckoutStateContext();
  const checkoutDispatch = useCheckoutDispatchContext();
  const isActiveTab = tabFor => checkoutState.currentTab === tabFor;

  return (
    <Layout>
      <Paper fluid>
        <Row>
          <Col sm={8}>
            <Tabs
              defaultTab={checkoutState.currentTab}
              onChange={tabId =>
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
          </Col>
          <Col sm={4}>
            <Sidebar />
          </Col>
        </Row>
      </Paper>
    </Layout>
  );
};

export default Customer;
