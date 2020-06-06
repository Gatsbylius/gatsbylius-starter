import { toast } from "react-toastify";
import axios from "axios";
import { ensureCartKey } from "./";
import { toastConfig } from "helpers/themeHelpers";

const SYLIUS_URL = process.env.GATSBY_SYLIUS_URL;

export const addVariantToCart = async (
  productCode,
  variantsCode,
  qty,
  isSimple,
  name,
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

  const successQtyString = qty > 1 ? ` (x${qty})` : ``;

  if (!isSimple) {
    productData.variantCode = variantsCode;
  }

  await axios
    .post(`${SYLIUS_URL}/shop-api/carts/${cartKey}/items`, productData)
    .then((response) => {
      toast.success(
        `Successfully added to cart`,
        `"${name}"` + successQtyString,
        toastConfig
      );
      storeDispatch({
        type: "updateProductsSuccess",
        payload: response.data.items,
      });
      storeDispatch({ type: "updateStep", payload: "shopping" });
    })
    .catch((err) => {
      toast.error(
        `Was not added to cart, error.`,
        `"${name}"` + successQtyString,
        toastConfig
      );
      storeDispatch({
        type: "updateProductsError",
        payload: err.message,
      });
      console.error("Error on add to cart", err);
    });
};
