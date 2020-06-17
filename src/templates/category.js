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
  const mainCategory =
    category.parent && category.parent.products.length > 0
      ? category.parent
      : category;

  return (
    <Layout>
      {category.localImage && (
        <Hero
          fluidImage={category.localImage.childImageSharp.fluid}
          title={category.name}
        />
      )}

      <Section row>
        <AsideMenu title={`Our ${mainCategory.name}`}>
          <CategoryLink
            selected={mainCategory.code === category.code}
            to={`/${mainCategory.slug}`}
          >
            All {mainCategory.name}
          </CategoryLink>

          {mainCategory.children.map((subCategory) => {
            return (
              <CategoryLink
                key={subCategory.code}
                to={`/${subCategory.slug}`}
                selected={subCategory.code === category.code}
              >
                {subCategory.name}
              </CategoryLink>
            );
          })}
        </AsideMenu>

        {category.products.length > 0 && (
          <Section title="Products" raw>
            <ListItems small>
              {category.products.map((product) => (
                <CardItem
                  key={product.id}
                  to={`/product/${product.slug}`}
                  imageFluid={
                    product.localImage &&
                    product.localImage.childImageSharp.fluid
                  }
                  name={product.name}
                  price={product.variants[0].price}
                ></CardItem>
              ))}
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
  fragment CategoryInfos on Category {
    id
    name
    slug
    code
    localImage {
      childImageSharp {
        fluid(maxWidth: 1500, maxHeight: 550, quality: 50) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    products {
      ...ProductSynthesis
    }
  }
  query CategoryPageQuery($code: String) {
    category(code: { eq: $code }) {
      ...CategoryInfos
      parent {
        ...CategoryInfos
        children {
          ...CategoryInfos
        }
      }
      children {
        ...CategoryInfos
      }
    }
  }
`;
