import React from "react";
import {
  useStoreDispatchContext,
  useStoreStateContext,
} from "../../context/StoreContext";
import { FiShoppingCart } from "react-icons/fi";
import { CartButton, CartInfo } from "./styled";

const MiniCartButton = () => {
  const storeState = useStoreStateContext();
  const storeDispatch = useStoreDispatchContext();
  return (
    <CartButton
      key={"cart"}
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
