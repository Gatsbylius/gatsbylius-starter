import styled from "styled-components";
import { color } from "../../helpers/themeHelpers";

export const Label = styled.label`
  color: ${color("greyMiddle1")};
  text-transform: uppercase;
  font-size: 12px;
`;

export const Input = styled.input`
  border: solid 1px ${color("greyMiddle1")};
  border-radius: 4px;
  padding: 1rem;
  width: 100%;
  transition: all 200ms ease-in-out;

  &:hover {
    border-color: ${color("greyMiddle2")};
  }

  &:focus {
    border-color: ${color("info1")};
  }
`;
