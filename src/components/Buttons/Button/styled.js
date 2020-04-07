import styled from "styled-components";
import { spacing, color } from "../../../helpers/themeHelpers";

export const Button = styled.button`
  display: flex;
  align-items: center;
  width: 13rem;
  padding: ${spacing(["xs", "sm"])};
  font-size: 0.9rem;
  font-weight: bold;
  letter-spacing: 0.1em;
  text-align: left;
  text-transform: uppercase;
  color: ${color("primary")};
  background: ${color("white")};
  border: 1px solid ${color("white")};
  transition: background 0.3s, color 0.3s;

  &:hover {
    cursor: pointer;
    color: ${color("white")};
    background: transparent;
  }

  span {
    margin-left: 1.2rem;
  }
`;
