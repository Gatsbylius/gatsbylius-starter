import styled from "styled-components";
import { mediaQuery } from "helpers/themeHelpers";

export const StyledAsideMenu = styled.div`
  width: 100%;
  padding: 0 2rem;

  @media (min-width: ${mediaQuery("md")}) {
    width: 280px;
  }

  section {
    display: flex;
    align-items: center;
  }
`;
