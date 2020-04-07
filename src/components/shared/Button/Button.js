import styled from "styled-components";
import { color } from "../../../helpers/themeHelpers";

const Button = styled.button`
  text-transform: uppercase;
  font-size: 14px;
  text-align: center;
  font-weight: 600;
  padding: 1rem 2rem;
  border: none;
  color: ${color("white")};
  background-color: ${color("primaryLight")};
  border-radius: 3px;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: ${color("primary")};
  }
`;

export default Button;
