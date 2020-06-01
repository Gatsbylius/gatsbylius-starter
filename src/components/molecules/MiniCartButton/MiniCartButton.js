import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import {
  useStoreDispatchContext,
  useStoreStateContext
} from "context/StoreContext";
import { CartButton, CartInfo } from "./styled";

const MiniCartButton = () => {
  const storeState = useStoreStateContext();
  const storeDispatch = useStoreDispatchContext();
  return (
    <CartButton
      key="cart"
      aria-label={`${storeState.products.length} cart item`}
      onClick={() => {
        storeDispatch({ type: "toggleMiniCart" });
      }}
    >
      <FiShoppingCart />
      <CartInfo>{storeState.products.length}</CartInfo>
    </CartButton>
  );
};

export default MiniCartButton;
