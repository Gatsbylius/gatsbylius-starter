import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "components/layout";
import Hero from "components/organisms/Hero";
import Section from "components/molecules/Section";
import CardItem from "components/molecules/CardItem";
import AsideMenu from "components/molecules/AsideMenu";
import ListItems from "components/atoms/ListItems";
import CategoryLink from "components/atoms/CategoryLink";

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
      {fluidCategoryImage && (
        <Hero fluidImage={fluidCategoryImage} title={categoryName} />
      )}

      <Section row>
        {subCategories && subCategories.length > 0 && (
          <AsideMenu title={`Our ${categoryName}`}>
            <CategoryLink
              selected={baseCategoryCode === category.code}
              to={`/categories/${baseCategoryCode}`}
            >
              All {categoryName}
            </CategoryLink>

            {subCategories.map((subCategory) => {
              return (
                <CategoryLink
                  key={subCategory.code}
                  to={`/categories/${subCategory.code}`}
                  selected={subCategory.code === category.code}
                >
                  {subCategory.name}
                </CategoryLink>
              );
            })}
          </AsideMenu>
        )}
        {products && products.length > 0 && (
          <Section title="Products">
            <ListItems small>
              {products.map((product) => (
                <CardItem
                  key={product.slug}
                  to={`/product/${product.slug}`}
                  imageFluid={product.localImage.childImageSharp.fluid}
                  name={product.name}
                  price={product.variants[0].price}
                ></CardItem>
              ))}
            </ListItems>
          </Section>
        )}

        {!products.length > 0 && subCategories && subCategories.length > 0 && (
          <Section title="Products" raw>
            <ListItems small>
              {subCategories.map((subCategory) => {
                return (
                  subCategory.products &&
                  subCategory.products.length > 0 &&
                  subCategory.products.map((product) => {
                    return (
                      <CardItem
                        key={product.slug}
                        to={`/product/${product.slug}`}
                        imageFluid={product.localImage.childImageSharp.fluid}
                        name={product.name}
                        price={product.variants[0].price}
                      ></CardItem>
                    );
                  })
                );
              })}
            </ListItems>
          </Section>
        )}
      </Section>
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
              fluid(maxWidth: 1500, maxHeight: 550, quality: 50) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      localImage {
        childImageSharp {
          fluid(maxWidth: 1500, maxHeight: 550, quality: 50) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      products {
        id
        name
        slug
        localImage {
          childImageSharp {
            fluid(maxHeight: 250, quality: 50) {
              ...GatsbyImageSharpFluid_withWebp
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
                fluid(maxHeight: 250, quality: 50) {
                  ...GatsbyImageSharpFluid_withWebp
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
