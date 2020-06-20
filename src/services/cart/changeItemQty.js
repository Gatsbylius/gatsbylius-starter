import axios from "axios";
import { toast } from "react-toastify";
import { toastConfig } from "helpers/themeHelpers";

const SYLIUS_URL = process.env.GATSBY_SYLIUS_URL;

const changeItemQty = async (itemId, changeType, storeState, storeDispatch) => {
  const cartKey = storeState.cartKey;

  const item = storeState.products.find((item) => item.id === itemId);
  let newItemQty;

  if (changeType === "increment") {
    newItemQty = item.quantity + 1;
  } else if (changeType === "decrement" && item.quantity > 0) {
    newItemQty = item.quantity - 1;
  }

  if (!newItemQty) {
    return null;
  }

  storeDispatch({
    type: "updateProducts",
  });

  await axios
    .put(`${SYLIUS_URL}/shop-api/carts/${cartKey}/items/${item.id}`, {
      quantity: newItemQty,
    })
    .then((response) => {
      toast.success(
        `Successfully update quantity (${newItemQty})`,
        toastConfig
      );
      storeDispatch({
        type: "updateProductsSuccess",
        payload: response.data.items,
      });
      storeDispatch({ type: "updateStep", payload: "shopping" });
    })
    .catch((error) => {
      toast.error(`Product quantity was not updated, error.`, toastConfig);
      storeDispatch({
        type: "updateProductsError",
        payload: error.message,
      });
    });
};

export const incrementQty = async (itemId, storeState, storeDispatch) => {
  await changeItemQty(itemId, "increment", storeState, storeDispatch);
};

export const decrementQty = async (itemId, storeState, storeDispatch) => {
  await changeItemQty(itemId, "decrement", storeState, storeDispatch);
};
