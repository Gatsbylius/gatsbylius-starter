import styled, { css } from "styled-components";
import { color, spacing } from "../../../helpers/themeHelpers";

const centerXY = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default styled.footer`
  ${centerXY}
  height: ${spacing(["lg"])};
  margin-top: ${spacing(["lg"])};
  padding: ${spacing(["none", "sm"])};
  font-size: 0.9rem;
  background-color: #fff;
  border-top: 1px solid ${color("greyLight1")};
  z-index: 1;


  a {
    ${centerXY}
    color: ${color("black")};
    transition: color 0.3s;
    text-decoration: underline;
    &:hover {
      color: ${color("primary")};
    }
  }

  div,
  span {
    ${centerXY}
    margin: 0 0.2rem;
  }
`;
