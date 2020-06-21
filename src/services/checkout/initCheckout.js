//You can face an issue with checkout infos checkout this topic https://github.com/Sylius/ShopApiPlugin/issues/241
import axios from "axios";
const SYLIUS_URL = process.env.GATSBY_SYLIUS_URL;

export const initCheckout = async (storeState, checkoutDispatch) => {
  if (storeState.cartKey) {
    await axios
      .get(`${SYLIUS_URL}/shop-api/checkout/${storeState.cartKey}`, {})
      .then((response) => {
        if (response.data.totals.total === 0) {
          throw new Error("Checkout is empty.");
        }
        checkoutDispatch({
          type: "updateOrderSummary",
          payload: {
            items: response.data.items,
            subTotal: response.data.totals.items,
            shipping: response.data.totals.shipping,
            taxes: response.data.totals.taxes,
            total: response.data.totals.total,
            cartDiscount: response.cartDiscount,
            currency: response.currency,
          },
        });
      });
  }
};
