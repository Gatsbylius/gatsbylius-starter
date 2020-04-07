import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Container, Row, Col } from "styled-bootstrap-grid";
import Layout from "../components/Layout";
import ProductBreadcrumb from "../components/ProductBreadcrumb";
import ProductSynthesis from "../components/ProductSynthesis";
import styled from "styled-components";
import { color, spacing } from "../helpers/themeHelpers";
import Img from "gatsby-image";
import RelatedProducts from "../components/Layout/RelatedProducts/RelatedProducts";

const ProductPageContainer = styled(Container)`
  background-color: ${color("white")};
  border-right: 1px solid ${color("greyLight1")};
  border-left: 1px solid ${color("greyLight1")};
`;

const ProductPageContent = styled.div`
  padding: ${spacing(["lg", "xs"])};
`;

const Product = ({ data }) => {
  return (
    <Layout>
      <ProductPageContainer>
        <ProductPageContent>
          <Row>
            <Col>
              <ProductBreadcrumb product={data.product} />
            </Col>
          </Row>

          <Row>
            <Col md={7}>
              <Img fluid={data.product.localImage.childImageSharp.fluid} />
            </Col>

            <Col md={5}>
              <ProductSynthesis product={data.product} />
            </Col>
          </Row>

          <Row>
            <Col>
              <div id="details" style={{ paddingTop: "4rem" }}>
                <h5>Details</h5>
                <p>{data.product.description}</p>
              </div>
            </Col>
          </Row>
          <RelatedProducts data={data} />
        </ProductPageContent>
      </ProductPageContainer>
    </Layout>
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
