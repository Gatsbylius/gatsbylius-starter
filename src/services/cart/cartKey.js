import axios from "axios";
const SYLIUS_URL = process.env.GATSBY_SYLIUS_URL;

export const ensureCartKey = async (storeState, storeDispatch = null) => {
  if (!storeState.cartKey) {
    const cartKey = await axios
      .post(`${SYLIUS_URL}/shop-api/carts`, {})
      .then((response) => {
        storeDispatch({
          type: "updateCartKey",
          payload: response.data.tokenValue,
        });
        storeState.cartKey = response.data.tokenValue;
        return response.data.tokenValue;
      })
      .catch((error) => {
        console.error("Error on cart creation ", error);
      });

    return cartKey;
  }
};
