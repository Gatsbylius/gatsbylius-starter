import axios from "axios";
import { toast } from "react-toastify";
import { toastConfig } from "helpers/themeHelpers";

const SYLIUS_URL = process.env.GATSBY_SYLIUS_URL;

export const removeItemFromCart = async (itemId, storeState, storeDispatch) => {
  const cartKey = storeState.cartKey;

  storeDispatch({
    type: "updateProducts",
  });

  await axios
    .delete(`${SYLIUS_URL}/shop-api/carts/${cartKey}/items/${itemId}`)
    .then(async (response) => {
      toast.success(`Successfully removed from cart`, toastConfig);
      storeDispatch({
        type: "updateProductsSuccess",
        payload: response.data.items,
      });
      storeDispatch({ type: "updateStep", payload: "shopping" });
    })
    .catch((error) => {
      toast.error(`Was not added removed from cart, error.`, toastConfig);
      storeDispatch({
        type: "updateProductsError",
        payload: error.message,
      });
    });
};
