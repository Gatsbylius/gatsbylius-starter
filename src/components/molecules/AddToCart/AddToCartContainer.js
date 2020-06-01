import React from "react";
import PropTypes from "prop-types";
import {
  useStoreDispatchContext,
  useStoreStateContext
} from "context/StoreContext";
import { addVariantToCart } from "services/cart";
import AddToCart from "./AddToCart";

const AddToCartContainer = ({ slug, variantsCode, qty, isSimple, name }) => {
  const storeState = useStoreStateContext();
  const storeDispatch = useStoreDispatchContext();

  return (
    <AddToCart
      onClick={() => {
        addVariantToCart(
          slug,
          variantsCode,
          qty,
          isSimple,
          name,
          storeState,
          storeDispatch
        ).then(() => {});
      }}
      loading={storeState.isAdding}
    />
  );
};

AddToCartContainer.propTypes = {
  slug: PropTypes.string.isRequired,
  variantsCode: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
  isSimple: PropTypes.bool,
  name: PropTypes.string
};

export default AddToCartContainer;
