import styled, { css } from "styled-components";
import Img from "gatsby-image";
import { spacing, color, mediaQuery } from "helpers/themeHelpers";

export const StyledHero = styled.section`
  position: relative;
  width: 100%;
  max-width: 1500px;
  height: 250px;
  margin: 0 auto;
  @media (min-width: ${mediaQuery("xs")}) {
    height: 300px;
  }

  @media (min-width: ${mediaQuery("lg")}) {
    height: 550px;
  }
`;

export const StyledImage = styled(Img)`
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

export const MiniCartImage = styled(Img)`
  margin-top: 10px;
  width: 60px;
  height: 60px;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const cssTitle = css`
  font-weight: bold;
  line-height: 1.2;
  text-transform: uppercase;
  color: ${color("white")};
  text-shadow: ${({ theme }) => theme.textShadows.medium};
`;

export const HeroTitle = styled.h1`
  ${cssTitle}
  font-size: 7vw;
  letter-spacing: 0.18em;
  margin-bottom: ${spacing(["sm"])};

  @media (min-width: ${mediaQuery("lg")}) {
    margin-bottom: ${spacing(["md"])};
    font-size: 5.5vw;
  }
`;

export const HeroSubTitle = styled.p`
  ${cssTitle}
  position: relative;
  margin-top: 0;
  font-size: 4.5vw;
  letter-spacing: 0.15em;

  @media (min-width: ${mediaQuery("lg")}) {
    font-size: 3.5vw;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    width: 4vw;
    border: 1px solid ${color("white")};
  }

  &::before {
    left: -6vw;
  }

  &::after {
    right: -6vw;
  }
`;
