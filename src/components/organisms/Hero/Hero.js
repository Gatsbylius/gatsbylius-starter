import React from "react";
import PropTypes from "prop-types";
import {
  StyledHero,
  StyledImage,
  Overlay,
  HeroTitle,
  HeroSubTitle,
} from "./styled";

const Hero = ({ fluidImage, title, subtitle }) => {
  return (
    <StyledHero>
      <StyledImage fluid={fluidImage} />
      <Overlay>
        <HeroTitle>{title}</HeroTitle>
        {subtitle && <HeroSubTitle>{subtitle}</HeroSubTitle>}
      </Overlay>
    </StyledHero>
  );
};

Hero.propTypes = {
  fluidImage: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default Hero;
