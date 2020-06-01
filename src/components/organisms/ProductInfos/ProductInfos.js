import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import ProductSynthesis from "components/organisms/ProductSynthesis";
import { StyledProductInfos } from "./styled";

const ProductInfos = ({ product }) => {
  return (
    <StyledProductInfos>
      <Img fluid={product.localImage.childImageSharp.fluid} />
      <ProductSynthesis product={product} />
    </StyledProductInfos>
  );
};

ProductInfos.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    localImage: PropTypes.object.isRequired
  }).isRequired
};

export default ProductInfos;
