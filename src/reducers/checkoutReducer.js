//@todo: Actions.js contients les types dans des contantes en majuscules
export const checkoutReducer = (state, action) => {
  switch (action.type) {
    case "updateOrderSummary": {
      return { ...state, orderSummary: action.payload };
    }
    case "updateCustomerInfos": {
      return { ...state, customerInfos: action.payload };
    }
    case "updateShippingInfos": {
      return { ...state, shippingInfos: action.payload };
    }
    case "updateShipments": {
      return { ...state, shippingInfos: action.payload };
    }
    case "updatePayment": {
      return { ...state, paymentInfos: action.payload };
    }
    case "updateCheckoutCurrentTab": {
      return { ...state, currentTab: action.payload };
    }
    default: {
      throw new Error("This reducer action does not exist");
    }
  }
};
