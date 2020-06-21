import styled from "styled-components";
import Slider from "react-slick";
import { color } from "helpers/themeHelpers";

export const RelatedProductsStyled = styled.section`
  padding: 1rem;
`;

export const SliderStyled = styled(Slider)`
  .slick-list {
    padding: 2rem 1rem;
  }
  .slick-prev:before,
  .slick-next:before {
    color: ${color("black")};
  }
`;
