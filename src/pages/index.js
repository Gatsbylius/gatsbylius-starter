import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "components/Layout";
import Price from "components/Price";
import {
  GalleryList,
  GalleryItem,
  GalleryImageWrapper,
  Infos,
  Link
} from "components/ProductGrid/styled";
import SEO from "components/seo";
import Loader from "components/shared/Loader";

const pageTitle = "Gatsbylius Print Shop";

const IndexPage = ({ data }) => (
  <Layout pageTitle={pageTitle}>
    <SEO title={pageTitle} />
    <h2 id="our-products" style={{ paddingTop: "4rem" }}>
      Our latest products
    </h2>

    <Loader />

    <GalleryList>
      {[...data.allProduct.nodes].slice(0, 12).map(product => (
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

    <h2>Our categories</h2>

    <GalleryList>
      {data.allCategory.nodes.map(category => {
        const fluidCategoryImage = category.localImage
          ? category.localImage.childImageSharp.fluid
          : data.file.childImageSharp.fluid;

        return (
          <GalleryItem key={category.code}>
            <GalleryImageWrapper>
              <Link to={`/categories/${category.code}`}>
                <Img
                  sizes={{
                    ...fluidCategoryImage,
                    aspectRatio: 3 / 2
                  }}
                />

                <Infos>{category.name}</Infos>
              </Link>
            </GalleryImageWrapper>
          </GalleryItem>
        );
      })}
    </GalleryList>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
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
