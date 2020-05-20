import styled from "styled-components";
import { spacing } from "helpers/themeHelpers";

export const StyledMenu = styled.section`
  position: fixed;
  top: 0;
  transform: translateX(-450px);
  width: 450px;
  max-width: 100%;
  max-height: 100vh;
  overflow-y: auto;
  padding: ${spacing(["xs", "xs", "md"])};
  background: white;
  box-shadow: ${({ theme }) => theme.boxShadows.light};
  z-index: 25;
  transition: transform 0.25s;

  &.open {
    transform: translateX(0);
  }
`;

export const MenuButtonWrapper = styled.div`
  display: flex;
  flex-basis: 33%;
  z-index: 30;
`;
