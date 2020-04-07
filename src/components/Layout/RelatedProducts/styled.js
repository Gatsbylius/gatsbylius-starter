import styled from "styled-components";
import Img from "gatsby-image";
import { color } from "./../../../helpers/themeHelpers";

export const RelatedProductsItemTitle = styled.p`
  margin: 1rem;
  text-align: center;
  color: ${color("black")};
  font-weight: bold;
`;

export const RelatedProductsImage = styled(Img)`
  margin: 0 1rem;
  border: 2px solid ${color("black")};
`;
