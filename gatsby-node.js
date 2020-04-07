const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const productTemplate = require.resolve("./src/templates/product.js");
  const categoryTemplate = require.resolve("./src/templates/category.js");

  return graphql(`
    query loadDataQuery {
      allProduct {
        nodes {
          code
          slug
          taxons {
            main
          }
        }
      }
      allCategory {
        edges {
          node {
            id
            code
            slug
            products {
              id
              name
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }
    result.data.allCategory.edges.forEach(({ node }) => {
      createPage({
        path: `/categories/${node.code}`,
        component: categoryTemplate,
        context: {
          code: node.code,
        },
      });
    });
    result.data.allProduct.nodes.forEach(node => {
      createPage({
        path: `/product/${node.slug}`,
        component: productTemplate,
        context: {
          slug: node.slug,
          mainProductTaxon: node.taxons.main,
        },
      });
    });
  });
};
