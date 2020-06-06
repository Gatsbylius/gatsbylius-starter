import axios from "axios";
const SYLIUS_URL = process.env.GATSBY_SYLIUS_URL;

export const removeItemFromCart = async (itemId, storeState, storeDispatch) => {
  const cartKey = storeState.cartKey;

  storeDispatch({
    type: "updateProducts",
  });

  await axios
    .delete(`${SYLIUS_URL}/shop-api/carts/${cartKey}/items/${itemId}`)
    .then(async (response) => {
      //@todo: update totals ?
      storeDispatch({
        type: "updateProductsSuccess",
        payload: response.data.items,
      });
      storeDispatch({ type: "updateStep", payload: "shopping" });
    })
    .catch((error) => {
      storeDispatch({
        type: "updateProductsError",
        payload: error.message,
      });
    });
};
