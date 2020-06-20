import React from "react";
import Layout from "components/layout";
import Seo from "components/atoms/Seo";
import NotFound from "components/organisms/NotFound";

const NotFoundPage = ({ data }) => (
  <Layout>
    <Seo title="404: Not found" />
    <NotFound categories={data.allCategory.nodes} />
  </Layout>
);

export default NotFoundPage;

export const query = graphql`
  query NotFoundPageQuery {
    allCategory {
      nodes {
        ...CategoryInfos
        thumbnail: localImage {
          childImageSharp {
            fluid(maxHeight: 250, quality: 50) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
