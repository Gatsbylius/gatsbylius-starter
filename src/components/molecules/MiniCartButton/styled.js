import styled from "styled-components";
import { color } from "helpers/themeHelpers";

export const CartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const CartInfo = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1rem;
  height: 1rem;
  margin-left: 0.2rem;
  font-size: 0.8rem;
  color: white;
  background-color: ${color("secondary")};
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
`;
