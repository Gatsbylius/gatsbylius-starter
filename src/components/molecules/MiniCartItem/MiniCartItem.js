import React from "react";
import PropTypes from "prop-types";
import Price from "components/atoms/Price";
import {
  StyledMiniCartItem,
  MiniCartInfos,
  MiniCartItemName,
  MiniCartItemQty,
  MiniCartImage
} from "./styled";

const MiniCartItem = ({ fixedImage, name, quantity, price }) => {
  return (
    <StyledMiniCartItem>
      <MiniCartImage fixed={fixedImage} alt={name} />
      <MiniCartInfos>
        <MiniCartItemName>{name}</MiniCartItemName>
        <div>
          <MiniCartItemQty>{quantity} x </MiniCartItemQty>
          <Price price={price} hasSymbolBefore fontSize="1rem" />
        </div>
      </MiniCartInfos>
    </StyledMiniCartItem>
  );
};

MiniCartItem.propTypes = {
  fixedImage: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: Price.propTypes.price.isRequired
};

export default MiniCartItem;
