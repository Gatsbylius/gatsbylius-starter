import styled from "styled-components";
import { mediaQuery } from "helpers/themeHelpers";

export const List = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;

  & > * {
    width: 100%;
    box-sizing: border-box;
    padding: 1rem;

    @media (min-width: ${mediaQuery("xs")}) {
      width: 50%;
    }
    @media (min-width: ${mediaQuery("md")}) {
      width: ${({ small }) => (small ? "50%" : "33.33%")};
    }
    @media (min-width: ${mediaQuery("lg")}) {
      width: ${({ small }) => (small ? "33.33%" : "25%")};
    }
    @media (min-width: ${mediaQuery("xl")}) {
      width: 25%;
    }
  }
`;
