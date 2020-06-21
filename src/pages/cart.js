import React from "react";
import CartRecap from "components/organisms/Checkout/CartRecap";
import Layout from "components/layout";

const Cart = () => {
  return (
    <Layout>
      <CartRecap isCartPage />
    </Layout>
  );
};

export default Cart;
