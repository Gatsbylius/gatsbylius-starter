import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import ProductSynthesis from "components/organisms/ProductSynthesis";
import { StyledProductInfos } from "./styled";

const ProductInfos = ({ product }) => {
  const data = useStaticQuery(graphql`
    query ProductInfosQuery {
      file(name: { eq: "placeholder" }) {
        childImageSharp {
          fluid(maxHeight: 250, quality: 50) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <StyledProductInfos>
      <Img
        fluid={
          product.localImage
            ? product.localImage.childImageSharp.fluid
            : data.file.childImageSharp.fluid
        }
      />
      <ProductSynthesis product={product} />
    </StyledProductInfos>
  );
};

ProductInfos.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    localImage: PropTypes.object,
  }).isRequired,
};

export default ProductInfos;
