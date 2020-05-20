import styled from "styled-components";
import { color, spacing } from "helpers/themeHelpers";

export const StyledIcon = styled.span`
  position: relative;
  height: 25px;
  width: 25px;
  background-color: ${color("greyAlto")};
  border-radius: 50%;
  margin-right: ${spacing(["xs"])};

  &:after {
    content: "";
    position: absolute;
    display: none;
    top: calc(50% - 4px);
    left: calc(50% - 4px);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${color("white")};
  }
`;

export const StyledLabel = styled.label`
  box-sizing: border-box;
  display: flex;
  position: relative;
  cursor: pointer;
  user-select: none;
  padding: ${spacing(["sm", "xs"])};
  width: 100%;
  border-radius: 0.25rem;
  border: 1px solid ${color("greyAltoMedium")};
  justify-content: flex-start;
  align-items: center;

  &:hover ${StyledIcon} {
    background-color: ${color("greyAltoMedium")};
  }
`;

export const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked ~ ${StyledIcon} {
    background-color: ${color("primary")};

    &:after {
      display: block;
    }
  }
`;
