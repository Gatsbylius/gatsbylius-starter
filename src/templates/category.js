import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import Layout from "components/Layout";
import {
  ChildCategoryLinks,
  CategoryTitle,
  CategoryImageContainer,
  selectedCategory
} from "components/CategoryGrid/styled";
import {
  GalleryList,
  GalleryItem,
  GalleryImageWrapper,
  Infos,
  Link
} from "components/ProductGrid/styled";
import Price from "components/Price";
import { mediaQuery } from "helpers/themeHelpers";

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const CategoryList = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  @media (min-width: ${mediaQuery("lg")}) {
    width: 200px;
  }
`;

const ProductsContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1rem;
  text-align: center;
`;

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
            aspectRatio: 8 / 2
          }}
        />
        <CategoryTitle>{categoryName}</CategoryTitle>
      </CategoryImageContainer>

      <CategoryContainer>
        {subCategories && subCategories.length > 0 && (
          <CategoryList>
            <h3>Our {categoryName}</h3>

            <ChildCategoryLinks
              key={baseCategoryCode}
              css={baseCategoryCode === category.code ? selectedCategory : null}
              to={`/categories/${baseCategoryCode}`}
            >
              All {categoryName}
            </ChildCategoryLinks>

            {subCategories.map(subCategory => {
              return (
                <ChildCategoryLinks
                  key={subCategory.code}
                  to={`/categories/${subCategory.code}`}
                  css={
                    subCategory.code === category.code ? selectedCategory : null
                  }
                >
                  {subCategory.name}
                </ChildCategoryLinks>
              );
            })}
          </CategoryList>
        )}
        {products && products.length > 0 && (
          <ProductsContainer>
            <h2>Products</h2>
            <GalleryList>
              {products.map(product => (
                <GalleryItem key={product.slug}>
                  <Link to={`/product/${product.slug}`}>
                    <GalleryImageWrapper>
                      <Img
                        sizes={{
                          ...product.localImage.childImageSharp.fluid
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
              ))}
            </GalleryList>
          </ProductsContainer>
        )}

        {!products.length > 0 && subCategories && subCategories.length > 0 && (
          <ProductsContainer>
            <h2>Products</h2>
            <GalleryList>
              {subCategories.map(subCategory => {
                return (
                  subCategory.products &&
                  subCategory.products.length > 0 &&
                  subCategory.products.map(product => {
                    console.log({ product });
                    return (
                      <GalleryItem key={product.slug}>
                        <Link to={`/product/${product.slug}`}>
                          <GalleryImageWrapper>
                            <Img
                              sizes={{
                                ...product.localImage.childImageSharp.fluid
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
                    );
                  })
                );
              })}
            </GalleryList>
          </ProductsContainer>
        )}
      </CategoryContainer>
    </Layout>
  );
};

Category.propTypes = {
  data: PropTypes.object.isRequired
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
        variants {
          price {
            currency
            current
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
            variants {
              price {
                currency
                current
              }
            }
          }
        }
      }
    }
  }
`;
