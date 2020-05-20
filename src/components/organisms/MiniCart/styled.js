import styled from "styled-components";
import { color } from "helpers/themeHelpers";

export const MiniCartTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${color("primary")};
`;

export const MiniCartHeader = styled.div`
  color: #abb0be;
`;

export const MiniCartItems = styled.ul`
  padding-top: 0.5rem;
`;

export const MiniCart = styled.div`
  position: fixed;
  top: 4rem;
  right: 1rem;
  width: 320px;
  padding: 1rem;
  background: white;
  box-shadow: ${({ theme }) => theme.boxShadows.light};
  z-index: 25;

  &:after {
    bottom: 100%;
    left: 89%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-bottom-color: white;
    border-width: 8px;
    margin-left: -8px;
  }
`;
