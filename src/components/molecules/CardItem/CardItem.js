import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import Price from "components/atoms/Price";
import { CardItemLink, CardItemImageWrapper, CardItemInfos } from "./styled";

const CardItem = ({ to, imageFluid, name, price }) => {
  return (
    <CardItemLink to={to}>
      <CardItemImageWrapper>
        <Img fluid={imageFluid} imgStyle={{ objectFit: "cover" }} />
      </CardItemImageWrapper>
      <CardItemInfos>
        <strong>{name}</strong>
        {price && <Price price={price} fontSize="1.2rem" hasSymbolBefore />}
      </CardItemInfos>
    </CardItemLink>
  );
};

CardItem.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageFluid: PropTypes.object.isRequired,
  price: Price.propTypes.price,
};
export default CardItem;
