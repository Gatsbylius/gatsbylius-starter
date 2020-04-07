//You can face an issue with checkout infos checkout this topic https://github.com/Sylius/ShopApiPlugin/issues/241
const axios = require("axios");
const SYLIUS_URL = process.env.GATSBY_SYLIUS_URL;

export const submitCustomerInfo = async (storeState, formCustomerInfos) => {
  if (storeState.cartKey) {
    return await axios
      .put(`${SYLIUS_URL}/shop-api/checkout/${storeState.cartKey}/address`, {
        shippingAddress: {
          firstName: formCustomerInfos.firstName,
          lastName: formCustomerInfos.lastName,
          countryCode: formCustomerInfos.country,
          street: formCustomerInfos.address,
          city: formCustomerInfos.city,
          postcode: formCustomerInfos.postalCode,
          provinceName: "",
          company: "",
          phoneNumber: formCustomerInfos.phone,
        },
        billingAddress: {
          firstName: formCustomerInfos.firstName,
          lastName: formCustomerInfos.lastName,
          countryCode: formCustomerInfos.country,
          street: formCustomerInfos.address,
          city: formCustomerInfos.city,
          postcode: formCustomerInfos.postalCode,
          provinceName: "",
          company: "",
          phoneNumber: formCustomerInfos.phone,
        },
      })
      .catch(error => {
        console.error("Error on cart creation ", error);
      });
  }
};
