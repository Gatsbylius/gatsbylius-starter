import styled from "styled-components";
import { mediaQuery } from "helpers/themeHelpers";

export const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 1560px;
  padding: ${({ raw }) => (raw ? "0" : " 0px 3rem")};
  margin: ${({ raw }) => (raw ? "0" : " 4rem auto")};

  @media (min-width: ${mediaQuery("md")}) {
    flex-direction: ${({ row }) => (row ? "row" : "column")};
  }
`;
