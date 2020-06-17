import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "components/layout";
import Breadcrumb from "components/organisms/Breadcrumb";
import { ProductPageContainer, ProductPageContent } from "./styled";

const getMainCategory = (product, categories) => {
  if (!product.taxons || !product.taxons.main) {
    return null;
  }

  return categories.find(category => category.code === product.taxons.main);
};

const ProductLayout = ({ children, product }) => {
  const { allCategory } = useStaticQuery(
    graphql`
      query ProductLayoutQuery {
        allCategory {
          nodes {
            id
            code
            slug
            name
          }
        }
      }
    `
  );

  const mainCategory = getMainCategory(product, allCategory.nodes);

  return (
    <Layout>
      <ProductPageContainer>
        <ProductPageContent>
          <Breadcrumb
            breadcrumb={[
              { title: "Home", to: "/" },
              mainCategory && {
                title: mainCategory.name,
                to: `/categories/${mainCategory.slug}`
              },
              {
                title: product.name
              }
            ].filter(Boolean)}
          />
          {children}
        </ProductPageContent>
      </ProductPageContainer>
    </Layout>
  );
};

ProductLayout.propTypes = {
  children: PropTypes.node.isRequired,
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    taxons: PropTypes.shape({
      main: PropTypes.string
    })
  }).isRequired
};

export default ProductLayout;
