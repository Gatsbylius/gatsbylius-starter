import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Container, Row, Col } from "styled-bootstrap-grid";

import Layout from "../components/Layout";
import Price from "../components/Price";
import {
  GalleryItem,
  GalleryImageWrapper,
  Infos,
  Link,
} from "../components/ProductGrid/styled";
import SEO from "../components/seo";
import Loader from "components/shared/Loader";

const pageTitle = "Gatsbylius Print Shop";

const IndexPage = ({ data }) => (
  <Layout pageTitle={pageTitle}>
    <SEO title={pageTitle} />
    <Container fluid>
      <Row>
        <Col>
          <h2 id="our-products" style={{ paddingTop: "4rem" }}>
            Our latest products
          </h2>
        </Col>
      </Row>

      <Loader />

      <Row>
        {[...data.allProduct.nodes].slice(0, 12).map(product => (
          <Col key={product.slug} sm={6} md={4} lg={3}>
            <GalleryItem>
              <Link to={`/product/${product.slug}`}>
                <GalleryImageWrapper>
                  <Img
                    sizes={{
                      ...product.localImage.childImageSharp.fluid,
                    }}
                    style={{ maxHeight: "300px" }}
                    imgStyle={{ objectFit: "contain" }}
                  />
                </GalleryImageWrapper>
                <Infos>
                  <strong>{product.name}</strong>
                  <Price
                    price={product.variants[0].price}
                    fontSize="1.2rem"
                    hasSymbolBefore
                  />
                </Infos>
              </Link>
            </GalleryItem>
          </Col>
        ))}
      </Row>

      <Row>
        <Col>
          <h2>Our categories</h2>
        </Col>
      </Row>

      <Row>
        {data.allCategory.nodes.map(category => {
          const fluidCategoryImage = category.localImage
            ? category.localImage.childImageSharp.fluid
            : data.file.childImageSharp.fluid;

          return (
            <Col key={category.code} sm={4} md={3}>
              <GalleryItem>
                <GalleryImageWrapper>
                  <Link to={`/categories/${category.code}`}>
                    <Img
                      sizes={{
                        ...fluidCategoryImage,
                        aspectRatio: 3 / 2,
                      }}
                    />

                    <Infos>{category.name}</Infos>
                  </Link>
                </GalleryImageWrapper>
              </GalleryItem>
            </Col>
          );
        })}
      </Row>
    </Container>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const query = graphql`
  query HomePageQuery {
    file(name: { eq: "placeholder" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allCategory {
      nodes {
        id
        code
        slug
        name
        localImage {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allProduct {
      nodes {
        slug
        name
        variants {
          price {
            currency
            current
          }
        }
        localImage {
          childImageSharp {
            fluid(maxHeight: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
