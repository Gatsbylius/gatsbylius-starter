import styled from "styled-components";
import { mediaQuery } from "helpers/themeHelpers";

export const StyledNavList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  list-style: none;

  @media (min-width: ${mediaQuery("md")}) {
    flex-direction: row;
  }
`;
