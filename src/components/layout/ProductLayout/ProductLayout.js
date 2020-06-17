import React from "react";
import PropTypes from "prop-types";
import Layout from "components/layout";
import Breadcrumb from "components/organisms/Breadcrumb";
import { ProductPageContainer, ProductPageContent } from "./styled";

const ProductLayout = ({ children, product }) => {
  return (
    <Layout>
      <ProductPageContainer>
        <ProductPageContent>
          <Breadcrumb
            breadcrumb={[
              { title: "Home", to: "/" },
              product.taxons &&
                product.taxons.main && {
                  title: product.taxons.main,
                  to: `/categories/${product.taxons.main}`,
                },
              {
                title: product.name,
              },
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
      main: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductLayout;
