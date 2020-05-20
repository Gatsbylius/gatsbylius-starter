import React from "react";
import PropTypes from "prop-types";
import {
  StyledBackgroundImage,
  Overlay,
  HeroTitle,
  HeroSubTitle
} from "./styled";

const Hero = ({ fluidImage, title, subtitle }) => {
  return (
    <StyledBackgroundImage fluid={fluidImage} Tag="section">
      <Overlay>
        <HeroTitle>{title}</HeroTitle>
        {subtitle && <HeroSubTitle>{subtitle}</HeroSubTitle>}
      </Overlay>
    </StyledBackgroundImage>
  );
};

Hero.propTypes = {
  fluidImage: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default Hero;
