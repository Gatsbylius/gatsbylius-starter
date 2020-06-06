import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import { GoMarkGithub } from "react-icons/go";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import Main from "components/layout/Main";
import { GlobalStyle } from "config/style/GlobalStyle";
import theme from "config/style/theme";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery($code: String) {
      site {
        siteMetadata {
          title
        }
      }

      category(code: { eq: $code }) {
        code
        slug
        name
      }

      allCategory(filter: { level: { eq: 0 } }) {
        edges {
          node {
            id
            code
            slug
            name
          }
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header
        menuLinks={data.allCategory.edges}
        siteTitle={data.site.siteMetadata.title}
      />

      <Main>{children}</Main>

      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
      />

      <Footer>
        <div>© {new Date().getFullYear()}</div>
        <div>
          Follow
          <a href="https://github.com/gatsbylius/gatsbylius">
            <span>Gatsbylius on Github</span>
            <span>
              <GoMarkGithub size={24} />
            </span>
          </a>
        </div>
      </Footer>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
