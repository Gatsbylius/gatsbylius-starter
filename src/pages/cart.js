import React from "react";
import Sidebar from "components/organisms/Checkout/Sidebar";
import Layout from "components/layout";

const Cart = () => {
  return (
    <Layout>
      <Sidebar isCartPage />
    </Layout>
  );
};

export default Cart;
