import React from "react";
import PropTypes from "prop-types";
import _get from "lodash.get";
import { getTotal, priceParser } from "helpers/cartHelper";
import { navigate } from "gatsby";
import {
  CartRecapContainer,
  ArticlesNumber,
  Title,
  HeadContainer,
  Divider,
  FinalPrice,
  ButtonContainer,
} from "./styled";
import { useStoreStateContext } from "context/StoreContext";
import CartRecapItem from "./CartRecapItem";
import Button from "components/atoms/Button";

const CartRecap = ({ isCartPage = false }) => {
  const storeState = useStoreStateContext();
  const items = _get(storeState, "products", []);

  return (
    <CartRecapContainer>
      <HeadContainer>
        <Title>Shopping Cart</Title>
        <ArticlesNumber>{items.length}</ArticlesNumber>
      </HeadContainer>
      <Divider />
      {items.map((item) => {
        return (
          <CartRecapItem key={item.id} item={item} isCartPage={isCartPage} />
        );
      })}
      <Divider />
      <FinalPrice>
        <span>Total</span>
        <span>{priceParser(getTotal(items), storeState.currency)}</span>
      </FinalPrice>
      {isCartPage && (
        <ButtonContainer>
          <Button onClick={() => navigate("/checkout")}>Go to checkout</Button>
        </ButtonContainer>
      )}
    </CartRecapContainer>
  );
};

CartRecap.propTypes = {
  isCartPage: PropTypes.bool,
};

export default CartRecap;
