import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import ProductLayout from "components/layout/ProductLayout";
import RelatedProducts from "components/organisms/RelatedProducts";
import ProductInfos from "components/organisms/ProductInfos";

const Product = ({ data }) => {
  const { product } = data;

  return (
    <ProductLayout product={product}>
      <ProductInfos product={product} />

      <section id="details" style={{ paddingTop: "4rem" }}>
        <h5>Details</h5>
        <p>{product.description}</p>
      </section>

      <RelatedProducts data={data} />
    </ProductLayout>
  );
};

Product.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Product;

export const query = graphql`
  query ProductPageQuery($slug: String, $mainProductTaxon: String) {
    category(code: { eq: $mainProductTaxon }) {
      products {
        ...ProductSynthesis
      }
    }
    product(slug: { eq: $slug }) {
      ...ProductSynthesis
    }
  }
`;
