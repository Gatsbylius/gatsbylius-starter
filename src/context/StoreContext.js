import React, { createContext, useReducer, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { cartReducer } from "../reducers/cartReducer";

export const defaultStoreState =
  typeof window !== "undefined" && localStorage.getItem("storeState")
    ? JSON.parse(localStorage.getItem("storeState"))
    : {
        cartKey: "",
        currency: "USD",
        miniCartIsOpen: false,
        isAdding: false,
        success: null,
        error: null,
        products: [],
        cart: {},
        step: "shopping",
      };

export const StoreStateContext = createContext(defaultStoreState);
export const StoreDispatchContext = createContext({});

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, defaultStoreState);

  useEffect(() => {
    localStorage.setItem("storeState", JSON.stringify(state));
  }, [state]);

  return (
    <StoreStateContext.Provider value={state}>
      <StoreDispatchContext.Provider value={dispatch}>
        {children}
      </StoreDispatchContext.Provider>
    </StoreStateContext.Provider>
  );
};

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useStoreStateContext = () => {
  const context = useContext(StoreStateContext);
  if (context === undefined) {
    throw new Error(
      "useStoreStateContext must be used within a StoreStateProvider"
    );
  }
  return context;
};

export const useStoreDispatchContext = () => {
  const context = useContext(StoreDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useStoreDispatchContext must be used within a StoreDispatchContext"
    );
  }
  return context;
};
