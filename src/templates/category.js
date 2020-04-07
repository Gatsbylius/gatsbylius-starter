import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Img from "gatsby-image";
import { Container, Row, Col } from "styled-bootstrap-grid";
import {
  ChildCategoryLinks,
  categoryGridTextStyle,
  CategoryTitle,
  CategoryImageContainer,
  CategoryProductLink,
  CategoryProductContainer,
  selectedCategory,
} from "../components/CategoryGrid/styled";

const Category = ({ data }) => {
  const category = data.category;
  const products = category.products;
  const baseCategoryCode = category.parent
    ? category.parent.code
    : category.code;
  let subCategories = category.children;
  let fluidCategoryImage =
    category.localImage &&
    (category.localImage
      ? category.localImage.childImageSharp.fluid
      : data.file.childImageSharp.fluid);
  let categoryName = category.name;

  if (category.parent) {
    fluidCategoryImage =
      category.parent.localImage &&
      (category.parent.localImage
        ? category.parent.localImage.childImageSharp.fluid
        : data.file.childImageSharp.fluid);
    categoryName = category.parent.name;
    subCategories = category.parent.children;
  }

  return (
    <Layout>
      <CategoryImageContainer>
        <Img
          sizes={{
            ...fluidCategoryImage,
            aspectRatio: 8 / 2,
          }}
        />
        <CategoryTitle>{categoryName}</CategoryTitle>
      </CategoryImageContainer>

      <Container css={categoryGridTextStyle} fluid>
        <Row>
          <Col lg={2}>
            {subCategories && subCategories.length > 0 && (
              <>
                <h3>Our {categoryName}</h3>

                <Col sm={12} key={baseCategoryCode}>
                  <ChildCategoryLinks
                    css={
                      baseCategoryCode === category.code
                        ? selectedCategory
                        : null
                    }
                    to={`/categories/${baseCategoryCode}`}
                  >
                    All {categoryName}
                  </ChildCategoryLinks>
                </Col>

                {subCategories.map(subCategory => {
                  return (
                    <Col sm={12} key={subCategory.code}>
                      <ChildCategoryLinks
                        to={`/categories/${subCategory.code}`}
                        css={
                          subCategory.code === category.code
                            ? selectedCategory
                            : null
                        }
                      >
                        {subCategory.name}
                      </ChildCategoryLinks>
                    </Col>
                  );
                })}
              </>
            )}
          </Col>
          <Col lg={10}>
            {products && products.length > 0 && (
              <Row>
                <Col sm={12}>
                  <h2>Products</h2>
                </Col>
                {products.map(product => {
                  return (
                    <CategoryProductContainer
                      md={6}
                      lg={4}
                      xl={3}
                      key={product.slug}
                    >
                      <CategoryProductLink to={`product/${product.slug}`}>
                        <Img fluid={product.localImage.childImageSharp.fluid} />{" "}
                        {product.name}
                      </CategoryProductLink>
                    </CategoryProductContainer>
                  );
                })}
              </Row>
            )}

            {!products.length > 0 && subCategories && subCategories.length > 0 && (
              <Row>
                <Col sm={12}>
                  <h2>Products</h2>
                </Col>
                {subCategories.map(subCategory => {
                  return (
                    subCategory.products &&
                    subCategory.products.length > 0 &&
                    subCategory.products.map(product => {
                      return (
                        <CategoryProductContainer
                          md={6}
                          lg={4}
                          xl={3}
                          key={product.slug}
                        >
                          <CategoryProductLink to={`product/${product.slug}`}>
                            <Img
                              fluid={product.localImage.childImageSharp.fluid}
                            />{" "}
                            {product.name}
                          </CategoryProductLink>
                        </CategoryProductContainer>
                      );
                    })
                  );
                })}
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

Category.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Category;

export const query = graphql`
  query CategoryPageQuery($code: String) {
    category(code: { eq: $code }) {
      code
      slug
      name
      description
      parent {
        id
        ... on Category {
          name
          code
          children {
            ... on Category {
              name
              code
            }
          }
          localImage {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      localImage {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
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
      children {
        id
        ... on Category {
          code
          slug
          name
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
      }
    }
  }
`;
