import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import Layout from "components/Layout";
import ProductBreadcrumb from "components/ProductBreadcrumb";
import ProductSynthesis from "components/ProductSynthesis";
import RelatedProducts from "components/Layout/RelatedProducts/RelatedProducts";
import { color, spacing, mediaQuery } from "helpers/themeHelpers";

const ProductPageContainer = styled.div`
  padding: 0 1rem;
  background-color: ${color("white")};
  border-right: 1px solid ${color("greyLight1")};
  border-left: 1px solid ${color("greyLight1")};
`;

const ProductPageContent = styled.div`
  padding: ${spacing(["lg", "xs"])};
`;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > .gatsby-image-wrapper {
    width: 100%;
    padding: 0 1rem;

    @media (min-width: ${mediaQuery("md")}) {
      width: 60%;
    }
  }

  & > section {
    flex: 1;
    padding: 0 1rem;
  }
`;

const Product = ({ data }) => {
  return (
    <Layout>
      <ProductPageContainer>
        <ProductPageContent>
          <ProductBreadcrumb product={data.product} />

          <ProductContainer>
            <Img fluid={data.product.localImage.childImageSharp.fluid} />
            <ProductSynthesis product={data.product} />
          </ProductContainer>

          <section id="details" style={{ paddingTop: "4rem" }}>
            <h5>Details</h5>
            <p>{data.product.description}</p>
          </section>

          <RelatedProducts data={data} />
        </ProductPageContent>
      </ProductPageContainer>
    </Layout>
  );
};

Product.propTypes = {
  data: PropTypes.object.isRequired
};

export default Product;

export const query = graphql`
  query ProductPageQuery($slug: String, $mainProductTaxon: String) {
    category(code: { eq: $mainProductTaxon }) {
      products {
        id
        name
        slug
        localImage {
          childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    product(slug: { eq: $slug }) {
      ...ProductSynthesis
    }

    allProduct {
      nodes {
        name
        slug
        localImage {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
