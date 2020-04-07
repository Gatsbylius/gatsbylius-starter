import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  StyledBackgroundImage,
  Overlay,
  HeroTitle,
  HeroSubTitle,
} from "./styled";

const Hero = () => {
  const { file } = useStaticQuery(
    graphql`
      query {
        file(name: { eq: "heroImage" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  return (
    <StyledBackgroundImage fluid={file.childImageSharp.fluid} Tag="section">
      <Overlay>
        <HeroTitle>Gatsbylius</HeroTitle>
        <HeroSubTitle>Print Shop</HeroSubTitle>
      </Overlay>
    </StyledBackgroundImage>
  );
};

export default Hero;
