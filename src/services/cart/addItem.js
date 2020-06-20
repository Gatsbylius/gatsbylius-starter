import axios from "axios";
import { toast } from "react-toastify";
import { toastConfig } from "helpers/themeHelpers";
import { ensureCartKey } from "./";

const SYLIUS_URL = process.env.GATSBY_SYLIUS_URL;

export const addVariantToCart = async (
  productCode,
  variantsCode,
  qty,
  isSimple,
  storeState,
  storeDispatch
) => {
  await ensureCartKey(storeState, storeDispatch);
  const cartKey = storeState.cartKey;

  storeDispatch({
    type: "updateProducts",
  });

  const productData = {
    productCode: productCode,
    quantity: qty,
  };

  if (!isSimple) {
    productData.variantCode = variantsCode;
  }

  await axios
    .post(`${SYLIUS_URL}/shop-api/carts/${cartKey}/items`, productData)
    .then((response) => {
      toast.success(`Successfully added to cart`, toastConfig);
      storeDispatch({
        type: "updateProductsSuccess",
        payload: response.data.items,
      });
      storeDispatch({ type: "updateStep", payload: "shopping" });
    })
    .catch((err) => {
      toast.error(`Product was not added to cart, error.`, toastConfig);
      storeDispatch({
        type: "updateProductsError",
        payload: err.message,
      });
      console.error("Error on add to cart", err);
    });
};
