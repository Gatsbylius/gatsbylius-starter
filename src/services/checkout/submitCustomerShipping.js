//You can face an issue with checkout infos checkout this topic https://github.com/Sylius/ShopApiPlugin/issues/241
const axios = require("axios");
const SYLIUS_URL = process.env.GATSBY_SYLIUS_URL;

export const submitCustomerShipping = async (storeState, shipmentCode) => {
  if (storeState.cartKey) {
    return await axios
      .put(`${SYLIUS_URL}/shop-api/checkout/${storeState.cartKey}/shipping/0`, {
        method: shipmentCode,
      })
      .catch(error => {
        console.error("Error on cart creation ", error);
      });
  }
};
