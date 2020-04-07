import styled from "styled-components";
import { color } from "../../helpers/themeHelpers";

export const AddToCartButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
  font-size: 0.9rem;
  font-weight: bold;
  letter-spacing: 0.1em;
  text-align: left;
  text-transform: uppercase;
  color: ${color("white")};
  background: ${color("primary")};
  border: 1px solid ${color("white")};
  transition: background 0.3s, color 0.3s;

  &:hover {
    cursor: pointer;
    background: ${color("primaryLight")};
  }

  span {
    margin-left: 1.2rem;
  }
`;
