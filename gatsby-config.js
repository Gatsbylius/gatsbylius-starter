require("dotenv").config({
  path: ".env.local"
});
module.exports = {
  pathPrefix: "/gatsbylius",
  siteMetadata: {
    title: `Gatsbylius`,
    subtitle: `Print Shop`,
    description: `The fastest Open Source storefront for Sylius.`,
    author: `@gatsbylius`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-sylius`,
      options: {
        syliusUrl: process.env.GATSBY_SYLIUS_URL,
        mainTaxonCode: process.env.GATSBY_SYLIUS_MAIN_TAXON_CODE,
        attributeDefinitions: `
          type Attributes {
            photographer: String
            unsplash_url: String
          }
        `
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsbylius`,
        short_name: `Gatsbylius`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `${__dirname}/src/images/gatsbylius-logo.jpg` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-htaccess`,
      options: {
        ErrorDocument: `
          ErrorDocument 404 /404.html
        `
      }
    }
  ]
};
