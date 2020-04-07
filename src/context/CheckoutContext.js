import React from "react";
import PropTypes from "prop-types";
import { checkoutReducer } from "../reducers/checkoutReducer";

export const defaultCheckoutState =
  typeof window !== "undefined" && localStorage.getItem("checkoutState")
    ? JSON.parse(localStorage.getItem("checkoutState"))
    : {
        shippingInfos: {
          shipments: [],
          selectedShippingMethod: "",
        },
        paymentInfos: {
          payments: [],
          selectedPaymentMethod: "",
        },
        currentTab: "CustomerInfoForm",
        orderSummary: {
          items: [],
          subTotal: 0,
          shipping: 0,
          taxes: 0,
          cartDiscount: [],
          total: 0,
          currency: "USD",
          currentShipment: {},
        },
        customerInfos: {
          firstName: "",
          lastName: "",
          address: "",
          country: "",
          city: "",
          postalCode: "",
          phone: "",
        },
      };

export const CheckoutStateContext = React.createContext(defaultCheckoutState);
export const CheckoutDispatchContext = React.createContext({});

export const CheckoutProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    checkoutReducer,
    defaultCheckoutState
  );

  React.useEffect(() => {
    localStorage.setItem("checkoutState", JSON.stringify(state));
  }, [state]);

  return (
    <CheckoutStateContext.Provider value={state}>
      <CheckoutDispatchContext.Provider value={dispatch}>
        {children}
      </CheckoutDispatchContext.Provider>
    </CheckoutStateContext.Provider>
  );
};

CheckoutProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCheckoutStateContext = () => {
  const context = React.useContext(CheckoutStateContext);
  if (context === undefined) {
    throw new Error(
      "useCheckoutStateContext must be used within a CheckoutStateProvider"
    );
  }
  return context;
};

export const useCheckoutDispatchContext = () => {
  const context = React.useContext(CheckoutDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useCheckoutDispatchContext must be used within a CheckoutDispatchContext"
    );
  }
  return context;
};
