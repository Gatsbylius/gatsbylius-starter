import styled from "styled-components";
import { mediaQuery } from "helpers/themeHelpers";

export const StyledProductInfos = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > .gatsby-image-wrapper {
    width: 100%;
    padding: 0 1rem;
    max-height: 500px;

    @media (min-width: ${mediaQuery("md")}) {
      width: 60%;
    }
  }

  & > section {
    flex: 1;
    padding: 0 1rem;
  }
`;
